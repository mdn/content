---
title: contextualIdentities.remove()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/remove
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.remove
---

{{AddonSidebar()}}

Removes a contextual identity, given its cookie store ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removeContext = browser.contextualIdentities.remove(
  cookieStoreId                  // string
)
```

### Parameters

- `cookieStoreId`
  - : `string`. The ID of the contextual identity's cookie store. Because contextual identities each have their own cookie store, this serves as an identifier for the contextual identity itself.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} that describes the identity that was removed. If the identity could not be found or the contextual identities feature is not enabled, the promise is rejected.

## Browser compatibility

{{Compat}}

## Examples

This example tries to remove the contextual identity whose ID is "firefox-container-1":

```js
function onRemoved(context) {
  if (!context) {
    console.error("Context not found");
  } else {
    console.log(`Removed identity: ${context.cookieStoreId}.`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .remove("firefox-container-1")
  .then(onRemoved, onError);
```

{{WebExtExamples}}
