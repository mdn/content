---
title: webRequest.StreamFilter.onerror
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onerror
page-type: webextension-api-event
browser-compat: webextensions.api.webRequest.StreamFilter.onerror
---

{{AddonSidebar()}}

An event handler that will be called when an error occurs. This is most often because an invalid request ID was passed into {{WebExtAPIRef("webRequest.filterResponseData()")}}.

After this event is fired, the {{WebExtAPIRef("webRequest.StreamFilter.error")}} property will contain a message giving more information about the error.

Note that this event is **not** triggered for network errors.

## Browser compatibility

{{Compat}}

## Examples

This example adds an `onerror` listener which logs the value of {{WebExtAPIRef("webRequest.StreamFilter.error")}}.

```js
function listener(details) {
  // This example seems not useful because,
  // an extension would use "details.requestId"
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"],
);
```

This example uses no `"blocking"`.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onerror = (event) => {
    console.log(`Error: ${filter.error}`); // Error: Invalid request ID
  };
}

browser.webRequest.onBeforeRequest.addListener(listener, {
  urls: ["<all_urls>"],
  types: ["main_frame"],
});
```

{{WebExtExamples}}
