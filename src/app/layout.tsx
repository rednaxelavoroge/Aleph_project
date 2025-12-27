import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Алеф — Внутренний атлас судьбы",
  description: "Экосистема для перепросмотра, трансформации и цифрового наследия души.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
