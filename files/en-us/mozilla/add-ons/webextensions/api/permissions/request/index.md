---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
tags:
  - API
  - Add-ons
  - Method
  - Permissions
  - Reference
  - WebExtensions
  - request
browser-compat: webextensions.api.permissions.request
---
{{AddonSidebar()}}

Ask for the set of permissions listed in the given {{WebExtAPIRef("permissions.Permissions")}} object.

The `Permissions` argument may contain either an `origins` property, which is an array of [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or a `permissions` property, which is an array of [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), or both. Permissions must come from the set of permissions defined in the [`optional_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json key. The `origins` property may include permissions that match a subset of the hosts matched by an optional permission: for example, if optional_permissions include "\*://mozilla.org/", then `permissions.origins` may include "https\://developer.mozilla.org/".

The request can only be made inside the handler for a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions).

Depending on a circumstances, the browser will probably handle the request by asking the user whether to grant the requested permissions. Only a single request is made for all requested permissions: thus either all permissions are granted or none of them are.

Any permissions granted are retained by the extension, even over upgrade and disable/enable cycling.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var requesting = browser.permissions.request(
  permissions                // Permissions object
)
```

### Parameters

- `permissions`
  - : A {{WebExtAPIRef("permissions.Permissions")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the extension was granted all the permissions listed in the `permissions` argument, or `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

This code adds a click handler that asks for various permissions, then logs the result of the request and the extension's permissions after the request completed.

```js
const permissionsToRequest = {
  permissions: ["bookmarks", "history"],
  origins: ["https://developer.mozilla.org/"]
}

function requestPermissions() {

  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
    } else {
      console.log("Permission was refused");
    }
    return browser.permissions.getAll();
  }

  browser.permissions.request(permissionsToRequest)
    .then(onResponse)
    .then((currentPermissions) => {
    console.log(`Current permissions:`, currentPermissions);
  });
}

document.querySelector("#request").addEventListener("click", requestPermissions);
```

{{WebExtExamples}}

> **Note:** Currently has a [bug with requesting origins](https://bugzilla.mozilla.org/show_bug.cgi?id=1411873) and [requesting permissions on the about:addons page](https://bugzilla.mozilla.org/show_bug.cgi?id=1382953).

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/extensions/permissions) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
