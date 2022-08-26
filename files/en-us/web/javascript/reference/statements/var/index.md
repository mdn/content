---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - JavaScript
  - Language feature
  - Reference
  - Statement
browser-compat: javascript.statements.var
---
{{jsSidebar("Statements")}}

The **`var` statement** declares a function-scoped or
globally-scoped variable, optionally initializing it to a value.

{{EmbedInteractiveExample("pages/js/statement-var.html")}}

## Syntax

```js
var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
```

- `varnameN`
  - : Variable name. It can be any legal identifier.
- `valueN` {{optional_inline}}
  - : Initial value of the variable. It can be any legal expression. Default value is
    `undefined`.

Alternatively, the [Destructuring Assignment](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
syntax can also be used to declare variables.

```js
var { bar } = foo; // where foo = { bar:10, baz:12 };
/* This creates a variable with the name 'bar', which has a value of 10 */
```

## Description

`var` declarations, wherever they occur, are processed before any code is
executed. This is called {{Glossary("Hoisting", "hoisting")}} and is
discussed further below.

The scope of a variable declared with `var` is its current _execution
context and closures thereof_, which is either the enclosing function and
functions declared within it, or, for variables declared outside any function, global.
Duplicate variable declarations using `var` will not trigger an error, even
in strict mode, and the variable will not lose its value, unless another assignment is
performed.

```js
'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();
```

Variables declared using `var` are created before any code is executed in a
process known as hoisting. Their initial value is `undefined`.

```js
'use strict';
console.log(x);                // undefined (note: not ReferenceError)
console.log('still going...'); // still going...
var x = 1;
console.log(x);                // 1
console.log('still going...'); // still going...
```

In the global context, a variable declared using `var` is added as a
non-configurable property of the global object. This means its property descriptor
cannot be changed and it cannot be deleted using {{JSxRef("Operators/delete", "delete")}}. The corresponding
name is also added to a list on the internal `[[VarNames]]` slot on the
[global environment record](https://tc39.es/ecma262/#sec-global-environment-records)
(which forms part of the global lexical environment). The list
of names in `[[VarNames]]` enables the runtime to distinguish between global
variables and straightforward properties on the global object.

The property created on the global object for global variables, is set to be
non-configurable because the identifier is to be treated as a variable, rather than a
straightforward property of the global object. JavaScript has automatic memory
management, and it would make no sense to be able to use the `delete`
operator on a global variable.

```js example-bad
'use strict';
var x = 1;
Object.hasOwn(globalThis, 'x'); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x;  // SyntaxError in strict mode. Fails silently otherwise.
```

Note that in both NodeJS [CommonJS](https://www.commonjs.org/) modules and
native [ECMAScript modules](/en-US/docs/Web/JavaScript/Guide/Modules),
top-level variable declarations are scoped to the module, and are not, therefore added
as properties to the global object.

### Unqualified identifier assignments

The global object sits at the top of the scope chain. When attempting to resolve a name
to a value, the scope chain is searched. This means that properties on the global object
are conveniently visible from every scope, without having to qualify the names with
`globalThis.` or `window.` or `global.`.

Because the global object has a `String` property (`Object.hasOwn(globalThis, 'String')`), you can use the following code:

```js
function foo() {
  String('s') // Note the function `String` is implicitly visible
}
```

So the global object will ultimately be searched for unqualified identifiers. You don't
have to type `globalThis.String`, you can just type the unqualified
`String`. The corollary, in non-strict mode, is that assignment to
unqualified identifiers will, if there is no variable of the same name declared in the
scope chain, assume you want to create a property with that name on the global object.

```js
foo = 'f' // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, 'foo') // true
```

In [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode), assignment to an unqualified identifier in strict mode will result in a `ReferenceError`, to avoid the accidental creation of properties on the global object.

Note that the implication of the above, is that, contrary to popular misinformation,
JavaScript does not have implicit or undeclared variables, it merely has a syntax that
looks like it does.

### var hoisting

Because `var` declarations are processed before any
code is executed, declaring a variable anywhere in the code is equivalent to declaring
it at the top. This also means that a variable can appear to be used before it's
declared. This behavior is called "_hoisting_", as it appears that the variable
declaration is moved to the top of the function or global code.

```js
bla = 2;
var bla;
```

This is implicitly understood as:

```js
var bla;
bla = 2;
```

For that reason, it is recommended to always declare variables at the top of their
scope (the top of global code and the top of function code) so it's clear which
variables are function scoped (local) and which are resolved on the scope chain.

It's important to point out that only a variable's declaration is hoisted,
not its initialization. The initialization happens only when the assignment
statement is reached. Until then the variable remains `undefined` (but declared):

```js
function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

This is implicitly understood as:

```js
function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

## Examples

### Declaring and initializing two variables

```js
var a = 0, b = 0;
```

### Assigning two variables with single string value

```js
var a = 'A';
var b = a;
```

This is equivalent to:

```js
var a, b = a = 'A';
```

Be mindful of the order:

```js
var x = y, y = 'A';
console.log(x + y); // undefinedA
```

Here, `x` and `y` are declared before any code is executed, but
the assignments occur later. At the time `x = y` is evaluated,
`y` exists so no `ReferenceError` is thrown and its value is
`undefined`. So, `x` is assigned the undefined value. Then,
`y` is assigned the value `'A'`. Consequently, after the first
line, `x === undefined && y === 'A'`, hence the result.

### Initialization of several variables

```js
var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!
```

The same example as above but with a strict mode:

```js
'use strict';

var x = 0;
function f() {
  var x = y = 1; // Throws a ReferenceError in strict mode.
}
f();

console.log(x, y);
```

### Implicit globals and outer function scope

Variables that appear to be implicit globals may be references to variables in an outer
function scope:

```js
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
           // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined", as y is local to function a
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
