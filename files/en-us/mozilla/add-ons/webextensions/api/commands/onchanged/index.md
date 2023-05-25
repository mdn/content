---
title: onChanged
slug: Mozilla/Add-ons/WebExtensions/API/commands/onChanged
page-type: webextension-api-event
browser-compat: webextensions.api.commands.onChanged
---

{{AddonSidebar()}}

Fired when the keyboard shortcut for a command is changed.

The listener is passed the command's name. This matches the name given to the command in its [manifest.json entry](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

## Syntax

```js-nolint
browser.commands.onChanged.addListener(listener)
browser.commands.onChanged.removeListener(listener)
browser.commands.onChanged.hasListener(listener)
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

  - : Function that is called when a command's shortcut changes. The function is passed these:

    - `name`
      - : `string`. Name of the command. This matches the name given to the command in its [manifest.json entry](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).
    - `newShortcut`
      - : `string`. The new active shortcut for this command, or blank if no shortcut is active.
    - `oldShortcut`
      - : `string`. The shortcut that was active for this command, or blank if no shortcut was active.

## Browser compatibility

{{Compat}}

## Examples

You could log changes to command shortcuts like this:

```js
function handleChanged(name, newShortcut, oldShortcut) {
  console.log(`Shortcut for: ${name} changed`);
  console.log(`From: ${oldShortcut}`);
  console.log(`To: ${newShortcut}`);
}

function handleClick() {
  browser.commands.onChanged.addListener(handleChanged);
}
```

{{WebExtExamples}}
