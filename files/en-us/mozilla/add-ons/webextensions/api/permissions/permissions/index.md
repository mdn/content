---
title: Permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
tags:
  - API
  - Add-ons
  - Permissions
  - Reference
  - Type
  - WebExtensions
browser-compat: webextensions.api.permissions.Permissions
---
{{AddonSidebar()}}

A `Permissions` object represents a collection of permissions.

## Type

An {{jsxref("object")}} with the following properties:

- `origins`{{optional_inline}}
  - : An array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), representing [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).
- `permissions`{{optional_inline}}
  - : An array of named permissions, including [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) and [clipboard permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/extensions/permissions) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
