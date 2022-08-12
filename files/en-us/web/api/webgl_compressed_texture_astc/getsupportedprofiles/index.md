---
title: WEBGL_compressed_texture_astc.getSupportedProfiles()
slug: Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles
page-type: webgl-extension-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
  - WebGL extensions
browser-compat: api.WEBGL_compressed_texture_astc.getSupportedProfiles
---
{{APIRef("WebGL")}}

The **`WEBGL_compressed_texture_astc.getSupportedProfiles()`**
method returns an array of strings containing the names of the ASTC profiles supported
by the implementation.

## Syntax

```js
getSupportedProfiles()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of string elements indicating which ASTC
profiles are supported by the implementation. Currently, this can be:

- "ldr": Low Dynamic Range.
- "hdr": High Dynamic Range.

Dynamic range refers to ratio between the brightest and darkest parts of the scene. Low
dynamic ranges are for example JPEG format images which won't exceed 255:1, or CRT
monitors which won't exceed 100:1. An HDR image stores pixel values that span the whole
tonal range of real-world scenes (100,000:1).

## Examples

```js
const ext = gl.getExtension('WEBGL_compressed_texture_astc');
ext.getSupportedProfiles(); // ["ldr"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WEBGL_compressed_texture_astc")}}
