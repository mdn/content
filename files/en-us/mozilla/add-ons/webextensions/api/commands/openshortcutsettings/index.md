---
title: openShortcutSettings()
slug: Mozilla/Add-ons/WebExtensions/API/commands/openShortcutSettings
page-type: webextension-api-function
browser-compat: webextensions.api.commands.openShortcutSettings
---

{{AddonSidebar}}

Opens the browser UI that enables users to configure an extension's keyboard shortcuts.

In Firefox, this function opens the [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) option.

Chrome doesn't support this function. In Chrome, `chrome://extensions/shortcuts` can be opened using the `tabs.create` function.

## Syntax

```js-nolint
let openedShortcutSettings = browser.commands.openShortcutSettings();
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the extension shortcut management interface opens. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
