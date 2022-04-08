---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - updateContentScripts
  - scripting
browser-compat: webextensions.api.scripting.updateContentScripts
---
{{AddonSidebar()}}

Updates registered content scripts. If there are errors during script parsing and file validation, or if the IDs specified do not exist, no scripts are updated.

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Syntax

```js
let removing = browser.scripting.updateContentScripts(
  scripts,         // object
  callback         // function
)
```

### Parameters

- `scripts`

  - : An object with these properties:  

    - `script`
      - : {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Details of a script to update.
    - `persistAcrossSessions`
      - : `boolean`. Whether the content script persists into future sessions. 
- `callback`{{optional_inline}} 
  - : `function`. Invoked upon completion of the request.

### Return value

Return an array of {{WebExtAPIRef("scripting.RegisteredContentScript")}}.

Returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) when the callback parameter is not specified. If any error occurs, the promise is rejected with an error message.

## Examples

This example updates a script file called `script.js`:

```js
const aScript = {
  id: "a-script",
  js: ["script.js"],
  matches: ["<all_urls>"],
  };

await browser.scripting.updateContentScripts([aScript]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting/#method-updateContentScripts) API. This documentation is derived from [`scripting.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/scripting.json) in the Chromium code.
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
