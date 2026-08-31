---
title: runtime.getDocumentId()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getDocumentId
page-type: webextension-api-function
browser-compat: webextensions.api.runtime.getDocumentId
sidebar: addonsidebar
---

Returns the document ID of any window global or frame element. See the [Work with documentId](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) article for more information.

## Syntax

```js-nolint
let documentId = browser.runtime.getDocumentId(
  target               // object
)
```

### Parameters

- `target`
  - : A {{glossary("WindowProxy")}} or a {{glossary("browsing context")}} container {{DOMxRef("Element","element")}} (iframe, frame, embed, or object) for the target frame.

### Return value

Returns the document UUID of the target. Throws an error if the window or frame was unloaded.

## Examples

This code gets the document IDs of the top-level frame and its child frames:

```js
const documentId = browser.runtime.getDocumentId(window);
const frameDocumentId = browser.runtime.getDocumentId(
  document.querySelector("iframe"),
);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
