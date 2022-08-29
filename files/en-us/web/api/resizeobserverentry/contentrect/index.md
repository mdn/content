---
title: ResizeObserverEntry.contentRect
slug: Web/API/ResizeObserverEntry/contentRect
page-type: web-api-instance-property
tags:
  - API
  - Bounding Box
  - Property
  - Reference
  - Resize Observer API
  - ResizeObserver
  - ResizeObserverEntry
  - content box
  - observers
browser-compat: api.ResizeObserverEntry.contentRect
---
{{APIRef("Resize Observer API")}}

The `contentRect` read-only property of the
{{domxref("ResizeObserverEntry")}} interface returns a {{domxref('DOMRectReadOnly')}}
object containing the new size of the observed element when the callback is run. Note
that this is better supported than {{domxref("ResizeObserverEntry.borderBoxSize")}} or
{{domxref("ResizeObserverEntry.contentBoxSize")}}, but it is left over from an earlier
implementation of the Resize Observer API, is still included in the spec for web compat
reasons, and may be deprecated in future versions.

## Value

A {{domxref('DOMRectReadOnly')}} object containing the new size of the element
indicated by the {{domxref("ResizeObserverEntry.target", "target")}} property.

If the `target` is an HTML {{domxref("Element")}}, the returned
`contentRect` is the element's content box. If the `target` is an
{{domxref("SVGElement")}}, the returned `contentRect` is the SVG's bounding
box.

## Examples

The following snippet is taken from the [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)
([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) example. This uses a simple feature detection test to see if the browser
supports the newer {{domxref("ResizeObserverEntry.contentBoxSize")}} property — if so,
it uses that to get the sizing data it needs. If not, it uses `contentRect`.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      h1Elem.style.fontSize = `${Math.max(1.5, entry.contentBoxSize.inlineSize / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentBoxSize.inlineSize / 600)}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(1.5, entry.contentRect.width / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
