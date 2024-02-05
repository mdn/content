---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
page-type: webextension-api-event
browser-compat: webextensions.api.declarativeNetRequest.onRuleMatchedDebug
---

{{AddonSidebar}}

Fired when a rule is matched with a request. Only available extensions with the `"declarativeNetRequestFeedback"` permission, as this is intended for debugging purposes only. See [Testing](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#testing) for details on how testing is enabled in each browser.

## Syntax

```js-nolint
browser.declarativeNetRequest.onRuleMatchedDebug.addListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.removeListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.hasListener(listener)
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

  - : The function called when this event occurs. The function is passed these arguments:

    - `request`

      - : An object containing information about the request the rule matched.
        - `documentId` {{optional_inline}}
          - : A `string`. The unique identifier for the frame's document, if this request is for a frame.
        - `documentLifecycle` {{optional_inline}}
          - : A `string`. The lifecycle of the frame's document, if this request is for a frame. Possible values are: `"prerender"`, `"active"`, `"cached"`, or `"pending_deletion"`.
        - `frameId`
          - : A `number`. The value `0` indicates that the request happens in the main frame. A positive value indicates the ID of a subframe where the request happens. If the document of a (sub-)frame is loaded (type is `main_frame` or `sub_frame`), `frameId` indicates this frame's ID, not the outer frame's ID. Frame IDs are unique within a tab.
        - `frameType` {{optional_inline}}
          - : A `string`. The type of the frame, if this request is for a frame. Possible values are: `"outermost_frame"`, `"fenced_frame"`, or `"sub_frame"`.
        - `initiator` {{optional_inline}}
          - : A `string`. The origin where the request was initiated. This does not change through redirects. The string 'null' is used if this is an opaque origin.
        - `method`
          - : A `string`. A standard HTTP method.
        - `parentDocumentId` {{optional_inline}}
          - : A `string`. The unique identifier for the frame's parent document, if this request is for a frame and has a parent.
        - `parentFrameId`
          - : A `number`. The ID of the frame that wraps the frame which sent the request. Set to `-1` if there is no parent frame.
        - `requestId`
          - : A `string`. The ID of the request. Request IDs are unique within a browser session.
        - `tabId`
          - : A `number`. The ID of the tab in which the request takes place. Set to `-1` if the request is not related to a tab.
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}. The resource type of the request.
        - `url`
          - : A `string`. The URL of the request.

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}. Details of a matched rule.

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
