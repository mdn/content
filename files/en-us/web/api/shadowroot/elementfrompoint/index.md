---
title: "ShadowRoot: elementFromPoint() method"
short-title: elementFromPoint()
slug: Web/API/ShadowRoot/elementFromPoint
page-type: web-api-instance-method
browser-compat: api.ShadowRoot.elementFromPoint
---

{{APIRef("DOM")}}{{Non-standard_Header}}

The **`elementFromPoint()`** method, available on the {{domxref("ShadowRoot")}} object, returns the topmost shadowroot element at the specified coordinates relative to the viewport that does not have {{cssxref("pointer-events")}} set to `none`.

If the specified point is outside the bounds of the shadowRoot, the result is `undefined`.

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameters

- `x`
  - : The horizontal coordinate of a point, relative to the left edge of the current
    {{Glossary("viewport")}}.
- `y`
  - : The vertical coordinate of a point, relative to the top edge of the current
    viewport.

### Return value

An {{domxref("Element")}}; the topmost shadowRoot object located at the specified coordinates, if any.

## Examples

In this example, assuming the existence of a {{htmlelement("template")}} in the HTML, we define a `<my-custom-element>` and, if the custom element abuts the top-left corner of the viewport, the topmost element in the top-left corner of that custom element is set to have a thin, dashed red border.

```js
customElements.define(
  "my-custom-element",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-custom-element-template");
      let templateContent = template.content;
      const sRoot = this.attachShadow({ mode: "open" });
      sRoot.appendChild(templateContent.cloneNode(true));
      let srElement = this.shadowRoot.elementFromPoint(0, 0);
      srElement.style.border = "1px dashed red";
    }
  },
);
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ShadowRoot.elementsFromPoint()")}}
- {{domxref("Document.elementFromPoint()")}}
