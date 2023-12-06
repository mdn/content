---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
page-type: webextension-api-type
browser-compat: webextensions.api.extensionTypes.ImageDetails
---

{{AddonSidebar()}}

Details about the format, quality, area and scale of a captured image.

## Type

Values of this type are objects. They contain the following properties:

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. The format of the resulting image. Default is `"png"`.
- `quality` {{optional_inline}}
  - : `integer`. When format is `"jpeg"`, this controls the quality of the resulting image. It is a number between 0 and 100, which is converted to a value between 0 and 1 and then used as the `encoderOptions` argument to [`HTMLCanvasElement.toDataURL()`](/en-US/docs/Web/API/HTMLCanvasElement/toDataURL). If it is omitted, 92 is used. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease. This value is ignored for PNG images.
- `rect` {{optional_inline}}

  - : An `object` specifying the area of the document to capture, in CSS pixels, relative to the page. All properties default to `0`. The properties are:

    - `x`: The coordinate of the left side of the rectangle.
    - `y`: The coordinate of the top side of the rectangle.
    - `width`: The width of the rectangle.
    - `height`: The height of the rectangle.

    This option was introduced in Firefox 82. If omitted, the currently visible viewport is captured.

- `scale` {{optional_inline}}
  - : `number`. The scale to render at, defaults to [`devicePixelRatio`](/en-US/docs/Web/API/Window/devicePixelRatio). This option was introduced in Firefox 82.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/extensionTypes/#type-ImageDetails) API. This documentation is derived from [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) in the Chromium code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
