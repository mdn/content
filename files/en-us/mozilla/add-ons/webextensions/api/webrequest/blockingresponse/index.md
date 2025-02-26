---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
page-type: webextension-api-type
browser-compat: webextensions.api.webRequest.BlockingResponse
---

{{AddonSidebar}}

An object of this type is returned by event listeners that have set `"blocking"` in their `extraInfoSpec` argument.

By setting particular properties in `BlockingResponse`, the listener can modify network requests.

Note that you can't set all this object's properties in every listener: the properties you can set are dependent on the event that triggered this listener, as detailed below.

## Type

Values of this type are objects. They contain the following properties:

- `authCredentials` {{optional_inline}}

  - : `object`. If set, the request is made using the given credentials. You can only set this property in {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}. The `authCredentials` property is an object with the following properties:

    - `username`
      - : `string`. Username to supply.
    - `password`
      - : `string`. Password to supply.

- `cancel` {{optional_inline}}
  - : `boolean`. If `true`, the request is cancelled. You can only set this property in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}, and {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}.
- `redirectUrl` {{optional_inline}}

  - : `string`. This is a URL, and if set, the original request is redirected to that URL. You can only set this property in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} or {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}.

    Redirections to non-HTTP schemes such as `data:` are allowed. Redirects use the same request method as the original request unless initiated from `onHeadersReceived` stage, in which case the redirect uses the GET method.

    If an extension wants to redirect a public (e.g. HTTPS) URL to an [extension page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), the extension's manifest.json file must contain a [web_accessible_resources](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) key that lists the URL for the extension page.

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. This is an {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}} object, an array in which each object represents a header. If set, the request is made with these headers rather than the original headers. You can only set this property in {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}.
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. This is an {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}} object, an array in which each object represents a header. If set, the server is assumed to have responded with these response headers instead of the originals. You can only set this property in {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}. If multiple extensions attempt to set the same header (for example, `Content-Security-Policy`), only one of the changes will be successful.
- `upgradeToSecure` {{optional_inline}}
  - : `boolean`. If set to `true` and the original request is an HTTP request, this will prevent the original request from being sent and instead make a secure (HTTPS) request. If any extension returns `redirectUrl` in `onBeforeRequest`, then `upgradeToSecure` will be ignored for that request. You can only set this property in {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#type-BlockingResponse) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.

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
