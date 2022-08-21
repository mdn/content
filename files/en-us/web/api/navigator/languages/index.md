---
title: Navigator.languages
slug: Web/API/Navigator/languages
page-type: web-api-instance-property
tags:
  - API
  - Navigator
  - Property
  - Read-only
  - Reference
  - languages
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

The `Accept-Language` HTTP header in every HTTP request from the user's
browser uses the same value for the `navigator.languages` property except for
the extra `qvalues` (quality values) field (e.g. `en-US;q=0.8`).

## Value

A string.

## Examples

```js
navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.language")}}
- {{domxref("navigator")}}
- {{domxref("Window.languagechange_event", "languagechange")}} event
