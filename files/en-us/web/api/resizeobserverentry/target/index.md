---
title: ResizeObserverEntry.target
slug: Web/API/ResizeObserverEntry/target
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
  - target
browser-compat: api.ResizeObserverEntry.target
---
{{APIRef("Resize Observer API")}}

The **`target`** read-only property of the
{{domxref("ResizeObserverEntry")}} interface returns a reference to the
{{domxref('Element')}} or {{domxref('SVGElement')}} that is being observed.

## Syntax

```js
var element = ResizeObserverEntry.target;
var svgElement = ResizeObserverEntry.target;
```

### Value

An {{domxref('Element')}} or {{domxref('SVGElement')}} representing the element being
observed.

## Examples

The following snippet is taken from the [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
([see
source](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-border-radius.html)) example. This example includes a green box, sized as a percentage of the
viewport size. When the viewport size is changed, the box's rounded corners change in
proportion to the size of the box. We could just implement this using
{{cssxref("border-radius")}} with a percentage, but that quickly leads to ugly-looking
elliptical corners; this solution gives you nice square corners that scale with the box
size.

To grab a reference to the observed element so we can update its
{{cssxref("border-radius")}} value after each change, we make use of the
`target` property of each entry —
 `entry.target.style.borderRadius`.

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if(entry.contentBoxSize) {
      entry.target.style.borderRadius = Math.min(100, (entry.contentBoxSize.inlineSize/10) +
                                                      (entry.contentBoxSize.blockSize/10)) + 'px';
    } else {
      entry.target.style.borderRadius = Math.min(100, (entry.contentRect.width/10) +
                                                      (entry.contentRect.height/10)) + 'px';
    }
  }
});

resizeObserver.observe(document.querySelector('div'));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
