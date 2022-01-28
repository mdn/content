---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
tags:
  - ECMAScript 2015
  - Function
  - JavaScript
  - Property
  - Polyfill
browser-compat: javascript.builtins.Function.name
---
{{JSRef}}

A {{jsxref("Function")}} object's read-only **`name`** property indicates the function's name as specified when it was created, or it may be either `anonymous` or `''` (an empty string) for functions created anonymously.

{{EmbedInteractiveExample("pages/js/function-name.html")}}{{js_property_attributes(0,0,1)}}

> **Note:** In non-standard, pre-ES2015 implementations the `configurable` attribute was `false` as well.

## JavaScript compressors and minifiers

> **Warning:** Be careful when using `Function.name` and source code transformations, such as those carried out by JavaScript compressors (minifiers) or obfuscators. These tools are often used as part of a JavaScript build pipeline to reduce the size of a program prior to deploying it to production. Such transformations often change a function's name at build-time.

Source code such as:

```js
function Foo() {};
let foo = new Foo();

if (foo.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
```

may be compressed to:

```js
function a() {};
let b = new a();
if (b.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
```

In the uncompressed version, the program runs into the truthy-branch and logs "`'foo' is an instance of 'Foo'`". Whereas, in the compressed version it behaves differently, and runs into the else-branch. If you rely on `Function.name`, like in the example above, make sure your build pipeline doesn't change function names, or don't assume a function to have a particular name.

## Examples

### Function statement name

The `name` property returns the name of a function statement.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Function constructor name

Functions created with the syntax `new Function(...)` or just `Function(...)` create {{jsxref("Function")}} objects and their name is "anonymous".

```js
(new Function).name; // "anonymous"
```

### Anonymous function expression

Anonymous function expressions that were created using the keyword `function` or arrow functions would have `""` (an empty string) as their name.

```js
(function() {}).name; // ""
(() => {}).name; // ""
```

### Inferred function names

Variables and methods can infer the name of an anonymous function from its syntactic position (new in ECMAScript 2015).

```js
let f = function() {};
let object = {
  someMethod: function() {}
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

You can define a function with a name in a {{jsxref("Operators/Function", "function expression", "", 1)}}:

```js
let object = {
  someMethod: function object_someMethod() {}
};
console.log(object.someMethod.name); // logs "object_someMethod"

try { object_someMethod } catch(e) { console.log(e); }
// ReferenceError: object_someMethod is not defined
```

The name property is read-only and cannot be changed by the assignment operator:

```js
 let object = {
  // anonymous
  someMethod: function() {}
};

object.someMethod.name = 'otherMethod';
console.log(object.someMethod.name); // someMethod
```

To change it, use {{jsxref("Object.defineProperty()")}}.

### Shorthand method names

```js
var o = {
  foo(){}
};
o.foo.name; // "foo";
```

### Bound function names

{{jsxref("Function.bind()")}} produces a function whose name is "bound " plus the function name.

```js
function foo() {};
foo.bind({}).name; // "bound foo"
```

### Function names for getters and setters

When using [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set) accessor properties, "get" or "set" will appear in the function name.

```js
let o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### Function names in classes

You can use `obj.constructor.name` to check the "class" of an object (but be sure to read the warnings below):

```js
function Foo() {}  // ES2015 Syntax: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs "Foo"
```

> **Warning:** The script interpreter will set the built-in `Function.name` property only if a function does not have an own property called _name_ (see section [9.2.11 of the ECMAScript2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname)). However, ES2015 specifies the _static_ keyword such that static methods will be set as OwnProperty of the class constructor function (ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation)).

Therefore we can't obtain the class name for virtually any class with a static method property `name()`:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

With a `static name()` method `Foo.name` no longer holds the actual class name but a reference to the `name()` function object. Above class definition in ES2015 syntax will behave in Chrome or Firefox similar to the following snippet in ES5 syntax:

```js
function Foo() {}
Object.defineProperty(Foo, 'name', { writable: true });
Foo.name = function() {};
```

Trying to obtain the class of `fooInstance` via `fooInstance.constructor.name` won't give us the class name at all but a reference to the static class method. Example:

```js
let fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs function name()
```

You may also see from the ES5 syntax example that in Chrome or Firefox our static definition of `Foo.name` becomes _writable_. The built-in definition in the absence of a custom static definition is _read-only_:

```js
Foo.name = 'Hello';
console.log(Foo.name); // logs "Hello" if class Foo has a static name() property but "Foo" if not.
```

Therefore you may not rely on the built-in `Function.name` property to always hold a class's name.

### Symbols as function names

If a {{jsxref("Symbol")}} is used a function name and the symbol has a description, the method's name is the description in square brackets.

```js
let sym1 = Symbol("foo");
let sym2 = Symbol();
let o = {
  [sym1]: function(){},
  [sym2]: function(){}
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill for functions `.name` property is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function")}}
