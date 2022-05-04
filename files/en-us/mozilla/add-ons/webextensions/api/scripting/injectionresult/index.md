---
title: scripting.InjectionResult
slug: Mozilla/Add-ons/WebExtensions/API/scripting/InjectionResult
tags:
  - API
  - Add-ons
  - Extensions
  - InjectionResult
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting.InjectionResult
---
{{AddonSidebar()}}

This type contains details of the result of a script injection.

## Type

Values of this type are objects. They contain these properties:

- `frameId`
  - : `number`. The frame ID associated with the injection.
- `result`{{optional_inline}}
  - : `any`. The result of the script execution.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#type-InjectionResult) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.