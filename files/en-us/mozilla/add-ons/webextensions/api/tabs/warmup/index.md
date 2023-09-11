---
title: tabs.warmup()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/warmup
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.warmup
---

{{AddonSidebar()}}

To optimize system resource usage, browsers may drop GPU resources associated with tabs that the user has not accessed for a certain amount of time. If a browser has done this for a tab, then reactivating the tab (for example, when the user switches to it) may take longer than it normally would.

The `tabs.warmup()` API enables an extension to start the process of rendering the resources for an inactive tab, if the extension expects that the user might switch to the tab soon. This then makes the actual tab switch faster than it would be otherwise.

Note this API does not work on discarded tabs and does not need to be called immediately prior to switching tabs. It is merely a performance improvement when the tab switch can be anticipated, such as when hovering over a button that when clicked would switch to the tab.

It is expected that this API would mostly be useful to tab management extensions.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let warming = browser.tabs.warmup(
  tabId               // integer
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab to warm up. If the argument passed here is not an integer (in particular, if it is `null` or `undefined`) then `warmup()` will throw an exception synchronously.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments if the tab identified by `tabId` is successfully warmed up. If `tabId` does not identify an open tab, or if warming up fails for some other reason, then the promise will be rejected with an error message.

## Examples

This code adds a listener to the `browserAction.onClicked` event. The listener retrieves all tabs in the current window that contain pages under "https\://developer.mozilla.org/" and warms up the first one that it finds.

```js
function onSuccess() {
  console.log("success!");
}

function onFailure(error) {
  // e.g. ID of a nonexistent tab
  console.error(error);
}

async function warmupMDN() {
  const mdnTabs = await browser.tabs.query({
    currentWindow: true,
    url: "https://developer.mozilla.org/*",
  });

  if (mdnTabs.length > 0) {
    const warming = browser.tabs.warmup(mdnTabs[0].id);
    warming.then(onSuccess, onFailure);
  }
}

browser.browserAction.onClicked.addListener(warmupMDN);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
