---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - Experimental
  - Houdini
  - Interface
  - Reference
  - StylePropertyMap
browser-compat: api.StylePropertyMap
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`StylePropertyMap`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model_experimental) provides a representation of a CSS declaration block that is an alternative to {{DOMxRef("CSSStyleDeclaration")}}.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{DOMxRef("StylePropertyMapReadOnly")}}._

## Methods

_Inherits methods from its parent, {{DOMxRef("StylePropertyMapReadOnly")}}._

- {{DOMxRef("StylePropertyMap.append()")}} {{Experimental_Inline}}
  - : Adds a new CSS declaration to the `StylePropertyMap` with the given property and value.
- {{DOMxRef("StylePropertyMap.clear()")}} {{Experimental_Inline}}
  - : Removes all declarations in the `StylePropertyMap`.
- {{DOMxRef("StylePropertyMap.delete()")}} {{Experimental_Inline}}
  - : Removes the CSS declaration with the given property.
- {{DOMxRef("StylePropertyMap.set()")}} {{Experimental_Inline}}
  - : Changes the CSS declaration with the given property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
