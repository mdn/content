---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - hide
  - tabs
browser-compat: webextensions.api.tabs.hide
---
{{AddonSidebar()}}

Hides one or more tabs.

Hidden tabs are no longer visible in the browser's tabstrip. Hidden tabs are not automatically [discarded](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): the code running in them continues to run. You can explicitly discard tabs whenever you hide them: although this is not appropriate in all situations, it will help to reduce the resources used by the browser.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Not all tabs are eligible for being hidden:

- Tabs that are pinned cannot be hidden.
- Tabs that are sharing the screen, microphone or camera cannot be hidden.
- The current active tab cannot be hidden.
- Tabs that are in the process of being closed cannot be hidden.

The first time an extension hides a tab, the browser will tell the user that the tab is being hidden, show them how they can access the hidden tab, and give them the option of disabling the extension instead.

To use this API you must have the "tabHide" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js
let hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Parameters

- `tabIds`

  - : `integer` or `array` of `integer`. The IDs of the tab or tabs to hide.

    If any of these tabs are not eligible for being hidden, they will not be hidden, but the call will still succeed and eligible tabs will still be hidden. For example, if you pass `[1, 3]`, and `1` identifies the active tab, then only `3` will be hidden.

    However, if any of the tab IDs are invalid, the call will fail and no tabs will be hidden.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array containing the IDs of the tabs that were hidden. If any error occurs, the promise will be rejected with an error message.

## Examples

Hide a single tab:

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide(2).then(onHidden, onError);
```

Hide multiple tabs:

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide([15, 14, 1]).then(onHidden, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
