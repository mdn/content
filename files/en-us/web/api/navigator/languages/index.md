---
title: "Navigator: languages property"
short-title: languages
slug: Web/API/Navigator/languages
page-type: web-api-instance-property
browser-compat: api.Navigator.languages
---

{{APIRef("HTML DOM")}}

The **`Navigator.languages`** read-only property
returns an array of strings representing the user's preferred
languages. The language is described using language tags according to
{{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. In the returned
array they are ordered by preference with the most preferred language first.

The value of {{domxref("Navigator.language","navigator.language")}} is the
first element of the returned array.

When its value changes, as the user's preferred languages are changed a
{{domxref("Window.languagechange_event", "languagechange")}} event is fired on the {{domxref("Window")}} object.

The {{HTTPHeader("Accept-Language")}} HTTP header in every HTTP request from the user's browser generally lists the same locales as the `navigator.languages` property, with decreasing `q` values (quality values). Some browsers (Chrome and Safari) add language-only fallback tags in `Accept-Language`—for example, `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7` when `navigator.languages` is `["en-US", "zh-CN"]`. For privacy purposes (reducing {{Glossary("fingerprinting")}}), both `Accept-Language` and `navigator.languages` may not include the full list of user preferences, such as in Safari (always) and Chrome's incognito mode, where only one language is listed.

## Value

An array of strings.

## Examples

### Listing the contents of navigator.language and navigator.languages

```js
navigator.language; // "en-US"
navigator.languages; // ["en-US", "zh-CN", "ja-JP"]
```

### Using Intl constructors to do language-specific formatting, with fallback

The array of language identifiers contained in `navigator.languages` can be passed directly to the {{jsxref("Intl")}} constructors to implement preference-based fallback selection of locales, where the first entry in the list that matches a locale supported by `Intl` is used:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.languages).format(date);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.language")}}
- {{domxref("navigator")}}
- {{domxref("Window.languagechange_event", "languagechange")}} event
- {{jsxref("Intl")}}
