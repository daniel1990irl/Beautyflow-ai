export default function Footer() {
  return (
    <footer style={{ 
      padding: "20px", 
      textAlign: "center", 
      fontSize: "14px", 
      color: "#777",
      marginTop: "40px"
    }}>
      © {new Date().getFullYear()} BeautyFlow AI — All rights reserved
    </footer>
  );
}
