---
title: MathMLElement
slug: Web/API/MathMLElement
page-type: web-api-interface
browser-compat: api.MathMLElement
---

{{APIRef("MathML")}}

The **`MathMLElement`** interface represents any [MathML](/en-US/docs/Web/MathML) element.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent, {{DOMxRef("Element")}}_.

- {{DOMxRef("MathMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("StylePropertyMap")}} representing the declarations of the element's `style` attribute.
- {{DOMxRef("MathMLElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's `style` attribute.

## Instance methods

_This interface has no methods, but inherits methods from its parent, {{DOMxRef("Element")}}_.

## Examples

### MathML

```html
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

### JavaScript

```js
document.querySelector("msqrt").constructor.name; // MathMLElement
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("SVGElement")}}
