---
title: MathMLElement
slug: Web/API/MathMLElement
tags:
  - API
  - Interface
  - MathML
  - MathMLElement
  - Reference
browser-compat: api.MathMLElement
---
{{APIRef("MathML")}}

The **`MathMLElement`** interface represents any [MathML](/en-US/docs/Web/MathML) element.

## Properties

_Also inherits properties from: {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("Element")}}, {{DOMxRef("GlobalEventHandlers")}}_

- {{DOMxRef("MathMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("StylePropertyMap")}} representing the declarations of the element's `style` attribute.
- {{DOMxRef("MathMLElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's `style` attribute.

## Methods

_This interface has no methods, but inherits methods from: {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("Element")}}, {{DOMxRef("GlobalEventHandlers")}}_

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
document.querySelector('msqrt').constructor.name; // MathMLElement
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("SVGElement")}}
