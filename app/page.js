export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        BeautyFlow AI
      </h1>
      
      <p style={{ fontSize: "1.2rem", maxWidth: "300px", textAlign: "center" }}>
        Tu asistente inteligente para centros de estética. Gestión automática, 
        marketing, citas, pagos y mucho más — todo en un solo lugar.
      </p>
    </main>
  );
}
