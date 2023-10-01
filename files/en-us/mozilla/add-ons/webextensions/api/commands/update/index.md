---
title: commands.update()
slug: Mozilla/Add-ons/WebExtensions/API/commands/update
page-type: webextension-api-function
browser-compat: webextensions.api.commands.update
---

{{AddonSidebar()}}

Change the description or keyboard shortcut for the given command.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
browser.commands.update(
  details // object
);
```

### Parameters

- `details`

  - : `object`. An object with the following properties:

    - `name`
      - : `string`. The name of the command to update. This must match the name of an existing command, as given for example in the `name` property of the {{WebExtAPIRef("commands.Command")}} object.
    - `description` {{optional_inline}}
      - : `string`. A new description to set for the command.
    - `shortcut` {{optional_inline}}

      - : `string`. A new shortcut to set for the command. This can be:

        - an empty string to clear the shortcut.
        - a string matching the format of the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) to set a new shortcut key. If the string does not match this format, the function throws an error.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the shortcut has been updated. The promise will be rejected with an error if the command could not be found.

## Browser compatibility

{{Compat}}

## Examples

Updates the command named "my-command" with the given shortcut value, when the user clicks "update":

```js
const commandName = "my-command";

function updateShortcut() {
  browser.commands.update({
    name: commandName,
    shortcut: document.querySelector("#shortcut").value,
  });
}

document.querySelector("#update").addEventListener("click", updateShortcut);
```

{{WebExtExamples}}
