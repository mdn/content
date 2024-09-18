---
title: webRequest.filterResponseData()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData
page-type: webextension-api-function
browser-compat: webextensions.api.webRequest.filterResponseData
---

{{AddonSidebar}}

Use this function to create a {{WebExtAPIRef("webRequest.StreamFilter")}} object for a request. The stream filter gives the web extension full control over the stream, with the ability to monitor and modify the response. It's the extension's responsibility to write and close or disconnect the stream, as the default behavior is to keep the request open without a response.

You typically call this function from a `webRequest` event listener.

Firefox uses an optimized byte cache for script requests. This optimized byte cache overrides the normal request caching. Data from this cache is not available in a form useful to extensions. If your extension needs to filter scripts, create your filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}}. Doing this ensures that the filter is created prior to the attempt to load from cache, thereby avoiding the optimized cache.

## Permissions

To use this API, you must have the `"webRequest"` and `"webRequestBlocking"` [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), and for the event listener, the [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the host. In addition:

- From Firefox 95, to use this API to intercept requests related to the loading of service worker scripts, the `"webRequestFilterResponse.serviceWorkerScript"` permission is also required.
- From Firefox 110, Manifest V3 extensions must also request the `"webRequestFilterResponse"` permission to use this API.

## Syntax

```js-nolint
let filter = browser.webRequest.filterResponseData(
  requestId       // string
)
```

### Parameters

- `requestId`
  - : `string`. ID of the request to filter. You can get this from the `details` object that is passed into any `webRequest` event listeners.

### Return value

A {{WebExtAPIRef("webRequest.StreamFilter")}} object that you can use to monitor and modify the response.

## Examples

This example shows a minimal implementation that passes through the stream data and closes the filter stream when the stream finishes receiving data. The code would be called from a {{WebExtAPIRef("webRequest")}} event listener and the event listener provides `details`.

```js
let filter = browser.webRequest.filterResponseData(details.requestId);
filter.ondata = (event) => {
  console.log(`filter.ondata received ${event.data.byteLength} bytes`);
  filter.write(event.data);
};
filter.onstop = (event) => {
  // The extension should always call filter.close() or filter.disconnect()
  // after creating the StreamFilter, otherwise the response is kept alive forever.
  // If processing of the response data is finished, use close. If any remaining
  // response data should be processed by Firefox, use disconnect.
  filter.close();
};
```

This example, taken from the [http-response](https://github.com/mdn/webextensions-examples/tree/main/http-response) example extension, creates a filter in {{WebExtAPIRef("webRequest.onBeforeRequest")}} and uses it, to modify the first chunk of the response:

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = (event) => {
    let str = decoder.decode(event.data, { stream: true });
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replaceAll("Example", "WebExtension Example");
    filter.write(encoder.encode(str));
    filter.disconnect();
  };

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.com/*"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}

> [!NOTE]
> The example above only works for small requests that aren't chunked or streamed. More advanced examples are documented with {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}.

## Browser compatibility

{{Compat}}
