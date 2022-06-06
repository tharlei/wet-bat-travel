<p align="center">
 <img width="128" src="https://i.imgur.com/siHCzr3.png"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-82b547?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-0080FF?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</p>


## Summary

:small_blue_diamond: [Description](#description)

:small_blue_diamond: [Functions](#functions)

:small_blue_diamond: [Deploy](#deploy)

:small_blue_diamond: [Documentation](#documentation)

:small_blue_diamond: [Requirements](#requirements)

:small_blue_diamond: [Execute the application](#execute-the-application)

:small_blue_diamond: [Technologies used](#technologies-used)

:small_blue_diamond: [Structure decisions](#structure-decisions)

:small_blue_diamond: [Author](#author)

:small_blue_diamond: [License](#license)




## Description

<p align="justify">
  MVP of Wet Bat Travel functions to create quotes
</p>

## Functions

:heavy_check_mark: List transports

:heavy_check_mark: Store quote


## Deploy

> Application: https://wet-bat-travel.netlify.app/

## Documentation

> Documentation in Postman: https://documenter.getpostman.com/view/4827382/Uz5JFaEb

## Requirements

:warning: [Node:^16](https://nodejs.org/en/download/)

:warning: [PostgreSQL](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/) (recommended)


## Execute the application

In the terminal, clone project:

```
git clone https://github.com/tharlei/wet-bat-travel.git
```

Enter in folder

```
cd wet-bat-travel
```

Install npm dependencies:

```
npm i && npm i --prefix server/
```

Copy .env.example to .env and fill with your data:

```
cp .env.example .env && cp server/.env.example server/.env
```

Run migrations:

```
npm run typeorm --prefix server/ -- migration:run
```

Run tests of the project:

```
npm run test
```

Run development mode project:

```
npm run dev
```

## Technologies used

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev/)
- [Vite](https://vitejs.dev/)
- [date-fns](https://date-fns.org/)
- [Cogo Toast](https://www.npmjs.com/package/cogo-toast)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Structure decisions

- Folder "infra" has classes that are externally dependent on something. (library, route, bank connection)
- Folder "repository" is responsible for handling database data.
- Folder "queries" is intended to return data already mapped from the database.
- Folder "services" it aims to execute some logic before sending to external dependency.


## Author

[<img src="https://avatars2.githubusercontent.com/u/32899049?s=460&u=946f73939bb511fa8ae40ed80764cc4dbffe359f&v=4" width=115><br><sub>Tharlei Aleixo</sub>](https://github.com/Tharlei)


## License

The [MIT License]() (MIT)

Copyright :copyright: 2022 - wet-bat-travel
