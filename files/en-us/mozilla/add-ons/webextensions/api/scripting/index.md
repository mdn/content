---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Reference
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting
---
{{AddonSidebar}}

Insert JavaScript and CSS into tabs.

> **Note:** This API is available in Manifest V3 or higher.

This API requires the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) permission and [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab into which JavaScript or CSS is injected.

Alternatively, you can get these permissions temporarily, only for the active tab and only in response to an explicit user action, by asking for the [`"activeTab"` permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

## Types

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Specifies the IDs of scripts to retrieve with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} or to unregister with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}.
- {{WebExtAPIRef("scripting.CSSInjection")}}
  - : Details of CSS to inject.
- {{WebExtAPIRef("scripting.InjectionResult")}}
  - : Details of the result of CSS or script injection.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details of an injection target for CSS.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details of a script to be registered or that is registered.
- {{WebExtAPIRef("scripting.ScriptInjection")}}
  - : Details of an injection target for a script.
    
## Functions

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Injects JavaScript code into a page.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Gets a list of continents scripts registered in a page.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Injects CSS into a page.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registers akonting script in a page.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Removes from a page CSS which was previously injected by calling {{WebExtAPIRef("tabs.insertCSS()")}}.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : update the content of a content script registration in a page.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Removes the registration of a content script from a page.
  
## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting) API. This documentation is derived from [`scripting.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/scripting.json) in the Chromium code.
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
