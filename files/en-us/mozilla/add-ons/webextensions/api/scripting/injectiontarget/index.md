---
title: scripting.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionTarget
tags:
  - API
  - Add-ons
  - Extensions
  - InjectionTarget
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting.InjectionTarget
---
{{AddonSidebar()}}

This object contains details specifying the injection target for CSS.

## Type

Values of this type are objects. They contain these properties:

- `allFrames`
  - : `boolean`. Whether the CSS is inject into all frames within the tab. Defaults to `false`. Cannot be `true` if `frameIds` is specified.
- `frameIds`
  - : `string`. Array of the IDs of the frames to inject into. 
- `tabId`
  - : `number`. The ID of the tab to inject into. 

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#type-InjectionTarget) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.