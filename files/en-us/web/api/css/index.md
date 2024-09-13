---
title: CSS
slug: Web/API/CSS
page-type: web-api-interface
browser-compat: api.CSS
spec-urls:
  - https://drafts.csswg.org/cssom/#namespacedef-css
  - https://www.w3.org/TR/css-properties-values-api-1/
---

{{APIRef("CSSOM")}}

The **`CSS`** interface holds useful CSS-related methods. No objects with this interface are implemented: it contains only static methods and is therefore a utilitarian interface.

## Static properties

- {{DOMxRef("CSS/highlights_static", "CSS.highlights")}}
  - : Provides access to the `HighlightRegistry` used to style arbitrary text ranges using the {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}}.
- {{DOMxRef("CSS/paintWorklet_static", "CSS.paintWorklet")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Provides access to the Worklet responsible for all the classes related to painting.

## Instance properties

_The CSS interface is a utility interface and no object of this type can be created: only static properties are defined on it._

## Static methods

_No inherited static methods_.

- {{DOMxRef("CSS/registerProperty_static", "CSS.registerProperty()")}}
  - : Registers [custom properties](/en-US/docs/Web/CSS/--*), allowing for property type checking, default values, and properties that do or do not inherit their value.
- {{DOMxRef("CSS/supports_static", "CSS.supports()")}}
  - : Returns a boolean value indicating if the pair _property-value_, or the condition, given in parameter is supported.
- {{DOMxRef("CSS/escape_static", "CSS.escape()")}}
  - : Can be used to escape a string mostly for use as part of a CSS selector.
- [CSS factory functions](/en-US/docs/Web/API/CSS/factory_functions_static)

  - : Can be used to return a new [`CSSUnitValue`](/en-US/docs/Web/API/CSSUnitValue) with a value of the parameter number of the units of the name of the factory function method used.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instance methods

_The CSS interface is a utility interface and no object of this type can be created: only static methods are defined on it._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
