---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - CSSRule
  - Interface
  - Reference
browser-compat: api.CSSStyleDeclaration
---
{{APIRef("CSSOM")}}

The **`CSSStyleDeclaration`** interface represents an object that is a CSS declaration block, and exposes style information and various style-related methods and properties.

A `CSSStyleDeclaration` object can be exposed using three different APIs:

- Via {{DOMxRef("HTMLElement.style")}}, which deals with the inline styles of a single element (e.g., `<div style="…">`).
- Via the {{DOMxRef("CSSStyleSheet")}} API. For example, `document.styleSheets[0].cssRules[0].style` returns a `CSSStyleDeclaration` object on the first CSS rule in the document's first stylesheet.
- Via {{DOMxRef("Window.getComputedStyle()")}}, which exposes the `CSSStyleDeclaration` object as a **read-only** interface.

## Attributes

- {{DOMxRef("CSSStyleDeclaration.cssText")}}
  - : Textual representation of the declaration block, if and only if it is exposed via {{DOMxRef("HTMLElement.style")}}. Setting this attribute changes the inline style. If you want a text representation of a computed declaration block, you can get it with `JSON.stringify()`.
- {{DOMxRef("CSSStyleDeclaration.length")}} {{ReadOnlyInline}}
  - : The number of properties. See the {{DOMxRef("CSSStyleDeclaration.item()", 'item()')}} method below.
- {{DOMxRef("CSSStyleDeclaration.parentRule")}} {{ReadOnlyInline}}
  - : The containing {{DOMxRef("CSSRule")}}.

### CSS Properties

- {{DOMxRef("CSSStyleDeclaration.cssFloat", "CSSStyleDeclaration.cssFloat")}}
  - : Special alias for the {{CSSxRef("float")}} CSS property.
- {{DOMxRef("CSSStyleDeclaration.named_properties", '<code>CSSStyleDeclaration</code> named properties', "", 1)}}
  - : Dashed and camel-cased attributes for all supported CSS properties.

## Methods

- {{DOMxRef("CSSStyleDeclaration.getPropertyPriority()")}}
  - : Returns the optional priority, "important".
- {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}}
  - : Returns the property value given a property name.
- {{DOMxRef("CSSStyleDeclaration.item()")}}
  - : Returns a CSS property name by its index, or the empty string if the index is out-of-bounds.
- {{DOMxRef("CSSStyleDeclaration.removeProperty()")}}
  - : Removes a property from the CSS declaration block.
- {{DOMxRef("CSSStyleDeclaration.setProperty()")}}
  - : Modifies an existing CSS property or creates a new CSS property in the declaration block.
- {{DOMxRef("CSSStyleDeclaration.getPropertyCSSValue()")}} {{deprecated_inline}}
  - : **Only supported via getComputedStyle in Firefox.** Returns the property value as a {{DOMxRef("CSSPrimitiveValue")}} or `null` for [shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties).

## Example

```js
const styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (let i = styleObj.length; i--;) {
  const nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Properties Reference](/en-US/docs/Web/CSS/CSS_Properties_Reference)
