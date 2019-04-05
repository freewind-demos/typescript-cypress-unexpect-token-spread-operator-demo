TypeScript Cypress Unexpected Token Spread Operator Demo
========================================================

由于cypress使用的electron版本过旧，不支持`...`操作符，所以如果引用到的文件中有`...`，
则会报错：

```
Uncaught SyntaxError: Unexpected token ...
```

解决办法是在webpack config中配置babel对js文件进行转换。

```
npm install
npm run test:open

npm run test:run
```
