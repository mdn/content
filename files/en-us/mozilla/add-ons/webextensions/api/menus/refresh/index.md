---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
page-type: webextension-api-function
browser-compat: webextensions.api.menus.refresh
---

{{AddonSidebar()}}

Refreshes a menu that's being shown.

Updates the extension's menu items in the menu that the browser is currently showing, including changes that have been made since the menu was shown. Has no effect if the menu is not being shown. Rebuilding a shown menu is an expensive operation, only invoke this method when necessary.

This would typically be called from inside a {{WebExtAPIRef("menus.onShown")}} event handler, after the handler has made any updates to the menu.

Firefox makes this function available via the `contextMenus` namespace as well as the `menus` namespace.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
browser.menus.refresh()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with no arguments.

## Browser compatibility

{{Compat}}

## Examples

This example listens for the context menu to be shown over a link, then updates the `openLabelledId` menu item with the link's hostname:

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabelledId, {
    title: `Open (${linkHostname})`,
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener((info) => {
  if (!info.linkUrl) {
    return;
  }
  let linkElement = document.createElement("a");
  linkElement.href = info.linkUrl;
  updateMenuItem(linkElement.hostname);
});
```

{{WebExtExamples}}
