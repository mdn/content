---
title: scripting.ScriptInjection
slug: Mozilla/Add-ons/WebExtensions/API/scripting/ScriptInjection
tags:
  - API
  - Add-ons
  - Extensions
  - ScriptInjection
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting.ScriptInjection
---
{{AddonSidebar()}}

This type contains details of a script injection.

## Type

Values of this type are objects. They contain these properties:

- `args`
  - : `any`. An array of arguments to carry into the function. This is only valid if the `func` parameter is specified. The arguments must be JSON-serializable.
- `files`
  - : `string`. An array of path of the JS files to inject, relative to the extension's root directory. Exactly one of `files` and `func` must be specified.
- `func`
  - : `function`. A JavaScript function to inject. This function is serialized and then deserialized for injection. This means that any bound parameters and execution context ase lost. Exactly one of `files` and `func` must be specified.
- `target`
  - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details specifying the target to inject the script into.   

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/extensions/scripting#type-ScriptInjection) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.