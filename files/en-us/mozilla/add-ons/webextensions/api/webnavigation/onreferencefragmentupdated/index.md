---
title: webNavigation.onReferenceFragmentUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onReferenceFragmentUpdated
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - onReferenceFragmentUpdated
  - webNavigation
browser-compat: webextensions.api.webNavigation.onReferenceFragmentUpdated
---
{{AddonSidebar()}}Fired if the [fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier) for a page is changed. For example, if a page implements a table of contents using fragments, and the user clicks an entry in the table of contents, this event will fire. All future events for this frame will use the updated URL.

## Syntax

```js
browser.webNavigation.onReferenceFragmentUpdated.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onReferenceFragmentUpdated.removeListener(listener)
browser.webNavigation.onReferenceFragmentUpdated.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `details`
      - : [`object`](#details). Details about the navigation event.

- `filter`{{optional_inline}}
  - : `object`. An object containing a single property `url`, which is an `Array` of {{WebExtAPIRef("events.UrlFilter")}} objects. If you include this parameter, then the event will fire only for transitions to URLs which match at least one `UrlFilter` in the array. If you omit this parameter, the event will fire for all transitions.

## Additional objects

### details

- `tabId`
  - : `integer`. The ID of the tab in which the navigation is about to occur.
- `url`
  - : `string`. The URL to which the given frame will navigate.
- `processId`
  - : `integer`. The ID of the process in which this tab is being rendered.
- `frameId`
  - : `integer`. Frame in which the navigation will occur. `0` indicates that navigation happens in the tab's top-level browsing context, not in a nested {{HTMLElement("iframe")}}. A positive value indicates that navigation happens in a nested iframe. Frame IDs are unique for a given tab and process.
- `timeStamp`
  - : `number`. The time that the fragment identifier for the page was changed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `transitionType`
  - : `{{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}`. The reason for the navigation: for example, `"link"` if the user clicked a link.
- `transitionQualifiers`
  - : `Array` of {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Extra information about the navigation: for example, whether there was a server or client redirect.

## Browser compatibility

{{Compat}}

## Examples

Logs the target URLs and extra transition information for `onReferenceFragmentUpdated`, if the target URL's hostname contains "example.com" or starts with "developer".

```js
const filter = {
  url:
  [
    {hostContains: "example.com"},
    {hostPrefix: "developer"}
  ]
}

function logOnReferenceFragmentUpdated(details) {
  console.log(`onReferenceFragmentUpdated: ${details.url}`);
  console.log(`Transition type: ${details.transitionType}`);
  console.log(`Transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onReferenceFragmentUpdated.addListener(logOnReferenceFragmentUpdated, filter);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation#event-onBeforeNavigate) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.
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
