export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>AQUI VEM O LAYOUT DA ABOUT</h1>
      <div>{children}</div>
    </>
  );
}
