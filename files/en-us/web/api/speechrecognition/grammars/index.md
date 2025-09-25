---
title: "SpeechRecognition: grammars property"
short-title: grammars
slug: Web/API/SpeechRecognition/grammars
page-type: web-api-instance-property
browser-compat: api.SpeechRecognition.grammars
---

{{APIRef("Web Speech API")}}

The **`grammars`** property of the
{{domxref("SpeechRecognition")}} interface returns and sets a collection of
{{domxref("SpeechGrammar")}} objects that represent the grammars that will be understood
by the current `SpeechRecognition`.

> [!NOTE]
> The concept of grammar has been removed from the Web Speech API. Related features remain in the specification and are still recognized by supporting browsers for backwards compatibility, but they have no effect on speech recognition services.

## Value

A {{domxref("SpeechGrammarList")}} containing the {{domxref("SpeechGrammar")}} objects representing the grammar for your app.

## Examples

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
