---
title: "SpeechRecognitionResultList: item() method"
short-title: item()
slug: Web/API/SpeechRecognitionResultList/item
page-type: web-api-instance-method
browser-compat: api.SpeechRecognitionResultList.item
---

{{APIRef("Web Speech API")}}

The **`item`** getter of the
{{domxref("SpeechRecognitionResultList")}} interface is a standard getter — it allows
{{domxref("SpeechRecognitionResult")}} objects in the list to be accessed via array
syntax.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : Index of the item to retrieve.

### Return value

A {{domxref("SpeechRecognitionResult")}} object.

## Examples

This code is excerpted from our
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
