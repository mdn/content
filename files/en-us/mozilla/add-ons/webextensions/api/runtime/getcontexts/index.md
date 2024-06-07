---
title: runtime.getContexts()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getContexts
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getContexts
---

{{AddonSidebar}}

Returns information about the contexts associated with the extension.

## Syntax

```js-nolint
let gettingContexts = browser.runtime.getContexts(
    ContextFilter           // object
);
```

### Parameters

- `ContextFilter`

  - : An object containing criteria to match returned contexts against. Matching contexts must match all specified filters. If the object is empty, all contexts are returned.
    - `contextIds` {{optional_inline}}
      - : Array of `string` ID of a context.
    - `contextTypes` {{optional_inline}}
      - : Array of `string` The type of extension view. Takes the values `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"`, and `"TAB"`.
    - `documentIds` {{optional_inline}}
      - : Array of `string` UUID of a document associated with the context or undefined to match all contexts not hosted in a document.
    - `documentOrigins` {{optional_inline}}
      - : Array of `string` The origin of a document associated with the context or undefined for contexts not hosted in a document.
    - `documentUrls` {{optional_inline}}
      - : Array of `string` The URL of a document associated with the context or undefined for contexts not hosted in a document.
    - `frameIds` {{optional_inline}}
      - : Array of `string` The frame ID for the context or `-1` for contexts not hosted in a frame.
    - `incognito` {{optional_inline}}
      - : `boolean` Whether to return only contexts hosted in a private browsing tab.
    - `tabIds` {{optional_inline}}
      - : Array of `string` The tab ID for the context or `-1` for contexts not hosted in a tab.
    - `windowIds` {{optional_inline}}
      - : Array of `string` The window ID for the context or `-1` for contexts not hosted in a window.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an array of objects, one for each context hosting extension content. The objects have these properties:

- `contextId`
  - : `string` ID of the context.
- `contextType`
  - : `string` The type of extension view. Returned to one of `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"`, or `"TAB"`.
- `documentId` 
  - : `string` UUID of the document associated the context, or undefined if the context is not hosted in a document.
- `documentOrigin`
  - : string` The origin of the document associated with the context or undefined if the context is not hosted in a document.
- `documentUrl`
  - : `string` The URL of the document associated with the context or undefined if the context not hosted in a document.
- `frameId`
  - : `string` The frame ID for the context or `-1` if the context is not hosted in a frame.
- `incognito`
  - : `boolean` Whether the context is hosted in a private browsing tab.
- `tabId`
  - : `string` The tab ID for the context or `-1` if the context not hosted in a tab.
- `windowId`
  - : `string` The window ID for the context or `-1` if the context not hosted in a window.

If there are no matching context, fulfilled with an empty array.

## Examples

Get the context for all context associated with the extension in private browsing tabs, printing the tab IDs to the console:

```js
function gotContextInfo(contexts) {
  for (const context of contexts) {
    if ((context.tabId = -1)) {
      console.log("Not hosted in a tab");
    } else {
      console.log(`Hosted in tab: ${context.tabId}`);
    }
  }
}

let gettingContextInfo = browser.runtime.getContext([(incognito = true)]);
gettingContextInfo.then(gotContextInfo);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
