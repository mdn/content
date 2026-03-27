---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
page-type: webextension-api-function
browser-compat: webextensions.api.permissions.contains
sidebar: addonsidebar
---

Checks whether the extension has specific permissions.

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

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with `true` if the extension has all the permissions listed in the `permissions` argument, or `false` otherwise. For host permissions, if the extension's permissions [pattern-match](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) the permissions listed in `origins`, then they are considered to match.

## Examples

```js
// Extension permissions are:
// "webRequest", "tabs", "*://*.mozilla.org/*", and "healthInfo" in "data_collection"

let testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"],
  data_collection: ["healthInfo"],
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

let testPermissions5 = {
  data_collection: ["searchTerms"],
};

const testResult5 = await browser.permissions.contains(testPermissions4);
console.log(testResult5); // false: "searchTerms" doesn't match data type in `data_collection`
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
