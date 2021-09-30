---
title: IIFE
slug: Glossary/IIFE
tags:
  - CodingScripting
  - DesignPattern
  - Functions
  - Glossary
  - JavaScript
---
An **IIFE** (Immediately Invoked Function Expression) is a {{glossary("JavaScript")}} {{glossary("function")}} that runs as soon as it is defined.
The name IIFE is promoted by Ben Alman in [his blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
(function () {
  statements
})();
```

It is a design pattern which is also known as a {{glossary("Self-Executing Anonymous Function")}} and contains two major parts:

1.  The first is the anonymous function with lexical scope enclosed within the {{jsxref("Operators/Grouping", "Grouping Operator")}} `()`. This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2.  The second part creates the immediately invoked function expression `()` through which the JavaScript engine will directly interpret the function.

## Use cases

### Avoid polluting the global namespace

Because our application could include many functions and global variables from different source files, it's
important to limit the number of global variables. If we have some initiation code that we don't need to use
again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than
using a function declaration or a function expression.

```js
(function () {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
```

### The module pattern

We would also use IIFE to create private and public variables and methods. For a more sophisticated use of the module
pattern and other use of IIFE, you could see the book Learning JavaScript Design Patterns by Addy Osmani.

```js
const makeWithdraw = balance => (function(copyBalance) {
  let balance = copyBalance; // This variable is private
  let doBadThings = function() {
    console.log("I will do bad things with your money");
  };
  doBadThings();
  return {
    withdraw: function(amount) {
      if (balance >= amount) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient money";
      }
    },
  }
})(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined, this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
secondAccount.withdraw(30); // "Insufficient money"
secondAccount.withdraw(20);  // 0
```

### For loop with var before ES6

We could see the following use of IIFE in some old code, before the introduction of the statements **let** and **const**
in **ES6** and the block scope. With the statement **var**, we have only function scopes and the global scope.
Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and we click
them, we would like them to alert 0 and 1. The following code doesn't work:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, both Button 0 and Button 1 alert 2 because `i` is global,
with the last value 2. To fix this problem before ES6, we could use the IIFE pattern:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = (function (copyOfI) {
    return function() {alert(copyOfI);};
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

When clicked, Buttons 0 and 1 alert 0 and 1.
The variable `i` is globally defined.
Using the statement **let**, we could simply do:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = "Button " + i;
  button.onclick = function () {
    alert(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

When clicked, these buttons alert 0 and 1.

## See also

- [Quick example](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) (at the end of the "Functions" section, right before "Custom objects")
- {{interwiki("wikipedia", "Immediately-invoked function expression", "IIFE")}} (Wikipedia)
- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("Function")}}
  - {{Glossary("Self-Executing Anonymous Function")}}
