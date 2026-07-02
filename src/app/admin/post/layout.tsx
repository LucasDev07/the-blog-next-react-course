import { MenuAdmin } from '@/components/admin/MenuAdmin';

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {
  //await requireLoginSessionOrRedirct();

  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
