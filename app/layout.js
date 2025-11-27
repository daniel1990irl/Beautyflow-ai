export const metadata = {
  title: "BeautyFlow AI",
  description: "AI beauty assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
