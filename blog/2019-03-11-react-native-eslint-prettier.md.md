---
id: react-native-eslint-prettier
title: React Native專案設定ESLint與Prettier
author: Eddy Chang
author_title: React/JS Developer
author_url: https://github.com/eyesofkids
author_image_url: https://avatars2.githubusercontent.com/u/433742?s=460&v=4
tags: [react native, eslint, prettier]
---

React Native 專案並沒有內建 eslint 模組，所以需要在專案建立後手動進行設定。有很多種設定的方式，這裡是使用 react-app 的設定值(Create React App 使用的)為基礎，以及針對 Visual Studio Code 編輯器的設定，其它設定方式可再參考最後的參考資料中的設定。

<!--truncate-->

<!-- TOC -->

- [步驟](#步驟)
  - [步驟一: 建立新的專案](#步驟一-建立新的專案)
  - [步驟二: 安裝 VS Code 擴充](#步驟二-安裝-vs-code-擴充)
  - [步驟三: 安裝模組](#步驟三-安裝模組)
  - [步驟四: 更新 VS Code 設定](#步驟四-更新-vs-code-設定)
  - [步驟五: 加入 eslint 與 prettier 設定檔案](#步驟五-加入-eslint-與-prettier-設定檔案)
- [eslint 與 prettier 設定檔案內容](#eslint-與-prettier-設定檔案內容)
- [故障排除](#故障排除)
  - [eslint 不會正常檢查](#eslint-不會正常檢查)
- [參考資料](#參考資料)

<!-- /TOC -->

## 步驟

### 步驟一: 建立新的專案

以 expo 或其它建立方式建立專案。

### 步驟二: 安裝 VS Code 擴充

安裝以下兩個 VS Code 擴充:

- ESLint
- Prettier

> 註: Prettier 的擴充有好幾套，請先安裝下載量最多的即可，除非有不能使用的情況再安裝別套。

### 步驟三: 安裝模組

在終端機裡，對應專案的根目錄，輸入以下的指令(選擇其中一種即可，如果已經有安裝 yarn 建議使用上面這個):

```sh
yarn add -D eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-flowtype eslint-plugin-jsx-a11y babel-eslint eslint eslint-plugin-react-hooks
```

或

```sh
npm install --save-dev eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-flowtype eslint-plugin-jsx-a11y babel-eslint eslint eslint-plugin-react-hooks
```

> 註: 每個專案都要安裝一次，這是安裝到專案中的模組

> 注意: 最好不要把 eslint 與相關模組安裝到全域中

### 步驟四: 更新 VS Code 設定

請將以下的設定加到你的 VSCode 使用者設定之中(在選單 -> 喜好設定 -> 設定，然後點按右上角有個`{}`的圖示，直接貼到右邊的視窗中的花括號內即可)：

```json
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "prettier.disableLanguages": ["js"],
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "files.autoSave": "onFocusChange",
```

> 註: 這個只需要設定一次，之後所有專案都可以使用

### 步驟五: 加入 eslint 與 prettier 設定檔案

手動建立兩個 `.eslintrc` 與 `.prettierrc` 的設定檔到專案的根目錄。內容如下節內容，最好是先建立好，之後每個專案直接拷貝即可。

## eslint 與 prettier 設定檔案內容

.eslintrc

```json
{
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "react-app",
  "parser": "babel-eslint",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

.prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false
}
```

> 註: 風格可依個人喜好設定，請參考 [prettier 選項文件](https://prettier.io/docs/en/options.html)，以上設定為"字串使用單引號"、"物件字面定義統一加上最後逗號"、"不使用分號作為語句結尾"

## 故障排除

### eslint 不會正常檢查

使用以下的指令來除錯，看有什麼錯誤訊息，然後到網路中搜尋:

```sh
eslint --debug App.js
```

再次重頭檢查所有的相關設定，可能會包含以下幾個:

- vscode 的版本是不是有升級到最新版本
- vscode 裡擴充是否有安裝
- vscode 裡的喜好設定是否有正確，或出現錯誤的訊息
- 專案裡是否正確安裝所需模組(看 package.json 裡)
- 是否有安裝到全或的 eslint 模組，有可能造成衝突

## 參考資料

- [Setup ESLint and Prettier together for react and react-native projects in Visual Studio Code](https://medium.com/appstud/setup-eslint-and-prettier-together-for-react-and-react-native-projects-in-visual-studio-code-78772d58358d)
- [How to configure React Native (Expo) project to use AirBnB's React rules via ESLint? #1589](https://github.com/airbnb/javascript/issues/1589#issuecomment-344097023)
- [Format Code Style with Prettier in React Native](com/format-code-style-with-prettier-in-react-native-1e10e6b7169f)
