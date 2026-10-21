import "./globals.css";

export const metadata = {
  title: "Voyage Tech | Gadgets for the way forward",
  description:
    "Discover laptops, computers and gadgets at Voyage Tech. Shop with bank transfer, Save to Buy, or eligible Klump financing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
