---
title: IIFE
slug: Glossary/IIFE
page-type: glossary-definition
---

{{GlossarySidebar}}

An **IIFE** (Immediately Invoked Function Expression) is an idiom in which a {{glossary("JavaScript")}} {{glossary("function")}} runs as soon as it is defined.
The name IIFE is promoted by Ben Alman in [his blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
// standard IIFE
(function () {
  // statements…
})();

// IIFE with arguments
(function (a, b) {
  console.log(a + b);
  return a * b;
})(1, 2); // logs 3. evaluates to 2.

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();

// IIFE being used to initialize a variable
const value = (() => {
  const randomValue = Math.random();
  if (randomValue > 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}());
```

It is a design pattern which is also known as a {{glossary("Self-Executing Anonymous Function")}} and contains two major parts:

1. A [function _expression_](/en-US/docs/Web/JavaScript/Reference/Operators/function). This usually needs to be [enclosed in parentheses](/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) in order to be parsed correctly.

2. Immediately _calling_ the function expression. Arguments may be provided,
   though IIFEs without arguments are more common.

IIFEs are a common pattern used to execute arbitrarily many statements in their own scope (and possibly return a value), in a location that requires a single expression.
They are similar to, but much more powerful than, the [comma operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator), which can only execute multiple expressions and, therefore, does not provide a way to use local variables or control flow statements.

## Use cases

### Avoid polluting the global namespace in script code

Because our application could include many functions and global variables from different source files, it's
important to limit the number of variables at the top level of a script
(this advice [does not apply to module code](/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts)).
If we have some initialization code that we don't need to use
again, we could use the IIFE pattern. As we will not reuse the code again, using an IIFE in this case is better than
using a function declaration or a function expression.

```js
// top-level of a script (not a module)

var globalVariable = (() => {
  // some initialization code
  let firstVariable = something();
  let secondVariable = somethingElse();
  return firstVariable + secondVariable;
})();

// firstVariable and secondVariable cannot be accessed outside of the function body.
```

### Execute an async function

An [`async`](/en-US/docs/Web/JavaScript/Reference/Operators/async_function) IIFE allows you to use [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) and [`for-await`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) even in older browsers and JavaScript runtimes that have no [top-level await](/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await):

```js
const getFileStream = async (url) => {
  // implementation
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### The module pattern

We would also use IIFE to create private and public variables and methods. For a more sophisticated use of the module
pattern and other use of IIFE, you could see the book Learning JavaScript Design Patterns by Addy Osmani.

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### For loop with var before ES6

We could see the following use of IIFE in some old code, before the introduction of the statements **let** and **const**
in **ES6** and the block scope. With the statement **var**, we have only function scopes and the global scope.
Suppose we want to create 2 buttons with the texts Button 0 and Button 1 and when we click
them, we would like them to alert 0 and 1. The following code doesn't work:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
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
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
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
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

When clicked, these buttons alert 0 and 1.

### Control flow statements in expression positions

IIFEs enable us to use language constructs such as `switch` in an expression.

```js
someObject.property = (() => {
  switch (someVariable) {
    case 0:
      return "zero";
    case 1:
      return "one";
    default:
      return "unknown";
  }
})();
```

This approach can be especially useful in scenarios where you want to make a variable `const`, but
are forced to use `let` or `var` during initialization:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

Using IIFEs, we can make the variable `const`:

```js
const onlyAssignedOnce = (() => {
  try {
    return someFunctionThatMightThrow();
  } catch (e) {
    return null;
  }
})();
```

## See also

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Comma Operator](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Related glossary terms:
  - {{Glossary("Function")}}
  - {{Glossary("Self-Executing Anonymous Function")}}
