# 엔트리/아웃풋 실습

> 모듈로 개발하게 된다면 모듈간의 의존 관계가 생김.

## Webpack/Webpack-CLI 설치

```
npm install -D webpack webpack-cli
```

D옵션을 주고 설치하면 package.json에 devDependencies에 추가 됨.
devDependencies는 개발용 패키지.

> 경로 : node_modules/.bin/webpack

**help 명령어를 입력해 보자**

```
node_modules/.bin/webpack --help
```

## Webpack 실행 필수 옵션 3가지

- **mode**: 개발환경인지 운영환경인지 모드 설정. [choices: "development", "production", "none"]
- **entry**: 모듈의 시작점.
- **output, o**: 웹팩이 모든 모듈을 합치고 그 결과를 저장할 때 경로 지정 옵션.

## 필수 옵션 3가지를 사용해 번들링

```
node_modules/.bin/webpack --mode development --entry ./js/app.js --output dist/main.js
```

## config를 만들고 package.json에 추가

```js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './js/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    }
}
```

```
"build": "webpack"
```

npm run build 명령어 입력.