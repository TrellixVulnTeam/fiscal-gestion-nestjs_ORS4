import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, firstValueFrom, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChartData } from 'chart.js';

export interface Empleado {
  CP: string;
  CURP: string;
  CalleNum: string;
  Colonia: string;
  Estado: string;
  Municipio: string;
  Nacionalidad: string;
  Nombre: string;
  Num: string;
  NumEmp: string;
  PrimerApellido: string;
  RFC: string;
  SegundoApellido: string;
  NombreCompleto?: string;
  SatCP?: string;
  actualizando?: boolean;
  validado?: boolean;
  diferenciaCP?: boolean;
  diferenciaNombre?: boolean;
}

export interface SatRfc {
  rfc: string;
  sncf: boolean;
  subcontratacion: boolean;
  nombre_razon_social: string;
  codigo_postal: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private readonly empleados$: BehaviorSubject<Empleado[]> =
    new BehaviorSubject<Empleado[]>([]);

  // graficaPie$ = this.empleados$.pipe(
  //   map((empleados) => {
  //     const pendientes = empleados.filter(
  //       (empleado) => empleado.validado !== true
  //     );
  //     const iguales = empleados.filter(
  //       (empleado) =>
  //         empleado.validado === true && empleado.diferenciaCP !== true
  //     );
  //     const diferentes = empleados.filter(
  //       (empleado) =>
  //         empleado.validado === true && empleado.diferenciaCP === true
  //     );

  //     const data: ChartData<'pie', number[], string | string[]> = {
  //       labels: [['CP Incorrectos'], ['CP Correctos'], ['Sin procesar']],
  //       datasets: [
  //         {
  //           data: [diferentes.length, iguales.length, pendientes.length],
  //         },
  //       ],
  //     };
  //     return data;
  //   })
  // );
  graficaPieCP$ = this.empleados$.pipe(
    map((empleados) => {
      const pendientes = empleados.filter(
        (empleado) => empleado.validado !== true
      );
      const iguales = empleados.filter(
        (empleado) =>
          empleado.validado === true && empleado.diferenciaCP !== true
      );
      const diferentes = empleados.filter(
        (empleado) =>
          empleado.validado === true && empleado.diferenciaCP === true
      );

      const data: ChartData<'pie', number[], string | string[]> = {
        labels: [['CP Incorrectos'], ['CP Correctos'], ['Sin procesar']],
        datasets: [
          {
            data: [diferentes.length, iguales.length, pendientes.length],
          },
        ],
      };
      return data;
    })
  );

  graficaPieNombre$ = this.empleados$.pipe(
    map((empleados) => {
      const pendientes = empleados.filter(
        (empleado) => empleado.validado !== true
      );
      const iguales = empleados.filter(
        (empleado) =>
          empleado.validado === true && empleado.diferenciaNombre !== true
      );
      const diferentes = empleados.filter(
        (empleado) =>
          empleado.validado === true && empleado.diferenciaNombre === true
      );

      const data: ChartData<'pie', number[], string | string[]> = {
        labels: [['Nombre Incorrecto'], ['Nombre Correcto'], ['Sin procesar']],
        datasets: [
          {
            data: [diferentes.length, iguales.length, pendientes.length],
          },
        ],
      };
      return data;
    })
  );
  constructor(private http: HttpClient) {}

  selectAll(): Observable<Empleado[]> {
    return this.empleados$.asObservable();
  }

  selectOne(rfc: string): Observable<Empleado | undefined> {
    return this.empleados$
      .asObservable()
      .pipe(
        map((empleados) => empleados.find((empleado) => empleado.RFC === rfc))
      );
  }

  setEmpleados(empleados: Empleado[]) {
    this.empleados$.next(
      empleados.map((empleado) => ({
        ...empleado,
        NombreCompleto: `${empleado.Nombre.trim()} ${empleado.PrimerApellido.trim()} ${empleado.SegundoApellido.trim()}`,
      }))
    );
  }

  updateEmpleado(rfc: string, datos: Partial<Empleado>) {
    const empleados = this.empleados$.value;
    const indice = empleados.findIndex((e) => e.RFC === rfc);
    if (indice > -1) {
      empleados.splice(indice, 1, {
        ...empleados[indice],
        ...datos,
      });
      this.empleados$.next(empleados);
    }
  }

  checkSatCP(rfc: string): Promise<SatRfc> {
    return firstValueFrom(
      this.http.get<SatRfc>(`http://localhost:3333/api/sat/rfcs/${rfc}`)
    );
  }
}
