---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Reference
  - supportedValuesOf
browser-compat: javascript.builtins.Intl.supportedValuesOf
---
{{JSRef}}

The **`Intl.supportedValuesOf()`** method returns an array containing the supported calendar, collation, currency, numbering systems, or unit values supported by the implementation.

Duplicates are omitted and the array is sorted in ascending alphabetic order (or more precisely, using {{jsxref("Array/sort", "Array.prototype.sort()")}} with an `undefined` compare function)

The method can be used to feature-test whether values are supported in a particular implementation and download a polyfill only if necessary.
It can also be used to build UIs that allow users to select their preferred localized values, for example when the UI is created from WebGL or server-side.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
Intl.supportedValuesOf(key)
```

### Parameters

- `key`
  - : A key string indicating the category of values to be returned.
      This is one of: `"calendar"`, `"collation"`, `"currency"`,`"numberingSystem"`, `"timeZone"`, `"unit"`.

### Return value

A sorted array of unique string values indicating the values supported by the implementation for the given key.

### Exceptions

- `RangeError`
  - : An unsupported key was passed as a parameter.

## Examples

### Feature testing

You can check that the method is supported by comparing to `undefined`:

```js
if (typeof Intl.supportedValuesOf !== 'undefined') {
  // method is supported
}
```

### Get all values for key

To get the supported values for calendar you call the method with the key `"calendar"`.
You can then iterate through the returned array as shown below:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

> **Note:** The array returned for calendar values will always include the value "gregory" (gregorian).

The other values are all obtained in the same way:

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "big5han", "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### Invalid key throws RangeError

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Global_Objects/Intl", "Intl")}}
- [A polyfill of `Intl.supportedValuesOf` in FormatJS](https://github.com/formatjs/formatjs/tree/main/packages/intl-enumerator)
