---
title: XRWebGLBinding.getReflectionCubeMap()
slug: Web/API/XRWebGLBinding/getReflectionCubeMap
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - AR
  - XR
  - WebXR
  - Experimental
browser-compat: api.XRWebGLBinding.getReflectionCubeMap
---
{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`getReflectionCubeMap()`** method of the {{domxref("XRWebGLBinding")}} interface returns a {{domxref("WebGLTexture")}} object containing a reflection cube map texture.

The texture format is specified by the session's `reflectionFormat`. See the `options` parameter on {{domxref("XRSession.requestLightProbe()")}} and {{domxref("XRSession.preferredReflectionFormat")}} for more details. By default, the `srgba8` format is used. When using a `rgba16f` format, you need to be within a WebGL 2.0 context or enable the {{domxref("OES_texture_half_float")}} extension within WebGL 1.0 contexts.

## Syntax

```js
getReflectionCubeMap(lightProbe)
```

### Parameters

- `lightProbe`
  - : An {{domxref("XRLightProbe")}} object returned by calling {{domxref("XRSession.requestLightProbe()")}}.

### Return value

A {{domxref("WebGLTexture")}} object.

## Examples

You typically call `getReflectionCubeMap()` whenever the `reflectionchange` event fires on a light probe to retrieve an updated cube map. This is less expensive than retrieving lighting information with every {{domxref("XRFrame")}}.

If the `rgba16f` format is used, enable the {{domxref("OES_texture_half_float")}} extension within WebGL 1.0 contexts.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
gl.getExtension('OES_texture_half_float'); // if rgba16f is the preferredReflectionFormat

xrSession.requestLightProbe().then((lightProbe) => {
  lightProbe.addEventListener('reflectionchange', () => {
    glBinding.getReflectionCubeMap(lightProbe);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRLightProbe")}}
- {{domxref("OES_texture_half_float")}}
