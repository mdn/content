---
title: BrowserSetting.onChange
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange
tags:
  - API
  - Add-ons
  - BrowserSetting
  - Event
  - Extensions
  - Privacy
  - Reference
  - WebExtensions
  - onchange
browser-compat: webextensions.api.types.BrowserSetting.onChange
---
{{AddonSidebar()}}

The `BrowserSetting.onChange` event is fired when the setting is changed.

On Firefox, it doesn't fire if the change has been made through `about:config`.

## Syntax

```js
BrowserSetting.onChange.addListener(listener)
BrowserSetting.onChange.removeListener(listener)
BrowserSetting.onChange.hasListener(listener)
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

- `callback`

  - : A callback function that will be called when this event occurs. The function will be passed the following arguments:

    - `details`

      - : An `object` containing details of the change that occurred. Its properties are as follows:

        - `value`
          - : The new value of the setting. The type of this property is determined by the particular setting.
        - `levelOfControl`
          - : `string`. This represents the way the setting is currently controlled. You can use it to check whether you can modify the setting. See [`BrowserSetting.set()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set) for details. Its value may be any of the following:<table class="fullwidth-table standard-table">
              <tbody>
                <tr>
                  <td><code>"not_controllable"</code></td>
                  <td>Extensions are not allowed to modify this setting.</td>
                </tr>
                <tr>
                  <td><code>"controlled_by_other_extensions"</code></td>
                  <td>
                    Another extension that was installed after this one has modified this
                    setting.
                  </td>
                </tr>
                <tr>
                  <td><code>"controllable_by_this_extension"</code></td>
                  <td>This extension is allowed to modify the setting.</td>
                </tr>
                <tr>
                  <td><code>controlled_by_this_extension"</code></td>
                  <td>This extension has already modified the setting.</td>
                </tr>
              </tbody>
            </table>

## Browser compatibility

{{Compat}}

## Examples

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/types/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
