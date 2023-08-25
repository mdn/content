---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
page-type: webextension-api-function
browser-compat: webextensions.api.webRequest.StreamFilter.resume
---

{{AddonSidebar()}}

Resumes a request that was previously suspended through a call to {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}}.

You can't call this function until after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.

## Syntax

```js-nolint
StreamFilter.resume()
```

### Parameters

None.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

This example uses suspend/resume to delay a web request.

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    filter.suspend();

    setTimeout(() => {
      filter.resume();
      filter.disconnect();
    }, 1000);
  };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
