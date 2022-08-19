---
title: CSS
slug: Web/API/CSS
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - Interface
  - Painting
  - Reference
browser-compat: api.CSS
---
{{APIRef("CSSOM")}}

The **`CSS`** interface holds useful CSS-related methods. No objects with this interface are implemented: it contains only static methods and is therefore a utilitarian interface.

## Properties

_The CSS interface is a utility interface and no object of this type can be created: only static properties are defined on it._

### Static properties

- {{DOMxRef("CSS.paintWorklet")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Provides access to the Worklet responsible for all the classes related to painting.

## Methods

_The CSS interface is a utility interface and no object of this type can be created: only static methods are defined on it._

### Static methods

_No inherited static methods_.

- {{DOMxRef("CSS.registerProperty()")}} {{Experimental_Inline}}
  - : Registers {{cssxref('--*', 'custom properties')}}, allowing for property type checking, default values, and properties that do or do not inherit their value.
- {{DOMxRef("CSS.supports()")}}
  - : Returns a boolean value indicating if the pair _property-value_, or the condition, given in parameter is supported.
- {{DOMxRef("CSS.escape()")}}
  - : Can be used to escape a string mostly for use as part of a CSS selector.
- {{DOMxRef("CSS.factory_functions", 'CSS factory functions')}}

  - : Can be used to return a new [`CSSUnitValue`](/en-US/docs/Web/API/CSSUnitValue) with a value of the parameter number of the units of the name of the factory function method used.

    ```js
    CSS.em(3) // CSSUnitValue {value: 3, unit: "em"}
    ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
