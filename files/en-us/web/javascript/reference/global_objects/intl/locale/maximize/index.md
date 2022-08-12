---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Locale
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.maximize
---
{{JSRef}}

The
**`Intl.Locale.prototype.maximize()`** method gets the
most likely values for the language, script, and region of the locale based on
existing values.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
maximize()
```

### Return value

A {{jsxref("Intl/Locale", "Locale")}} instance whose `baseName` property returns
the result of the [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) algorithm executed against _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_.

## Description

Sometimes, it is convenient to be able to identify the most likely locale language
identifier subtags based on an incomplete language ID. The Add Likely Subtags
algorithm gives us this functionality. For instance, given the language ID "en", the
algorithm would return "en-Latn-US", since English can only be written in the Latin
script, and is most likely to be used in the United States, as it is the largest
English-speaking country in the world. This functionality is provided to JavaScript
programmers via the `maximize()` method. `maximize()` only
affects the main subtags that comprise the [language identifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions): language, script, and region subtags.
Other subtags after the "-u" in the locale identifier are called extension subtags and
are not affected by the `maximize()` method. Examples of these subtags
include {{jsxref("Intl/Locale/hourCycle", "Locale.hourCycle")}},
{{jsxref("Intl/Locale/calendar", "Locale.calendar")}}, and {{jsxref("Intl/Locale/numeric",
  "Locale.numeric")}}.

## Examples

### Using maximize

```js
const myLocale = new Intl.Locale("fr", {
  hourCycle: "h24",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr"
console.log(myLocale.toString()); // Prints "fr-u-ca-gregory-hc-h24"
const myLocMaximized = myLocale.maximize();

// Prints "fr-Latn-FR". The "Latn" and "FR" tags are added,
// since French is only written in the Latin script and is most likely to be spoken in France.
console.log(myLocMaximized.baseName);

// Prints "fr-Latn-FR-u-ca-gregory-hc-h24".
// Note that the extension tags (after "-u") remain unchanged.
console.log(myLocMaximized.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "Intl.Locale.baseName")}}
- [Unicode's Likely Subtags spec](https://www.unicode.org/reports/tr35/#Likely_Subtags)
