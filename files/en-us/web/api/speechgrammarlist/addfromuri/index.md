---
title: "SpeechGrammarList: addFromURI() method"
short-title: addFromURI()
slug: Web/API/SpeechGrammarList/addFromURI
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.SpeechGrammarList.addFromURI
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

The **`addFromURI()`** method of the
{{domxref("SpeechGrammarList")}} interface takes a grammar present at a specific URI and
adds it to the `SpeechGrammarList` as a new {{domxref("SpeechGrammar")}}
object.

Note that some speech recognition services may support built-in grammars that can be
specified by URI.

## Syntax

```js-nolint
addFromURI(src)
addFromURI(src, weight)
```

### Parameters

- `src`
  - : A string representing the URI of the grammar to be added.
- `weight` {{optional_inline}}
  - : A float representing the weight of the grammar relative to other grammars present in
    the {{domxref("SpeechGrammarList")}}. The weight means the importance of this grammar,
    or the likelihood that it will be recognized by the speech recognition service. The
    value can be between `0.0` and `1.0`; If not specified, the
    default used is `1.0`.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
