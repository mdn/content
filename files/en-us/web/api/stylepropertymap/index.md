---
title: StylePropertyMap
slug: Web/API/StylePropertyMap
page-type: web-api-interface
browser-compat: api.StylePropertyMap
---

{{APIRef("CSS Typed Object Model API")}}

The **`StylePropertyMap`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) provides a representation of a CSS declaration block that is an alternative to {{DOMxRef("CSSStyleDeclaration")}}.

{{InheritanceDiagram}}

> [!NOTE]
> This interface is only available on the window thread; unlike other interfaces in this API it cannot be accessed in {{domxref("Worker")}} or {{domxref("Worklet")}} contexts.
> Worklets receive a read-only snapshot of an element's style through {{domxref("StylePropertyMapReadOnly")}}.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("StylePropertyMapReadOnly")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("StylePropertyMapReadOnly")}}._

- {{DOMxRef("StylePropertyMap.append()")}}
  - : Adds a new CSS declaration to the `StylePropertyMap` with the given property and value.
- {{DOMxRef("StylePropertyMap.clear()")}}
  - : Removes all declarations in the `StylePropertyMap`.
- {{DOMxRef("StylePropertyMap.delete()")}}
  - : Removes the CSS declaration with the given property.
- {{DOMxRef("StylePropertyMap.set()")}}
  - : Changes the CSS declaration with the given property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
