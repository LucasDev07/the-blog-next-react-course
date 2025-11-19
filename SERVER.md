# Servidor

Os requisitos para o deploy vão ser:

- Um servidor linux com IP válido que não mude, com acesso SSH (vou usar Ubuntu
  24.04 na Google Cloud Plataform)

- Um domínio que você possa configurar registros de DNS (Registro tipo A já
  funciona)

Comnandos para inicar o site do zero:

```sh
# Ter o node instalado
# Instalar todos os pacotes
npm i
# Configue o .env.local
npm run migrate
npm run seed # Seed é opcional

# build do next
npm run build
npm start # apenas para teste
```
