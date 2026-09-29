# Lista de Series — Aplicación Angular

Aplicación web hecha con **Angular 19** que muestra un listado de series de televisión: tabla con nombre, canal y temporadas, promedio de temporadas y un panel de detalle (póster, descripción y enlace oficial) al seleccionar una serie.

## Qué demuestra

- Componentes, módulos y servicios de Angular (`SeriesComponent`, `SeriesModule`, `SerieService`).
- Consumo de un JSON remoto con `HttpClient` y `Observable`.
- Configuración por entorno (`environment.ts` y `environment.development.ts`).
- Pruebas unitarias con Jasmine y Karma: el servicio (con `HttpTestingController`), el componente (filas, promedio y detalle) y el componente raíz.
- Estilos con Bootstrap 5 y CSS propio.

## Cómo ejecutarlo

Requisitos: Node.js 20 o superior.

```bash
git clone https://github.com/Alejob12/mynewapp.git
cd mynewapp
npm install
npm start            # http://localhost:4200
```

Los datos se leen de un JSON público (ver `baseUrl` en `src/environments/`), así que se necesita conexión a internet.

| Comando | Qué hace |
| --- | --- |
| `npm start` | Servidor de desarrollo con recarga automática |
| `npm run build` | Compila para producción en `dist/` |
| `npm test` | Pruebas unitarias en Chrome con recarga |
| `npm run test:ci` | Pruebas una sola vez, en Chrome sin interfaz |

## Estructura

```
src/app/
  app.component.*        Título y contenedor
  series/
    Serie.ts             Modelo
    serie.service.ts     Lectura del JSON de series
    series.component.*   Tabla, promedio y detalle
    *.spec.ts            Pruebas unitarias
src/environments/        URL base de los datos por entorno
```

## Autor

**Alejandro Bernal** — Ingeniería de Sistemas e Industrial, Universidad de los Andes.
