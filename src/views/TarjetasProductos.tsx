import { View, Text, StyleSheet } from "react-native";
import { Producto } from "../models/productos";

export default function TarjetasProductos({ datos }: { datos: Producto[] }) {
    return (
    <View style={styles.contenedor}>
        {datos.map((p) => (
        <View key={p.id} style={styles.tarjeta}>
            <Text style={styles.nombre}>{p.nombre}</Text>
            <Text style={styles.categoria}>{p.categoria}</Text>
            <Text style={styles.precio}>${p.precio.toLocaleString("es-MX")}</Text>
            <Text style={styles.proyectos}>Proyectos concluidos: {p.proyectos}</Text>
        </View>
        ))}
    </View>
    );
}

const styles = StyleSheet.create({
    contenedor: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
    tarjeta: {
    flexBasis: "48%",
    flexGrow: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E3DCD2",
    elevation: 2,
    },
    nombre: { fontSize: 16, fontWeight: "bold", color: "#2B2530", marginBottom: 4 },
    categoria: { fontSize: 12, color: "#8A7F72", marginBottom: 8 },
    precio: { fontSize: 18, color: "#E4572E", fontWeight: "bold" },
    proyectos: { fontSize: 12, color: "#5C5348", marginTop: 4 },
});