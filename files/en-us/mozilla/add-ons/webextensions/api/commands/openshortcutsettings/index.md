---
title: openShortcutSettings()
slug: Mozilla/Add-ons/WebExtensions/API/commands/openShortcutSettings
page-type: webextension-api-function
browser-compat: webextensions.api.commands.openShortcutSettings
---

{{AddonSidebar}}

Opens the Manage Extension Shortcuts page of Manage Your Extensions (`about:addons`) and, if the extension has shortcuts, scrolls to and highlights the extension's shortcut key options.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let openedShortcutSettings = await browser.commands.openShortcutSettings();
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the Manage Extension Shortcuts page is opened. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
