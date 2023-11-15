---
title: commands.reset()
slug: Mozilla/Add-ons/WebExtensions/API/commands/reset
page-type: webextension-api-function
browser-compat: webextensions.api.commands.reset
---

{{AddonSidebar()}}

Resets the given command's description and keyboard shortcut to the values given in the extension's [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

This effectively undoes any changes made to the command using the {{WEbExtAPIRef("commands.update()")}} function.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
browser.commands.reset(
  name // string
);
```

### Parameters

- `name`
  - : `string`. Name of the command to reset, as given by the `name` property of the {{WebExtAPIRef("commands.Command")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when the shortcut has been reset.

## Browser compatibility

{{Compat}}

## Examples

Resets the command named "my-command" when the user clicks the "reset" button:

```js
const commandName = "my-command";

function resetShortcut() {
  browser.commands.reset(commandName);
}

document.querySelector("#reset").addEventListener("click", resetShortcut);
```

{{WebExtExamples}}
