---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.create
sidebar: addonsidebar
---

Creates a contextual identity. When created, the user can create tabs belonging to this contextual identity, just as they can with the built-in identities.

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // object
)
```

### Parameters

- `details`
  - : `object`. An object containing properties for the new contextual identity. This object contains these properties:
    - `name`
      - : `string`. The name of the new identity. This name is displayed in the browser's UI, enabling users to open a new tab belonging to the identity. It also displays in the URL bar for tabs belonging to this identity.
    - `color`
      - : `string`. The color associated with the new identity. This color is used to highlight tabs belonging to this identity. Accepts any of these values:
        - "blue"
        - "cyan"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "gray"
        - "violet"

    - `icon`
      - : `string`. The name of an icon to display in the URL bar for tabs belonging to this identity. Accepts any of these values:
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

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the new identity. If the contextual identities feature is not enabled, the promise is rejected.

## Examples

This example creates a contextual identity and logs its cookie store ID:

```js
function onCreated(context) {
  console.log(`New identity's ID: ${context.cookieStoreId}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .create({
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onCreated, onError);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
