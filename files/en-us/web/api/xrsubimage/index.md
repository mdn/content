---
title: XRSubImage
slug: Web/API/XRSubImage
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRSubImage
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRSubImage`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) represents what viewport of the GPU texture to use for rendering.

## Interfaces based on `XRSubImage`

Below is a list of interfaces based on the <code>XRSubImage</code> interface.

- {{domxref("XRWebGLSubImage")}}: used during rendering of WebGL layers.

## Instance properties

- {{domxref("XRSubImage.viewport")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The {{domxref("XRViewport")}} used when rendering the sub image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRWebGLSubImage")}}
