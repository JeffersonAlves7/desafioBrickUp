# Desafio BrickUp

![Alt text](app-page.png?raw=true "Título")

## Instalação e Execução

### Projeto Backend

1. Instale utilizando seu IDE.
2. Altere as propriedades do banco de dados em `backend\src\main\resources\application.properties`.
   - Exemplo:
     ```bash
     spring.jpa.hibernate.ddl-auto=update
     spring.datasource.url=jdbc:mysql://localhost:3306/brickup
     spring.datasource.username=root
     spring.datasource.password=1234
     spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
     ```
3. Execute o arquivo `backend\src\main\java\com\jefferson\todolist\TodolistApplication.java` na sua IDE.

### Projeto Frontend

```bash
cd frontend
npm install
npm run dev
```

## Construção

### Projeto Frontend

```bash
cd frontend
npm run build
```

## Reconhecimentos

- Back-end:
  - [Java](https://docs.oracle.com/en/java/)
  - [SpringBoot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- Banco de dados:
  - [MySQL](https://dev.mysql.com/doc/)
- Front-end:
  - [Axios](https://axios-http.com/docs/intro)
  - [Typescript](https://www.typescriptlang.org/docs/)
  - [Redux-Saga](https://redux-saga.js.org/docs/introduction/GettingStarted/)
  - [Redux](https://redux.js.org/introduction/getting-started)
  - [Ant Design](https://ant.design/components/overview)
  - [React](https://react.dev/learn)

## Autores

- [@JeffersonAlves7](https://www.github.com/JeffersonAlves7)
