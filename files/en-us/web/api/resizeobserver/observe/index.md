---
title: "ResizeObserver: observe() method"
short-title: observe()
slug: Web/API/ResizeObserver/observe
page-type: web-api-instance-method
browser-compat: api.ResizeObserver.observe
---

{{APIRef("Resize Observer API")}}

The **`observe()`** method of the
{{domxref("ResizeObserver")}} interface starts observing the specified
{{domxref('Element')}} or {{domxref('SVGElement')}}.

## Syntax

```js-nolint
observe(target)
observe(target, options)
```

### Parameters

- `target`
  - : A reference to an {{domxref('Element')}} or {{domxref('SVGElement')}} to be
    observed.
- `options` {{optional_inline}}

  - : An options object allowing you to set options for the observation. Currently this
    only has one possible option that can be set:

    - `box`

      - : Sets which box model the observer will observe changes to. Possible values are:

        - `content-box` (the default)
          - : Size of the content area as defined in CSS.
        - `border-box`
          - : Size of the box border area as defined in CSS.
        - `device-pixel-content-box`
          - : The size of the content area as defined in CSS, in device pixels, before applying any CSS transforms on the element or its ancestors.

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
```

An `observe()` call with an options object would look like so:

```js
resizeObserver.observe(divElem, { box: "border-box" });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
