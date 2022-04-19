---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - insertCSS
  - scripting
browser-compat: webextensions.api.scripting.insertCSS
---
{{AddonSidebar()}}

Injects CSS into a page.

> **Note:** This method is available in Manifest V3 or higher.

To use this API you must have the `"scripting"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and permission for the page's URL, either explicitly as a [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or using the [activeTab permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

You can only inject CSS into pages whose URL can be expressed using a [match pattern](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns): meaning, its scheme must be one of "http", "https", or "file". This means that you can't inject CSS into any of the browser's built-in pages, such as about:debugging, about:addons, or the page that opens when you open a new empty tab.

> **Note:** Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.

The inserted CSS can be removed by calling {{WebExtAPIRef("scripting.removeCSS()")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let inserting = browser.scripting.insertCSS(
  details     // object
)
```

### Parameters

- `details`

  - : An object describing the CSS to insert and where to insert it. It contains the following properties:

    - `css`{{optional_inline}} 
      - : `string`. A string containing the CSS to inject. Either `css` or `files` must be specified. 
    - `files`{{optional_inline}}
      - : `string`. The path of a CSS files to inject, relative to the extension's root directory. Either `files` or `css` must be specified. 
    - `origin`{{optional_inline}} 
      - : `string`. The style origin for the injection, either `USER` or `AUTHOR`. Defaults to `AUTHOR`. 
    - `target` 
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details specifying the target to inject the CSS into. 

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with no arguments when all the CSS is inserted. If any error occurs, the promise fulfills with an error message.

## Examples

This example inserts CSS taken from a string into the active tab.

```js
browser.browserAction.onClicked.addListener(() => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.scripting.insertCSS({
        target: { tabId: tabs[0].id },
        css: `* body { border: 20px dotted pink; }`,
      });
  insertingCSS.then(null, onError);
});
```

This example inserts CSS loaded from a file packaged with the extension. The CSS is inserted into the tab whose ID is 2:

```js
browser.action.onClicked.addListener(tab => {

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.scripting.insertCSS({
        target: { tabId: tabs[0].id },
        file: "content-style.css",
      });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-insertCSS) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.