import './globals.css';

export const metadata = {
  title: "BeautyFlow AI",
  description: "Transformaciones de belleza con IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
