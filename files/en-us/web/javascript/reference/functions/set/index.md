---
title: set
slug: Web/JavaScript/Reference/Functions/set
page-type: javascript-language-feature
browser-compat: javascript.functions.set
---

{{jsSidebar("Functions")}}

The **`set`** syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in [classes](/en-US/docs/Web/JavaScript/Reference/Classes).

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## Syntax

```js-nolint
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

There are some additional syntax restrictions:

- A setter must have exactly one parameter.

### Parameters

- `prop`
  - : The name of the property to bind to the given function. In the same way as other properties in [object initializers](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer), it can be a string literal, a number literal, or an identifier.
- `val`
  - : An alias for the variable that holds the value attempted to be assigned to
    `prop`.
- `expression`
  - : You can also use expressions for a computed property name to bind to the given function.

## Description

In JavaScript, a setter can be used to execute a function whenever a specified property
is attempted to be changed. Setters are most often used in conjunction with getters to
create a type of pseudo-property. It is not possible to simultaneously have a setter on
a property that holds an actual value.

## Examples

### Defining a setter on new objects in object initializers

The following example define a pseudo-property `current` of object
`language`. When `current` is assigned a value, it updates
`log` with that value:

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

Note that `current` is not defined, and any attempts to access it will
result in `undefined`.

### Using setters in classes

You can use the exact same syntax to define public instance setters that are available on class instances. In classes, you don't need the comma separator between methods.

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
```

Setter properties are defined on the `prototype` property of the class and are thus shared by all instances of the class. Unlike setter properties in object literals, setter properties in classes are not enumerable.

Static setters and private setters use similar syntaxes, which are described in the [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static) and [private class features](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) pages.

### Removing a setter with the `delete` operator

If you want to remove the setter, you can just {{jsxref("Operators/delete", "delete")}}
it:

```js
delete language.current;
```

### Defining a setter on existing objects using `defineProperty`

To append a setter to an _existing_ object, use
{{jsxref("Object.defineProperty()")}}.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5
```

### Using a computed property name

```js
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"

obj.foo = "baz";
// Run the setter

console.log(obj.baz); // "baz"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Working with objects](/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [Functions](/en-US/docs/Web/JavaScript/Reference/Functions)
- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Object.defineProperty()")}}
- [Object initializer](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) by Jeff Walden (2010)
