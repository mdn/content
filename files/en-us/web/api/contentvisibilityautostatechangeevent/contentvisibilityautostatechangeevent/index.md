---
title: "ContentVisibilityAutoStateChangeEvent: ContentVisibilityAutoStateChangeEvent() constructor"
short-title: ContentVisibilityAutoStateChangeEvent()
slug: Web/API/ContentVisibilityAutoStateChangeEvent/ContentVisibilityAutoStateChangeEvent
page-type: web-api-constructor
browser-compat: api.ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}

The **`ContentVisibilityAutoStateChangeEvent()`** constructor creates a new {{domxref("ContentVisibilityAutoStateChangeEvent")}} object instance.

## Syntax

```js-nolint
new ContentVisibilityAutoStateChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `ContentVisibilityAutoStateChangeEvent` this is always `event`.
- `options` {{optional_inline}}
  - : An object that contains the following properties:
    - `skipped`
      - : A boolean, which is set to `true` if the user agent [skips the element's contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents), or `false` otherwise.

## Examples

A developer would not use this constructor manually. A new `ContentVisibilityAutoStateChangeEvent` object is constructed when a handler is invoked as a result of the {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event firing.

```js
canvasElem.addEventListener("contentvisibilityautostatechange", (event) => {
  // …
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event
- [CSS Containment](/en-US/docs/Web/CSS/CSS_containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
