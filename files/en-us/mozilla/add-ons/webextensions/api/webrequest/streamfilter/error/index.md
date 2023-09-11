---
title: webRequest.StreamFilter.error
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/error
page-type: webextension-api-property
browser-compat: webextensions.api.webRequest.StreamFilter.error
---

{{AddonSidebar()}}

A string that will contain an error message after the {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}} event has fired.

## Browser compatibility

{{Compat}}

## Examples

This example adds an {{WebExtAPIRef("webRequest.StreamFilter.onerror", "onerror")}} listener which logs the value of `error`.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`);
  };

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
