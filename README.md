# moga-lint

## 介绍
moga-lint是用于moga应用代码校验而封装的各种校验工具集，其内部集成了大量经过实践而设置的代码校验规则。

## 用法

### 安装moga-lint

```javascript
npm i moga-lint -D
```
安装moga-lint后，无须在单独安装eslint、stylelint、prettier、husky等工具，直接开箱即用。

### 使用moga-lint
moga-lint目前支持eslint、stylelint、prettier、commitlint，共四种类型lint tool。

#### eslint配置
在项目根目录下新增.eslintrc.js文件，添加如下代码：
```javascript
const { getESLintConfig } = require('moga-lint');

module.exports = getESLintConfig('react-ts', {
    // 自定义规则，优先级大于moga-lint中内部的规则
});
```
目前getESLintConfig支持common-ts、common、react-ts、react四种规则集的获取。

#### stylelint配置
在项目根目录下新增.stylelintrc.js文件，添加如下代码：
```javascript
const { getStylelintConfig } = require('moga-lint');

module.exports = getStylelintConfig('react', {
    // 自定义规则，优先级大于moga-lint中内部的规则
});

```
目前getStylelintConfig支持common、react两种规则集的获取。


#### prettier配置
在项目根目录下新增.prettierrc.js文件，添加如下代码：
```javascript
const {getPrettierConfig}  = require("moga-lint")

module.exports = getPrettierConfig('react', {
    // 自定义规则，优先级大于moga-lint中内部的规则
});

```
目前getPrettierConfig支持common、react两种规则集的获取。

#### commlint配置
在项目根目录下新增commitlint.config.js文件，添加如下代码：
```javascript
const {getCommitlintConfig} = require("moga-lint");

module.exports = getCommitlintConfig('react', {
    // 自定义规则，优先级大于moga-lint中内部的规则
})

```
目前getCommitlintConfig支持common、react两种规则集的获取。

#### package.json配置
```javascript
{
    "scripts": {
        "eslint": "eslint --ext .js,.jsx,.ts,.tsx ./",
        "eslint:fix": "eslint --ext .js,.ts,.tsx ./ --fix",
        "stylelint": "stylelint \"**/*.{css,scss,less}\"",
        "stylelint:fix": "stylelint --fix \"**/*.{css,scss,less}\"",
        "prelint": "prettier --check **/*{.js,.ts,.tsx}",
        "prelint:fix": "prettier --write **/*{.js,.ts,.tsx}",
        "lint": "npm run eslint && npm run stylelint && npm run prelint",
        "lint:fox": "npm run eslint:fix && npm run stylelint:fix && npm run prelint:fix",
        "prepublishOnly": "npm run lint"
    },
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    },
}
```
scripts中的配置只是一个综合演示，开发中可以根据实际情况进行修改。

## 说明
moga-lint没有做任何代码使用和配置脚本上的限制，它仅仅只是一个校验工具集合而已。通过get***Config函数中，添加自定义配置对象，就可以对moga-lint中的配置进行修改。

配置对象的配置规则参考[eslint](https://eslint.org/)、[stylelint](https://stylelint.io//)、[prettier](https://prettier.io/)、[commitlint](https://commitlint.js.org/)配置。