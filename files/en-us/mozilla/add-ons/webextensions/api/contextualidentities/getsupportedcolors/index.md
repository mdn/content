---
title: contextualIdentities.getSupportedColors()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedColors
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.getSupportedColors
sidebar: addonsidebar
---

Returns the colors supported by the browser for contextual identities.

For Firefox 153 and later, use this method instead of hardcoding color names in your extension. While the supported colors were stable from the introduction of contextual identities, Firefox 153 renamed two colors and introduced a new one (to align with an update to the Firefox UI). Querying the method ensures your extension remains compatible with any changes.

These colors are supported in Firefox 152 and earlier:

- `"blue"`
- `"green"`
- `"orange"`
- `"pink"`
- `"purple"`
- `"red"`
- `"toolbar"` (Renamed `"gray"` in Firefox 153)
- `"turquoise"` (Renamed `"cyan"` in Firefox 153)
- `"yellow"`

These colors are supported in Firefox 153 and later:

- `"blue"`
- `"cyan"` (new in Firefox 153)
- `"gray"` (new in Firefox 153)
- `"green"`
- `"orange"`
- `"pink"`
- `"purple"`
- `"red"`
- `"violet"` (new in Firefox 153)
- `"yellow"`

The legacy values `"turquoise"` and `"toolbar"` are accepted and resolve to `"cyan"` and `"gray"` respectively.

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
