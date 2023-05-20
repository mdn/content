---
title: "Element: scrollIntoView() method"
short-title: scrollIntoView()
slug: Web/API/Element/scrollIntoView
page-type: web-api-instance-method
browser-compat: api.Element.scrollIntoView
---

{{APIRef("DOM")}}

The {{domxref("Element")}} interface's
**`scrollIntoView()`** method scrolls the element's ancestor
containers such that the element on which `scrollIntoView()` is called is
visible to the user.

## Syntax

```js-nolint
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

### Parameters

- `alignToTop` {{optional_inline}}

  - : A boolean value:

    - If `true`, the top of the element will be aligned to the top of the
      visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is
      the default value.
    - If `false`, the bottom of the element will be aligned to the bottom
      of the visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : An Object with the following properties:

    - `behavior` {{optional_inline}}
      - : Determines whether scrolling is instant or animates smoothly. This option is a string which must take one of the following values:
        - `smooth`: scrolling should animate smoothly
        - `instant`: scrolling should happen instantly in a single jump
        - `auto`: scroll behavior is determined by the computed value of {{cssxref("scroll-behavior")}}
    - `block` {{optional_inline}}
      - : Defines vertical alignment.
        One of `start`, `center`, `end`, or
        `nearest`. Defaults to `start`.
    - `inline` {{optional_inline}}
      - : Defines horizontal alignment.
        One of `start`, `center`, `end`, or
        `nearest`. Defaults to `nearest`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
```

## Notes

The element may not be scrolled completely to the top or bottom depending on the layout
of other elements.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollIntoViewIfNeeded()")}} {{non-standard_inline}}
