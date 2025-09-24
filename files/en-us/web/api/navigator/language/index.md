---
title: "Navigator: language property"
short-title: language
slug: Web/API/Navigator/language
page-type: web-api-instance-property
browser-compat: api.Navigator.language
---

{{APIRef("HTML DOM")}}

The **`language`** read-only property of the {{domxref("Navigator")}} interface returns a string representing the preferred language of the user, usually the language of the browser UI.

## Value

A string representing the language version in {{glossary("BCP 47 language tag")}} format. Examples of valid language tags include "en", "en-US", "fr", "fr-FR", "es-ES", etc.

Note that in Safari on iOS prior to 10.2, the country code returned is lowercase: "en-us", "fr-fr" etc.

## Examples

### Using Intl constructors to do language-specific formatting

The {{jsxref("Intl")}} constructors allow formatting content to match the rules of a given locale. You can pass `navigator.language` to them to format content in the locale corresponding to the user's preferred language:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
- {{jsxref("Intl")}}
