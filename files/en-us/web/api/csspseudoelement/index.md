---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPseudoElement
---

{{APIRef}}{{SeeCompatTable}}

The **`CSSPseudoElement`** interface represents a [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Instances of this interface may be obtained by calling {{DOMxRef("Element.pseudo()")}} or {{DOMxRef("CSSPseudoElement.pseudo()")}}.

## Instance properties

- {{DOMxRef("CSSPseudoElement.element")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the ultimate originating {{DOMxRef("Element")}} of the pseudo-element.
- {{DOMxRef("CSSPseudoElement.parent")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the immediate originating element of the pseudo-element.
- {{DOMxRef("CSSPseudoElement.type")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the pseudo-element selector as a string.

## Instance methods

- {{DOMxRef("CSSPseudoElement.pseudo()")}}
  - : Returns a `CSSPseudoElement` instance representing a specific [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements)

## Description

The **`CSSPseudoElement`** interface represents a [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements). You can retrieve a representation of a pseudo-element attached to a DOM element using the {{DOMxRef("Element.pseudo()")}} method, or a representation of a [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) (for example, the `::marker` in `::before::marker`) using the {{DOMxRef("CSSPseudoElement.pseudo()")}} method.

The {{DOMxRef("CSSPseudoElement.type")}} property returns a string representing the type of the pseudo-element. Supported types are:

- {{cssxref("::after")}}
- {{cssxref("::before")}}
- {{cssxref("::marker")}}

The {{DOMxRef("CSSPseudoElement.element")}} and {{DOMxRef("CSSPseudoElement.parent")}} properties sound similar, but they have a difference in functionality:

- The `element` property always returns an {{domxref("Element")}}: A reference to the ultimate originating element of the pseudo-element or nested pseudo-element.
- The `parent` property returns a reference to the pseudo-element's _immediate_ originating element: This can be either an {{DOMxRef("Element")}}, or a `CSSPseudoElement` in the case of a [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements).

## Examples

### Basic example using Element.pseudo

Using pseudo-elements, most modern browsers will automatically add quotation marks around text inside a {{HTMLElement('q')}} element. (A style rule may be needed to add quotation marks in older browsers.) The example below demonstrates the basic properties of the `CSSPseudoElement` object representing the opening quotation mark.

```js
const element = document.querySelector("q");
const cssPseudoElement = element.pseudo("::before");
console.log(cssPseudoElement.element); // Outputs [object HTMLQuoteElement]
console.log(cssPseudoElement.type); // Outputs '::before'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef('Element.pseudo()')}}
- {{DOMxRef('Web Animations API', '', '', 'true')}}
- {{DOMxRef('Element.animate()')}}
- [CSS pseudo-elements](/en-US/docs/Web/CSS/Guides/Pseudo-elements) module
