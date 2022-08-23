---
title: Method definitions
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
  - ECMAScript 2015
  - Functions
  - JavaScript
  - Language feature
  - Object
  - Syntax
browser-compat: javascript.functions.method_definitions
---
{{JsSidebar("Functions")}}

**Method definition** is a shorter syntax for defining a function property in an object initializer.

{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}

## Syntax

```js
const obj = {
  get property() {},
  set property(value) {},
  property(parameters) {},
  *generator(parameters) {},
  async property(parameters) {},
  async *generator(parameters) {},

  //  with computed keys
  get [expression]() {},
  set [expression](value) {},
  [expression](parameters) {},
  *[expression](parameters) {},
  async [expression](parameters) {},
  async *[expression](parameters) {},
};
```

## Description

The shorthand syntax is similar to the [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) syntax.

Given the following code:

```js
const obj = {
  foo: function () {
    // ...
  },
  bar: function () {
    // ...
  }
}
```

You are now able to shorten this to:

```js
const obj = {
  foo() {
    // ...
  },
  bar() {
    // ...
  }
}
```

### Generator methods

[Generator methods](/en-US/docs/Web/JavaScript/Reference/Statements/function*) can be defined using the shorthand syntax as well.

When doing so:

- The asterisk (`*`) in the shorthand syntax must be _before_ the generator property name. (That is, `* g(){}` will work, but `g *(){}` will not.)
- Non-generator method definitions cannot contain the `yield` keyword. Always use `yield` in conjunction with the asterisk (`*`).

```js
// Using a named property
const obj2 = {
  g: function* () {
    let index = 0;
    while (true) {
      yield index++;
    }
  },
};

// The same object using shorthand syntax
const obj2 = {
  *g() {
    let index = 0;
    while (true) {
      yield index++;
    }
  },
};

const it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Async methods

{{jsxref("Statements/async_function", "Async methods", "", 1)}} can also be defined
using the shorthand syntax.

```js
// Using a named property
const obj3 = {
  f: async function () {
    await some_promise;
  },
};

// The same object using shorthand syntax
const obj3 = {
  async f() {
    await some_promise;
  },
};
```

### Async generator methods

[Generator methods](/en-US/docs/Web/JavaScript/Reference/Statements/function*) can also be {{jsxref("Statements/async_function", "async", "", 1)}}.

```js
const obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// The same object using shorthand syntax
const obj4 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

### Method definitions are not constructable

Methods cannot be constructors! They will throw a {{jsxref("TypeError")}} if you try to
instantiate them.

```js example-bad
const objA = {
  method() {}
}
new objA.method  // TypeError: obj.method is not a constructor

const objB = {
  *g() {}
}
new objB.g       // TypeError: obj.g is not a constructor
```

## Examples

### Simple test case

```js
const obj = {
  a: 'foo',
  b() { return this.a }
};
console.log(obj.b())  // "foo"
```

### Computed property names

The shorthand syntax also supports computed property names.

```js
const bar = {
  foo0: function() { return 0 },
  foo1() { return 1 },
  ['foo' + 2]() { return 2 }
}

console.log(bar.foo0())  // 0
console.log(bar.foo1())  // 1
console.log(bar.foo2())  // 2

// A global function
function foo() {
  return 1
}

let name = 'foo'
console.log(window[name]())  // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
