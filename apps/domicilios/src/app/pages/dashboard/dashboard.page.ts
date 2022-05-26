import { Component, OnInit } from '@angular/core';
import { read, WorkBook, WorkSheet, utils, write } from 'xlsx';
import {
  Empleado,
  EmpleadosService,
  SatRfc,
} from '../../services/empleados.service';
import { firstValueFrom } from 'rxjs';
import { ChartConfiguration } from 'chart.js';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'nominas-sat-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css'],
})
export class DashboardPage implements OnInit {
  empleados$ = this.empleadosService.selectAll();


  graficaPorCP$ = this.empleadosService.graficaPieCP$;
  graficaPorNombre$ = this.empleadosService.graficaPieNombre$;

  opcionesGrafica: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    animation: false,
  };

  // grafica$ = this.empleadosService.graficaPie$;
  // opcionesGrafica: ChartConfiguration['options'] = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: 'top',
  //     },
  //   },
  //   animation: false,
  // };
  constructor(private empleadosService: EmpleadosService,
    private toastCtrl: ToastController) {}

  ngOnInit() {}

  async validarSat() {
    try {
      const empleados = await firstValueFrom(this.empleadosService.selectAll());
      for (let i = 0; i < empleados.length; i++) {
        const empleado = empleados[i];
        console.log(empleado);
        this.empleadosService.updateEmpleado(empleado.RFC, {
          ...empleado,
          actualizando: true,
        });

        const sat: SatRfc = await this.empleadosService.checkSatCP(
          empleado.RFC
        );

        await this.empleadosService.updateEmpleado(empleado.RFC, {
          ...empleado,
          CP: empleado.CP ? String(empleado.CP).trim() : 'SIN CP',
          /*SatCP: String(sat.codigo_postal).trim() ?? null,*/
          actualizando: false,
          validado: true,
          diferenciaCP:
            String(empleado.CP).trim() !== String(sat?.codigo_postal).trim(),
          diferenciaNombre:
            empleado.NombreCompleto?.toLowerCase().trim() !==
            sat.nombre_razon_social?.toLowerCase().trim(),
        });
      }
      const correcto = await this.toastCtrl.create({
        message:
          'Se terminó de manera exitosa la validación de información de los empleados contra el SAT',
        duration: 4500,
        color: 'success',
      });
      await correcto.present();
    } catch (err) {
      console.log(err);
    }
    // try {
    //   const empleados = await firstValueFrom(this.empleadosService.selectAll());
    //   for (let i = 0; i < empleados.length; i++) {
    //     const empleado = empleados[i];
    //     console.log(empleado);
    //     this.empleadosService.updateEmpleado(empleado.RFC, {
    //       ...empleado,
    //       actualizando: true,
    //     });

    //     const sat: SatRfc = await this.empleadosService.checkSatCP(
    //       empleado.RFC
    //     );

    //     await this.empleadosService.updateEmpleado(empleado.RFC, {
    //       ...empleado,
    //       CP: empleado.CP ? String(empleado.CP).trim() : 'SIN CP',
    //       /*SatCP: String(sat.codigo_postal).trim() ?? null,*/
    //       actualizando: false,
    //       validado: true,
    //       diferenciaCP:
    //         String(empleado.CP).trim() !== String(sat?.codigo_postal).trim(),
    //       diferenciaNombre:
    //         empleado.NombreCompleto?.toLowerCase().trim() !==
    //         sat.nombre_razon_social?.toLowerCase().trim(),
    //     });
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }

  async exportarReporte() {
    try {
      const registros = await firstValueFrom(this.empleadosService.selectAll());
      const workbook = utils.book_new();
      const filename = 'Empleados';
      const dataSheet = utils.json_to_sheet(
        registros.map((registro) => ({
          'Número de empleado': registro.NumEmp,
          RFC: registro.RFC,
          CURP: registro.CURP,
          Nombre: registro.Nombre,
          'Primer apellido': registro.PrimerApellido,
          'Segundo apellido': registro.SegundoApellido,
          NombreCompleto: `${registro.Nombre?.trim()} ${registro.PrimerApellido?.trim()} ${registro.SegundoApellido?.trim()}`,
          'Calle y número': registro.CalleNum,
          'Número exterior': registro.Num,
          Colonia: registro.Colonia,
          Municipio: registro.Municipio,
          Estado: registro.Estado,
          Nacionalidad: registro.Nacionalidad,
          'Código Postal': registro.CP,
          'Registro procesado': registro.validado
            ? 'Procesado'
            : 'No procesado',
          diferenciaCP: registro.diferenciaCP
            ? 'Diferencia encontrada'
            : 'Correcto',
          diferenciaNombre: registro.diferenciaNombre
            ? 'Diferencia encontrada'
            : 'Correcto',
        })),
        {}
      );
      utils.book_append_sheet(workbook, dataSheet, filename.replace('/', ''));
      const file = write(workbook, {
        bookType: 'xlsx',
        type: 'file',
      });
      const anchor = document.createElement('a');
      anchor.href = file;
      anchor.target = '_blank';
      anchor.download = `ReporteEmpleadosSAT-${new Date().getTime()}.xlsx`;
      // anchor.onclick = () => document.removeChild(anchor);
      anchor.click();
    } catch (err) {
      console.log(err);
    }
  }

  // seleccionaArchivo(event: any) {
  //   const target = event.target;
  //   const reader: FileReader = new FileReader();
  //   reader.onload = (e: any) => {
  //     /* read workbook */
  //     const ab: ArrayBuffer = e.target.result;
  //     const wb: WorkBook = read(ab, {});
  //     /* grab first sheet */
  //     const wsname: string = wb.SheetNames[0];
  //     const ws: WorkSheet = wb.Sheets[wsname];

  //     /* save data */
  //     let data: Empleado[] = utils.sheet_to_json(ws);
  //     data = data.sort((a, b) => a.RFC.localeCompare(b.RFC));
  //     this.empleadosService.setEmpleados(<Empleado[]>data);
  //   };
  //   reader.readAsArrayBuffer(target.files[0]);
  // }

  seleccionaArchivo(event: any) {
    const target = event.target;
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: WorkBook = read(ab, {});
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: WorkSheet = wb.Sheets[wsname];

      /* save data */
      let data: Empleado[] = utils.sheet_to_json(ws);
      data = data.sort((a, b) => a.RFC.localeCompare(b.RFC));
      this.empleadosService.setEmpleados(<Empleado[]>data);
    };
    reader.readAsArrayBuffer(target.files[0]);
  }

}
