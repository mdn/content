---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
tags:
  - API
  - Add-ons
  - Method
  - Permissions
  - Reference
  - WebExtensions
  - remove
browser-compat: webextensions.api.permissions.remove
---
{{AddonSidebar()}}

Ask to give up the permissions listed in the given {{WebExtAPIRef("permissions.Permissions")}} object.

The `Permissions` argument may contain either an `origins` property, which is an array of [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or a `permissions` property, which is an array of [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), or both. Permissions must come from the set of permissions defined in the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json key.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let removing = browser.permissions.remove(
  permissions                // Permissions object
)
```

### Parameters

- `permissions`
  - : A {{WebExtAPIRef("permissions.Permissions")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the permissions listed in the `permissions` argument were removed, or `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

This code adds a click handler that removes a given permission.

```js
const permissionToRemove = {
  permissions: ["history"]
}

function remove() {
  console.log("removing");
  browser.permissions.remove(permissionToRemove).then((result) => {
    console.log(result);
  });
}

document.querySelector("#remove").addEventListener("click", remove);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
