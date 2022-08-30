---
title: webRequest.StreamFilter.onstop
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onstop
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.onstop
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.onstop
---
{{AddonSidebar()}}

An event handler that will be called when the stream has no more data to deliver. In the event handler you can still call filter functions such as {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}, or {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}.

## Browser compatibility

{{Compat}}

## Examples

This example will append "extra stuff" to the response:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  filter.ondata = (event) => {
    // pass through all the response data
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    filter.write(encoder.encode("extra stuff"));
    filter.disconnect();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"]
);
```

Here's another version of the example above:

```js
function listener(details) {
  const filter = browser.webRequest.filterResponseData(details.requestId);
  const encoder = new TextEncoder();

  const data = [];
  filter.ondata = (event) => {
    data.push(event.data);
  };

  filter.onstop = (event) => {
    for (const buffer of data) {
      filter.write(buffer);
    }
    filter.write(encoder.encode("extra stuff"));
    filter.close();
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/"], types: ["main_frame"] },
  ["blocking"]
);
```

{{WebExtExamples}}
