---
title: "SpeechRecognition: unspokenPunctuation property"
short-title: unspokenPunctuation
slug: Web/API/SpeechRecognition/unspokenPunctuation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SpeechRecognition.unspokenPunctuation
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`unspokenPunctuation`** property of the
{{domxref("SpeechRecognition")}} interface specifies whether the speech recognition engine will infer and insert punctuation marks based on the user's natural speech patterns.

## Value

A boolean value.

- If set to `true`, punctuation will be inferred and inserted automatically.
- If set to `false` (the default), no punctuation will be inserted automatically.

## Description

By default, text output by the Web Speech API's speech recognition engine is unpunctuated. To get this text ready for presentation, an additional step is required to add punctuation in appropriate places, for example by manual editing, or using some kind of Natural Language Processing (NLP) model to infer punctuation. Users can help by manually speaking punctuation (for example, stopping to say "comma" or "question mark"), but this still normally requires processing and is inconvenient.

This process can be made much easier by using the `unspokenPunctuation` property. Setting it to `true` causes the speech recognition engine to automatically infer and insert punctuation marks (such as periods, commas, and question marks) based on the user's natural pauses, grammatical structure, and prosody.

For example, speaking the line

"I am hungry [insert pause] and I must eat soon."

would result in the engine outputting

"I am hungry, and I must eat soon."

The output is not always perfect, but it results in text that is much closer to presentation quality than when `unspokenPunctuation` is not used.

## Examples

### Basic usage

The following code creates a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor, then specifies that it should infer punctuation marks by setting `unspokenPunctuation` to `true`:

```js
const recognition = new SpeechRecognition();
recognition.unspokenPunctuation = true;
```

See this in action in the [Web Speech API Playground](https://speech.evanliu.com/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
