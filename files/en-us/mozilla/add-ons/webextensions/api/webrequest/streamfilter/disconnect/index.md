---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
tags:
  - API
  - Add-ons
  - Extensions
  - StreamFilter.disconnect
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.disconnect
---
{{AddonSidebar()}}Disconnects the filter from the request. After this, the browser will continue to process the response, but no more filter events will fire, and no more filter function calls will have any effect. Note the difference between this function and {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. With `disconnect()`, the browser will continue to process any further response data, but it won't be accessible through the filter. With `close()`, the browser will ignore any response data that hasn't already been passed through to the rendering engine.

You should always call `disconnect()` or `close()` once you don't need to interact with the response any further.

You can't call this function until after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.

## Syntax

```js
filter.disconnect()
```

### Parameters

None.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

This example will prepend "preface text" to the response body. It then disconnects, so the original response body will load normally:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("preface text"));
    filter.disconnect();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}
