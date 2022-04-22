---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
tags:
  - API
  - Add-ons
  - Event
  - Permissions
  - Reference
  - WebExtensions
  - onRemoved
browser-compat: webextensions.api.permissions.onRemoved
---
{{AddonSidebar()}}

Fired when some permissions are removed from the extension.

## Syntax

```js
browser.permissions.onRemoved.addListener(listener)
browser.permissions.onRemoved.removeListener(listener)
browser.permissions.onRemoved.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}} object containing the permissions that were removed.

## Browser compatibility

{{Compat}}

## Examples

```js
function handleRemoved(permissions) {
  console.log(`Removed API permissions: ${permissions.permissions}`);
  console.log(`Removed host permissions: ${permissions.origins}`);
}

browser.permissions.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
