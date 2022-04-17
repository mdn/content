---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - executeScript
  - scripting
browser-compat: webextensions.api.scripting.executeScript
---
{{AddonSidebar()}}

Injects a script into a target context. The script is run at `document_idle` by default.

> **Note:** This method is available in Manifest V3 or higher.

The scripts you inject are called [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let executing = browser.scripting.executeScript(
  injection,             // object
  callback               // function
)
```

### Parameters

- `injection`
  - : {{WebExtAPIRef("scripting.ScriptInjection")}}. Details of a script to inject.
- `callback`{{optional_inline}} 
  - : `function`. Invoked upon completion of the request.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with {{WebExtAPIRef("scripting.InjectionResult")}}. The array's values represent the result of the script in every injected frame.

The result of the script is the last evaluated statement, which is similar to the results that would be seen if you executed the script in the [Web Console](/en-US/docs/Tools/Web_Console) (not any `console.log()` output). For example, consider a script like this:

```js
let foo='my result'; foo;
```

Here the results array contains the string "`my result`" as an element.

The result values must be [structured clonable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) (see [Data cloning algorithm](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

If any error occurs, the promise is rejected with an error message.

## Examples

This example executes a one-line code snippet in the active tab:

```js
function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const makeItGreen = 'document.body.style.border = "5px solid green"';

const executing = browser.tabs.executeScript({
  code: makeItGreen
});
executing.then(onExecuted, onError);
```

This example executes a script from a file (packaged with the extension) called `"content-script.js"`. The script is executed in the active tab. The script is executed in subframes and the main document:

```js
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript({
  files: ["content-script.js"],
  allFrames: true
});
executing.then(onExecuted, onError);
```

This example executes a script from a file (packaged with the extension) called `"content-script.js"`. The script is executed in the tab with the ID of `2`:

```js
function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript(
  2, {
    file: "/content-script.js"
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#method-executeScript) API.