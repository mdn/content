---
title: "Element: scrollIntoViewIfNeeded() method"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.Element.scrollIntoViewIfNeeded
---

{{APIRef("DOM")}}{{Non-standard_header}}

The **`Element.scrollIntoViewIfNeeded()`** method scrolls the current element into the visible area of the browser window if it's not already within the visible area of the browser window. If the element is already within the visible area of the browser window, then no scrolling takes place. This method is a proprietary variation of the standard [`Element.scrollIntoView()`](/en-US/docs/Web/API/Element/scrollIntoView) method.

## Syntax

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### Parameters

- `centerIfNeeded` {{optional_inline}}

  - : An optional boolean value with a default of `true`:

    - If `true`, the element will be aligned so it is centered within the visible area of the scrollable ancestor.
    - If `false`, the element will be aligned to the nearest edge of the visible area of the scrollable ancestor. Depending on which edge of the visible area is closest to the element, either the top of the element will be aligned to the top edge of the visible area, or the bottom edge of the element will be aligned to the bottom edge of the visible area.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded(); // Centers the element in the visible area
element.scrollIntoViewIfNeeded(false); // Aligns the element to the nearest edge in the visible area
```

## Specifications

Not part of any specification. This is a proprietary, WebKit-specific method.

## Browser compatibility

{{Compat}}

## See also

- [W3C CSSOM bug 17152: Support centering an element when scrolling into view.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (feature request for a standardized equivalent to `scrollIntoViewIfNeeded`)
