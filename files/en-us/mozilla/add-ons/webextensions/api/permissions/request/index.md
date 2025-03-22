---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.request
---

{{AddonSidebar}}

Asks the user for the permissions listed in the {{WebExtAPIRef("permissions.Permissions")}} object.

The `Permissions` argument can contain an `origins` property, an array of [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), a `permissions` property, an array of [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), or both.

Requested permissions must be defined in the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json key. The `origins` property can include permissions matching a subset of the hosts matched by an optional permission. For example, if `optional_permissions` include `"*://mozilla.org/"`, then `permissions.origins` can include `"https://developer.mozilla.org/"`.

Requests for [optional-only permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions) can't include any other optional permissions.

The request can only be made inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions). Unless all the permissions requested are ones granted silently, the browser asks the user whether to grant the requested permissions. One request is made for all requested permissions: either all permissions are granted or none are.

The extension retains any permissions granted, even over upgrade and disable and enable cycling.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let requesting = browser.permissions.request(
  permissions                // Permissions object
)
```

### Parameters

- `permissions`
  - : A {{WebExtAPIRef("permissions.Permissions")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with `true` if the extension is granted the permissions listed in the `permissions` argument, or `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

This code adds a click handler that asks for various permissions, then logs the result of the request and the extension's permissions after the request completes.

```js
const permissionsToRequest = {
  permissions: ["bookmarks", "history"],
  origins: ["https://developer.mozilla.org/"],
};

async function requestPermissions() {
  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
    } else {
      console.log("Permission was refused");
    }
    return browser.permissions.getAll();
  }

  const response = await browser.permissions.request(permissionsToRequest);
  const currentPermissions = await onResponse(response);

  console.log(`Current permissions:`, currentPermissions);
}

document
  .querySelector("#request")
  .addEventListener("click", requestPermissions);
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
