---
title: "XRProjectionLayer: textureArrayLength property"
short-title: textureArrayLength
slug: Web/API/XRProjectionLayer/textureArrayLength
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRProjectionLayer.textureArrayLength
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The read-only **`textureArrayLength`** property of the {{domxref("XRProjectionLayer")}} interface indicates layer's layer count for array textures when using `texture-array` as the `textureType`.

The projection layer's layer count for array textures is determined by the user agent or the device. It is reported in the {{domxref("XRSubImage")}}, which can only be accessed inside the frame loop. If you want to manage your own depth buffers and don't want to wait for first frame after layer creation to determine the required dimensions for those buffers, the `textureArrayLength` property allows access to layer count for array textures outside the frame loop. Allocation of these buffers can happen directly after layer creation.

## Value

A number indicating the number of layers of the color textures when using `texture-array` as the `textureType`. Otherwise it will be `1`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSubImage")}}
