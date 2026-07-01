---
title: "XRCompositionLayer: blendTextureSourceAlpha property"
short-title: blendTextureSourceAlpha
slug: Web/API/XRCompositionLayer/blendTextureSourceAlpha
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRCompositionLayer.blendTextureSourceAlpha
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`blendTextureSourceAlpha`** property of the {{domxref("XRCompositionLayer")}} interface is a boolean enabling the layer's texture {{Glossary("Alpha", "alpha channel")}}.

## Value

A boolean. `true` enables the alpha channel, `false` disables it.

## Examples

### Setting a layer's texture alpha channel

The following code snippet toggles a layer to opaque and back.

```js
myLayer.blendTextureSourceAlpha = !myLayer.blendTextureSourceAlpha;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Alpha", "Alpha channel")}}
