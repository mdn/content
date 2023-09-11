---
title: "WorkerNavigator: language property"
short-title: language
slug: Web/API/WorkerNavigator/language
page-type: web-api-instance-property
browser-compat: api.WorkerNavigator.language
---

{{APIRef("HTML DOM")}}

The **`WorkerNavigator.language`** read-only property returns
a string representing the preferred language of the user, usually the language of the
browser UI.

## Value

A string representing the
language version as defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. Examples of valid language
codes include "en", "en-US", "fr", "fr-FR", "es-ES", etc.

Note that in Safari on iOS prior to 10.2, the country code returned is lowercase:
"en-us", "fr-fr" etc.

## Examples

You can run this insert a web worker:

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerNavigator.languages")}}
- {{domxref("WorkerNavigator")}}
