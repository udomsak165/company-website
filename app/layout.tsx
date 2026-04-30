import "./globals.css";

export const metadata = {
  title: "Samainiyom Logistics",
  description: "บริษัทขนส่งหิน ทราย และวัสดุก่อสร้าง",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
