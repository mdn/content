---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
page-type: web-api-interface
browser-compat: api.ResizeObserverEntry
---

{{APIRef("Resize Observer API")}}

The **`ResizeObserverEntry`** interface represents the object passed to the {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} constructor's callback function, which allows you to access the new dimensions of the {{domxref("Element")}} or {{domxref("SVGElement")}} being observed.

## Instance properties

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{ReadOnlyInline}}
  - : An array of objects containing the new border box size of the observed element when the callback is run.
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{ReadOnlyInline}}
  - : An array of objects containing the new content box size of the observed element when the callback is run.
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{ReadOnlyInline}}
  - : An array of objects containing the new content box size in device pixels of the observed element when the callback is run.
- {{domxref('ResizeObserverEntry.contentRect')}} {{ReadOnlyInline}}
  - : A {{domxref('DOMRectReadOnly')}} object containing the new size of the observed element when the callback is run. Note that this is better supported than the above two properties, but it is left over from an earlier implementation of the Resize Observer API, is still included in the spec for web compat reasons, and may be deprecated in future versions.
- {{domxref('ResizeObserverEntry.target')}} {{ReadOnlyInline}}
  - : A reference to the {{domxref('Element')}} or {{domxref("SVGElement")}} being observed.

> **Note:** The content box is the box in which content can be placed, meaning the border box minus the padding and border width. The border box encompasses the content, padding, and border. See [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) for further explanation.

## Instance methods

None.

## Examples

The following snippet is taken from the [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) example.

Note that the code covers three different compatibility cases:

- Some old browsers may support `contentRect` but not `contentBoxSize`.
- Old versions of Firefox support `contentBoxSize`, but incorrectly implemented it as a single object rather than an array.
- Modern browsers support `contentBoxSize` as an array of objects, to enable them to report box sizes for fragmented elements (for example, in a multi-column scenario).

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
        // ...but old versions of Firefox treat it as a single item
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize.inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize.inlineSize / 600) + "rem";
      }
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
