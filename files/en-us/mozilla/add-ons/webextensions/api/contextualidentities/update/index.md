---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.update
sidebar: addonsidebar
---

Updates properties of a contextual identity, given its cookie store ID.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.update(
  cookieStoreId,           // string
  details                  // object
)
```

### Parameters

- `cookieStoreId`
  - : `string`. The ID of this contextual identity's cookie store. Because each contextual identity has its own cookie store, this serves as an identifier for that contextual identity.
- `details`
  - : `object`. An object containing new values for the properties that you want to change. This object can contain any of these properties:
    - `name` {{optional_inline}}
      - : `string`. A new name for the identity. This name is displayed in the browser's UI, enabling users to open a new tab in the identity. It also displays in the URL bar for tabs belonging to this identity.
    - `color` {{optional_inline}}
      - : `string`. A new color for the identity. This color is used to highlight tabs belonging to this identity. See {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} for details of the supported color values. Use the method in Firefox 153 or later to retrieve the supported list.
    - `icon` {{optional_inline}}
      - : `string`. A new icon for the identity. See {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} for details of the supported icon values. Use the method in Firefox 153 or later to retrieve the supported list.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the updated identity. If the identity could not be found or the contextual identities feature is not enabled, the promise is rejected.

## Examples

This example updates the contextual identity whose ID is "firefox-container-1" to have a new name, color, and icon:

```js
function onUpdated(context) {
  console.log(`New identity's name: ${context.name}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .update("firefox-container-1", {
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onUpdated, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
