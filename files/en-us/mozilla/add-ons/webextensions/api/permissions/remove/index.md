---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.remove
---

{{AddonSidebar}}

Ask to give up the permissions listed in the given {{WebExtAPIRef("permissions.Permissions")}} object.

The `Permissions` argument may contain either an `origins` property, which is an array of [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or a `permissions` property, which is an array of [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), or both. Permissions must come from the set of permissions defined in the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json key.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removing = browser.permissions.remove(
  permissions                // Permissions object
)
```

### Parameters

- `permissions`
  - : A {{WebExtAPIRef("permissions.Permissions")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with `true` if the permissions listed in the `permissions` argument are now not granted to the extension, or `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

This code adds a click handler that removes a given permission.

```js
const permissionToRemove = {
  permissions: ["history"],
};

async function remove() {
  console.log("removing");
  const removed = await browser.permissions.remove(permissionToRemove);
  console.log(removed);
}

document.querySelector("#remove").addEventListener("click", remove);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
