---
title: Intl.Locale.prototype.minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.minimize
---
{{JSRef}}

The
**`Intl.Locale.prototype.minimize()`** method attempts to
remove information about the locale that would be added by calling
{{jsxref("Intl/Locale/maximize", "Locale.maximize()")}}.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-minimize.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
minimize()
```

### Return value

A {{jsxref("Intl/Locale", "Locale")}} instance whose `baseName` property returns
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
{{jsxref("Intl/Locale/hourCycle", "Locale.hourCycle")}}, {{jsxref("Intl/Locale/calendar", "Locale.calendar")}}, and {{jsxref("Intl/Locale/numeric", "Locale.numeric")}}.

## Examples

### Using minimize

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h24",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr-Latn-FR"
console.log(myLocale.toString()); // Prints "fr-Latn-FR-u-ca-gregory-hc-h24"

const myLocMinimized = myLocale.minimize();

// Prints "fr", since French is only written in the Latin script
// and is most likely to be spoken in France.
console.log(myLocMinimized.baseName);

// Prints "fr-u-ca-gregory-hc-h24".
// Note that the extension tags (after "-u") remain unchanged.
console.log(myLocMinimized.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "Intl.Locale.baseName")}}
