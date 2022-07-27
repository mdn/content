---
title: CSSImageValue
slug: Web/API/CSSImageValue
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSImageValue
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSImageValue
---
{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

The **`CSSImageValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) represents values for properties that take an image, for example {{cssxref('background-image')}}, {{cssxref('list-style-image')}}, or {{cssxref('border-image-source')}}.

The CSSImageValue object represents an [`<image>`](/en-US/docs/Web/CSS/image) that involves a URL, such as [`url()`](</en-US/docs/Web/CSS/url>) or [`image()`](</en-US/docs/Web/CSS/image>), but not [`linear-gradient()`](</en-US/docs/Web/CSS/gradient/linear-gradient>) or [`element()`](</en-US/docs/Web/CSS/element>).

{{InheritanceDiagram}}

## Properties

None.

## Methods

_Inherits methods from {{domxref('CSSStyleValue')}}._

## Examples

We create an element

```html
<button>Magic Wand</button>
```

We add some CSS, including a background image requesting a binary file:

```css
button {
  display: inline-block;
  min-height: 100px; min-width: 100px;
  background: no-repeat 5% center url(magicwand.png) aqua;
}
```

We get the element's style map. We then get() the background-image from the stylemap and stringify it:

```js
// get the element
const button = document.querySelector('button');

// Retrieve all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();

// Return the CSSImageValue Example
console.log(allComputedStyles.get('background-image'));
console.log(allComputedStyles.get('background-image').toString());
```

{{EmbedLiveSample("Examples", 120, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
