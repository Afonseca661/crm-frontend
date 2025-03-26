export const metadata = {
  title: 'CRM Frontend',
  description: 'Sistema para captación de leads',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
