export type Producto = {
    id: number;
    nombre: string;
    categoria: string;
    precio: number;
    proyectos: number;
};

export const productos: Producto[] = [
    { id: 1, nombre: "Landing page", categoria: "Diseño web", precio: 3500, proyectos: 12 },
    { id: 2, nombre: "Sitio corporativo", categoria: "Desarrollo web", precio: 9000, proyectos: 7 },
    { id: 3, nombre: "Tienda en línea", categoria: "E-commerce", precio: 15000, proyectos: 4 },
    { id: 4, nombre: "Mantenimiento mensual", categoria: "Soporte", precio: 1200, proyectos: 9 },
];