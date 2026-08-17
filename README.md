# REST Countries

Solución al challenge [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) de [Frontend Mentor](https://www.frontendmentor.io).

App para explorar países: listado con búsqueda y filtro por región, página de detalle y cambio entre tema claro y oscuro.

## El challenge

Integrar datos de países (REST Countries) y mostrarlos según el diseño. Los usuarios deben poder:

- Ver todos los países en la página principal
- Buscar un país por nombre
- Filtrar países por región
- Entrar a una página de detalle al hacer clic en un país
- Navegar a los países fronterizos desde el detalle
- Alternar entre modo claro y oscuro

En el detalle se muestra bandera, nombre nativo, población, región, subregión, capital, dominio de nivel superior, monedas, idiomas y fronteras.

## Stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) 4

Los datos salen de `src/data/countries.json` (dataset del challenge), no de la API en vivo.

## Cómo ejecutarlo

Necesitas Node.js y npm.

```bash
npm install
npm run dev
```

Otras comandos:

```bash
npm run build    # producción
npm run preview  # vista previa del build
npm run lint
```

## Rutas

| Ruta | Vista |
| --- | --- |
| `/` | Listado, búsqueda y filtro |
| `/country/:code` | Detalle (`code` = alpha-3, p. ej. `MEX`) |

El tema se guarda en `localStorage`. Si no hay preferencia, se usa la del sistema.

## Autor

Coded by Alejandro González Osorio.

Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).
