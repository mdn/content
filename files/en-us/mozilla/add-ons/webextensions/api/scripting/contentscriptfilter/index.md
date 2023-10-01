---
title: scripting.ContentScriptFilter
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ContentScriptFilter
page-type: webextension-api-type
browser-compat: webextensions.api.scripting.ContentScriptFilter
---

{{AddonSidebar()}}

This object contains a list of IDs of scripts to retrieve with {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} or to unregister with {{WebExtAPIRef("scripting.unregisterContentScripts()")}}.

## Type

Values of this type are objects. They contain these properties:

- `ids`
  - : `array` of `string`. Array of scripts IDs.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#type-ContentScriptFilter) API.
