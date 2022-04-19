---
title: scripting.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - WebExtensions
  - removeCSS
  - scripting
browser-compat: webextensions.api.scripting.removeCSS
---
{{AddonSidebar()}}

Removes a CSS stylesheet injected by a call to {{WebExtAPIRef("scripting.insertCSS()")}}.

> **Note:** This method is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.scripting.removeCSS(
  details       // object
)
```

### Parameters

- `details`

  - : An object describing the CSS to remove and where to remove it from. It contains the following properties:

    - `css`{{optional_inline}} 
      - : `string`. A string containing the CSS to inject. Either `css` or `files` must be specified and must match the stylesheet inserted through {{WebExtAPIRef("scripting.insertCSS()")}}.
    - `files`{{optional_inline}}
      - : `string`. The path of a CSS files to inject, relative to the extension's root directory. Either `files` or `css` must be specified and must match the stylesheet inserted through {{WebExtAPIRef("scripting.insertCSS()")}}.
   - `origin`{{optional_inline}} 
      - : `string`. The style origin for the injection, either `USER` or `AUTHOR`. Defaults to `AUTHOR`. Must match the origin of the stylesheet inserted through {{WebExtAPIRef("scripting.insertCSS()")}}.
   - `target` 
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details specifying the target to remove the CSS from. 

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with no arguments when all the CSS is removed. If any error occurs, the promise fulfills with an error message. Attempts to remove non-existent stylesheets are ignored.

## Examples

This example adds some CSS using {{WebExtAPIRef("scripting.insertCSS")}}, then removes it again when the user clicks a browser action:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let insertingCSS = browser.scripting.insertCSS({
        target: { tabId: tabs[0].id },
        css: `* { background: ${cssColor} !important }`,
      });
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  let removing = browser.scripting.removeCSS({
        target: { tabId: tabs[0].id },
        css: `* { background: ${cssColor} !important }`,
      });
  removing.then(null, onError);
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#method-removeCSS) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.