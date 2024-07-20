---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
page-type: webextension-api-property
browser-compat: webextensions.api.webRequest.StreamFilter.status
---

{{AddonSidebar}}

A string that describes the current status of the request. It will be one of the following values:

- `"uninitialized"`
  - : The filter is not fully initialized. No filter functions may be called.
- `"transferringdata"`
  - : The underlying channel is currently transferring data, which will be routed to the extension in one or more {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}} events. The extension can call filter functions such as {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}, or {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}.
- `"finishedtransferringdata"`
  - : The underlying channel has finished transferring data. In this state the extension can still write response data using the filter's {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} function.
- `"suspended"`
  - : Data transfer is currently suspended. In this state the extension can resume the request by calling the filter's {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} function, and can write response data using the filter's {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} function.
- `"closed"`
  - : The extension has closed the request by calling the filter's {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} function. The filter will not fire any more events, and the extension may not call any filter functions.
- `"disconnected"`
  - : The extension has disconnected the filter from the request by calling the filter's {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} function. All further data will be delivered directly, without passing through the filter. The filter will not fire any more events, and the extension may not call any filter functions.
- `"failed"`
  - : An error has occurred and the filter has been disconnected from the request. The extension can find an error message in {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}}, and may not call any filter functions.

## Browser compatibility

{{Compat}}

## Examples

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  console.log(filter.status); // uninitialized

  filter.onstart = (event) => {
    console.log(filter.status); // transferringdata
  };

  filter.ondata = (event) => {
    console.log(filter.status); // transferringdata
    // pass through the response data
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log(filter.status); // finishedtransferringdata
    filter.disconnect();
    console.log(filter.status); // disconnected
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
