---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Object.toLocaleString
---

{{JSRef}}

The **`toLocaleString()`** method of {{jsxref("Object")}} instances returns a string representing this object. This method is meant to be overridden by derived objects for locale-specific purposes.

{{EmbedInteractiveExample("pages/js/object-prototype-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
```

### Parameters

None. However, all objects that override this method are expected to accept at most two parameters, corresponding to `locales` and `options`, such as {{jsxref("Date.prototype.toLocaleString")}}. The parameter positions should not be used for any other purpose.

### Return value

The return value of calling `this.toString()`.

## Description

All objects that inherit from `Object.prototype` (that is, all except [`null`-prototype objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) inherit the `toLocaleString()` method. {{jsxref("Object")}}'s `toLocaleString` returns the result of calling {{jsxref("Object/toString", "this.toString()")}}.

This function is provided to give objects a generic `toLocaleString` method, even though not all may use it. In the core language, these built-in objects override `toLocaleString` to provide locale-specific formatting:

- {{jsxref("Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}: {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}: {{jsxref("BigInt.prototype.toLocaleString()")}}

## Examples

### Using the base toLocaleString() method

The base `toLocaleString()` method simply calls `toString()`.

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array toLocaleString() override

{{jsxref("Array.prototype.toLocaleString()")}} is used to print array values as a string by invoking each element's `toLocaleString()` method and joining the results with a locale-specific separator. For example:

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date toLocaleString() override

{{jsxref("Date.prototype.toLocaleString()")}} is used to print out date displays more suitable for specific locales. For example:

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number toLocaleString() override

{{jsxref("Number.prototype.toLocaleString()")}} is used to print out number displays more suitable for specific locales, e.g. with the correct separators. For example:

```js
const testNumber = 2901234564;
// "2901234564"

const deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"

const frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Object.prototype.toString()")}}
