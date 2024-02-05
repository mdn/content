---
title: contextualIdentities.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved
page-type: webextension-api-event
browser-compat: webextensions.api.contextualIdentities.onRemoved
---

{{AddonSidebar}}

Fired when a new contextual identity is removed. Contextual identities may be removed by extensions using the `contextualIdentities` API, or directly by the user, using the browser's user interface.

## Syntax

```js-nolint
browser.contextualIdentities.onRemoved.addListener(listener)
browser.contextualIdentities.onRemoved.removeListener(listener)
browser.contextualIdentities.onRemoved.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `changeInfo`
      - : `object`. An object that contains a single property, `contextualIdentity`, which is a {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} object representing the identity that was removed.

## Browser compatibility

{{Compat}}

## Examples

```js
function handleRemoved(changeInfo) {
  console.log(`Removed: ${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

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
