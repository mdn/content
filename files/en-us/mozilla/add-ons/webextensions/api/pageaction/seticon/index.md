---
title: pageAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setIcon
page-type: webextension-api-function
browser-compat: webextensions.api.pageAction.setIcon
---

{{AddonSidebar()}}

Sets the icon for the page action.

You can specify a single icon as either the path to an image file or a {{WebExtAPIRef('pageAction.ImageDataType')}} object.

You can specify multiple icons in different sizes by supplying a dictionary containing multiple paths or `ImageData` objects. This means the icon doesn't have to be scaled for a device with a different pixel density.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let settingIcon = browser.pageAction.setIcon(
  details         // object
)
```

### Parameters

- `details`

  - : `object`. An object containing either `imageData` or `path` properties, and a `tabId` property.

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('pageAction.ImageDataType')}}` or `object`. This is either a single `ImageData` object or a dictionary object.

        Use a dictionary object to specify multiple `ImageData` objects in different sizes, so the icon does not have to be scaled for a device with a different pixel density. If `imageData` is a dictionary, the value of each property is an `ImageData` object, and its name is its size, like this:

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        The browser will choose the image to use depending on the screen's pixel density. See [Choosing icon sizes](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) for more information on this.

    - `path` {{optional_inline}}

      - : `string` or `object`. This is either a relative path to an icon file or a dictionary object.

        Use a dictionary object to specify multiple icon files in different sizes, so the icon does not have to be scaled for a device with a different pixel density. If `path` is a dictionary, the value of each property is a relative path, and its name is its size, like this:

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        The browser will choose the image to use depending on the screen's pixel density. See [Choosing icon sizes](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) for more information on this.

        If `path` is `null`, this will reset the page action's icon to the icon that was given in the [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key.

        If `path` is `""`, this will reset the icon to the browser's global default icon (that is, the icon used if no icon is given in the [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) manifest key).

        If `path` does not point to a valid icon, then no icon will be displayed.

    - `tabId`
      - : `integer`. The ID of the tab whose icon you want to set.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments once the icon has been set.

## Browser compatibility

{{Compat}}

## Examples

Set the icon for the page action when the user clicks it:

```js
browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.setIcon({
    tabId: tab.id,
    path: "icons/icon-48.png",
  });
});
```

{{WebExtExamples}}

> **Note:**
>
> This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/reference/pageAction/#method-setIcon) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.

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
