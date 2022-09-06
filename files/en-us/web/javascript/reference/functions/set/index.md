---
title: setter
slug: Web/JavaScript/Reference/Functions/set
tags:
  - ECMAScript 5
  - Functions
  - JavaScript
  - Language feature
  - Reference
browser-compat: javascript.functions.set
---
{{jsSidebar("Functions")}}

The **`set`** syntax binds an object
property to a function to be called when there is an attempt to set that
property.

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## Syntax

```js
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

### Parameters

- `prop`
  - : The name of the property to bind to the given function.
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

Note the following when working with the `set` syntax:

- It can have an identifier which is either a number or a string;
- It must have exactly one parameter (see [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/)
  for more information)

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
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
```

Note that `current` is not defined, and any attempts to access it will
result in `undefined`.

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
const o = {a: 0};

Object.defineProperty(o, 'b', {
  set(x) { this.a = x / 2; }
});

o.b = 10;
//  Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a)
//  5
```

### Using a computed property name

```js
const expr = 'foo';

const obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz);
//  "bar"

obj.foo = 'baz';
//  run the setter

console.log(obj.baz);
//  "baz"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Getter](/en-US/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`__defineGetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`__defineSetter__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining getters and setters](/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters) in JavaScript Guide
