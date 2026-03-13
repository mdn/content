---
title: Permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
page-type: webextension-api-type
browser-compat: webextensions.api.permissions.Permissions
sidebar: addonsidebar
---

A `Permissions` object represents a collection of permissions.

## Type

An {{jsxref("object")}} with these properties:

- `origins` {{optional_inline}}
  - : An array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), representing [host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).
- `permissions` {{optional_inline}}
  - : An array of named permissions, including [API permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) and [clipboard permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboard_access).
- `data_collection` {optional_inline}}
  - : An array of [data collection permissions types](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions).

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> This API is based on Chromium's [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
