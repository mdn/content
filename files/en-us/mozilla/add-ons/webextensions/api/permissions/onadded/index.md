---
title: permissions.onAdded
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onAdded
page-type: webextension-api-event
browser-compat: webextensions.api.permissions.onAdded
---

{{AddonSidebar()}}

Fired when the extension granted new permissions.

## Syntax

```js-nolint
browser.permissions.onAdded.addListener(listener)
browser.permissions.onAdded.removeListener(listener)
browser.permissions.onAdded.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}} object containing the permissions that were granted.

## Browser compatibility

{{Compat}}

## Examples

```js
function handleAdded(permissions) {
  console.log(`New API permissions: ${permissions.permissions}`);
  console.log(`New host permissions: ${permissions.origins}`);
}

browser.permissions.onAdded.addListener(handleAdded);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/) API.
