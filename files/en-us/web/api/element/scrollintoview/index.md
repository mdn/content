---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
tags:
  - API
  - CSSOM Views
  - DOM
  - Element
  - Method
  - Reference
  - View
  - scrollIntoView
  - scrolling
browser-compat: api.Element.scrollIntoView
---
{{APIRef("DOM")}}

The {{domxref("Element")}} interface's
**`scrollIntoView()`** method scrolls the element's parent
container such that the element on which `scrollIntoView()` is called is
visible to the user.

## Syntax

```js
element.scrollIntoView();
element.scrollIntoView(alignToTop); // Boolean parameter
element.scrollIntoView(scrollIntoViewOptions); // Object parameter
```

### Parameters

- `alignToTop` {{optional_inline}}

  - : Is a boolean value:

    - If `true`, the top of the element will be aligned to the top of the
      visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is
      the default value.
    - If `false`, the bottom of the element will be aligned to the bottom
      of the visible area of the scrollable ancestor. Corresponds to
      `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.

- `scrollIntoViewOptions` {{optional_inline}}
  {{experimental_inline}}

  - : Is an Object with the following properties:

    - `behavior` {{optional_inline}}
      - : Defines the transition animation.
        One of `auto` or `smooth`. Defaults to `auto`.
    - `block` {{optional_inline}}
      - : Defines vertical alignment.
        One of `start`, `center`, `end`, or
        `nearest`. Defaults to `start`.
    - `inline` {{optional_inline}}
      - : Defines horizontal alignment.
        One of `start`, `center`, `end`, or
        `nearest`. Defaults to `nearest`.

## Example

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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
