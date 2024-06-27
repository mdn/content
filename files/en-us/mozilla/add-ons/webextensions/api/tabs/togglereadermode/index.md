---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
page-type: webextension-api-function
browser-compat: webextensions.api.tabs.toggleReaderMode
---

{{AddonSidebar}}

Toggles Reader Mode for the given tab.

This function toggles Reader Mode for the given tab. It takes a tab ID as a parameter: if this is omitted, the currently active tab is toggled.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Reader Mode, also known as Reader View, is a browser feature that makes it easier for the user to focus on an article by:

- hiding non-essential page elements like sidebars, footers, and ads
- changing the page's text size, contrast and layout for better readability.

Reader Mode is useful specifically for articles: meaning, pages that have a body of text content as their main feature. Pages that don't have an identifiable article are not eligible for display in Reader Mode. To find out whether a page is an article, check the `isArticle` property of {{WebExtAPIRef("tabs.Tab")}}.

To find out whether a tab is already in Reader Mode, check the `isInReaderMode` property of {{WebExtAPIRef("tabs.Tab")}}. To track tabs changing into or out of Reader Mode, you'll need to keep track of the current state of all tabs, and check when `isInReaderMode` changes:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

## Syntax

```js-nolint
let toggling = browser.tabs.toggleReaderMode(
  tabId            // optional integer
)
```

### Parameters

- `tabId` {{optional_inline}}
  - : `integer`. The ID of the tab to display in Reader Mode. Defaults to the selected tab of the current window.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the tab has been updated. If any error occurs (for example, because the page was not an article), the promise will be rejected with an error message.

## Examples

This code switches every new page into Reader Mode, if that page is eligible for it:

```js
function switchToReaderMode(tabId, changeInfo, tabInfo) {
  if (changeInfo.isArticle) {
    browser.tabs.toggleReaderMode(tabId);
  }
}

browser.tabs.onUpdated.addListener(switchToReaderMode);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
