---
title: getAll()
slug: Mozilla/Add-ons/WebExtensions/API/commands/getAll
page-type: webextension-api-function
browser-compat: webextensions.api.commands.getAll
---

{{AddonSidebar}}

Gets all commands for the extension that you have registered using the [`commands` manifest.json key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands).

The commands are returned as an array of {{WebExtAPIRef('commands.Command')}} objects. Alternately, if you are using the promise-based version of the API, `browser.commands.getAll()`, the commands are passed into the `onFulfilled` argument to [`Promise.then()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getCommands = browser.commands.getAll();
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of `{{WebExtAPIRef('commands.Command')}}` objects, one for each command registered for the extension. If no commands were registered, the array will be empty.

## Examples

```js
function logCommands(commands) {
  commands.forEach((command) => {
    console.log(command);
  });
}

let getCommands = browser.commands.getAll();
getCommands.then(logCommands);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API.

## Browser compatibility

{{Compat}}
