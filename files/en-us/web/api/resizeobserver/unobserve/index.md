---
title: "ResizeObserver: unobserve() method"
short-title: unobserve()
slug: Web/API/ResizeObserver/unobserve
page-type: web-api-instance-method
browser-compat: api.ResizeObserver.unobserve
---

{{APIRef("Resize Observer API")}}

The **`unobserve()`** method of the
{{domxref("ResizeObserver")}} interface ends the observing of a specified
{{domxref('Element')}} or {{domxref('SVGElement')}}.

## Syntax

```js-nolint
unobserve(target)
```

### Parameters

- `target`
  - : A reference to an {{domxref('Element')}} or {{domxref('SVGElement')}} to be unobserved.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

None.

## Examples

The following snippet is taken from the [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)
([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) example:

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // Checking for chrome as using a non-standard array
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize[0].inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize[0].inlineSize / 600,
        )}rem`;
      } else {
        h1Elem.style.fontSize = `${Math.max(
          1.5,
          entry.contentBoxSize.inlineSize / 200,
        )}rem`;
        pElem.style.fontSize = `${Math.max(
          1,
          entry.contentBoxSize.inlineSize / 600,
        )}rem`;
      }
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
