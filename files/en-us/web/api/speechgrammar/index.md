---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.SpeechGrammar
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

The **`SpeechGrammar`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a set of words or patterns of words for the recognition service to recognize.

Grammar is defined using [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**).

> [!NOTE]
> The whole concept of grammar has been removed from the Web Speech API. Related features have been kept in the specification and are still recognized by supporting browsers for backwards compatibility purposes, but they have no effect on speech recognition services.

## Constructor

- {{domxref("SpeechGrammar.SpeechGrammar()", "SpeechGrammar()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : Creates a new `SpeechGrammar` object.

## Instance properties

- {{domxref("SpeechGrammar.src")}} {{deprecated_inline}}
  - : Sets and returns a string containing the grammar from within in the `SpeechGrammar` object instance.
- {{domxref("SpeechGrammar.weight")}} {{Optional_Inline}} {{deprecated_inline}}
  - : Sets and returns the weight of the `SpeechGrammar` object.

## Examples

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in addFromString.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
