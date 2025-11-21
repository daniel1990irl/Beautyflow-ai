export const metadata = {
  title: "BeautyFlow AI",
  description: "AI Auto-Manager SaaS for beauty centers worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
