---
title: sidebarAction.close()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - close
  - sidebarAction
browser-compat: webextensions.api.sidebarAction.close
---
{{AddonSidebar()}}

Closes the sidebar in the active window, if it is the extension's own sidebar.

You can only call this function from inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
browser.sidebarAction.close()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is resolved with no arguments.

## Browser compatibility

{{Compat}}

## Examples

Close the sidebar when the user selects a context menu item:

```js
browser.menus.create({
  id: "close-sidebar",
  title: "close sidebar",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.close();
});
```

{{WebExtExamples}}
