---
title: Window.print()
slug: Web/API/Window/print
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Window
browser-compat: api.Window.print
---
{{ ApiRef() }}

Opens the print dialog to print the current document.

If the document is still loading when this function is called, then the document will finish loading before opening the print dialog.

This method will block while the print dialog is open.

## Syntax

```js
window.print()
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Printing](/en-US/docs/Web/Guide/Printing)
- {{ domxref("window.onbeforeprint") }}
- {{ domxref("window.onafterprint") }}
