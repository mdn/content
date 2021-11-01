---
title: onCommand
slug: Mozilla/Add-ons/WebExtensions/API/commands/onCommand
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - commands
  - onCommand
browser-compat: webextensions.api.commands.onCommand
---
{{AddonSidebar()}}Fired when a command is executed using its associated keyboard shortcut.

The listener is passed the command's name. This matches the name given to the command in its [manifest.json entry](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

## Syntax

```js
browser.commands.onCommand.addListener(listener)
browser.commands.onCommand.removeListener(listener)
browser.commands.onCommand.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when a user enters the command's shortcut. The function will be passed the following arguments:

    - `name`
      - : `string`. Name of the command. This matches the name given to the command in its [manifest.json entry](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

## Browser compatibility

{{Compat}}

## Examples

Given a manifest.json entry like this:

```json
"commands": {
  "toggle-feature": {
    "suggested_key": {
      "default": "Ctrl+Shift+Y"
    },
    "description": "Send a 'toggle-feature' event"
  }
}
```

You could listen for this particular command like this:

```js
browser.commands.onCommand.addListener(function(command) {
  if (command == "toggle-feature") {
    console.log("toggling the feature!");
  }
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.commands`](https://developer.chrome.com/extensions/commands) API.
