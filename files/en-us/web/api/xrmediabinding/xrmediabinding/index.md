---
title: "XRMediaBinding: XRMediaBinding() constructor"
short-title: XRMediaBinding()
slug: Web/API/XRMediaBinding/XRMediaBinding
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.XRMediaBinding.XRMediaBinding
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRMediaBinding()`** constructor creates and returns a new {{domxref("XRMediaBinding")}} object.

## Syntax

```js-nolint
new XRMediaBinding(session)
```

### Parameters

- `session`
  - : An {{domxref("XRSession")}} object specifying the WebXR session for which to create the media binding.

### Return value

A newly-created {{domxref("XRMediaBinding")}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}

  - : Thrown if the new `XRMediaBinding` could not be created due to one of a number of possible state errors:

    - The {{domxref("XRSession")}} specified by `session` has already been stopped.
    - The specified `session` is not immersive.

## Examples

### Creating a new `XRMediaBinding`

The following example creates a new media binding for a session to create an {{domxref("XRQuadLayer")}} to display a video layer in the scene.

```js
const xrMediaBinding = new XRMediaBinding(xrSession);

const video = document.createElement("video");
video.src = "just-fascination.mp4";
const layer = xrMediaBinding.createQuadLayer(video);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLBinding")}}
