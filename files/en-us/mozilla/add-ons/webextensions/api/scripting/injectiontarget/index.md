---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
page-type: webextension-api-type
browser-compat: webextensions.api.scripting.InjectionTarget
---

{{AddonSidebar()}}

This object contains details specifying the injection target for CSS and JavaScript. Its used in {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, and {{WebExtAPIRef("scripting.removeCSS()")}}.

## Type

Values of this type are objects. They contain these properties:

- `allFrames` {{optional_inline}}

  - : `boolean`. Whether the script or CSS is injected into all frames within the tab. Defaults to `false`. Cannot be `true` if `frameIds` is specified.

- `frameIds` {{optional_inline}}

  - : `array` of `number`. Array of the IDs of the frames to inject into.

- `tabId`
  - : `number`. The ID of the tab to inject into.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#type-InjectionTarget) API.
