---
title: SpeechGrammarList.item()
slug: Web/API/SpeechGrammarList/item
tags:
  - API
  - Experimental
  - Getter
  - Method
  - Reference
  - SpeechGrammarList
  - Web Speech API
  - item
  - recognition
  - speech
browser-compat: api.SpeechGrammarList.item
---
{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`item`** getter of the {{domxref("SpeechGrammarList")}}
interface is a standard getter — it allows individual {{domxref("SpeechGrammar")}}
objects to be retrieved from the `SpeechGrammarList` using array syntax.

## Syntax

```js
var myFirstGrammar = speechGrammarListInstance[0];
```

### Returns

A {{domxref("SpeechGrammar")}} object.

## Examples

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var myFirstGrammar = speechRecognitionList[0]; // var should contain the SpeechGrammar object created in line 4.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
