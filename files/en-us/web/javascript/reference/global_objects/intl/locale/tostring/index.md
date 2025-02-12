---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.toString
---

{{JSRef}}

The **`toString()`** method of {{jsxref("Intl.Locale")}} instances returns this Locale's full [locale identifier string](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier).

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.toString()", "taller")}}

```js interactive-example
const french = new Intl.Locale("fr-Latn-FR", {
  calendar: "gregory",
  hourCycle: "h12",
});
const korean = new Intl.Locale("ko-Kore-KR", {
  numeric: true,
  caseFirst: "upper",
});

console.log(french.toString());
// Expected output: "fr-Latn-FR-u-ca-gregory-hc-h12"

console.log(korean.toString());
// Expected output: "ko-Kore-KR-u-kf-upper-kn"
```

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

The _locale_'s Unicode locale identifier string.

## Description

The `Locale` object is a JavaScript representation of a concept
Unicode locale identifier. Information about a particular locale (language, script,
calendar type, etc.) can be encoded in a locale identifier string. To make it easier
to work with these locale identifiers, the `Locale` object was
introduced to JavaScript. Calling the `toString` method on a Locale object
will return the identifier string for that particular Locale. The
`toString` method allows `Locale` instances to be
provided as an argument to existing `Intl` constructors, serialized in
JSON, or any other context where an exact string representation is useful.

## Examples

### Using toString

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr-Latn-FR"
console.log(myLocale.toString()); // Prints "fr-Latn-FR-u-ca-gregory-hc-h12"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
