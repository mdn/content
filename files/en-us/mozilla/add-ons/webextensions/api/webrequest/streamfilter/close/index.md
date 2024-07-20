---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
page-type: webextension-api-function
browser-compat: webextensions.api.webRequest.StreamFilter.close
---

{{AddonSidebar}}

Closes the request. After this is called, no further response data will be passed to the browser's rendering engine and no more filter events will be given to the extension.

Note the difference between this function and {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. With `disconnect()`, the browser will continue to process any further response data, but it won't be accessible through the filter. With `close()`, the browser will ignore any response data that hasn't already been passed through to the rendering engine.

You should always call `close()` or `disconnect()` once you don't need to interact with the response any further.

You can't call this function until after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.

## Syntax

```js-nolint
filter.close()
```

### Parameters

None.

### Return value

None.

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
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
