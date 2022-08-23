---
title: Transitioning to strict mode
slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
tags:
  - Advanced
  - Guide
  - JavaScript
---
{{jsSidebar("More")}}

ECMAScript 5 introduced [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode) which is now implemented in all major browsers (including IE10). While making web browsers interpret code as strict is easy (just add `'use strict';` at the top of your source code), transitioning an existing code base to strict mode requires a bit more work.

This article aims at providing guidance for developers.

## Gradual transition

Strict mode has been designed so that the transition to it can be made gradually. It is possible to change each file individually and even to transition code to strict mode down to the function granularity.

## Differences from non-strict to strict

### Syntax errors

When adding `'use strict';`, the following cases will throw a {{jsxref("SyntaxError")}} before the script is executing:

- Octal syntax `const n = 023;`
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement
- Using [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) on a variable name `delete myVariable`;
- Using [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) or [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) as variable or function argument name
- Using one of the newly [reserved keywords](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) (in prevision for future language features): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, and `yield`
- Declaring two function parameters with the same name `function f(a, b, b) {}`
- Declaring the same property name twice in an  object literal `{a: 1, b: 3, a: 7}`. This constraint was later removed ([bug 1041128](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128)).

These errors are good, because they reveal plain errors or bad practices. They occur before the code is running.

### New runtime errors

JavaScript used to silently fail in contexts where what was done was an error. Strict mode throws in such cases. If your code base contains such cases, testing will be necessary to be sure nothing is broken. Once again, it can happen at the function granularity level.

#### Setting a value to an undeclared variable

```js
function f(x) {
  'use strict';
  const a = 12;
  b = a + x * 35; // error!
}
f(42);
```

This used to change a value on the global object which is rarely the expected effect. If you really want to set a value to the global object, pass it as an argument and explicitly assign it as a property:

```js
const global = this; // in the top-level context, "this" always
                     // refers to the global object
function f(x) {
  'use strict';
  const a = 12;
  global.b = a + x * 35;
}
f(42);
```

#### Trying to delete a non-configurable property

```js
'use strict';
delete Object.prototype; // error!
```

In non-strict, this would silently fail, in contradiction with the user expectation.

#### Poisoned arguments and function properties

Accessing `arguments.callee`, `arguments.caller`, `anyFunction.caller`, or `anyFunction.arguments` throws an error in strict mode. The only legitimate use case would be to reuse a function as in:

```js
// example taken from vanillajs: http://vanilla-js.com/
const s = document.getElementById('thing').style;
s.opacity = 1;
(function () {
  if ((s.opacity -= .1) < 0) {
    s.display = 'none';
  } else {
    setTimeout(arguments.callee, 40);
  }
})();
```

which can be rewritten as:

```js
'use strict';
const s = document.getElementById('thing').style;
s.opacity = 1;
(function fadeOut() { // name the function
  if ((s.opacity -= .1) < 0) {
    s.display = 'none';
  } else {
    setTimeout(fadeOut, 40); // use the name of the function
  }
})();
```

### Semantic differences

These differences are very subtle differences. It's possible that a test suite doesn't catch this kind of subtle difference. Careful review of your code base will probably be necessary to be sure these differences don't affect the semantics of your code. Fortunately, this careful review can be done gradually down the function granularity.

#### `this` in function calls

In function calls like `f()`, the `this` value was the global object. In strict mode, it is now `undefined`. When a function was called with [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) or [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), if the value was a primitive value, this one was boxed into an object (or the global object for `undefined` and `null`). In strict mode, the value is passed directly without conversion or replacement.

#### `arguments` doesn't alias named function arguments

In non-strict mode, modifying a value in the `arguments` object modifies the corresponding named argument. This made optimizations complicated for JavaScript engine and made code harder to read/understand. In strict mode, the `arguments` object is created and initialized with the same values than the named arguments, but changes to either the `arguments` object or the named arguments aren't reflected in one another.

#### Change to `eval`

In strict mode code, `eval` doesn't create a new variable in the scope from which it was called. Also, of course, in strict mode, the string is evaluated with strict mode rules. Thorough testing will need to be performed to make sure nothing breaks. Not using eval if you don't really need it may be another pragmatic solution.

## Strictness-neutral code

A potential "downside" of moving strict code to strict mode is that the semantics may be different in legacy browsers which do not implement strict mode. In some rare occasions (like bad concatenation or minification), your code also may not run in the mode you wrote and tested it in. Here are the rules to make your code strictness-neutral:

1. Write your code as strict and make sure no strict-only errors (from the above "New runtime errors" section) are thrown.
2. Stay away from semantic differences

    1. `eval`: use it only if you know what you're doing
    2. `arguments`: always access function arguments via their name or perform a copy of the arguments object using:
        `const args = Array.prototype.slice.call(arguments)`
        as the first line of your function
    3. `this`: only use `this` when it refers to an object you created.

## See also

- [Strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
