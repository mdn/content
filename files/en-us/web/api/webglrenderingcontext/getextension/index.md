---
title: WebGLRenderingContext.getExtension()
slug: Web/API/WebGLRenderingContext/getExtension
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getExtension
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getExtension()`** method enables a
[WebGL](/en-US/docs/Web/API/WebGL_API) extension.

## Syntax

```js
gl.getExtension(name);
```

### Parameters

- name
  - : A {{jsxref("String")}} for the name of the WebGL extension to enable.

### Return value

A WebGL extension object, or {{jsxref("null")}} if name does not match
(case-insensitive) to one of the strings in
{{domxref("WebGLRenderingContext.getSupportedExtensions")}}.

## Examples

Once a WebGL extension is enabled, you are able to use the methods, properties or
constants that this extension object provides.

```js
var canvas = document.getElementById('canvas');
gl = canvas.getContext('webgl');

gl.getExtension('WEBGL_lose_context').loseContext();
```

## WebGL extensions

Extensions for the WebGL API are registered in the [WebGL Extension
Registry](https://www.khronos.org/registry/webgl/extensions/). The current extensions are:

{{page("en-US/docs/Web/API/WebGL_API", "Extensions")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- [webglreport.com](http://webglreport.com)
