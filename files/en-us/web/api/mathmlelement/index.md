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
- {{DOMxRef("MathMLElement.autofocus")}}
  - : Whether the control should be focused when the page loads, or when a {{htmlelement("dialog")}} or [popover](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) become shown.
- {{DOMxRef("MathMLElement.dataset")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("DOMStringMap")}} object which provides a list of key/value pairs of named data attributes which correspond to [custom data attributes](/en-US/docs/Web/HTML/How_to/Use_data_attributes) attached to the element. This works just like HTML's {{DOMxRef("HTMLElement.dataset")}} property and HTML's [`data-*`](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) global attribute.
- {{DOMxRef("MathMLElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's `style` attribute.
- {{DOMxRef("MathMLElement.tabIndex")}}
  - : The position of the element in the tabbing order.

## Instance methods

_This interface also inherits methods from its parent, {{DOMxRef("Element")}}_.

- {{DOMxRef("MathMLElement.blur()")}}
  - : Removes keyboard focus from the currently focused element.
- {{DOMxRef("MathMLElement.focus()")}}
  - : Makes the element the current keyboard focus.

## Examples

### MathML

```html
<math>
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
