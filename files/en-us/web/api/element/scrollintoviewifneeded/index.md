---
title: Element.scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
tags:
  - API
  - DOM
  - Element
  - Method
  - Non-standard
  - Reference
browser-compat: api.Element.scrollIntoViewIfNeeded
---
{{APIRef("DOM")}}{{Non-standard_header}}

The **`Element.scrollIntoViewIfNeeded()`** method scrolls the current element into the visible area of the browser window if it's not already within the visible area of the browser window. If the element is already within the visible area of the browser window, then no scrolling takes place. This method is a proprietary variation of the standard [`Element.scrollIntoView()`](/en-US/docs/Web/API/Element/scrollIntoView) method.

## Syntax
```js
element.scrollIntoViewIfNeeded();
element.scrollIntoViewIfNeeded(centerIfNeeded); // Boolean parameter
```

### Parameters

- `centerIfNeeded` {{optional_inline}}

  - : Is an optional boolean value with a default of `true`:

    - If `true`, the element will be aligned so it is centered within the visible area of the scrollable ancestor.
    - If `false`, the element will be aligned to the nearest edge of the visible area of the scrollable ancestor. Depending on which edge of the visible area is closest to the element, either the top of the element will be aligned to the top edge of the visible area, or the bottom edge of the element will be aligned to the bottom edge of the visible area.

## Example

```js
var element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded();
element.scrollIntoViewIfNeeded(true); // Centers the element in the visible area
```

## Specifications

Not part of any specification. This is a proprietary, WebKit-specific method.

## Browser compatibility

{{Compat}}

## See also

- [W3C CSSOM bug 17152: Support centering an element when scrolling into view.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (feature request for a standardized equivalent to `scrollIntoViewIfNeeded`)
