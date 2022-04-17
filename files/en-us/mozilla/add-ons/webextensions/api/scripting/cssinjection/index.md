---
title: scripting.CSSInjection
slug: Mozilla/Add-ons/WebExtensions/API/scripting/CSSInjection
tags:
  - API
  - Add-ons
  - Extensions
  - CSSInjection
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting.CSSInjection
---
{{AddonSidebar()}}

This object contains details describing CSS to inject.

## Type

Values of this type are objects. They contain these properties:

- `css`{{optional_inline}} 
  - : `string`. A string containing the CSS to inject. Either `css` or `files` must be specified. 
- `files`{{optional_inline}}
  - : `string`. The path of a CSS files to inject, relative to the extension's root directory. Either `files` or `css` must be specified. 
- `origin`{{optional_inline}} 
  - : `string`. The style origin for the injection, either `USER` or `AUTHOR`. Defaults to `AUTHOR`. 
- `target` 
  - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details specifying the target to inject the CSS into. 

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#type-CSSInjection) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.