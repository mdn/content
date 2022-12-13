---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechGrammarList
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechGrammarList
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechGrammarList`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a list of {{domxref("SpeechGrammar")}} objects containing words or patterns of words that we want the recognition service to recognize.

Grammar is defined using [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**.) Other formats may also be supported in the future.

> **Note:** This interface was an [attempt to create an unmodifiable list](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only continues to be supported to not break code that's already using it. Modern APIs use types that wrap around ECMAScript array types instead, so you can treat them like ECMAScript arrays, and at the same time impose additional semantics on their usage (such as making their items read-only).

## Constructor

- {{domxref("SpeechGrammarList.SpeechGrammarList", "SpeechGrammarList()")}} {{Experimental_Inline}}
  - : Creates a new `SpeechGrammarList` object.

## Instance properties

- {{domxref("SpeechGrammarList.length")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the number of {{domxref("SpeechGrammar")}} objects contained in the `SpeechGrammarList`.

## Instance methods

- {{domxref("SpeechGrammarList.item()")}} {{Experimental_Inline}}
  - : Standard getter — allows individual {{domxref("SpeechGrammar")}} objects to be retrieved from the `SpeechGrammarList` using array syntax.
- {{domxref("SpeechGrammarList.addFromURI()")}} {{Experimental_Inline}}
  - : Takes a grammar present at a specific URI and adds it to the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}} object.
- {{domxref("SpeechGrammarList.addFromString()")}} {{Experimental_Inline}}
  - : Adds a grammar in a string to the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}} object.

## Examples

In our simple [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) example, we create a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor, create a new {{domxref("SpeechGrammarList")}}, add our grammar string to it using the {{domxref("SpeechGrammarList.addFromString")}} method, and set it to be the grammar that will be recognized by the `SpeechRecognition` instance using the {{domxref("SpeechRecognition.grammars")}} property.

```js
const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
