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
    filter           // object
);
```

### Parameters

- `filter`

  - : An object containing criteria to match returned contexts against. Matching contexts must match all specified filters. If the object is empty, all contexts are returned.
    - `contextIds` {{optional_inline}}
      - : An array of `string`. The IDs of contexts to return.
    - `contextTypes` {{optional_inline}}
      - : An array of `string`. The types of extension views associated with contexts to return. Takes the values `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"`, and `"TAB"`.
    - `documentIds` {{optional_inline}}
      - : An array of `string`. UUIDs of documents associated with the contexts to return.
    - `documentOrigins` {{optional_inline}}
      - : An array of `string`. The origins of documents associated with the contexts to return.
    - `documentUrls` {{optional_inline}}
      - : An array of `string`. The URLs of documents associated with the contexts to return.
    - `frameIds` {{optional_inline}}
      - : An array of `integer`. The frame IDs for the contexts to return.
    - `incognito` {{optional_inline}}
      - : `boolean`. Whether to return only contexts hosted in a private browsing tab.
    - `tabIds` {{optional_inline}}
      - : An array of `integer`. The tab IDs for the contexts to return.
    - `windowIds` {{optional_inline}}
      - : An array of `integer`. The window IDs for the contexts to return.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an array of objects, one for each context hosting extension content. The objects have these properties:

- `contextId`
  - : `string`. ID of the context.
- `contextType`
  - : `string`. The type of extension view. Returned as one of `"BACKGROUND"`, `"POPUP"`, `"SIDE_PANEL"`, or `"TAB"`.
- `documentId`
  - : `string`. UUID of the document associated with the context, or undefined if the context is not hosted in a document.
- `documentOrigin`
  - : string`. The origin of the document associated with the context or undefined if the context is not hosted in a document.
- `documentUrl`
  - : `string`. The URL of the document associated with the context or undefined if the context is not hosted in a document.
- `frameId`
  - : `integer`. The frame ID for the context or `-1` if the context is not hosted in a frame.
- `incognito`
  - : `boolean`. Whether the context is hosted in a private browsing tab.
- `tabId`
  - : `integer`. The tab ID for the context or `-1` if the context is not hosted in a tab.
- `windowId`
  - : `integer`. The window ID for the context or `-1` if the context is not hosted in a window.

If there are no matching contexts, fulfilled with an empty array.

## Examples

This example gets all the contexts associated with the extension in private browsing tabs, printing the tab ID, frame ID, and document URL for each context to the console:

```js
function gotContextInfo(contexts) {
  for (const context of contexts) {
    if (context.tabId == -1) {
      console.log("Not hosted in a tab");
    } else {
      console.log(
        `Hosted in tab: ${context.tabId} and frame ${context.frameId} with URL ${context.documentUrl}`,
      );
    }
  }
}

let gettingContextInfo = browser.runtime.getContext({ incognito: true });
gettingContextInfo.then(gotContextInfo);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
