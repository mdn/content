---
title: Arrow function expressions
slug: Web/JavaScript/Reference/Functions/Arrow_functions
tags:
  - ECMAScript 2015
  - Functions
  - Intermediate
  - JavaScript
  - Language feature
  - Reference
browser-compat: javascript.functions.arrow_functions
---
{{jsSidebar("Functions")}}

An **arrow function expression** is a compact alternative to a traditional
[function expression](/en-US/docs/Web/JavaScript/Reference/Operators/function),
but is limited and can't be used in all situations.

There are differences between _arrow functions_ and _traditional functions_, as well as some limitations:

- Arrow functions don't have their own bindings to
  [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) or [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super),
  and should not be used as [methods](/en-US/docs/Glossary/Method).
- Arrow functions don't have access to the [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) keyword.
- Arrow functions aren't suitable for
  [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call),
  [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
  and [`bind`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
  methods, which generally rely on establishing a [scope](/en-US/docs/Glossary/Scope).
- Arrow functions cannot be used as [constructors](/en-US/docs/Glossary/Constructor).
- Arrow functions cannot use [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield), within its body.

{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}

### Comparing traditional functions to arrow functions

Let's decompose a "traditional anonymous function" down to the simplest "arrow function" step-by-step:

> **Note:** Each step along the way is a valid "arrow function".

```js
// Traditional Anonymous Function
(function (a) {
  return a + 100;
});

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

The { braces } and ( parentheses ) and "return" are required in some cases.

For example, if you have **multiple arguments** or **no
arguments**, you'll need to re-introduce parentheses around the arguments:

```js
// Traditional Anonymous Function
(function (a, b) {
  return a + b + 100;
});

// Arrow Function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional Anonymous Function (no arguments)
(function() {
  return a + b + 100;
});

// Arrow Function (no arguments)
() => a + b + 100;
```

Likewise, if the body requires **additional lines** of processing, you'll
need to re-introduce braces **PLUS the "return"** (arrow functions do not
magically guess what or when you want to "return"):

```js
// Traditional Anonymous Function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow Function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

And finally, for **named functions** we treat arrow expressions like
variables:

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
```

## Syntax

### Basic syntax

One param. With simple expression return is not needed:

```js
param => expression
(param) => expression
```

Multiple params require parentheses. With simple
expression return is not needed:

```js
(param1, paramN) => expression
```

Multiline statements require body braces and return:

```js
// The parentheses are optional with one single parameter
(param) => {
  const a = 1;
  return a + param;
}
```

Multiple params require parentheses. Multiline statements
require body braces and return:

```js
(param1, paramN) => {
  const a = 1;
  return a + param1 + paramN;
}
```

### Advanced syntax

To return an object literal expression requires
parentheses around expression:

```js
(params) => ({ foo: "a" }) // returning the object { foo: "a" }
```

[Rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) are supported, and always require parentheses:

```js
(a, b, ...r) => expression
```

[Default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) are supported, and always require parentheses:

```js
(a=400, b=20, c) => expression
```

[Destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
within params is supported, and always requires parentheses:

```js
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```

## Description

### Arrow functions used as methods

As stated previously, arrow function expressions are best suited for non-method
functions. Let's see what happens when we try to use them as methods:

```js
'use strict';

const obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
}

obj.b(); // prints undefined, Window { /* … */ } (or the global object)
obj.c(); // prints 10, Object { /* … */ }
```

Arrow functions do not have their own `this`. Another example involving
{{jsxref("Object.defineProperty()")}}:

```js
'use strict';

const obj = {
  a: 10,
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

Because a [class](/en-US/docs/Web/JavaScript/Reference/Classes)'s body has a `this` context, arrow functions as [class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) close over the class's `this` context and the `this` inside the arrow function's body will correctly point to the instance (or the class itself, for [static fields](/en-US/docs/Web/JavaScript/Reference/Classes/static)). However, because it is a [closure](/en-US/docs/Web/JavaScript/Closures), not the function's own binding, the value of `this` will not change based on the execution context.

```js
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  }
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// If it were a normal method, it should be undefined in this case
```

Arrow function properties are often said to be "auto-bound methods", because the equivalent with normal methods is:

```js
class C {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}
```

> **Note:** Class fields are defined on the _instance_, not on the _prototype_, so every instance creation would create a new function reference and allocate a new closure, potentially leading to more memory usage than a normal unbound method.

### call, apply and bind

The
[`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call),
[`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
and [`bind`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
methods are **NOT suitable** as arrow functions – as they were
designed to allow methods to execute within different scopes – because _arrow
functions establish `this` based on the scope the arrow function is defined
within._

For example
[`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call),
[`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
and [`bind`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
work as expected with traditional functions, because we establish the scope for each
of the methods:

```js
// ----------------------
// Traditional Example
// ----------------------
// A simplistic object with its very own "this".
const obj = {
  num: 100,
};

// Setting "num" on window to show how it is NOT used.
window.num = 2020; // yikes!

// A simple traditional function to operate on "this"
const add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
const resultCall = add.call(obj, 1, 2, 3); // establishing the scope as "obj"
console.log(resultCall); // result 106

// apply
const arr = [1, 2, 3];
const resultApply = add.apply(obj, arr); // establishing the scope as "obj"
console.log(resultApply); // result 106

// bind
const resultBind = add.bind(obj); // establishing the scope as "obj"
console.log(resultBind(1, 2, 3)); // result 106
```

With arrow functions, since our `add` function is essentially created on the
`window` (global) scope, it will assume `this` is the window.

```js
// ----------------------
// Arrow Example
// ----------------------

// A simplistic object with its very own "this".
const obj = {
  num: 100,
};

// Setting "num" on window to show how it gets picked up.
window.num = 2020; // yikes!

// Arrow Function
const add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)); // result 2026

// apply
const arr = [1, 2, 3];
console.log(add.apply(obj, arr)); // result 2026

// bind
const bound = add.bind(obj);
console.log(bound(1, 2, 3)); // result 2026
```

Perhaps the greatest benefit of using Arrow functions is with methods like {{domxref("setTimeout()")}} and {{domxref("EventTarget/addEventListener()", "EventTarget.addEventListener()")}} that usually require some kind of closure, call, apply or bind to ensure that the function is executed in the proper scope.

#### Traditional function example

```js
const obj = {
  count: 10,
  doSomethingLater() {
    setTimeout(function () { // the function executes on the window scope
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.
```

#### Arrow function example

```js
const obj = {
  count: 10,
  doSomethingLater () {
    // The traditional function binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its own binding and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj" context of the traditional function will
      // be used within.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
```

### No binding of arguments

Arrow functions do not have their own [`arguments` object](/en-US/docs/Web/JavaScript/Reference/Functions/arguments).
Thus, in this example, `arguments` is a reference to the arguments of the enclosing scope:

```js
const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); // 1

function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

> **Note:** You cannot declare a variable called `arguments` in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler), so the code above would be a syntax error. This makes the scoping effect of `arguments` much easier to reason about.

In most cases, using [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
is a good alternative to using an `arguments` object.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Use of the new operator

Arrow functions cannot be used as constructors and will throw an error when used with
`new`.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
```

### Use of prototype property

Arrow functions do not have a `prototype` property.

```js
const Foo = () => {};
console.log(Foo.prototype); // undefined
```

### Use of the yield keyword

The [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield)
keyword may not be used in an arrow function's body (except when permitted within
functions further nested within it). As a consequence, arrow functions cannot be used as
generators.

### Function body

Arrow functions can have either a _concise body_ or the usual _block body_.

In a concise body, only an expression is specified, which becomes the implicit return
value. In a block body, you must use an explicit `return` statement.

```js
const func = (x) => x * x;
// concise body syntax, implied "return"

const func2 = (x, y) => { return x + y; };
// with block body, explicit "return" needed
```

### Returning object literals

Keep in mind that returning object literals using the concise body syntax
`(params) => {object:literal}` will not work as expected.

```js example-bad
const func = () => { foo: 1 };
// Calling func() returns undefined!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

This is because the code inside braces ({}) is parsed as a sequence of statements (i.e.
`foo` is treated like a label, not a key in an object literal).

You must wrap the object literal in parentheses:

```js
const func = () => ({ foo: 1 });
```

### Line breaks

An arrow function cannot contain a line break between its parameters and its arrow.

```js example-bad
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

However, this can be amended by putting the line break after the arrow or using
parentheses/braces as seen below to ensure that the code stays pretty and fluffy. You
can also put line breaks between arguments.

```js
const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c
) => 1;

// no SyntaxError thrown
```

### Parsing order

Although the arrow in an arrow function is not an operator, arrow functions have
special parsing rules that interact differently with
[operator precedence](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
compared to regular functions.

```js example-bad
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Because `=>` has a lower precedence than most operators, parentheses are necessary to avoid `callback || ()` being parsed as the arguments list of the arrow function.

```js example-good
callback = callback || (() => {});    // ok
```

## Examples

### Basic usage

```js
// An empty arrow function returns undefined
const empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

const max = (a, b) => a > b ? a : b;

// Easy array filtering, mapping, etc.

const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
  // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log('I happen sooner');
  setTimeout(() => {
    // deeper code
    console.log('I happen later');
  }, 1);
}, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- ["ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
