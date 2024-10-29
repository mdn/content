---
title: "Window: scrollByLines() method"
short-title: scrollByLines()
slug: Web/API/Window/scrollByLines
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.Window.scrollByLines
---

{{APIRef}} {{Non-standard_header}}

The **`Window.scrollByLines()`** method scrolls the document by
the specified number of lines.

## Syntax

```js-nolint
scrollByLines(lines)
```

### Parameters

- `lines`
  - : The number of lines to scroll the document by. It may be a
    positive or negative integer.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```html
<!-- Scroll up the document by 5 lines -->
<button id="scroll-up" onclick="scrollByLines(-5);">Up 5 lines</button>

<!-- Scroll down the document by 5 lines -->
<button id="scroll-down" onclick="scrollByLines(5);">Down 5 lines</button>
```

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByPages()")}}
- {{domxref("window.scrollTo()")}}
