import { View, Text, StyleSheet } from "react-native";
import { Producto } from "../models/productos";

const encabezados = ["Servicio", "Categoría", "Precio", "Proyectos"];

export default function TablaProductos({ datos }: { datos: Producto[] }) {
    return (
    <View style={styles.tabla}>
        <View style={[styles.fila, styles.encabezado]}>
        {encabezados.map((titulo) => (
            <Text key={titulo} style={[styles.celda, styles.textoEncabezado]}>
            {titulo}
            </Text>
        ))}
        </View>
        {datos.map((p) => (
        <View key={p.id} style={styles.fila}>
            <Text style={styles.celda}>{p.nombre}</Text>
            <Text style={styles.celda}>{p.categoria}</Text>
            <Text style={styles.celda}>${p.precio.toLocaleString("es-MX")}</Text>
            <Text style={styles.celda}>{p.proyectos}</Text>
        </View>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
    tabla: { borderWidth: 1, borderColor: "#E3DCD2", borderRadius: 8, overflow: "hidden" },
    fila: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#EFE9DF" },
    encabezado: { backgroundColor: "#2D1B4E" },
    celda: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "#2B2530",
    borderRightWidth: 1,
    borderColor: "#EFE9DF",
    },
    textoEncabezado: { color: "#FAF7F2", fontWeight: "bold" },
});