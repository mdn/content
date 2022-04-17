---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
tags:
  - API
  - Add-ons
  - Extensions
  - RegisteredContentScript
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting.RegisteredContentScript
---
{{AddonSidebar()}}

This object contains details of a script to be registered or that is registered.

## Type

Values of this type are objects. They contain these properties:

- `allFrames`{{optional_inline}}
  - : `boolean`. If specified `true`, the script is inject into all frames, even if the frame is not the top-most frame in the tab. Each frame is checked independently for URL requirements; it does not inject into child frames if the URL requirements are not met. Defaults to `false`, meaning that only the top frame is matched.
- `excludeMatches`{{optional_inline}}
  - : `string`. Array of pages that this content script is excluded from but would otherwise be injected into.
- `id`
  - : `string`. The ID of the content script, specified in the API call.
- `js`{{optional_inline}}
  - : {{WebExtAPIRef("manifest.ExtensionURL")}}. Array of the JavaScript files to be injected into matching pages. Scrips are injected in the order they appear in this array.
- `matches`{{optional_inline}}
  - : `string`. Array of the pages this content script is injected into. Must be specified for {{WebExtAPIRef("scripting.registerContentScripts()")}}.
- `runAt`{{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Specifies when JavaScript files are injected into the web page. The default value is `document_idle`.
- `persistAcrossSessions`{{optional_inline}}
  - : `boolean`. Specifies if this content script persists into future sessions. Defaults to `false`. This is NOT supported.
- `css`{{optional_inline}}
  - : {{WebExtAPIRef("manifest.ExtensionURL")}}. The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#type-RegisteredContentScript) API. This documentation is derived from [`scripting.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/scripting.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
