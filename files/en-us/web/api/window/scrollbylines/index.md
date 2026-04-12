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
<button id="scroll-up">Up 5 lines</button>
<button id="scroll-down">Down 5 lines</button>
```

```js
document.getElementById("scroll-up").addEventListener("click", () => {
  window.scrollByLines(-5);
});
document.getElementById("scroll-down").addEventListener("click", () => {
  window.scrollByLines(5);
});
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
