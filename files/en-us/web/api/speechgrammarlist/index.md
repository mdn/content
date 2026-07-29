---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.SpeechGrammarList
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

The **`SpeechGrammarList`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a list of {{domxref("SpeechGrammar")}} objects containing words or patterns of words that we want the recognition service to recognize.

Grammar is defined using [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**).

> [!NOTE]
> The concept of grammar has been removed from the Web Speech API. Related features remain in the specification and are still recognized by supporting browsers for backwards compatibility, but they have no effect on speech recognition services.

## Constructor

- {{domxref("SpeechGrammarList.SpeechGrammarList", "SpeechGrammarList()")}} {{deprecated_inline}}
  - : Creates a new `SpeechGrammarList` object.

## Instance properties

- {{domxref("SpeechGrammarList.length")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns the number of {{domxref("SpeechGrammar")}} objects contained in the `SpeechGrammarList`.

## Instance methods

- {{domxref("SpeechGrammarList.item()")}} {{deprecated_inline}}
  - : Standard getter — allows individual {{domxref("SpeechGrammar")}} objects to be retrieved from the `SpeechGrammarList` using array syntax.
- {{domxref("SpeechGrammarList.addFromURI()")}} {{deprecated_inline}}
  - : Takes a grammar present at a specific URI and adds it to the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}} object.
- {{domxref("SpeechGrammarList.addFromString()")}} {{deprecated_inline}}
  - : Adds a grammar in a string to the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}} object.

## Examples

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
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
