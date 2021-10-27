---
title: tabs.print()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/print
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - print
  - tabs
browser-compat: webextensions.api.tabs.print
---
{{AddonSidebar()}}

Call this function to print the contents of the active tab. If this function is called, the user will be presented with the print dialog from the underlying platform, and will have the chance to change the print settings and then print the currently active tab.

## Syntax

```js
browser.tabs.print()
```

### Parameters

None.

### Return value

None.

## Examples

In this example a background script listens for a click on a [browser action](/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2), then tries to print the currently active tab:

```js
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.print();
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
