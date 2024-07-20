---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
page-type: javascript-static-method
browser-compat: javascript.builtins.Intl.supportedValuesOf
---

{{JSRef}}

The **`Intl.supportedValuesOf()`** static method returns an array containing the supported calendar, collation, currency, numbering systems, or unit values supported by the implementation.

Duplicates are omitted and the array is sorted in ascending lexicographical order (or more precisely, using {{jsxref("Array/sort", "Array.prototype.sort()")}} with an `undefined` compare function).

The method can be used to feature-test whether values are supported in a particular implementation and download a polyfill only if necessary.
It can also be used to build UIs that allow users to select their preferred localized values, for example when the UI is created from WebGL or server-side.

{{EmbedInteractiveExample("pages/js/intl-supportedvaluesof.html", "taller")}}

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameters

- `key`
  - : A key string indicating the category of values to be returned. This is one of: `"calendar"`, `"collation"`, `"currency"`, `"numberingSystem"`, `"timeZone"`, `"unit"`.

### Return value

A sorted array of unique string values indicating the values supported by the implementation for the given key.

> **Note:** While the IANA database changes from time to time, the Unicode CLDR database (which browsers use) keeps old time zone names for stability purposes. Some browsers may use the legacy name, while others override it with the new name. See {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}} for more information.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if an unsupported key was passed as a parameter.

## Examples

### Feature testing

You can check that the method is supported by comparing to `undefined`:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
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
  // "compat", "dict", "emoji", etc.
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

- [Polyfill of `Intl.supportedValuesOf` in FormatJS](https://github.com/formatjs/formatjs/tree/main/packages/intl-enumerator)
- {{jsxref("Intl")}}
