---
title: declarativeNetRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType
page-type: webextension-api-type
browser-compat: webextensions.api.declarativeNetRequest.ResourceType
---

{{AddonSidebar}}

The resource type of a request. Comparable to {{WebExtAPIRef('webRequest.ResourceType')}}.

## Type

Values of this type are strings. Possible values are:

- `beacon`
  - : Requests sent through the [Beacon API](/en-US/docs/Web/API/Beacon_API).
- `csp_report`
  - : Requests sent to the {{CSP("report-uri")}} given in the {{HTTPHeader("Content-Security-Policy")}} header, when an attempt to violate the policy is detected.
- `font`
  - : Web fonts loaded for a {{cssxref("@font-face")}} CSS rule.
- `image`
  - : Resources loaded to be rendered as image, except for `imageset` on browsers that support that type (see browser compatibility below).
- `imageset`
  - : Images loaded by a {{HTMLElement("picture")}} element or given in an `<img>` element's [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute.
- `main_frame`
  - : Top-level documents loaded into a tab.
- `media`
  - : Resources loaded by a {{HTMLElement("video")}} or {{HTMLElement("audio")}} element.
- `object`

  - : Resources loaded by an {{HTMLElement("object")}} or {{HTMLElement("embed")}} element.

    Browsers that don't have a dedicated `object_subrequest` type (see browser compatibility below), also label subsequent requests sent by the plugin as `object`.

- `object_subrequest`
  - : Requests sent by plugins.
- `ping`

  - : Requests sent to the URL given in a hyperlink's [`ping`](/en-US/docs/Web/HTML/Element/a#ping) attribute, when the hyperlink is followed.

    Browsers that don't have a dedicated `beacon` type (see browser compatibility below), also label requests sent through the Beacon API as `ping`.

- `script`
  - : Code that is loaded to be executed by a {{HTMLElement("script")}} element or running in a [Worker](/en-US/docs/Web/API/Web_Workers_API).
- `speculative`
  - : In a speculative connection, the browser has determined that a request to a URI may be coming soon, so it starts a TCP and/or TLS handshake immediately, so it is ready more quickly when the resource is actually requested. Note that this type of connection does not provide valid tab information, so request details such as `tabId`, `frameId`, `parentFrameId`, etc. are inaccurate.
- `stylesheet`
  - : [CSS](/en-US/docs/Web/CSS) stylesheets loaded to describe the representation of a document.
- `sub_frame`
  - : Documents loaded into an {{HTMLElement("iframe")}} or {{HTMLElement("frame")}} element.
- `web_manifest`
  - : [Web App Manifests](/en-US/docs/Web/Manifest) loaded for websites that can be installed to the homescreen.
- `webbundle`
  - : Requests initiating a connection to a server through a Web Bundle or [packaged website](https://github.com/WICG/webpackage).
- `websocket`
  - : Requests initiating a connection to a server through the [WebSocket API](/en-US/docs/Web/API/WebSockets_API).
- `webtransport`
  - : Requests initiating a connection to a server through the [WebTransport API](/en-US/docs/Web/API/WebTransport_API).
- `xml_dtd`
  - : [DTDs](/en-US/docs/Glossary/Doctype) loaded for an XML document.
- `xmlhttprequest`
  - : Requests sent by an {{domxref("XMLHttpRequest")}} object or through the [Fetch API](/en-US/docs/Web/API/Fetch_API).
- `xslt`
  - : [XSLT](/en-US/docs/Web/XML/XSLT) stylesheets loaded for transforming an XML document.
- `other`
  - : Resources that aren't covered by any other available type.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

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
