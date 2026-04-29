# FarmLabs

## English

Frontend e-commerce application built with React.  
This project includes a product catalog, shopping cart flow, and core account/order views.

### Tech Stack

- React 18
- React Router DOM
- Axios
- Component-based CSS

### Local Setup

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

### Available Scripts

- `npm start`: starts the development server.
- `npm run build`: creates a production build.
- `npm test -- --watchAll=false --runInBand`: runs tests in non-interactive mode.
- `npm run lint`: checks JavaScript/JSX code quality with ESLint.
- `npm run lint:fix`: applies auto-fixable ESLint changes.
- `npm run format`: runs the optional formatting pass (ESLint autofix).
- `npm run deploy`: deploys the build to GitHub Pages.

### Data and Configuration

- Product data source: `public/data/products.json`
- Product fetch configuration: `src/config/productsSource.js`
- Shared routes/constants: `src/constants/routes.js`, `src/constants/uiText.js`, `src/config/appConfig.js`

### Testing Scope

Basic app flow tests are available in `src/App.test.js`:

- Home render with product list.
- Add/remove item from cart.
- Unknown route fallback (404).

### Deployment

The project is configured for GitHub Pages deployment through the `homepage` field in `package.json`.

### Contact

- Email: `jonatan.sly@proton.me`

---

## Espanol

Aplicacion frontend de e-commerce desarrollada con React.  
Este proyecto incluye catalogo de productos, flujo de carrito de compras y vistas principales de cuenta/pedidos.

### Stack Tecnologico

- React 18
- React Router DOM
- Axios
- CSS por componentes

### Ejecucion Local

```bash
npm install
npm start
```

La aplicacion se ejecuta en `http://localhost:3000`.

### Scripts Disponibles

- `npm start`: inicia el servidor de desarrollo.
- `npm run build`: genera el build de produccion.
- `npm test -- --watchAll=false --runInBand`: ejecuta pruebas en modo no interactivo.
- `npm run lint`: valida calidad de codigo JavaScript/JSX con ESLint.
- `npm run lint:fix`: aplica correcciones automaticas de ESLint.
- `npm run format`: ejecuta el formateo opcional (autofix de ESLint).
- `npm run deploy`: publica el build en GitHub Pages.

### Datos y Configuracion

- Fuente de productos: `public/data/products.json`
- Configuracion de carga de productos: `src/config/productsSource.js`
- Constantes compartidas: `src/constants/routes.js`, `src/constants/uiText.js`, `src/config/appConfig.js`

### Cobertura de Pruebas

Las pruebas base en `src/App.test.js` cubren:

- Render de Home con listado de productos.
- Flujo de agregar/quitar items del carrito.
- Fallback de ruta desconocida (404).

### Despliegue

El proyecto esta configurado para desplegar en GitHub Pages mediante la propiedad `homepage` en `package.json`.

### Contacto

- Email: `jonatan.sly@proton.me`
