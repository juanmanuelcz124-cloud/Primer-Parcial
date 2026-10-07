# Primer Parcial

Aplicación en React con Expo que muestra una tabla y 4 tarjetas de productos, usando estructura MVC.

## Estructura

```
src/
├── app/           # Pantallas (index.tsx, _layout.tsx)
├── models/        # Datos (productos.ts)
├── controllers/   # Lógica (productosController.ts)
└── views/         # Componentes (TablaProductos.tsx, TarjetasProductos.tsx)
```

## Cómo ejecutarlo

```
npm install
npx expo start --web
```

Abrir http://localhost:8081 en el navegador.

## Tecnologías

- React Native
- Expo (SDK 57)
- TypeScript