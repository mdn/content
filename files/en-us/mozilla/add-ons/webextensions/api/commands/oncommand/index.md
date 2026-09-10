---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
page-type: webextension-api-event
browser-compat: webextensions.api.commands.onCommand
sidebar: addonsidebar
---

Fired when a command is executed using its associated keyboard shortcut.

The event passes the listener the command's name. This name matches the name given to the command in its [manifest.json entry](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

## Syntax

```js-nolint
browser.commands.onCommand.addListener(listener)
browser.commands.onCommand.removeListener(listener)
browser.commands.onCommand.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when a user enters the command's shortcut. The function is passed these arguments:
    - `name`
      - : `string`. Name of the command. This name matches the name given to the command in its [manifest.json entry](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. The tab that was active when the command shortcut was entered.

## Examples

Given a manifest.json entry like this:

```json
"commands": {
  "duplicate-tab": {
    "suggested_key": {
      "default": "Ctrl+Shift+D"
    },
    "description": "Duplicate the active tab"
  }
}
```

You can listen for this command and use the `tab` passed to the listener to duplicate the active tab, like this:

```js
browser.commands.onCommand.addListener((command, tab) => {
  if (command === "duplicate-tab") {
    browser.tabs.duplicate(tab.id);
  }
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.
