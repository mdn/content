---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the
regular expression.

{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

## Syntax

```js
toString()
```

### Return value

A string representing the given object.

## Description

The {{jsxref("RegExp")}} object overrides the `toString()` method of the
{{jsxref("Object")}} object; it does not inherit
{{jsxref("Object.prototype.toString()")}}. For {{jsxref("RegExp")}} objects, the
`toString()` method returns a string representation of the regular
expression.

## Examples

### Using toString()

The following example displays the string value of a {{jsxref("RegExp")}} object:

```js
const myExp = new RegExp('a+b+c');
console.log(myExp.toString());  // logs '/a+b+c/'

const foo = new RegExp('bar', 'g');
console.log(foo.toString());    // logs '/bar/g'
```

### Empty regular expressions and escaping

Starting with ECMAScript 5, an empty regular expression returns the string "/(?:)/" and
line terminators such as "\n" are escaped:

```js
new RegExp().toString(); // "/(?:)/"

new RegExp('\n').toString() === '/\n/';  // true, prior to ES5
new RegExp('\n').toString() === '/\\n/'; // true, starting with ES5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
