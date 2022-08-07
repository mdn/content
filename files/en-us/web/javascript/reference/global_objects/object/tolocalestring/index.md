---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
  - Reference
browser-compat: javascript.builtins.Object.toLocaleString
---
{{JSRef}}

The **`toLocaleString()`** method returns a string representing
the object. This method is meant to be overridden by derived objects for locale-specific
purposes.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Syntax

```js
toLocaleString()
```

### Return value

A string representing the object.

## Description

{{jsxref("Object")}}'s `toLocaleString` returns the result of calling
{{jsxref("Object.toString", "toString()")}}.

This function is provided to give objects a generic `toLocaleString` method,
even though not all may use it. See the list below.

### Objects overriding toLocaleString

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Examples

### Array toLocaleString() override

On {{jsxref("Array")}} objects, {{jsxref("Array.toLocaleString", "toLocaleString()")}}
can be used to print array values as a string, optionally with locale-specific
identifiers (such as currency symbols) appended to them:

For example:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString('fr', {
  style: 'currency',
  currency: 'EUR',
});
// "4,00 €,7,00 €,10,00 €"
```

### Date toLocaleString() override

On {{jsxref("Date")}} objects, {{jsxref("Date.toLocaleString", "toLocaleString()")}} is
used to print out date displays more suitable for specific locales:

For example:

```js
const testDate = new Date(Date.now());
// "Date Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString('de');
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString('fr');
// "29/05/2020, 18:04:24"
```

### Number toLocaleString() override

On {{jsxref("Number")}} objects, {{jsxref("Number.toLocaleString",
  "toLocaleString()")}} is used to print out number displays more suitable for specific
locales, e.g. with the correct separators:

For example:

```js
const testNumber = 2901234564;
// "2901234564"

const deNumber = testNumber.toLocaleString('de');
// "2.901.234.564"

const frNumber = testNumber.toLocaleString('fr');
// "2 901 234 564"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
