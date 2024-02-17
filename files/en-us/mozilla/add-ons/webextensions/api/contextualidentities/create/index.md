---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.create
---

{{AddonSidebar}}

Creates a new contextual identity. Once created, the user will be able to create new tabs belonging to this contextual identity, just as they can with the built-in identities.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let createContext = browser.contextualIdentities.create(
  details                  // object
)
```

### Parameters

- `details`

  - : `object`. An object containing properties for the new contextual identity. This contains the following properties:

    - `name`
      - : `string`. The name of the new identity. This will be displayed in the browser's UI, enabling them to open a new tab belonging to the identity. It will also be displayed in the URL bar for tabs belonging to this identity.
    - `color`

      - : `string`. The color associated with the new identity. This will be used to highlight tabs belonging to this identity. You can supply any of the following values here:

        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon`

      - : `string`. The name of an icon to display in the URL bar for tabs belonging to this identity. You can supply any of the following values here:

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

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the new identity. If the contextual identities feature is not enabled, the promise is rejected.

## Browser compatibility

{{Compat}}

## Examples

This example creates a new contextual identity and logs its cookie store ID:

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
