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

```js
hasFocus()
```

### Parameters

None.

### Return value

`false` if the active element in the document has no focus;
`true` if the active element in the document has focus.

## Examples

This example checks whether the document has focus every 300 milliseconds. To test the
functionality of `hasFocus()`, click on the button to open a new window, and
try switching between the two pages.

### HTML

```html
<p id="log">Awaiting focus check.</p>
<button onclick="openWindow()">Open a new window</button>
```

### JavaScript

```js
function checkPageFocus() {
  const body = document.querySelector('body');
  const log = document.getElementById('log');

  if (document.hasFocus()) {
    log.textContent = 'This document has the focus.';
    body.style.background = '#fff';
  } else {
    log.textContent = 'This document does not have the focus.';
    body.style.background = '#ccc';
  }
}

function openWindow() {
  window.open('https://developer.mozilla.org/', 'MDN', 'width=640,height=320,left=150,top=150');
}

// Check page focus every 300 milliseconds
setInterval(checkPageFocus, 300);
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
