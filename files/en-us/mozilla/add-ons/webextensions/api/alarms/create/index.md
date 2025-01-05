---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
page-type: webextension-api-function
browser-compat: webextensions.api.alarms.create
---

{{AddonSidebar}}

Creates a new alarm for the current browser session. An alarm may fire once or multiple times. An alarm is cleared after it fires for the last time.

## Syntax

```js-nolint
browser.alarms.create(
  name,              // optional string
  alarmInfo          // optional object
)
```

### Parameters

- `name` {{optional_inline}}

  - : `string`. A name for the alarm. Defaults to the empty string.

    This can be used to refer to a particular alarm in {{WebExtAPIRef('alarms.get()')}} and {{WebExtAPIRef('alarms.clear()')}}. It will also be available in {{WebExtAPIRef('alarms.onAlarm')}} as the `name` property of the {{WebExtAPIRef('alarms.Alarm')}} object passed into the listener function.

    Alarm names are unique within the scope of a single extension. If an alarm with an identical name exists, the existing alarm will be cleared and the alarm being created will replace it.

- `alarmInfo` {{optional_inline}}

  - : `object`. You can use this to specify when the alarm will initially fire, either as an absolute value (`when`), or as a delay from the time the alarm is set (`delayInMinutes`). To make the alarm recur, specify `periodInMinutes`.

    On Chrome, unless the extension is loaded unpackaged, alarms it creates are not allowed to fire more than once per minute. If an extension tries to set `delayInMinutes` to a value < 1, or `when` to a value < 1 minute in the future, then the alarm will fire after 1 minute. If an extension tries to set `periodInMinutes` to a value < 1, then the alarm will fire every minute.

    The `alarmInfo` object may contain the following properties:

    - `when` {{optional_inline}}
      - : `double`. The time the alarm will fire first, given as [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time). To get the number of milliseconds between the epoch and the current time, use [`Date.now()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now). If you specify `when`, don't specify `delayInMinutes`.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. The time the alarm will fire first, given as minutes from the time the alarm is set. If you specify `delayInMinutes`, don't specify `when`.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. If this is specified, the alarm will fire again every `periodInMinutes` after its initial firing. If you specify this value you may omit both `when` and `delayInMinutes`, and the alarm will then fire initially after `periodInMinutes`. If `periodInMinutes` is not specified, the alarm will only fire once.

## Examples

Create a one-time delay-based alarm with "" for the name:

```js
const delayInMinutes = 5;

browser.alarms.create({
  delayInMinutes,
});
```

Create a periodic delay-based alarm named "my-periodic-alarm":

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

Create a periodic absolute alarm named "my-periodic-alarm":

```js
const when = 1545696000;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  when,
  periodInMinutes,
});
```

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.

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
