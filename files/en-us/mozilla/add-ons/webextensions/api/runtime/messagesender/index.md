---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
page-type: webextension-api-type
browser-compat: webextensions.api.runtime.MessageSender
---

{{AddonSidebar}}

An object containing information about the sender of a message or connection request that is passed to the {{WebExtAPIRef("runtime.onMessage()")}} listener.

It is also a property of {{WebExtAPIRef("runtime.Port")}}, but only in the `Port` instance passed into the {{WebExtAPIRef("runtime.onConnect()")}} or {{WebExtAPIRef("runtime.onConnectExternal()")}} listeners.

## Type

Values of this type are objects. They contain the following properties:

- `documentId` {{optional_inline}}
  - : `string`. A UUID of the document that opened the connection.
- `documentLifecycle` {{optional_inline}}
  - : `string`. The lifecycle state the document that opened the connection was in when the port was created. Note that the lifecycle state of the document may have changed since the port was created.
- `frameId` {{optional_inline}}
  - : `integer`. The frame that opened the connection. Zero for top-level frames, positive for child frames. This is only set when `tab` is set.
- `id` {{optional_inline}}
  - : `string`. The ID of the extension that sent the message, if the message was sent by an extension. If the sender has an ID explicitly set using the [browser_specific_settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) key in manifest.json, then `id` has this value. Otherwise, it has the ID that was generated for the sender.
- `origin` {{optional_inline}}
  - : `string`. The origin of the page or frame that opened the connection. It can differ from the `url` property (e.g., about:blank) or be opaque (e.g., sandboxed iframes). This is useful for identifying if the origin can be trusted if it isn't apparent from the URL.
- `tab` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. The {{WebExtAPIRef('tabs.Tab')}} which opened the connection. This property is only present when the connection was opened from a tab (including content scripts).
- `tlsChannelId` {{optional_inline}}
  - : `string`. The TLS channel ID of the page or frame that opened the connection, if requested by the extension and available.
- `url` {{optional_inline}}

  - : `string`. The URL of the page or frame hosting the script that sent the message.

    If the sender is a script running in an extension page (such as a [background page](/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts), an [options page](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages), or a [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) or [page action](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) popup), the URL is in the form `"moz-extension://<extension-internal-id>/path/to/page.html"`. If the sender is a background script and you haven't included a background page, it is `"moz-extension://<extension-internal-id>/_generated_background_page.html"`.

    If the sender is a script running in a web page (including content and normal page scripts), then `url` is the web page URL. If the script is running in an iframe, `url` is the iframe's URL.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

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
