---
title: "Document: visibilityState property"
short-title: visibilityState
slug: Web/API/Document/visibilityState
page-type: web-api-instance-property
browser-compat: api.Document.visibilityState
---

{{ApiRef("DOM")}}

The **`Document.visibilityState`**
read-only property returns the visibility of the document. It can be used to check whether the document is in the background or in a minimized window, or is otherwise not visible to the user.

When the value of this property changes, the {{domxref("Document/visibilitychange_event", "visibilitychange")}} event is sent to the {{domxref("Document")}}.

The {{domxref("Document.hidden")}} property provides an alternative way to determine whether the page is hidden.

## Value

A string with one of the following values:

- `visible`
  - : The page content may be at least partially visible. In practice this means that the
    page is the foreground tab of a non-minimized window.
- `hidden`
  - : The page content is not visible to the user. In practice this means that the
    document is either a background tab or part of a minimized window, or the OS screen
    lock is active.

## Examples

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // Modify behavior…
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.hidden")}}
- [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
