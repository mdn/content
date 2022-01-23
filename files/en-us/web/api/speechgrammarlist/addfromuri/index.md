---
title: SpeechGrammarList.addFromURI()
slug: Web/API/SpeechGrammarList/addFromURI
tags:
  - API
  - Experimental
  - Method
  - Reference
  - SpeechGrammarList
  - Web Speech API
  - addFromURI
  - recognition
  - speech
browser-compat: api.SpeechGrammarList.addFromURI
---
{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`addFromURI()`** method of the
{{domxref("SpeechGrammarList")}} interface takes a grammar present at a specific URI and
adds it to the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}}
object.

Note that some speech recognition services may support built-in grammars that can be
specified by URI.

## Syntax

```js
speechGrammarListInstance.addFromURI(src,weight);
```

### Returns

{{jsxref('undefined')}}.

### Parameters

- src
  - : A {{domxref("DOMString")}} representing the URI of the grammar to be added.
- weight {{optional_inline}}
  - : A float representing the weight of the grammar relative to other grammars present in
    the {{domxref("SpeechGrammarList")}}. The weight means the importance of this grammar,
    or the likelihood that it will be recognized by the speech recognition service. The
    value can be between `0.0` and `1.0`; If not specified, the
    default used is `1.0`.

## Examples

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

speechRecognitionList.addFromURI('http://www.example.com/grammar.txt'); // adds a second grammar to the list.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
