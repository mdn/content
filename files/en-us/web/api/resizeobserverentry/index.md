---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
tags:
  - API
  - Bounding Box
  - Interface
  - Reference
  - Resize Observer API
  - ResizeObserver
  - ResizeObserverEntry
  - content box
  - observers
browser-compat: api.ResizeObserverEntry
---
{{APIRef("Resize Observer API")}}

The **`ResizeObserverEntry`** interface represents the object passed to the {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} constructor's callback function, which allows you to access the new dimensions of the {{domxref("Element")}} or {{domxref("SVGElement")}} being observed.

## Properties

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{readonlyinline}}
  - : An object containing the new border box size of the observed element when the callback is run.
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{readonlyinline}}
  - : An object containing the new content box size of the observed element when the callback is run.
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{readonlyinline}}
  - : An object containing the new content box size in device pixels of the observed element when the callback is run.
- {{domxref('ResizeObserverEntry.contentRect')}} {{readonlyinline}}
  - : A {{domxref('DOMRectReadOnly')}} object containing the new size of the observed element when the callback is run. Note that this is better supported than the above two properties, but it is left over from an earlier implementation of the Resize Observer API, is still included in the spec for web compat reasons, and may be deprecated in future versions.
- {{domxref('ResizeObserverEntry.target')}} {{readonlyinline}}
  - : A reference to the {{domxref('Element')}} or {{domxref("SVGElement")}} being observed.

> **Note:** The content box is the box in which content can be placed, meaning the border box minus the padding and border width. The border box encompasses the content, padding, and border. See [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) for further explanation.

## Methods

None.

## Examples

The following snippet is taken from the [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([see source](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)) example. This uses a simple feature detection test to see if the browser supports the newer `contentBoxSize` property — if so, it uses that to get the sizing data it needs. If not, it uses the older `contentRect` property.

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if(entry.contentBoxSize) {
      h1Elem.style.fontSize = Math.max(1.5, entry.contentBoxSize.inlineSize/200) + 'rem';
      pElem.style.fontSize = Math.max(1, entry.contentBoxSize.inlineSize/600) + 'rem';
    } else {
      h1Elem.style.fontSize = Math.max(1.5, entry.contentRect.width/200) + 'rem';
      pElem.style.fontSize = Math.max(1, entry.contentRect.width/600) + 'rem';
    }
  }
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
