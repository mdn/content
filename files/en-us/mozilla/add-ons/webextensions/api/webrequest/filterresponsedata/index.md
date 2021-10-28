---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - filterResponseData
  - webRequest
browser-compat: webextensions.api.webRequest.filterResponseData
---
{{AddonSidebar()}}

Use this function to create a {{WebExtAPIRef("webRequest.StreamFilter")}} object for a request. Then use the stream filter to monitor and modify the response. You'd typically call this function from a `webRequest` event listener.

Firefox uses an optimized byte cache for script requests. This optimized byte cache overrides the normal request caching. Data from this cache is not available in a form useful to extensions. If your extension needs to filter scripts, create your filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}}. Doing this ensures that the filter is created prior to the attempt to load from cache, thereby avoiding the optimized cache.

To use this API you must have the `"webRequestBlocking"` [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), as well as the normal permissions needed for the event listener (the `"webRequest"` permission and the [host permission ](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)for the host).

## Syntax

```js
var filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Parameters

- `requestId`
  - : `string`. ID of the request to filter. You can get this from the `details` object that is passed into any `webRequest` event listeners.

### Return value

A {{WebExtAPIRef("webRequest.StreamFilter")}} object that you can use to monitor and modify the response.

## Examples

This example, taken from the [http-response](https://github.com/mdn/webextensions-examples/tree/master/http-response) example extension, creates a filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}} and uses it, to modify the first chunk of the response:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = event => {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension Example');
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
```

{{WebExtExamples}}

> **Note:** that this example only works for small requests that aren't chunked or streamed. More advanced examples are documented with {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}.

## Browser compatibility

{{Compat}}
