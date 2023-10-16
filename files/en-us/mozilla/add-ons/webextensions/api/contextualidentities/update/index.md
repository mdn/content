---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.update
---

{{AddonSidebar()}}

Updates properties of a contextual identity, given its cookie store ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.update(
  cookieStoreId,           // string
  details                  // object
)
```

### Parameters

- `cookieStoreId`
  - : `string`. The ID of this contextual identity's cookie store. Because contextual identities each have their own cookie store, this serves as an identifier for the contextual identity itself.
- `details`

  - : `object`. An object containing new values for the properties that you wish to change. This may contain any of the following properties:

    - `name` {{optional_inline}}
      - : `string`. A new name for the identity. This will be displayed in the browser's UI, enabling them to open a new tab in the identity. It will also be displayed in the URL bar for tabs belonging to this identity.
    - `color` {{optional_inline}}

      - : `string`. A new color for the identity. This will be used to highlight tabs belonging to this identity. You can supply any of the following values here:

        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon` {{optional_inline}}

      - : `string`. A new icon for the identity. You can supply any of the following values here:

        - "fingerprint"
        - "briefcase"
        - "dollar"
        - "cart"
        - "circle"
        - "gift"
        - "vacation"
        - "food"
        - "fruit"
        - "pet"
        - "tree"
        - "chill"
        - "fence"

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the updated identity. If the identity could not be found or the contextual identities feature is not enabled, the promise is rejected.

## Browser compatibility

{{Compat}}

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
