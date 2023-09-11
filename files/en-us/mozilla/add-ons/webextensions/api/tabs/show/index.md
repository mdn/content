---
title: tabs.show()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/show
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.show
---

{{AddonSidebar()}}

Shows one or more tabs that were previously hidden by a call to {{WebExtAPIRef("tabs.hide")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let showing = browser.tabs.show(
  tabIds          // integer or integer array
)
```

### Parameters

- `tabIds`
  - : `integer` or `array` of `integer`. The IDs of the tab or tabs to show.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments. If any error occurs, the promise will be rejected with an error message.

## Examples

Show a single tab:

```js
function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show(2).then(onShown, onError);
```

Show multiple tabs:

```js
function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show([15, 14, 1]).then(onShown, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
