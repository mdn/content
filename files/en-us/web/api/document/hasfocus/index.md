---
title: Document.hasFocus()
slug: Web/API/Document/hasFocus
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Focus
  - Method
  - Reference
browser-compat: api.Document.hasFocus
---

{{APIRef}}

The **`hasFocus()`** method of the {{domxref("Document")}}
interface returns a boolean value indicating whether the document or any
element inside the document has focus. This method can be used to determine whether the
active element in a document has focus.

> **Note:** When viewing a document, an element with focus is always the [active element](/en-US/docs/Web/API/Document/activeElement) in
> the document, but an active element does not necessarily have focus. For example, an
> active element within a popup window that is not the foreground doesn't have focus.

## Syntax

```js-nolint
hasFocus()
```

### Parameters

None.

### Return value

`false` if the active element in the document has no focus;
`true` if the active element in the document has focus.

## Examples

The following example checks whether the current document has focus.
We create a function called `checkPageFocus()` that updates an element depending on the result of `document.hasFocus()`.
Two listeners are triggered on [`focus`](/en-US/docs/Web/API/Element/focus_event) and [`blur`](/en-US/docs/Web/API/Element/blur_event) events that call our `checkPageFocus()` function.
To test `hasFocus()`, click on the button to open a new window and try switching between both pages.

### HTML

```html
<p id="log">Awaiting focus check.</p>
<button onclick="openWindow()">Open a new window</button>
```

### JavaScript

```js
function checkPageFocus() {
  const body = document.querySelector("body");
  const log = document.getElementById("log");

  if (document.hasFocus()) {
    log.textContent = "This document has the focus.";
    body.style.background = "#fff";
  } else {
    log.textContent = "This document does not have the focus.";
    body.style.background = "#ccc";
  }
}

function openWindow() {
  window.open(
    "https://developer.mozilla.org/",
    "MDN",
    "width=640,height=320,left=150,top=150"
  );
}

window.addEventListener("blur", checkPageFocus);
window.addEventListener("focus", checkPageFocus);
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.activeElement")}}
- [Using the Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
