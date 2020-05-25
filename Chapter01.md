# 리액트를 다루는 기술
## 1장 리액트 시작 
### 1.3 작업 환경 설정 (macOS 기준 설치)
#### nvm 설치하기
```{bash}
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```
터미널 재시작 후 명령어 입력(nvm 설치 확인)
```{bash}
$ nvm --version
```
버전이 나타나지 않을 때
```{bash}
$ vim ~/.bash_profile
```  
#
#### Node.js LTS버전 설치하기
```{bash}
$ nvm install --lts
```
Node.js 설치 확인
```{bash}
$ node -v
```  
#
#### yarn 설치하기(Homebrew 이용)
[Homebrew 설치 링크](https://brew.sh/index_ko)
```{bash}
$ brew update
$ brew install yarn --with
$ yarn config set prefix ~/.yarn
$ echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bash_profile
```
yarn 설치 확인
```{bash}
yarn --version
```

#

### 1.3 작업 환경 설정 (Windows 기준 설치)
#### Node.js 설치하기
[Node.js 사이트](https://nodejs.org/ko/download/)에서 Windows Installer를 설치한다.

Node.js 설치 확인
```{bash}
$ node -v
```  

#

#### yarn 설치하기
[yarn 사이트](https://classic.yarnpkg.com/en/docs/install#windows-stable)에서 Download Installer버튼을 눌러 yarn을 설치한다.

yarn 설치 확인
```{bash}
yarn --version
```
