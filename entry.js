import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

// import './bower_components/mockjs/dist/mock.js';
// import './module/pxSolution.js';
// import './style/style.css';

import Try from './component/index.js';


ReactDOM.render(
    <Try />,
  document.getElementById('box'),
)



//  使用 React 的时候也可以不使用 JSX 语法 你可以在 Babel REPL 查看 JSX 是如何被渲染成原生 JavaScript 代码的

/*
    JSX 本身并不是什么高深的技术，只是一个语法糖。它非常有用，但并不是一个必需品，没有 JSX 的 React 也可以正常工作。
    使用 JSX 可以使得代码更加容易理解和维护，出现Bug时更容易调试和修复。
*/


/*

  简单来说，JSX 是类似 XML 的语法的，没有语义的 ECMAScript。它不打算由引擎或浏览器实现。将 JSX 并入 ECMAScript 规范本身也不是一个建议。
  它的目的是被各种预处理器使用，把语法标记转换成标准的 ECMAScript。
  JSX 有三大优点：
  快速 JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
  安全与javascript相比，JSX 是静态类型的，大多是类型安全的。使用 JSX 进行开发时，应用程序的质量会变得更高，因为在编译过程中会发现许多错误。它也提供编译器级别的调试功能。
  简单语法简洁，上手容易。

*/


/*
  import 模块化
  暴露单独接口
  // module.js

  export function method(){}

  // main.js

  // import M from'./module'
  //
  // M.method()
  // 暴露复合模块
  // module.js
  // export default{
  //
  //  method1,
  //
  //  method2
  //
  // }

  // main.js

  // import M from'./module'
  //
  // M.method1()

  ECMAScript6（以下简称ES6）是JavaScript语言的下一代标准。因为当前版本的ES6是在2015年6月批准通过发布的，所以又称ECMAScript 2015,
  是自从2009年ES5标准化后的第一次重大更新。。虽然目前并不是所有浏览器都能兼容ES6全部特性，但越来越多的程序员在实际项目当中已经开始使用ES6了。

  现有浏览器环境并不支持ES6语法，无法识别，所以可以使用webpack中babel将ES6转为ES5代码，从而在现有环境执行。
*/

//   Common.js   https://www.cnblogs.com/chenguangliang/p/5856701.html
