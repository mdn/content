---
title: contextualIdentities.getSupportedColors()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedColors
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.getSupportedColors
sidebar: addonsidebar
---

Returns the colors supported by the browser for contextual identities.

## Syntax

```js-nolint
let colors = browser.contextualIdentities.getSupportedColors()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an array of objects, one for each supported color. Each object has these properties:

- `color`
  - : `string`. The name of the color (for example, `"blue"`). This is the value used in the `color` property of {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}.
- `colorCode`
  - : `string`. A hex code for the color (for example, `"#37adff"`).

If the contextual identities feature is not enabled, the promise is rejected with an error message.

## Examples

Retrieve all supported colors and log their names and hex codes:

```js
function onGot(colors) {
  for (const { color, colorCode } of colors) {
    console.log(`${color}: ${colorCode}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.getSupportedColors().then(onGot, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
