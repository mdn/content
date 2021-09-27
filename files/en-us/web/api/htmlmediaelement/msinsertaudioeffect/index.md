---
title: HTMLMediaElement.msInsertAudioEffect()
slug: Web/API/HTMLMediaElement/msInsertAudioEffect
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
HTMLMediaElement.msInsertAudioEffect(activatableClassId: {{DOMxRef("DOMString")}}, effectRequired: {{JSxRef("Boolean", "boolean")}}, config);
```

### Parameters

- activatableClassId
  - : A {{DOMxRef("DOMString")}} defining the audio effects class.
- effectRequired
  - : A {{JSxRef("Boolean")}} which if set to _true_ requires an audio effect to be
    defined.
- config{{Optional_Inline}}
  - : An optional {{JSxRef("Object")}} to help with defining any additional configuration
    needed.

### Return value

This method does not return a value.

## See also

- {{DOMxRef("HTMLMediaElement")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
