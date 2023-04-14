---
title: "Function: name"
slug: Web/JavaScript/Reference/Global_Objects/Function/name
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Function.name
---

{{JSRef}}

The **`name`** data property of a {{jsxref("Function")}} instance indicates the function's name as specified when it was created, or it may be either `anonymous` or `''` (an empty string) for functions created anonymously.

{{EmbedInteractiveExample("pages/js/function-name.html")}}

## Value

A string.

{{js_property_attributes(0, 0, 1)}}

> **Note:** In non-standard, pre-ES2015 implementations the `configurable` attribute was `false` as well.

## Description

The function's `name` property can be used to identify the function in debugging tools or error messages. It has no semantic significance to the language itself.

The `name` property is read-only and cannot be changed by the assignment operator:

```js
function someFunction() {}

someFunction.name = "otherFunction";
console.log(someFunction.name); // someFunction
```

To change it, use {{jsxref("Object.defineProperty()")}}.

The `name` property is typically inferred from how the function is defined. In the following sections, we will describe the various ways in which it can be inferred.

### Function declaration

The `name` property returns the name of a function declaration.

```js
function doSomething() {}
doSomething.name; // "doSomething"
```

### Default-exported function declaration

An [`export default`](/en-US/docs/Web/JavaScript/Reference/Statements/export) declaration exports the function as a declaration instead of an expression. If the declaration is anonymous, the name is `"default"`.

```js
// -- someModule.js --
export default function () {}

// -- main.js --
import someModule from "./someModule.js";

someModule.name; // "default"
```

### Function constructor

Functions created with the [`Function()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) constructor have name "anonymous".

```js
new Function().name; // "anonymous"
```

### Function expression

If the function expression is named, that name is used as the `name` property.

```js
const someFunction = function someFunctionName() {};
someFunction.name; // "someFunctionName"
```

Anonymous function expressions created using the keyword `function` or arrow functions would have `""` (an empty string) as their name.

```js
(function () {}).name; // ""
(() => {}).name; // ""
```

However, such cases are rare — usually, in order to refer to the expression elsewhere, the function expression is attached to an identifier when it's created (such as in a variable declaration). In such cases, the name can be inferred, as the following few subsections demonstrate.

One practical case where the name cannot be inferred is a function returned from another function:

```js
function getFoo() {
  return () => {};
}
getFoo().name; // ""
```

### Variable declaration and method

Variables and methods can infer the name of an anonymous function from its syntactic position.

```js
const f = function () {};
const object = {
  someMethod: function () {},
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

The same applies to assignment:

```js
let f;
f = () => {};
f.name; // "f"
```

### Initializer and default value

Functions in initializers (default values) of [destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value), [default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters), [class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields), etc., will inherit the name of the bound identifier as their `name`.

```js
const [f = () => {}] = [];
f.name; // "f"

const { someMethod: m = () => {} } = {};
m.name; // "m"

function foo(f = () => {}) {
  console.log(f.name);
}
foo(); // "f"

class Foo {
  static someMethod = () => {};
}
Foo.someMethod.name; // someMethod
```

### Shorthand method

```js
const o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Bound function

{{jsxref("Function.prototype.bind()")}} produces a function whose name is "bound " plus the function name.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Getter and setter

When using [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set) accessor properties, "get" or "set" will appear in the function name.

```js
const o = {
  get foo() {},
  set foo(x) {},
};

const descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

### Class

A class's name follows the same algorithm as function declarations and expressions.

```js
class Foo {}
Foo.name; // "Foo"
```

> **Warning:** JavaScript will set the function's `name` property only if a function does not have an own property called `name`. However, classes' [static members](/en-US/docs/Web/JavaScript/Reference/Classes/static) will be set as own properties of the class constructor function, and thus prevent the built-in `name` from being applied. See [an example](#telling_the_constructor_name_of_an_object) below.

### Symbol as function name

If a {{jsxref("Symbol")}} is used a function name and the symbol has a description, the method's name is the description in square brackets.

```js
const sym1 = Symbol("foo");
const sym2 = Symbol();

const o = {
  [sym1]() {},
  [sym2]() {},
};

o[sym1].name; // "[foo]"
o[sym2].name; // "[]"
```

### Private property

Private fields and private methods have the hash (`#`) as part of their names.

```js
class Foo {
  #field = () => {};
  #method() {}
  getNames() {
    console.log(this.#field.name);
    console.log(this.#method.name);
  }
}

new Foo().getNames();
// "#field"
// "#method"
```

## Examples

### Telling the constructor name of an object

You can use `obj.constructor.name` to check the "class" of an object.

```js
function Foo() {} // Or: class Foo {}

const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // "Foo"
```

However, because static members will become own properties of the class, we can't obtain the class name for virtually any class with a static method property `name()`:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

With a `static name()` method `Foo.name` no longer holds the actual class name but a reference to the `name()` function object. Trying to obtain the class of `fooInstance` via `fooInstance.constructor.name` won't give us the class name at all, but instead a reference to the static class method. Example:

```js
const fooInstance = new Foo();
console.log(fooInstance.constructor.name); // ƒ name() {}
```

Due to the existence of static fields, `name` may not be a function either.

```js
class Foo {
  static name = 123;
}
console.log(new Foo().constructor.name); // 123
```

If a class has a static property called `name`, it will also become _writable_. The built-in definition in the absence of a custom static definition is _read-only_:

```js
Foo.name = "Hello";
console.log(Foo.name); // "Hello" if class Foo has a static "name" property, but "Foo" if not.
```

Therefore you may not rely on the built-in `name` property to always hold a class's name.

### JavaScript compressors and minifiers

> **Warning:** Be careful when using the `name` property with source-code transformations, such as those carried out by JavaScript compressors (minifiers) or obfuscators. These tools are often used as part of a JavaScript build pipeline to reduce the size of a program prior to deploying it to production. Such transformations often change a function's name at build time.

Source code such as:

```js
function Foo() {}
const foo = new Foo();

if (foo.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

may be compressed to:

```js
function a() {}
const b = new a();
if (b.constructor.name === "Foo") {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log("Oops!");
}
```

In the uncompressed version, the program runs into the truthy branch and logs "'foo' is an instance of 'Foo'" — whereas, in the compressed version it behaves differently, and runs into the else branch. If you rely on the `name` property, like in the example above, make sure your build pipeline doesn't change function names, or don't assume a function has a particular name.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill for functions' `.name` property is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function")}}
