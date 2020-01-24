# Webpack & Jest Starterkit

[![Build Status](https://travis-ci.com/web-programming-lab/webpack-jest-seed.svg?branch=master)](https://travis-ci.com/web-programming-lab/webpack-jest-seed)

Seed-Projekt für den Kurs **Web Programming Lab**.

Eine Basis für den Start in die Frontend-Entwicklung mit Webpack und Jest.

### Installation der Abhängigkeiten

```
npm install
```

### Start Webpack Dev Server

```
npm start
```

### Build Assets 

```
npm run build
```

Via `npm run build` wird das [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) verwendet um das CSS in eine separate Datei auszulagern. Die CSS-Datei wird automatisch im ``head``vom `index.html` inkludiert.


### Features von diesem Seed

* Vorkonfiguriertes Web Pack
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)