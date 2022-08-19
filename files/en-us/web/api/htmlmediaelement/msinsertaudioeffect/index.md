---
title: HTMLMediaElement.msInsertAudioEffect()
slug: Web/API/HTMLMediaElement/msInsertAudioEffect
page-type: web-api-instance-method
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Non-standard
  - Reference
  - msInsertAudioEffect
---
{{APIRef("HTML DOM")}}{{Non-standard_Header}}

The **`HTMLMediaElement.msInsertAudioEffect()`** method inserts
the specified audio effect into the media pipeline.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
msInsertAudioEffect(activatableClassId, effectRequired)
msInsertAudioEffect(activatableClassId, effectRequired, config)
```

### Parameters

- `activatableClassId`
  - : A string defining the audio effects class.
- `effectRequired`
  - : A {{JSxRef("Boolean")}} which if set to _true_ requires an audio effect to be
    defined.
- `config` {{Optional_Inline}}
  - : An optional {{JSxRef("Object")}} to help with defining any additional configuration
    needed.

### Return value

None ({{jsxref("undefined")}}).

## See also

- {{DOMxRef("HTMLMediaElement")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
