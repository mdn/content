---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
page-type: javascript-operator
browser-compat: javascript.operators.property_accessors
---

{{jsSidebar("Operators")}}

**Property accessors** provide access to an object's properties by using the dot notation or the bracket notation.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## Syntax

```js-nolint
object.propertyName
object[expression]
```

## Description

One can think of an object as an _associative array_ (a.k.a. _map_, _dictionary_, _hash_, _lookup table_). The _keys_ in this array are the names of the object's [properties](/en-US/docs/Glossary/Property/JavaScript).

There are two ways to access properties: _dot notation_ and _bracket notation_.

### Dot notation

In the `object.propertyName` syntax, the `propertyName` must be a valid JavaScript [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) which can also be a [reserved word](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords). For example, `object.$1` is valid, while `object.1` is not.

```js
const variable = object.propertyName;
object.propertyName = value;
```

```js
const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'
```

```js example-bad
const object = {};
object.1 = 'bar'; // SyntaxError
console.log(object.1); // SyntaxError
```

Here, the method named `createElement` is retrieved from `document` and is called.

```js
document.createElement("pre");
```

If you use a method for a numeric literal, and the numeric literal has no exponent and no decimal point, you should leave [white-space(s)](/en-US/docs/Glossary/Whitespace) before the dot preceding the method call, so that the dot is not interpreted as a decimal point.

```js-nolint
77 .toExponential();
// or
77
.toExponential();
// or
(77).toExponential();
// or
77..toExponential();
// or
77.0.toExponential();
// because 77. === 77.0, no ambiguity
```

### Bracket notation

In the `object[expression]` syntax, the `expression` should evaluate to a string or [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) that represents the property's name. So, it can be any string literal, for example, including `'1foo'`, `'!bar!'`, or even `' '` (a space).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

This does the exact same thing as the previous example.

```js
document["createElement"]("pre");
```

A space before bracket notation is allowed.

```js-nolint
document ["createElement"]("pre");
```

Passing expressions that evaluate to property name will do the same thing as directly passing the property name.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

However, beware of using square brackets to access properties whose names are given by external input. This may make your code susceptible to [object injection attacks](https://github.com/nodesecurity/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md).

### Property names

Each property name is a string or a [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Any other value, including a number, is coerced to a string. This outputs `'value'`, since `1` is coerced into `'1'`.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

This also outputs `'value'`, since both `foo` and `bar` are converted to the same string (`"[object Object]"`).

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Method binding

It's typical when speaking of an object's properties to make a distinction between properties and methods. However, the property/method distinction is little more than a convention. A method is a property that can be called (for example, if it has a reference to a {{jsxref("Function")}} instance as its value).

A method is not bound to the object that it is a property of. Specifically, `this` is not fixed in a method and does not necessarily refer to the object containing the method. Instead, `this` is "passed" by the function call. See [the reference for `this`](/en-US/docs/Web/JavaScript/Reference/Operators/this).

## Examples

### Bracket notation vs. eval()

JavaScript novices often make the mistake of using {{jsxref("Global_Objects/eval", "eval()")}} where the bracket notation can be used instead.

For example, the following syntax is often seen in many scripts.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` is slow and should be avoided whenever possible. Also, `strFormControl` would have to hold an identifier, which is not required for names and `id`s of form controls. It is better to use bracket notation instead:

```js
const x = document.forms.form_name.elements[strFormControl].value;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [Optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
