---
title: SpeechGrammar()
slug: Web/API/SpeechGrammar/SpeechGrammar
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - SpeechGrammar
  - Web
  - Web Speech API
  - speech
  - Non-standard
browser-compat: api.SpeechGrammar.SpeechGrammar
---
{{APIRef("Web Speech API")}}{{Non-standard_Header}}{{SeeCompatTable}}

The **`SpeechGrammar()`** constructor of the
{{domxref("SpeechGrammar")}} interface creates a new `SpeechGrammar` object
instance.

## Syntax

```js
new SpeechGrammar()
```

### Parameters

None.

## Examples

```js
const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const newGrammar = new SpeechGrammar();
newGrammar.src = '#JSGF V1.0; grammar names; public <name> = chris | kirsty | mike;'
speechRecognitionList[1] = newGrammar; // should add the new SpeechGrammar object to the list
```

## Specifications

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
