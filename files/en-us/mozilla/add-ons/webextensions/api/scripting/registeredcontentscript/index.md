---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
tags:
  - API
  - Add-ons
  - Extensions
  - RegisteredContentScript
  - Reference
  - Type
  - WebExtensions
  - scripting
browser-compat: webextensions.api.scripting.RegisteredContentScript
---
{{AddonSidebar()}}

This object contains details of a script to be registered or that is registered.

## Type

Values of this type are objects. They contain these properties:

- `allFrames` {{optional_inline}}
  - : `boolean`. If specified `true`, the script is inject into all frames, even if the frame is not the top-most frame in the tab. Each frame is checked independently for URL requirements; it does not inject into child frames if the URL requirements are not met. Defaults to `false`, meaning that only the top frame is matched.
- `css` {{optional_inline}}
  - : `array` of `string`. The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array.
- `excludeMatches` {{optional_inline}}
  - : `array` of `string`. Array of pages that this content script is excluded from but would otherwise be injected into.
- `id`
  - : `string`. The ID of the content script, specified in the API call.
- `js` {{optional_inline}}
  - : `array` of `string`. Array of path to JavaScript files in the extension package to inject into matching pages. Scripts are injected in the order they appear in this array.
- `matches` {{optional_inline}}
  - : `array` of `string`. Array of the pages this content script is injected into. Must be specified for {{WebExtAPIRef("scripting.registerContentScripts()")}}.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Specifies if this content script persists across browser restarts and updates and extension restarts. Defaults to `true`.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Specifies when JavaScript files are injected into the web page. The default value is `document_idle`. In Firefox, `runAt` also affects the point where the CSS is inserted. In Chrome, `runAt` does not affect the CSS insertion point.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/scripting/#type-RegisteredContentScript) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
