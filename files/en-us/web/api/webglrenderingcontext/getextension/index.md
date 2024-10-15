---
title: "WebGLRenderingContext: getExtension() method"
short-title: getExtension()
slug: Web/API/WebGLRenderingContext/getExtension
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getExtension
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.getExtension()`** method enables a
[WebGL](/en-US/docs/Web/API/WebGL_API) extension.

## Syntax

```js-nolint
getExtension(name)
```

### Parameters

- `name`
  - : A {{jsxref("String")}} for the name of the WebGL extension to enable.

### Return value

A WebGL extension object, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if name does not match
(case-insensitive) to one of the strings in
{{domxref("WebGLRenderingContext.getSupportedExtensions")}}.

## Examples

Once a WebGL extension is enabled, you are able to use the methods, properties or
constants that this extension object provides.

```js
const canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

gl.getExtension("WEBGL_lose_context").loseContext();
```

## WebGL extensions

Extensions for the WebGL API are registered in the [WebGL Extension Registry](https://registry.khronos.org/webgl/extensions/). They are also
listed [here](/en-US/docs/Web/API/WebGL_API#extensions).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- [webglreport.com](https://webglreport.com/)
