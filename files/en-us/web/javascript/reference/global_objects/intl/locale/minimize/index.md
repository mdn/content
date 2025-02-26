---
title: Intl.Locale.prototype.minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.minimize
---

{{JSRef}}

The **`minimize()`** method of {{jsxref("Intl.Locale")}} instances attempts to
remove information about this locale that would be added by calling
{{jsxref("Intl/Locale/maximize", "maximize()")}}.

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.minimize()")}}

```js interactive-example
const english = new Intl.Locale("en-Latn-US");
const korean = new Intl.Locale("ko-Kore-KR");
const arabic = new Intl.Locale("ar-Arab-EG");

console.log(english.minimize().baseName);
// Expected output: "en"

console.log(korean.minimize().baseName);
// Expected output: "ko"

console.log(arabic.minimize().baseName);
// Expected output: "ar"
```

## Syntax

```js-nolint
minimize()
```

### Parameters

None.

### Return value

A {{jsxref("Intl.Locale")}} instance whose `baseName` property returns
the result of the [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) algorithm
executed against _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_.

## Description

This method carries out the reverse of {{jsxref("Intl/Locale/maximize", "maximize()")}},
removing any language, script, or region subtags from the locale language identifier
(essentially the contents of `baseName`). This is useful when there are
superfluous subtags in the language identifier; for instance, "en-Latn" can be
simplified to "en", since "Latn" is the only script used to write English.
`minimize()` only affects the main subtags that comprise
the [language identifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions):
language, script, and region subtags. Other subtags after the "-u"
in the locale identifier are called extension subtags and are not affected by the
`minimize()` method. Examples of these subtags include
{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}}, and {{jsxref("Intl/Locale/numeric", "numeric")}}.

## Examples

### Using minimize

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr-Latn-FR"
console.log(myLocale.toString()); // Prints "fr-Latn-FR-u-ca-gregory-hc-h12"

const myLocMinimized = myLocale.minimize();

// Prints "fr", since French is only written in the Latin script
// and is most likely to be spoken in France.
console.log(myLocMinimized.baseName);

// Prints "fr-u-ca-gregory-hc-h12".
// Note that the extension tags (after "-u") remain unchanged.
console.log(myLocMinimized.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
