---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.getAll
sidebar: addonsidebar
---

Retrieves a {{WebExtAPIRef("permissions.Permissions")}} object containing all the permissions currently granted to the extension.

## Syntax

```js-nolint
let gettingAll = browser.permissions.getAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with a {{WebExtAPIRef("permissions.Permissions")}} object containing all the permissions currently granted to the extension. This includes all permissions the extension has listed in the [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) key, and any permissions listed in [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) that the extension has been granted by calling {{WebExtAPIRef("permissions.request()")}}.

## Examples

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*", and "healthInfo" in "data_collection"

const currentPermissions = await browser.permissions.getAll();

console.log(currentPermissions.permissions); // [ "webRequest", "tabs" ]
console.log(currentPermissions.origins); // [ "*://*.mozilla.org/*" ]
console.log(currentPermissions.data_collection); // [ healthInfo" ]
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
