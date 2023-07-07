---
title: Object initializer
slug: Web/JavaScript/Reference/Operators/Object_initializer
page-type: javascript-language-feature
browser-compat: javascript.operators.object_initializer
---

{{JsSidebar("Operators")}}

An **object initializer** is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). Objects can also be initialized using [`Object.create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) or [by invoking a constructor function](/en-US/docs/Web/JavaScript/Guide/Working_with_objects#using_a_constructor_function) with the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator.

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## Syntax

```js-nolint
o = {
  a: "foo",
  b: 42,
  c: {},
  1: "number literal property",
  "foo:bar": "string literal property",

  shorthandProperty,

  method(parameters) {
    // …
  },

  get property() {},
  set property(value) {},

  [expression]: "computed property",

  __proto__: prototype,

  ...spreadProperty,
};
```

## Description

An object initializer is an expression that describes the initialization of an {{jsxref("Object")}}. Objects consist of _properties_, which are used to describe an object. The values of object properties can either contain [primitive](/en-US/docs/Glossary/Primitive) data types or other objects.

### Object literal syntax vs. JSON

The object literal syntax is not the same as the **J**ava**S**cript **O**bject **N**otation ([JSON](/en-US/docs/Glossary/JSON)). Although they look similar, there are differences between them:

- JSON _only_ permits property definition using the `"property": value` syntax. The property name must be double-quoted, and the definition cannot be a shorthand. Computed property names are not allowed either.
- JSON object property values can only be strings, numbers, `true`, `false`, `null`, arrays, or another JSON object. This means JSON cannot express methods or non-plain objects like [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) or [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
- In JSON, `"__proto__"` is a normal property key. In an object literal, it [sets the object's prototype](#prototype_setter).

JSON is a _strict subset_ of the object literal syntax, meaning that every valid JSON text can be parsed as an object literal, and would likely not cause syntax errors. The only exception is that the object literal syntax prohibits duplicate `__proto__` keys, which does not apply to [`JSON.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse). The latter treats `__proto__` like a normal property and takes the last occurrence as the property's value. The only time when the object value they represent (a.k.a. their semantic) differ is also when the source contains the `__proto__` key — for object literals, it sets the object's prototype; for JSON, it's a normal property.

```js
console.log(JSON.parse('{ "__proto__": 0, "__proto__": 1 }')); // {__proto__: 1}
console.log({ "__proto__": 0, "__proto__": 1 }); // SyntaxError: Duplicate __proto__ fields are not allowed in object literals

console.log(JSON.parse('{ "__proto__": {} }')); // { __proto__: {} }
console.log({ "__proto__": {} }); // {} (with {} as prototype)
```

## Examples

### Creating objects

An empty object with no properties can be created like this:

```js
const object = {};
```

However, the advantage of the _literal_ or _initializer_ notation is, that you are able to quickly create objects with properties inside the curly braces. You notate a list of `key: value` pairs delimited by commas.

The following code creates an object with three properties and the keys are `"foo"`, `"age"` and `"baz"`. The values of these keys are a string `"bar"`, the number `42`, and another object.

```js
const object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
};
```

### Accessing properties

Once you have created an object, you might want to read or change them. Object properties can be accessed by using the dot notation or the bracket notation. (See [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) for detailed information.)

```js
object.foo; // "bar"
object["age"]; // 42
object.baz; // {myProp: 12}
object.baz.myProp; //12
```

### Property definitions

We have already learned how to notate properties using the initializer syntax. Oftentimes, there are variables in your code that you would like to put into an object. You will see code like this:

```js
const a = "foo";
const b = 42;
const c = {};

const o = {
  a: a,
  b: b,
  c: c,
};
```

There is a shorter notation available to achieve the same:

```js
const a = "foo";
const b = 42;
const c = {};

// Shorthand property names
const o = { a, b, c };

// In other words,
console.log(o.a === { a }.a); // true
```

#### Duplicate property names

When using the same name for your properties, the second property will overwrite the first.

```js
const a = { x: 1, x: 2 };
console.log(a); // {x: 2}
```

After ES2015, duplicate property names are allowed everywhere, including [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#duplicate_property_names). You can also have duplicate property names in [classes](/en-US/docs/Web/JavaScript/Reference/Classes). The only exception is [private properties](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields), which must be unique in the class body.

### Method definitions

A property of an object can also refer to a [function](/en-US/docs/Web/JavaScript/Reference/Functions) or a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) or [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) method.

```js
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};
```

A shorthand notation is available, so that the keyword `function` is no longer necessary.

```js
// Shorthand method names
const o = {
  property(parameters) {},
};
```

There is also a way to concisely define generator methods.

```js
const o = {
  *generator() {
    // …
  },
};
```

Which is equivalent to this ES5-like notation (but note that ECMAScript 5 has no generators):

```js
const o = {
  generator: function* () {
    // …
  },
};
```

For more information and examples about methods, see [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Computed property names

The object initializer syntax also supports computed property names. That allows you to put an expression in brackets `[]`, that will be computed and used as the property name. This is reminiscent of the bracket notation of the [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) syntax, which you may have used to read and set properties already.

Now you can use a similar syntax in object literals, too:

```js
// Computed property names
let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello",
};
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // "Hello"

const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
```

### Spread properties

Object literals support the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding `prototype`) or merging objects is now possible using a shorter syntax than {{jsxref("Object.assign()")}}.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
```

> **Warning:** Note that {{jsxref("Object.assign()")}} triggers [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set), whereas the spread syntax doesn't!

### Prototype setter

A property definition of the form `__proto__: value` or `"__proto__": value` does not create a property with the name `__proto__`. Instead, if the provided value is an object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), it points the `[[Prototype]]` of the created object to that value. (If the value is not an object or `null`, the object is not changed.)

Note that the `__proto__` key is standardized syntax, in contrast to the non-standard and non-performant [`Object.prototype.__proto__`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) accessors. It sets the `[[Prototype]]` during object creation, similar to {{jsxref("Object.create")}} — instead of mutating the prototype chain.

```js-nolint
const obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true

const obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2)); // null

const protoObj = {};
const obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj); // true

const obj4 = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype); // true
console.log(Object.hasOwn(obj4, "__proto__")); // false
```

Only a single prototype setter is permitted in an object literal. Multiple prototype setters are a syntax error.

Property definitions that do not use "colon" notation are not prototype setters. They are property definitions that behave identically to similar definitions using any other name.

```js
const __proto__ = "variable";

const obj1 = { __proto__ };
console.log(Object.getPrototypeOf(obj1) === Object.prototype); // true
console.log(Object.hasOwn(obj1, "__proto__")); // true
console.log(obj1.__proto__); // "variable"

const obj2 = { __proto__() { return "hello"; } };
console.log(obj2.__proto__()); // "hello"

const obj3 = { ["__proto__"]: 17 };
console.log(obj3.__proto__); // 17

// Mixing prototype setter with normal own properties with "__proto__" key
const obj4 = { ["__proto__"]: 17, __proto__: {} }; // {__proto__: 17} (with {} as prototype)
const obj5 = {
  ["__proto__"]: 17,
  __proto__: {},
  __proto__: null, // SyntaxError: Duplicate __proto__ fields are not allowed in object literals
};
const obj6 = {
  ["__proto__"]: 17,
  ["__proto__"]: "hello",
  __proto__: null,
}; // {__proto__: "hello"} (with null as prototype)
const obj7 =  {
  ["__proto__"]: 17,
  __proto__,
  __proto__: null,
}; // {__proto__: "variable"} (with null as prototype)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [Method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
