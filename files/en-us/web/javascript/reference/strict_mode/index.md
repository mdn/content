---
title: Strict mode
slug: Web/JavaScript/Reference/Strict_mode
page-type: guide
spec-urls: https://tc39.es/ecma262/multipage/strict-mode-of-ecmascript.html
---

{{JsSidebar("More")}}

> **Note:** Sometimes you'll see the default, non-strict mode referred to as _[sloppy mode](/en-US/docs/Glossary/Sloppy_mode)_. This isn't an official term, but be aware of it, just in case.

JavaScript's strict mode is a way to _opt in_ to a restricted variant of JavaScript, thereby implicitly opting-out of "[sloppy mode](/en-US/docs/Glossary/Sloppy_mode)". Strict mode isn't just a subset: it _intentionally_ has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:

1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Invoking strict mode

Strict mode applies to _entire scripts_ or to _individual functions_. It doesn't apply to [block statements](/en-US/docs/Web/JavaScript/Reference/Statements/block) enclosed in `{}` braces; attempting to apply it to such contexts does nothing. [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) code, [`Function`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) code, [event handler](/en-US/docs/Web/HTML/Attributes#event_handler_attributes) attributes, strings passed to [`setTimeout()`](/en-US/docs/Web/API/setTimeout), and related functions are either function bodies or entire scripts, and invoking strict mode in them works as expected.

### Strict mode for scripts

To invoke strict mode for an entire script, put the _exact_ statement `"use strict";` (or `'use strict';`) before any other statements.

```js
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```

### Strict mode for functions

Likewise, to invoke strict mode for a function, put the _exact_ statement `"use strict";` (or `'use strict';`) in the function's body before any other statements.

```js
function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}
```

The `"use strict"` directive can only be applied to the body of functions with simple parameters. Using `"use strict"` in functions with [rest](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), or [destructured](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) parameters is a [syntax error](/en-US/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

```js example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### Strict mode for modules

The entire contents of [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules) are automatically in strict mode, with no statement needed to initiate it.

```js
function myStrictFunction() {
  // because this is a module, I'm strict by default
}
export default myStrictFunction;
```

### Strict mode for classes

All parts of a [class](/en-US/docs/Web/JavaScript/Reference/Classes)'s body are strict mode code, including both [class declarations](/en-US/docs/Web/JavaScript/Reference/Statements/class) and [class expressions](/en-US/docs/Web/JavaScript/Reference/Operators/class).

```js
class C1 {
  // All code here is evaluated in strict mode
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError, because test() is in strict mode

const C2 = class {
  // All code here is evaluated in strict mode
};

// Code here may not be in strict mode
delete Object.prototype; // Will not throw error
```

## Changes in strict mode

Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories:

- changes converting mistakes into errors (as syntax errors or at runtime)
- changes simplifying how variable references are resolved
- changes simplifying `eval` and `arguments`
- changes making it easier to write "secure" JavaScript
- changes anticipating future ECMAScript evolution.

### Converting mistakes into errors

Strict mode changes some previously-accepted mistakes into errors. JavaScript was designed to be easy for novice developers, and sometimes it gives operations which should be errors non-error semantics. Sometimes this fixes the immediate problem, but sometimes this creates worse problems in the future. Strict mode treats these mistakes as errors so that they're discovered and promptly fixed.

#### Assigning to undeclared variables

Strict mode makes it impossible to accidentally create global variables. In sloppy mode, mistyping a variable in an assignment creates a new property on the global object and continues to "work". Assignments which would accidentally create global variables throw an error in strict mode:

```js
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

#### Failing to assign to object properties

Strict mode makes assignments which would otherwise silently fail to throw an exception. There are three ways to fail a property assignment:

- assignment to a non-writable data property
- assignment to a getter-only accessor property
- assignment to a new property on a [non-extensible](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) object

For example, [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) is a non-writable global variable. In sloppy mode, assigning to `NaN` does nothing; the developer receives no failure feedback. In strict mode, assigning to `NaN` throws an exception.

```js
"use strict";

// Assignment to a non-writable global
undefined = 5; // TypeError
Infinity = 5; // TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// Assignment to a getter-only property
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError

// Assignment to a new property on a non-extensible object
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError
```

#### Failing to delete object properties

Attempts to [delete](/en-US/docs/Web/JavaScript/Reference/Operators/delete) a non-configurable or otherwise undeletable (e.g. it's intercepted by a proxy's [`deleteProperty`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) handler which returns `false`) property throw in strict mode (where before the attempt would have no effect):

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

Strict mode also forbids deleting plain names. `delete name` in strict mode is a syntax error:

```js example-bad
"use strict";

var x;
delete x; // syntax error
```

If the name is a configurable global property, prefix it with [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) to delete it.

```js example-good
"use strict";

delete globalThis.x;
```

#### Duplicate parameter names

Strict mode requires that function parameter names be unique. In sloppy mode, the last duplicated argument hides previous identically-named arguments. Those previous arguments remain available through [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments), so they're not completely inaccessible. Still, this hiding makes little sense and is probably undesirable (it might hide a typo, for example), so in strict mode, duplicate argument names are a syntax error:

```js example-bad
function sum(a, a, c) {
  // syntax error
  "use strict";
  return a + a + c; // wrong if this code ran
}
```

#### Legacy octal literals

Strict mode [forbids a `0`-prefixed octal literal or octal escape sequence](/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal). In sloppy mode, a number beginning with a `0`, such as `0644`, is interpreted as an octal number (`0644 === 420`), if all digits are smaller than 8. Novice developers sometimes believe a leading-zero prefix has no semantic meaning, so they might use it as an alignment device — but this changes the number's meaning! A leading-zero syntax for the octal is rarely useful and can be mistakenly used, so strict mode makes it a syntax error:

```js example-bad
"use strict";
const sum =
  015 + // syntax error
  197 +
  142;
```

The standardized way to denote octal literals is via the `0o` prefix. For example:

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

Octal escape sequences, such as `"\45"`, which is equal to `"%"`, can be used to represent characters by extended-ASCII character code numbers in octal. In strict mode, this is a syntax error. More formally, it's disallowed to have `\` followed by any decimal digit other than `0`, or `\0` followed by a decimal digit; for example `\9` and `\07`.

#### Setting properties on primitive values

Strict mode forbids setting properties on [primitive](/en-US/docs/Glossary/Primitive) values. Accessing a property on a primitive implicitly creates a wrapper object that's unobservable, so in sloppy mode, setting properties is ignored (no-op). In strict mode, a {{jsxref("TypeError")}} is thrown.

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### Duplicate property names

Duplicate property names used to be considered a {{jsxref("SyntaxError")}} in strict mode. With the introduction of [computed property names](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer), making duplication possible at runtime, this restriction was removed in ES2015.

```js
"use strict";
const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015
```

> **Note:** Making code that used to error become non-errors is always considered backwards-compatible. This is a good part of the language being strict about throwing errors: it leaves room for future semantic changes.

### Simplifying scope management

Strict mode simplifies how variable names map to particular variable definitions in the code. Many compiler optimizations rely on the ability to say that variable _X_ is stored in _that_ location: this is critical to fully optimizing JavaScript code. JavaScript sometimes makes this basic mapping of name to variable definition in the code impossible to perform until runtime. Strict mode removes most cases where this happens, so the compiler can better optimize strict mode code.

#### Removal of the with statement

Strict mode prohibits [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with). The problem with `with` is that any name inside the block might map either to a property of the object passed to it, or to a variable in surrounding (or even global) scope, at runtime; it's impossible to know which beforehand. Strict mode makes `with` a syntax error, so there's no chance for a name in a `with` to refer to an unknown location at runtime:

```js example-bad
"use strict";
const x = 17;
with (obj) {
  // Syntax error
  // If this weren't strict mode, would this be const x, or
  // would it instead be obj.x? It's impossible in general
  // to say without running the code, so the name can't be
  // optimized.
  x;
}
```

The simple alternative of assigning the object to a short name variable, then accessing the corresponding property on that variable, stands ready to replace `with`.

#### Non-leaking eval

In strict mode, [`eval` does not introduce new variables into the surrounding scope](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/). In sloppy mode, `eval("var x;")` introduces a variable `x` into the surrounding function or the global scope. This means that, in general, in a function containing a call to `eval`, every name not referring to an argument or local variable must be mapped to a particular definition at runtime (because that `eval` might have introduced a new variable that would hide the outer variable). In strict mode, `eval` creates variables only for the code being evaluated, so `eval` can't affect whether a name refers to an outer variable or some local variable:

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

Whether the string passed to `eval()` is evaluated in strict mode depends on how `eval()` is invoked ([direct eval or indirect eval](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval)).

#### Block-scoped function declarations

The JavaScript language specification, since its start, had not allowed function declarations nested in block statements. However, it was so intuitive that most browsers implemented it as an extension grammar. Unfortunately, the implementations' semantics diverged, and it became impossible for the language specification to reconcile all implementations. Therefore, [block-scoped function declarations](/en-US/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration) are only explicitly specified in strict mode (whereas they were once disallowed in strict mode), while sloppy mode behavior remains divergent among browsers.

### Making eval and arguments simpler

Strict mode makes [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) and [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) less bizarrely magical. Both involve a considerable amount of magical behavior in sloppy mode: `eval` to add or remove bindings and to change binding values, and `arguments` syncing named arguments with its indexed properties. Strict mode makes great strides toward treating `eval` and `arguments` as keywords.

#### Preventing binding or assigning eval and arguments

The names `eval` and `arguments` can't be bound or assigned in language syntax. All these attempts to do so are syntax errors:

```js example-bad
"use strict";
eval = 17;
arguments++;
++eval;
const obj = { set p(arguments) {} };
let eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
const y = function eval() {};
const f = new Function("arguments", "'use strict'; return 17;");
```

#### No syncing between parameters and arguments indices

Strict mode code doesn't sync indices of the `arguments` object with each parameter binding. In a sloppy mode function whose first argument is `arg`, setting `arg` also sets `arguments[0]`, and vice versa (unless no arguments were provided or `arguments[0]` is deleted). `arguments` objects for strict mode functions store the original arguments when the function was invoked. `arguments[i]` does not track the value of the corresponding named argument, nor does a named argument track the value in the corresponding `arguments[i]`.

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
const pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

### "Securing" JavaScript

Strict mode makes it easier to write "secure" JavaScript. Some websites now provide ways for users to write JavaScript which will be run by the website _on behalf of other users_. JavaScript in browsers can access the user's private information, so such JavaScript must be partially transformed before it is run, to censor access to forbidden functionality. JavaScript's flexibility makes it effectively impossible to do this without many runtime checks. Certain language functions are so pervasive that performing runtime checks has a considerable performance cost. A few strict mode tweaks, plus requiring that user-submitted JavaScript be strict mode code and that it be invoked in a certain manner, substantially reduce the need for those runtime checks.

#### No this substitution

The value passed as `this` to a function in strict mode is not forced into being an object (a.k.a. "boxed"). For a sloppy mode function, `this` is always an object: either the provided object, if called with an object-valued `this`; or the boxed value of `this`, if called with a primitive as `this`; or the global object, if called with `undefined` or `null` as `this`. (Use [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), or [`bind`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) to specify a particular `this`.) Not only is automatic boxing a performance cost, but exposing the global object in browsers is a security hazard because the global object provides access to functionality that "secure" JavaScript environments must restrict. Thus for a strict mode function, the specified `this` is not boxed into an object, and if unspecified, `this` is `undefined` instead of [`globalThis`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis):

```js
"use strict";
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

#### Removal of stack-walking properties

In strict mode it's no longer possible to "walk" the JavaScript stack. Many implementations used to implement some extension features that make it possible to detect the upstream caller of a function. When a function `fun` is in the middle of being called, [`fun.caller`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) is the function that most recently called `fun`, and [`fun.arguments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) is the `arguments` for that invocation of `fun`. Both extensions are problematic for "secure" JavaScript because they allow "secured" code to access "privileged" functions and their (potentially unsecured) arguments. If `fun` is in strict mode, both `fun.caller` and `fun.arguments` are non-deletable properties which throw when set or retrieved:

```js
function restricted() {
  "use strict";
  restricted.caller; // throws a TypeError
  restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

Similarly, [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee) is no longer supported. In sloppy mode, `arguments.callee` refers to the enclosing function. This use case is weak: name the enclosing function! Moreover, `arguments.callee` substantially hinders optimizations like inlining functions, because it must be made possible to provide a reference to the un-inlined function if `arguments.callee` is accessed. `arguments.callee` for strict mode functions is a non-deletable property which throws an error when set or retrieved:

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // throws a TypeError
```

### Future-proofing JavaScript

#### Extra reserved words

[Reserved words](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) are identifiers that can't be used as variable names. Strict mode reserves some more names than sloppy mode, some of which are already used in the language, and some of which are reserved for the future to make future syntax extensions easier to implement.

- `implements`
- `interface`
- [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/en-US/docs/Web/JavaScript/Reference/Operators/yield)

## Transitioning to strict mode

Strict mode has been designed so that the transition to it can be made gradually. It is possible to change each file individually and even to transition code to strict mode down to the function granularity.

You can migrate a codebase to strict mode by first adding `"use strict"` to a piece of source code, and then fixing all execution errors, while watching out for semantic differences.

### Syntax errors

When adding `'use strict';`, the following cases will throw a {{jsxref("SyntaxError")}} before the script is executing:

- Octal syntax `const n = 023;`
- [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) statement
- Using [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) on a variable name `delete myVariable`;
- Using [`eval`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) or [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) as variable or function argument name
- Using one of the newly [reserved keywords](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (in prevision for future language features): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, and `yield`
- Declaring two function parameters with the same name `function f(a, b, b) {}`
- Declaring the same property name twice in an object literal `{a: 1, b: 3, a: 7}`. This constraint was later removed ([bug 1041128](https://bugzil.la/1041128)).

These errors are good, because they reveal plain errors or bad practices. They occur before the code is running, so they are easily discoverable as long as the code gets parsed by the runtime.

### New runtime errors

JavaScript used to silently fail in contexts where what was done should be an error. Strict mode throws in such cases. If your code base contains such cases, testing will be necessary to be sure nothing is broken. You can screen for such errors at the function granularity level.

- Assigning to an undeclared variable throws a {{jsxref("ReferenceError")}}. This used to set a property on the global object, which is rarely the expected effect. If you really want to set a value to the global object, explicitly assign it as a property on `globalThis`.
- Failing to assign to an object's property (e.g. it's read-only) throws a {{jsxref("TypeError")}}. In sloppy mode, this would silently fail.
- Deleting a non-deletable property throws a {{jsxref("TypeError")}}. In sloppy mode, this would silently fail.
- Accessing [`arguments.callee`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee), [`strictFunction.caller`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller), or [`strictFunction.arguments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) throws a {{jsxref("TypeError")}} if the function is in strict mode. If you are using `arguments.callee` to call the function recursively, you can use a named function expression instead.

### Semantic differences

These differences are very subtle differences. It's possible that a test suite doesn't catch this kind of subtle difference. Careful review of your code base will probably be necessary to be sure these differences don't affect the semantics of your code. Fortunately, this careful review can be done gradually down the function granularity.

- `this`
  - : In sloppy mode, function calls like `f()` would pass the global object as the `this` value. In strict mode, it is now `undefined`. When a function was called with [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) or [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), if the value was a primitive value, this one was boxed into an object (or the global object for `undefined` and `null`). In strict mode, the value is passed directly without conversion or replacement.
- `arguments`
  - : In sloppy mode, modifying a value in the `arguments` object modifies the corresponding named argument. This made optimizations complicated for JavaScript engine and made code harder to read/understand. In strict mode, the `arguments` object is created and initialized with the same values than the named arguments, but changes to either the `arguments` object or the named arguments aren't reflected in one another.
- `eval`
  - : In strict mode code, `eval` doesn't create a new variable in the scope from which it was called. Also, of course, in strict mode, the string is evaluated with strict mode rules. Thorough testing will need to be performed to make sure nothing breaks. Not using eval if you don't really need it may be another pragmatic solution.
- Block-scoped function declarations
  - : In sloppy mode, a function declaration inside a block may be visible outside the block and even callable. In strict mode, a function declaration inside a block is only visible inside the block.

## Specifications

{{Specifications}}

## See also

- [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules)
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
