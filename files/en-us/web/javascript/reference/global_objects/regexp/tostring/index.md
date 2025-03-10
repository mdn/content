---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("RegExp")}} instances returns a string representing this regular expression.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// Expected output: /a+b+c/

console.log(new RegExp("a+b+c").toString());
// Expected output: "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// Expected output: "/bar/g"

console.log(new RegExp("\n", "g").toString());
// Expected output (if your browser supports escaping): "/\n/g"

console.log(new RegExp("\\n", "g").toString());
// Expected output: "/\n/g"
```

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string representing the given object.

## Description

The {{jsxref("RegExp")}} object overrides the `toString()` method of the {{jsxref("Object")}} object; it does not inherit {{jsxref("Object.prototype.toString()")}}. For {{jsxref("RegExp")}} objects, the `toString()` method returns a string representation of the regular expression.

In practice, it reads the regex's [`source`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) and [`flags`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) properties and returns a string in the form `/source/flags`. The `toString()` return value is guaranteed to be a parsable regex literal, although it may not be the exact same text as what was originally specified for the regex (for example, the flags may be reordered).

## Examples

### Using toString()

The following example displays the string value of a {{jsxref("RegExp")}} object:

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Empty regular expressions and escaping

Since `toString()` accesses the [`source`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) property, an empty regular expression returns the string `"/(?:)/"`, and line terminators such as `\n` are escaped. This makes the returned value always a valid regex literal.

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\\n/"; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
