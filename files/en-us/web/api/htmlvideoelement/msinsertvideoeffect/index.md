---
title: HTMLVideoElement.msInsertVideoEffect()
slug: Web/API/HTMLVideoElement/msInsertVideoEffect
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Non-standard
  - Reference
  - msInsertVideoEffect
---
{{APIRef("HTML DOM")}}{{Non-standard_Header}}

The **`HTMLMediaElement.msInsertVideoEffect()`** method inserts
the specified video effect into the media pipeline.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
str = HTMLMediaElement.msInsertVideoEffect(activatableClassId: {{DOMxRef("DOMString")}}, effectRequired: {{JSxRef("Boolean", "boolean")}}, config);
```

### Parameters

- activatableClassId
  - : A {{DOMxRef("DOMString")}} defining the video effects class.
- effectRequired
  - : A {{JSxRef("Boolean")}} which if set to
    _true_ requires a video effect to be defined.
- config{{Optional_Inline}}
  - : An optional {{JSxRef("Object")}} to help with defining any additional configuration
    needed.

### Return value

This method does not return a value.

## Example

```js
var oVideo1 = document.getElementById("video1");
oVideo1.msInsertVideoEffect("Windows.Media.VideoEffects.VideoStabilization", true, null);
```

## See also

- {{DOMxRef("HTMLVideoElement")}}
- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_API_extensions)
