---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
page-type: webextension-api-function
browser-compat: webextensions.api.downloads.download
---

{{AddonSidebar()}}

The **`download()`** function of the {{WebExtAPIRef("downloads")}} API downloads a file, given its URL and other optional preferences.

If the URL uses the HTTP or HTTPS protocol, the request includes all the relevant cookies, that is, those cookies set for the URL's hostname, secure flag, path, and so on. The default cookies, the cookies from the normal browsing session, are used unless:

- the `incognito` option is used, then the private browsing cookies are used.
- the `cookieStoreId` option is used, then the cookies from the specified store are used.

If both `filename` and `saveAs` are specified, the Save As dialog is displayed, populated with the `filename`.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let downloading = browser.downloads.download(
  options                   // object
)
```

### Parameters

- `options`

  - : An `object` specifying what file you wish to download, and any other preferences you wish to set concerning the download. It can contain the following properties:

    - `allowHttpErrors` {{optional_inline}}

      - : A `boolean` flag that enables downloads to continue even if they encounter HTTP errors. Using this flag, for example, enables the download of server error pages. Default value `false`. When set to:

        - `false`, the download is canceled when it encounters an HTTP error.
        - `true`, the download continues when an HTTP error is encountered and the HTTP server error is not reported. However, if the download fails due to file-related, network-related, user-related, or other error, that error is reported.

    - `body` {{optional_inline}}
      - : A `string` representing the post body of the request.
    - `conflictAction` {{optional_inline}}
      - : A string representing the action you want taken if there is a filename conflict, as defined in the {{WebExtAPIRef('downloads.FilenameConflictAction')}} type (defaults to "uniquify" when it is not specified).
    - `cookieStoreId` {{optional_inline}}
      - : The cookie store ID of the [contextual identity](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) the download is associated with. If omitted, the default cookie store is used. Use requires the "cookies" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions).
    - `filename` {{optional_inline}}
      - : A `string` representing a file path relative to the default downloads directory — this provides the location where you want the file to be saved, and what filename you want to use. Absolute paths, empty paths, path components that start and/or end with a dot (.), and paths containing back-references (`../`) will cause an error. If omitted, this value will default to the filename already given to the download file, and a location immediately inside the downloads directory.
    - `headers` {{optional_inline}}
      - : If the URL uses the HTTP or HTTPS protocols, an `array` of `objects` representing additional HTTP headers to send with the request. Each header is represented as a dictionary object containing the keys `name` and either `value` or `binaryValue`. The headers that are forbidden by `XMLHttpRequest` and `fetch` cannot be specified, however, Firefox 70 and later enables the use of the `Referer` header. Attempting to use a forbidden header throws an error.
    - `incognito` {{optional_inline}}
      - : A `boolean`: if present and set to true, then associate this download with a private browsing session. This means that it will only appear in the download manager for any private windows that are currently open.
    - `method` {{optional_inline}}
      - : A `string` representing the HTTP method to use if the `url` uses the HTTP\[S] protocol. This may be either "GET" or "POST".
    - `saveAs` {{optional_inline}}

      - : A `boolean` that specifies whether to provide a file chooser dialog to allow the user to select a filename (`true`), or not (`false`).

        If this option is omitted, the browser will show the file chooser or not based on the general user preference for this behavior (in Firefox this preference is labeled "Always ask you where to save files" in about:preferences, or `browser.download.useDownloadDir` in about:config).

        > **Note:** Firefox for Android raises an error if `saveAs` is set to `true`. The parameter is ignored when `saveAs` is `false` or not included.

    - `url`
      - : A `string` representing the URL to download.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the download started successfully, the promise will be fulfilled with the `id` of the new {{WebExtAPIRef("downloads.DownloadItem")}}. Otherwise, the promise will be rejected with an error message taken from {{WebExtAPIRef("downloads.InterruptReason")}}.

If you use [URL.createObjectURL()](/en-US/docs/Web/API/URL/createObjectURL) to download data created in JavaScript and you want to revoke the object URL (with [revokeObjectURL](/en-US/docs/Web/API/URL/revokeObjectURL)) later (as it is strongly recommended), you need to do that after the download has been completed. To do so, listen to the [downloads.onChanged](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged) event.

## Browser compatibility

{{Compat}}

## Examples

The following snippet attempts to download an example file, also specifying a filename and location to save it in, and `uniquify` as the value of the `conflictAction` option.

```js
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

let downloadUrl = "https://example.org/image.png";

let downloading = browser.downloads.download({
  url: downloadUrl,
  filename: "my-image-again.png",
  conflictAction: "uniquify",
});

downloading.then(onStartedDownload, onFailed);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/downloads/#method-download) API.

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
