---
title: XRCompositionLayer
slug: Web/API/XRCompositionLayer
page-type: web-api-interface
tags:
  - API
  - AR
  - Augmented Reality
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRCompositionLayer
browser-compat: api.XRCompositionLayer
---
{{securecontext_header}}{{APIRef("WebXR Device API")}}

The **`XRCompositionLayer`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a base class that defines a set of common properties and behaviors for WebXR layer types. It is not constructable on its own.

Several layer types inherit from `XRCompositionLayer`:

- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
- {{domxref("XRQuadLayer")}}

`XRCompositionLayer` itself inherits from the general {{domxref("XRLayer")}} class (which inherits from {{domxref("EventTarget")}}).

{{InheritanceDiagram}}

## Properties

- {{domxref("XRCompositionLayer.blendTextureSourceAlpha")}}
  - : A boolean enabling the layer's texture alpha channel.
- {{domxref("XRCompositionLayer.chromaticAberrationCorrection")}}
  - : A boolean enabling optical chromatic aberration correction for the layer if the device supports it, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) otherwise.
- {{domxref("XRCompositionLayer.layout")}} {{ReadOnlyInline}}
  - : The layout type of the layer.
- {{domxref("XRCompositionLayer.mipLevels")}} {{ReadOnlyInline}}
  - : The number of mip levels in the color and texture data for the layer.
- {{domxref("XRCompositionLayer.needsRedraw")}} {{ReadOnlyInline}}
  - : A boolean signaling that the layer should be re-rendered in the next frame.

## Methods

_Inherits methods from its parent, {{domxref("EventTarget")}}_.

- {{domxref("XRCompositionLayer.destroy()")}}
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
