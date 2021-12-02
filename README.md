# Projeto criado com configuracoes basicas do Keycloak com NestJS
Aplicacao basica com NestJS e Keycloak, apenas com um controller 
com metodos de exemplo.

## Tecnologias
- [Keycloak](https://www.keycloak.org/products/keycloak/)
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/)
- [NestJS](https://nestjs.com/)

## Instalacao
- Keycloak: `docker-compe up`
- Aplicacao: `yarn install` e `yarn run:dev`

## Utilizacao
 - Criar no Keycloak um realm com o nome "nestjs" e client com nome "nest-app".
 - Criar dos roles, uma "admin" e outra "user".
 - Criar um usuario e vincular uma ou todas as roles.
 - Fazer login no Keycloak para obter o token. Abaixo um exemplo com curl:
    ```shell
    #
    curl --location --request POST 'http://localhost:8081/auth/realms/Nestjs/protocol/openid-connect/token' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --header 'Cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Indsblp4aVdTTVF1Q2hDTlNnQklJZ1E9PSIsInZhbHVlIjoiOGJZNm5MZTVcL092NGhxTHlUOFBxZmVKVGZQelZnallyWTl1ZUJ3alVLaStQcHlzTEFJZjlxaUgrU2h4NU5iUnBPY2VcLzMzVG5OaVNSSjZzWDJTM0JDRVFRTm9IT1wvRGZtU1wvOWo2RUk2bHhOYjZ0eUpOeFhYaWs5OWNKcEU3ZW5cLzR5K0ZPNWRvbVdybENjTWg5c1hNeEN6RU5sRmR2YUM4azNXUGNFc1hadTA9IiwibWFjIjoiNGViMjViNzZkYzAwZmQ3YjA5YzUyZjZlNjBlMDA3YWRlZmM3ZGUwNDdmOGNhNGQ1YzE1Zjg1YTU4MTE3OGRjMSJ9' \
    --data-urlencode 'client_id=nest-app' \
    --data-urlencode 'grant_type=password' \
    --data-urlencode 'client_secret=3426ceff-7659-4746-8a81-4b30b9e45cb3' \
    --data-urlencode 'scope=openid' \
    --data-urlencode 'username=user1' \
    --data-urlencode 'password=123456'
    ```

Existem 4 metodos no controller:
 - getPublic: nao precisa de autenticacao.
 - getUser: precisa estar autenticado e possuir role "user".
 - getAdmin: precisa estar autenticado e possuir role "admin".
 - getAll: precisa apenas estar autenticado.

## Rotas
- `GET http://localhost:8081/auth`: painel do Keycloak (usuario: user, senha: bitnami).
- `GET http://localhost:3000/`: metodo getPublic.
- `GET http://localhost:3000/user`: metodo getUser.
- `GET http://localhost:3000/admin`: metodo getAdmin.
- `GET http://localhost:3000/all`: metodo getAll.
