---
title: XRCompositionLayer
slug: Web/API/XRCompositionLayer
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRCompositionLayer
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRCompositionLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a base class that defines a set of common properties and behaviors for WebXR layer types. It is not constructable on its own.

Several layer types inherit from `XRCompositionLayer`:

- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
- {{domxref("XRQuadLayer")}}

`XRCompositionLayer` itself inherits from the general {{domxref("XRLayer")}} class (which inherits from {{domxref("EventTarget")}}).

{{InheritanceDiagram}}

## Instance properties

- {{domxref("XRCompositionLayer.blendTextureSourceAlpha")}} {{Experimental_Inline}}
  - : A boolean enabling the layer's texture alpha channel.
- {{domxref("XRCompositionLayer.layout")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The layout type of the layer.
- {{domxref("XRCompositionLayer.mipLevels")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The number of mip levels in the color and texture data for the layer.
- {{domxref("XRCompositionLayer.needsRedraw")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean signaling that the layer should be re-rendered in the next frame.

## Instance methods

_Inherits methods from its parent, {{domxref("EventTarget")}}_.

- {{domxref("XRCompositionLayer.destroy()")}} {{Experimental_Inline}}
  - : Deletes the underlying layer attachments.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
- {{domxref("XRQuadLayer")}}
