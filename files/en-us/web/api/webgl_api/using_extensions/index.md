---
title: Using WebGL extensions
slug: Web/API/WebGL_API/Using_Extensions
tags:
  - Advanced
  - WebGL
---
{{WebGLSidebar}}

WebGL, like its sister APIs (OpenGL and OpenGL ES), supports extensions. A complete list of extensions is available in the [khronos webgl extension registry](http://www.khronos.org/registry/webgl/extensions/).

> **Note:** In WebGL, unlike in other GL APIs, extensions are only available if explicitly requested.

## Canonical extension names, vendor prefixes and preferences

Extensions may be supported by browser vendors before being officially ratified (but only when they are in draft stage). In that case, their name can be prefixed by the vendor prefix (`MOZ_`, `WEBKIT_`, etc.) or the extension is only available once a browser preference has been toggled.

If you wish to work with the bleeding edge of extensions, and want to keep working on upon ratification (assuming, of course, that the extension doesn't change in incompatible ways), that you query the canonical extension name as well as the vendor extension name. For instance:

```js
var ext = (
  gl.getExtension('OES_vertex_array_object') ||
  gl.getExtension('MOZ_OES_vertex_array_object') ||
  gl.getExtension('WEBKIT_OES_vertex_array_object')
);
```

Note that, vendor prefix have been discouraged more and more and thus most browser implement experimental extensions behind a feature flag rather than vendor prefix.

The feature flags are:

- `webgl.enable-draft-extensions` in Firefox
- `chrome://flags/#enable-webgl-draft-extensions` in Chromium based browsers (Chrome, Opera).

## Naming conventions

WebGL extensions are prefixed with "ANGLE", "OES", "EXT" or "WEBGL". These prefixes reflect origin and intent:

- `ANGLE_`: Extensions that are written by the [ANGLE library](https://en.wikipedia.org/wiki/ANGLE_%28software%29) authors.
- `OES_` and `KHR_`: Extensions that mirror functionality from OpenGL ES (OES) or OpenGL API extensions approved by the respective architecture review boards (Khronos).
- `OVR_`: Extensions that optimize for virtual reality.
- `EXT_`: Extensions that mirror other OpenGL ES or OpenGL API extensions.
- `WEBGL_`: Extensions that are WebGL-specific and intended to be compatible with multiple web browsers. It should also be used for extensions which originated with the OpenGL ES or OpenGL APIs, but whose behavior has been significantly altered.

## Querying available extensions

The WebGL context supports querying what extensions are available.

```js
var available_extensions = gl.getSupportedExtensions();
```

The {{domxref("WebGLRenderingContext.getSupportedExtensions()")}} method returns an array of strings, one for each supported extension.

## Extension list

The current extensions are:

{{page("en-US/docs/Web/API/WebGL_API", "Extensions")}}

## Enabling an extension

Before an extension can be used it has to be enabled using {{domxref("WebGLRenderingContext.getExtension()")}}. For example:

```js
var float_texture_ext = gl.getExtension('OES_texture_float');
```

The return value is `null` if the extension is not supported, or an extension object otherwise.

## Extension objects

If an extension defines specific symbols or functions that are not available in the core specification of WebGL, they will be available on the extension object returned by the call to `gl.getExtension()`.

## See also

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](http://webglreport.com)
- [webglstats.com](http://webglstats.com)
