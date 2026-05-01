import "./globals.css";

export const metadata = {
  title: "SAMAINIYOM KHONSONG",
  description: "สมัยนิยม ขนส่งหิน–ทราย และวัสดุก่อสร้าง",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
