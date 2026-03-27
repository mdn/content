---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.remove
sidebar: addonsidebar
---

Revokes the permissions listed in a {{WebExtAPIRef("permissions.Permissions")}} object.

Permissions must come from those defined in the extension's [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) key or [`gecko.data_collection_permissions.optional`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional) property of the `browser_specific_settings` key of its manifest.json file.

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

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with `true` if the browser is no longer granting the permissions listed in the `permissions` argument to the extension, or `false` otherwise.

## Examples

This code adds a click handler that removes a permission.

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

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
