---
title: contextualIdentities.get()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/get
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.get
---

{{AddonSidebar}}

Gets information about a contextual identity, given its cookie store ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let getContext = browser.contextualIdentities.get(
  cookieStoreId                  // string
)
```

### Parameters

- `cookieStoreId`
  - : `string`. The ID of this contextual identity's cookie store. Because contextual identities each have their own cookie store, this serves as an identifier for the contextual identity itself.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the identity. If the identity could not be found or the contextual identities feature is not enabled, the promise is rejected.

## Browser compatibility

{{Compat}}

## Examples

This example tries to retrieve the contextual identity whose ID is "firefox-container-1":

```js
function onGot(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.get("firefox-container-1").then(onGot, onError);
```

{{WebExtExamples}}
