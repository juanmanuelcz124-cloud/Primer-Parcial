import { productos, Producto } from "../models/productos";

export function obtenerProductos(): Producto[] {
    return productos;
}

export function obtenerTarjetas(): Producto[] {
    return productos.slice(0, 4);
}