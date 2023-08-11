---
title: Method definitions
slug: Web/JavaScript/Reference/Functions/Method_definitions
page-type: javascript-language-feature
browser-compat: javascript.functions.method_definitions
---

{{JsSidebar("Functions")}}

**Method definition** is a shorter syntax for defining a function property in an object initializer. It can also be used in [classes](/en-US/docs/Web/JavaScript/Reference/Classes).

{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}

## Syntax

```js-nolint
({
  property(parameters) {},
  *generator(parameters) {},
  async property(parameters) {},
  async *generator(parameters) {},

  // with computed keys
  [expression](parameters) {},
  *[expression](parameters) {},
  async [expression](parameters) {},
  async *[expression](parameters) {},
})
```

## Description

The shorthand syntax is similar to the [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) syntax.

Given the following code:

```js
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

You are now able to shorten this to:

```js
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

[`function*`](/en-US/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function), and [`async function*`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function*) properties all have their respective method syntaxes; see examples below.

However, note that the method syntax is not equivalent to a normal property with a function as its value — there are semantic differences. This makes methods defined in object literals more consistent with methods in [classes](/en-US/docs/Web/JavaScript/Reference/Classes).

### Method definitions are not constructable

Methods cannot be constructors! They will throw a {{jsxref("TypeError")}} if you try to instantiate them. On the other hand, a property created as a function can be used as a constructor.

```js example-bad
const obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method is not a constructor
```

### Using super in method definitions

Only functions defined as methods have access to the [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) keyword. `super.prop` looks up the property on the prototype of the object that the method was initialized on.

```js-nolint example-bad
const obj = {
  __proto__: {
    prop: "foo",
  },
  method: function () {
    console.log(super.prop); // SyntaxError: 'super' keyword unexpected here
  },
};
```

## Examples

### Using method definitions

```js
const obj = {
  a: "foo",
  b() {
    return this.a;
  },
};
console.log(obj.b()); // "foo"
```

### Method definitions in classes

You can use the exact same syntax to define public instance methods that are available on class instances. In classes, you don't need the comma separator between methods.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod()); // "hello world"
```

Public instance methods are defined on the `prototype` property of the class and are thus shared by all instances of the class. They are writable, non-enumerable, and configurable.

Inside instance methods, [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) and [`super`](/en-US/docs/Web/JavaScript/Reference/Operators/super) work like in normal methods. Usually, `this` refers to the instance itself. In subclasses, `super` lets you access the prototype of the object that the method is attached to, allowing you to call methods from the superclass.

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod()); // "hello world"
```

Static methods and private methods use similar syntaxes, which are described in the [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static) and [private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) pages.

### Computed property names

The method syntax also supports [computed property names](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names).

```js
const bar = {
  foo0: function () {
    return 0;
  },
  foo1() {
    return 1;
  },
  ["foo" + 2]() {
    return 2;
  },
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

### Generator methods

Note that the asterisk (`*`) in the generator method syntax must be _before_ the generator property name. (That is, `* g(){}` will work, but `g *(){}` will not.)

```js
// Using a named property
const obj = {
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

```js
// Using a named property
const obj = {
  f: async function () {
    await somePromise;
  },
};

// The same object using shorthand syntax
const obj2 = {
  async f() {
    await somePromise;
  },
};
```

### Async generator methods

```js
const obj = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

// The same object using shorthand syntax
const obj2 = {
  async *f() {
    yield 1;
    yield 2;
    yield 3;
  },
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Working with objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
