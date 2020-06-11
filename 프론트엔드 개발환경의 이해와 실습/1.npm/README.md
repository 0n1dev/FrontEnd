# NPM

## 프론트엔드 개발에 Node.js가 필요한 이유

**최신 스펙으로 개발할 수 있다.**

- 자바스크립트 스펙에 비해 브라우져의 지원 속도가 뒤쳐진다. (Babel의 도움 필요)
- Typescript, SASS 같은 고수준 프로그래밍 언어를 사용하려면 전용 트랜스파일러가 필요 (Node.js 환경이 뒷받침)

**빌드 자동화**

- 파일 압축, 코드 난독화, 폴리필 추가 등 개발 이외의 작업 (Webpack의 도움 필요)
- 라이브러리 의존성 해결, 각종 테스트 자동화

**개발 환경 커스터마이징**

- 프레임워크에서 제공하는 도구를 사용하면 손쉽게 개발환경 갖출수 있다. (CRA, vue-cli)

## Node.js 설치

[NodeJs 공식 페이지](https://nodejs.org/en/)

커멘드 창에서 하단 커멘드를 입력하여 설치된 NodeJS와 NPM의 버전을 확인해보자

```
node -v
npm -v
```

## Project 생성

```
npm init
```

메타 정보 입력 후 해당 디렉토리 들어가보면 package.json 생성

## npm 명령어

package.json을 보면 script 부분이 있음.
해당 부분은 프로젝트를 자동화 할 수 있는 쉘 스크립트 입력 부분.

pacakage.json이 있는 경로에서 하단 명령어를 입력해보자

```
npm test
```

등록 된 쉘 스크립트가 실행되는것을 볼 수 있다.

package.json에 build 커스텀 스크립트를 추가해보자.

```
"build": "echo \"여기에 빌드 스크립트 추가\""
```

build와 같은 커스텀 스크립트를 실행하기 위해서는 npm run build와 같이 run을 붙여줘야한다.

