import { ScrollView, Text, StyleSheet } from "react-native";
import { obtenerProductos, obtenerTarjetas } from "../controllers/productosController";
import TablaProductos from "../views/TablaProductos";
import TarjetasProductos from "../views/TarjetasProductos";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.pantalla}>
      <Text style={styles.titulo}>Servicios de AuraWeb</Text>

      <Text style={styles.subtitulo}>Tabla de servicios</Text>
      <TablaProductos datos={obtenerProductos()} />

      <Text style={styles.subtitulo}>Servicios destacados</Text>
      <TarjetasProductos datos={obtenerTarjetas()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { padding: 20, paddingTop: 50, gap: 16, backgroundColor: "#FAF7F2" },
  titulo: { fontSize: 26, fontWeight: "bold", color: "#2D1B4E" },
  subtitulo: { fontSize: 18, fontWeight: "600", color: "#2B2530", marginTop: 8 },
});