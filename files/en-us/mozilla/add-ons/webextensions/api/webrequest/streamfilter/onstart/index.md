---
title: webRequest.StreamFilter.onstart
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstart
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.onstart
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.onstart
---
{{AddonSidebar()}}

An event handler that will be called when the stream is opened and is about to begin delivering data. From this point on, the extension may use filter functions like {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}, or {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}.

## Browser compatibility

{{Compat}}

## Examples

This example will replace the page content with "replacement text":

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("replacement content"));
    filter.close();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
