---
title: CSSStyleDeclaration
slug: Web/API/CSSStyleDeclaration
page-type: web-api-interface
browser-compat: api.CSSStyleDeclaration
---

{{APIRef("CSSOM")}}

The **`CSSStyleDeclaration`** interface is the base class for objects that represent CSS declaration blocks with different supported sets of CSS style information:

- {{domxref("CSSStyleProperties")}} — CSS styles declared in stylesheet ({{domxref("CSSStyleRule.style")}}), inline styles for an element such as {{DOMxRef("HTMLElement/style","HTMLElement")}}, {{domxref("SVGElement/style","SVGElement")}}, and {{domxref("MathMLElement/style","MathMLElement")}}, or the computed style for an element returned by {{DOMxRef("Window.getComputedStyle()")}}.
- {{domxref("CSSPageDescriptors")}} — Styles for CSS [at-rules](/en-US/docs/Web/CSS/Guides/Syntax/At-rules).

The interface exposes style information and various style-related methods and properties.
For example, it provides {{DOMxRef("CSSStyleDeclaration/getPropertyValue","getPropertyValue()" )}} for getting the value of a dash-named CSS property, such as `border-top`, which can't be directly accessed using dot notation because of the hyphens in its name.

> [!NOTE]
> Earlier versions of the specification used `CSSStyleDeclaration` to represent all CSS declaration blocks, and some browsers and browser versions may still do so (check the browser compatibility tables for the above APIs).
> Generally the same website code will be functional in both old and new versions, but some properties returned in a `CSSStyleDeclaration` may not be relevant in a particular context.

## Attributes

- {{DOMxRef("CSSStyleDeclaration.cssText")}}
  - : Textual representation of the declaration block, if and only if it is exposed via {{DOMxRef("HTMLElement.style")}}.
    Setting this attribute changes the inline style.
    If you want a text representation of a computed declaration block, you can get it with `JSON.stringify()`.
- {{DOMxRef("CSSStyleDeclaration.length")}} {{ReadOnlyInline}}
  - : The number of properties.
    See the {{DOMxRef("CSSStyleDeclaration.item()", 'item()')}} method below.
- {{DOMxRef("CSSStyleDeclaration.parentRule")}} {{ReadOnlyInline}}
  - : The containing {{DOMxRef("CSSRule")}}.

### CSS Properties

- {{DOMxRef("CSSStyleDeclaration.cssFloat", "CSSStyleDeclaration.cssFloat")}} {{deprecated_inline}}
  - : Special alias for the {{CSSxRef("float")}} CSS property.
- `CSSStyleDeclaration` named properties
  - : Dashed and camel-cased attributes for all supported CSS properties.

## Instance methods

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
  - : **Only supported via getComputedStyle in Firefox.** Returns the property value as a {{DOMxRef("CSSPrimitiveValue")}} or `null` for [shorthand properties](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties).

## Example

```js
const styleObj = document.styleSheets[0].cssRules[0].style;
console.log(styleObj.cssText);

for (let i = styleObj.length; i--; ) {
  const nameString = styleObj[i];
  styleObj.removeProperty(nameString);
}

console.log(styleObj.cssText);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
