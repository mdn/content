---
title: HTMLMediaElement.error
slug: Web/API/HTMLMediaElement/error
tags:
  - API
  - Audio
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - Web
browser-compat: api.HTMLMediaElement.error
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.error`** is the
{{domxref("MediaError")}} object for the most recent error, or `null` if
there has not been an error. When an {{event("error")}} event is received by the
element, you can determine details about what happened by examining this object.

## Syntax

```js
var myError = HTMLMediaElement.error;
```

### Value

A {{domxref("MediaError")}} object describing the most recent error to occur on the
media element or `null` if no errors have occurred.

## Example

This example establishes a video element and adds an error handler to it; the error
handler logs the details to console.

```js
var videoElement = document.createElement('video');
videoElement.onerror = function() {
  console.log("Error " + videoElement.error.code + "; details: " + videoElement.error.message);
}
videoElement.src = "https://example.com/bogusvideo.mp4";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{HTMLElement("audio")}} and {{HTMLElement("video")}}
