---
title: SpeechRecognitionResultList.item()
slug: Web/API/SpeechRecognitionResultList/item
page-type: web-api-instance-method
tags:
  - API
  - Getter
  - Method
  - Reference
  - SpeechRecognitionResultList
  - Web Speech API
  - item
  - recognition
  - speech
browser-compat: api.SpeechRecognitionResultList.item
---
{{APIRef("Web Speech API")}}

The **`item`** getter of the
{{domxref("SpeechRecognitionResultList")}} interface is a standard getter — it allows
{{domxref("SpeechRecognitionResult")}} objects in the list to be accessed via array
syntax.

## Syntax

```js
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
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
