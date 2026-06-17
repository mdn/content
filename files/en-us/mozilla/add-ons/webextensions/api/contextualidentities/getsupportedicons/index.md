---
title: contextualIdentities.getSupportedIcons()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedIcons
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.getSupportedIcons
sidebar: addonsidebar
---

Returns the icons supported by the browser for contextual identities.

## Syntax

```js-nolint
let icons = browser.contextualIdentities.getSupportedIcons()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with an array of objects, one for each supported icon. Each object has these properties:

- `icon`
  - : `string`. The name of the icon (for example, `"fingerprint"`). This is the value used in the `icon` property of {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}.
- `iconUrl`
  - : `string`. A `resource://` URL pointing to the icon's SVG file (for example, `"resource://usercontext-content/fingerprint.svg"`).

If the contextual identities feature is not enabled, the promise is rejected with an error message.

## Examples

Retrieve all supported icons and log their names and URLs:

```js
function onGot(icons) {
  for (const { icon, iconUrl } of icons) {
    console.log(`${icon}: ${iconUrl}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.getSupportedIcons().then(onGot, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
