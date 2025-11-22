export const metadata = {
  title: "BeautyFlow AI",
  description: "AI auto-manager SaaS for beauty centers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
