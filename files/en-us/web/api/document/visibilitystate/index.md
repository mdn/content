---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
page-type: web-api-instance-property
tags:
  - DOM
  - Document
  - Page Visibility API
  - Property
  - Read-only
  - Reference
  - Web
browser-compat: api.Document.visibilityState
---
{{ApiRef("DOM")}}

The **`Document.visibilityState`**
read-only property returns the visibility of the {{domxref('document')}}, that is in
which context this element is now visible. It is useful to know if the document is in
the background or an invisible tab, or only loaded for pre-rendering.

Possible
values are:

- `visible`
  - : The page content may be at least partially visible. In practice this means that the
    page is the foreground tab of a non-minimized window.
- `hidden`
  - : The page content is not visible to the user. In practice this means that the
    document is either a background tab or part of a minimized window, or the OS screen
    lock is active.
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : The page content is being prerendered and is not visible to the user (considered
    hidden for purposes of
    [`document.hidden`](/en-US/docs/Web/API/Document/hidden)). The
    document may start in this state, but will never transition to it from another value.
    Note: This was removed from the standard. Check compatibility table for details.

When the value of this property changes, the
{{domxref("Document/visibilitychange_event", "visibilitychange")}} event is sent to the
{{domxref("Document")}}.

Typical use of this can be to prevent the download of some assets when the document is
solely prerendered, or stop some activities when the document is in the background or
minimized.

## Syntax

```js
document.visibilityState
```

## Examples

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // Modify behavior…
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
