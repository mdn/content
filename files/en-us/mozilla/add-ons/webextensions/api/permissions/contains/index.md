---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.contains
---

{{AddonSidebar()}}

Check whether the extension has the permissions listed in the given {{WebExtAPIRef("permissions.Permissions")}} object.

The `Permissions` argument may contain either an origins property, which is an array of [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or a `permissions` property, which is an array of [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), or both.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The promise is fulfilled with true only if all the extension currently has all the given permissions. For host permissions, if the extension's permissions [pattern-match](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) the permissions listed in `origins`, then they are considered to match.

## Syntax

```js-nolint
let getContains = browser.permissions.contains(
  permissions                // Permissions object
)
```

### Parameters

- `permissions`
  - : A {{WebExtAPIRef("permissions.Permissions")}} object.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the extension already has all the permissions listed in the `permissions` argument, or `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*"

let testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"],
};

const testResult1 = await browser.permissions.contains(testPermissions1);
console.log(testResult1); // true

let testPermissions2 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs", "alarms"],
};

const testResult2 = await browser.permissions.contains(testPermissions2);
console.log(testResult2); // false, "alarms" doesn't match

let testPermissions3 = {
  origins: ["https://developer.mozilla.org/"],
  permissions: ["tabs", "webRequest"],
};

const testResult3 = await browser.permissions.contains(testPermissions3);
console.log(testResult3); // true: "https://developer.mozilla.org/", matches: "*://*.mozilla.org/*"

let testPermissions4 = {
  origins: ["https://example.org/"],
};

const testResult4 = await browser.permissions.contains(testPermissions4);
console.log(testResult4); // false: "https://example.org/", `origins` doesn't match
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/permissions/) API.
