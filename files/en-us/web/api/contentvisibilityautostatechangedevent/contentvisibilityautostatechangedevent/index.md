---
title: ContentVisibilityAutoStateChangedEvent()
slug: Web/API/ContentVisibilityAutoStateChangedEvent/ContentVisibilityAutoStateChangedEvent
page-type: web-api-constructor
tags:
  - Constructor
  - Reference
browser-compat: api.ContentVisibilityAutoStateChangedEvent.ContentVisibilityAutoStateChangedEvent
---

{{APIRef("CSS Containment")}}

The **`ContentVisibilityAutoStateChangedEvent()`** constructor creates a new {{domxref("ContentVisibilityAutoStateChangedEvent")}} object instance.

## Syntax

```js-nolint
new ContentVisibilityAutoStateChangedEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `ContentVisibilityAutoStateChangedEvent` this is always `event`.
- `options` {{optional_inline}}
  - : An object that contains the following properties:
    - `skipped`
      - : A boolean, which is set to `true` if the user agent [skips the element's contents](/en-US/docs/Web/CSS/CSS_Containment#skips_its_contents), or `false` otherwise.

## Examples

A developer would not use this constructor manually. A new `ContentVisibilityAutoStateChangedEvent` object is constructed when a handler is invoked as a result of the {{domxref("element/contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event firing.

```js
canvasElem.addEventListener('contentvisibilityautostatechanged', event => {
  // …
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("element/contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event
- [CSS Containment](/en-US/docs/Web/CSS/CSS_Containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
