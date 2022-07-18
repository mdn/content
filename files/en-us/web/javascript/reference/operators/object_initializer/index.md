---
title: Object initializer
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - JSON
  - JavaScript
  - Language feature
  - Literal
  - Methods
  - Object
  - Primary Expression
  - computed
  - mutation
  - properties
browser-compat: javascript.operators.object_initializer
---
{{JsSidebar("Operators")}}

Objects can be initialized using [`new Object()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object), [`Object.create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create), or using the _literal_ notation (_initializer_ notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html", "taller")}}

## Syntax

```js
let o = {}
let o = {a: 'foo', b: 42, c: {}}

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}

let o = {
  property(parameters) {},
  get property() {},
  set property(value) {}
};
```

### New notations in ECMAScript 2015

Please see the compatibility table for support for these notations. In non-supporting environments, these notations will lead to syntax errors.

```js
// Shorthand property names (ES2015)
let a = 'foo', b = 42, c = {};
let o = {a, b, c}

// Shorthand method names (ES2015)
let o = {
  property(parameters) {}
}

// Computed property names (ES2015)
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}
```

## Description

An object initializer is an expression that describes the initialization of an {{jsxref("Object")}}. Objects consist of _properties_, which are used to describe an object. The values of object properties can either contain [primitive](/en-US/docs/Glossary/Primitive) data types or other objects.

### Object literal notation vs JSON

The object literal notation is not the same as the **J**ava**S**cript **O**bject **N**otation ([JSON](/en-US/docs/Glossary/JSON)). Although they look similar, there are differences between them:

- JSON permits _only_ property definition using `"property": value` syntax.  The property name must be double-quoted, and the definition cannot be a shorthand.
- In JSON the values can only be strings, numbers, arrays, `true`, `false`, `null`, or another (JSON) object.
- A function value (see "Methods" below) can not be assigned to a value in JSON.
- Objects like {{jsxref("Date")}} will be a string after {{jsxref("JSON.parse()")}}.
- {{jsxref("JSON.parse()")}} will reject computed property names and an error will be thrown.

## Examples

### Creating objects

An empty object with no properties can be created like this:

```js
let object = {}
```

However, the advantage of the _literal_ or _initializer_ notation is, that you are able to quickly create objects with properties inside the curly braces. You notate a list of `key: value` pairs delimited by commas.

The following code creates an object with three properties and the keys are `"foo"`, `"age"` and `"baz"`. The values of these keys are a string `"bar"`, the number `42`, and another object.

```js
let object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12}
}
```

### Accessing properties

Once you have created an object, you might want to read or change them. Object properties can be accessed by using the dot notation or the bracket notation. (See [property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) for detailed information.)

```js
object.foo // "bar"
object['age'] // 42
object.baz          // {myProp: 12}
object.baz.myProp   //12
```

### Property definitions

We have already learned how to notate properties using the initializer syntax. Oftentimes, there are variables in your code that you would like to put into an object. You will see code like this:

```js
let a = 'foo',
    b = 42,
    c = {};

let o = {
  a: a,
  b: b,
  c: c
}
```

With ECMAScript 2015, there is a shorter notation available to achieve the same:

```js
let a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
let o = {a, b, c}

// In other words,
console.log((o.a === {a}.a)) // true
```

#### Duplicate property names

When using the same name for your properties, the second property will overwrite the first.

```js
let a = {x: 1, x: 2}
console.log(a) // {x: 2}
```

In ECMAScript 5 strict mode code, duplicate property names were considered a {{jsxref("SyntaxError")}}.  With the introduction of computed property names making duplication possible at runtime, ECMAScript 2015 has removed this restriction.

```js
function haveES2015DuplicatePropertySemantics() {
  'use strict';
  try {
    ({prop: 1, prop: 2});

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch(e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}
```

### Method definitions

A property of an object can also refer to a [function](/en-US/docs/Web/JavaScript/Reference/Functions) or a [getter](/en-US/docs/Web/JavaScript/Reference/Functions/get) or [setter](/en-US/docs/Web/JavaScript/Reference/Functions/set) method.

```js
let o = {
  property(parameters) {},
  get property() {},
  set property(value) {}
}
```

In ECMAScript 2015, a shorthand notation is available, so that the keyword "`function`" is no longer necessary.

```js
// Shorthand method names (ES2015)
let o = {
  property(parameters) {},
}
```

In ECMAScript 2015, there is a way to concisely define properties whose values are generator functions:

```js
let o = {
  *generator() {
    ...........
  }
};
```

Which is equivalent to this ES5-like notation (but note that ECMAScript 5 has no generators):

```js
let o = {
  generator: function* () {
    ...........
  }
};
```

For more information and examples about methods, see [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Computed property names

Starting with ECMAScript 2015, the object initializer syntax also supports computed property names. That allows you to put an expression in brackets `[]`, that will be computed and used as the property name. This is reminiscent of the bracket notation of the [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) syntax, which you may have used to read and set properties already.

Now you can use a similar syntax in object literals, too:

```js
// Computed property names (ES2015)
let i = 0
let a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
}

console.log(a.foo1) // 1
console.log(a.foo2) // 2
console.log(a.foo3) // 3

const items = ["A","B","C"];
const obj = {
[items]: "Hello"
}
console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]) // "Hello"

let param = 'size'
let config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}

console.log(config) // {size: 12, mobileSize: 4}
```

### Spread properties

The [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread) proposal (stage 4) adds [spread](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) properties to object literals. It copies own enumerable properties from a provided object onto a new object.

Shallow-cloning (excluding `prototype`) or merging objects is now possible using a shorter syntax than {{jsxref("Object.assign()")}}.

```js
let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }
```

> **Warning:** Note that {{jsxref("Object.assign()")}} triggers [setters](/en-US/docs/Web/JavaScript/Reference/Functions/set), whereas the spread operator doesn't!

### Prototype setter

A property definition of the form `__proto__: value` or `"__proto__": value` does not create a property with the name `__proto__`.  Instead, if the provided value is an object or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), it points the `[[Prototype]]` of the created object to that value.  (If the value is not an object or `null`, the object is not changed.)

```js
let obj1 = {}
assert(Object.getPrototypeOf(obj1) === Object.prototype)

let obj2 = {__proto__: null}
assert(Object.getPrototypeOf(obj2) === null)

let protoObj = {}
let obj3 = {'__proto__': protoObj}
assert(Object.getPrototypeOf(obj3) === protoObj)

let obj4 = {__proto__: 'not an object or null'}
assert(Object.getPrototypeOf(obj4) === Object.prototype)
assert(!Object.hasOwn(obj4, '__proto__'))
```

Only a single prototype setter is permitted in an object literal. Multiple prototype setters are a syntax error.

Property definitions that do not use "colon" notation are not prototype setters. They are property definitions that behave identically to similar definitions using any other name.

```js
let __proto__ = 'variable'

let obj1 = {__proto__}
assert(Object.getPrototypeOf(obj1) === Object.prototype)
assert(Object.hasOwn(obj1, '__proto__'))
assert(obj1.__proto__ === 'variable')

let obj2 = {__proto__() { return 'hello'; }}
assert(obj2.__proto__() === 'hello')

let obj3 = {['__prot' + 'o__']: 17}
assert(obj3.__proto__ === 17)
```

Note that the `__proto__` key is standardized syntax, in contrast to the non-standard and non-performant {{jsxref("Object/proto", "Object.prototype.__proto__")}} accessors. It sets the `[[Prototype]]` during object creation, similar to {{jsxref("Object.create")}} — instead of mutating the prototype chain.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Property accessors](/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/en-US/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/en-US/docs/Web/JavaScript/Reference/Functions/set)
- [Method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
