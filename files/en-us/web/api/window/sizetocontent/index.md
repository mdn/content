---
title: Window.sizeToContent()
slug: Web/API/Window/sizeToContent
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - Window
browser-compat: api.Window.sizeToContent
---
{{APIRef}}{{Non-standard_header}}

The **`Window.sizeToContent()`** method sizes the window
according to its content. In order for it to work, the DOM content should be loaded when
this function is called—for example, once the {{event("DOMContentLoaded")}} event has
been thrown.

Since Firefox 20, the mimimal size of the window is clamped to prevent the window from
being too small for the user to interact with.

## Syntax

```js
window.sizeToContent()
```

## Example

```js
window.sizeToContent();
```

## Specifications

This feature is not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window")}}
