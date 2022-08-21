---
title: CSSPseudoElement
slug: Web/API/CSSPseudoElement
page-type: web-api-interface
tags:
  - API
  - CSSPseudoElement
  - Element
  - Experimental
  - Interface
  - Reference
browser-compat: api.CSSPseudoElement
---
{{APIRef}}{{SeeCompatTable}}

The **`CSSPseudoElement`** interface represents a pseudo-element that may be the target of an event or animated using the {{DOMxRef('Web Animations API', '', '', 'true')}}. Instances of this interface may be obtained by calling {{DOMxRef('Element.pseudo()')}}.

{{InheritanceDiagram}}

## Properties

- {{DOMxRef('CSSPseudoElement.element')}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the originating/parent {{DOMxRef('Element')}} of the pseudo-element.
- {{DOMxRef('CSSPseudoElement.type')}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the pseudo-element selector as a string.

## Methods

_`CSSPseudoElement` extends {{DOMxRef('EventTarget')}}, so it inherits the following methods:_

- {{domxref("EventTarget.addEventListener()")}}
  - : Registers an event handler of a specific event type on the pseudo-element.
- {{domxref("EventTarget.dispatchEvent()")}}
  - : Dispatches an event to this pseudo-element.
- {{domxref("EventTarget.removeEventListener()")}}
  - : Removes an event listener from the pseudo-element.

## Examples

### Basic example using Element.pseudo

Using pseudo-elements, most modern browsers will automatically add quotation marks around text inside a {{HTMLElement('q')}} element. (A style rule may be needed to add quotation marks in older browsers.) The example below demonstrates the basic properties of the `CSSPseudoElement` object representing the opening quotation mark.

```js
const element = document.querySelector('q');
const cssPseudoElement = element.pseudo('::before');
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
