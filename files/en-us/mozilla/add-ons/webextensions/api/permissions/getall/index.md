---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.getAll
---

{{AddonSidebar()}}

Retrieve a {{WebExtAPIRef("permissions.Permissions")}} object containing all the permissions currently granted to the extension.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingAll = browser.permissions.getAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef("permissions.Permissions")}} object containing all the permissions currently granted to the extension. This includes all permissions the extension has listed in the [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) key, and any permissions listed in [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) that the extension has been granted by calling {{WebExtAPIRef("permissions.request()")}}.

## Browser compatibility

{{Compat}}

## Examples

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

const currentPermissions = await browser.permissions.getAll();

console.log(currentPermissions.permissions); // [ "webRequest", "tabs" ]
console.log(currentPermissions.origins); // [ "*://*.mozilla.org/*" ]
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/) API.
