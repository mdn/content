---
title: "SpeechGrammarList: addFromString() method"
short-title: addFromString()
slug: Web/API/SpeechGrammarList/addFromString
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SpeechGrammarList.addFromString
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`addFromString()`** method of the
{{domxref("SpeechGrammarList")}} interface takes a grammar present in a specific
string within the code base (e.g. stored in a variable) and adds it to
the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}} object.

## Syntax

```js-nolint
addFromString(string)
addFromString(string, weight)
```

### Parameters

- `string`
  - : A string representing the grammar to be added.
- `weight` {{optional_inline}}
  - : A float representing the weight of the grammar relative to other grammars present in
    the {{domxref("SpeechGrammarList")}}. The weight means the importance of this grammar,
    or the likelihood that it will be recognized by the speech recognition service. The
    value can be between `0.0` and `1.0`; If not specified, the
    default used is `1.0`.

### Return value

None ({{jsxref("undefined")}}).

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
