---
title: WorkerNavigator.languages
slug: Web/API/WorkerNavigator/languages
tags:
  - API
  - Experimental
  - WorkerNavigator
  - Property
  - Read-only
  - Reference
  - languages
browser-compat: api.WorkerNavigator.languages
---
{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`WorkerNavigator.languages`** read-only property
returns an array of {{domxref("DOMString")}}s representing the user's preferred
languages. The language is described using language tags according to
{{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. In the returned
array they are ordered by preference with the most preferred language first.

The value of {{domxref("WorkerNavigator.language","navigator.language")}} is the
first element of the returned array.

When its value changes, as the user's preferred languages are changed a
{{event("languagechange")}} event is fired on the {{domxref("WorkerGlobalScope")}} object.

The `Accept-Language` HTTP header in every HTTP request from the user's
browser uses the same value for the `navigator.languages` property except for
the extra `qvalues` (quality values) field (e.g. `en-US;q=0.8`).

## Syntax

```js
preferredLanguages = globalObj.navigator.languages
```

## Examples

You can run this insert a web worker:

```js
navigator.language   //"en-US"
navigator.languages  //["en-US", "zh-CN", "ja-JP"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NavigatorWorker.language")}}
- {{domxref("NavigatorWorker")}}
- {{domxref("WorkerGlobalScope.onlanguagechange")}}
