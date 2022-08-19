---
title: Window.scrollByPages()
slug: Web/API/Window/scrollByPages
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Method
  - Non-standard
  - Reference
  - Window
  - scrollByPages
  - scrolling
browser-compat: api.Window.scrollByPages
---
{{ ApiRef() }} {{Non-standard_header}}

The **`Window.scrollByPages()`** method scrolls the current
document by the specified number of pages.

## Syntax

```js
scrollByPages(pages)
```

### Parameters

- `pages` is the number of pages to scroll. It may be a positive or
  negative integer.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// scroll down the document by 1 page
window.scrollByPages(1);

// scroll up the document by 1 page
window.scrollByPages(-1);
```

## Specifications

DOM Level 0. Not part of specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByLines()")}}
- {{domxref("window.scrollTo()")}}
