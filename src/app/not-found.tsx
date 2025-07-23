import ErrorMesage from '@/components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <ErrorMesage
      pageTitle='Página não encontrada'
      contentTitle='404'
      content='Erro 404 - A página que você está tentando acessar não existe nesse site.'
    />
  );
}
