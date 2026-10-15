---
title: "CSSStyleValue: toString() method"
short-title: toString()
slug: Web/API/CSSStyleValue/toString
page-type: web-api-instance-method
browser-compat: api.CSSStyleValue.toString
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`toString()`** method of the {{domxref("CSSStyleValue")}} interface is a {{Glossary("stringifier")}} that returns the value formatted as a string of standard CSS text.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string.

## Description

The exact serialization of the object to a string depends on how the `CSSStyleValue` object was obtained:

- If the object was created by parsing a CSS string, such as with {{domxref("CSSStyleValue.parse_static", "CSSStyleValue.parse()")}}, the method returns the original string that was parsed.
- If the object was constructed directly, such as with a [`CSS` factory function](/en-US/docs/Web/API/CSS/factory_functions_static) or a subclass constructor, the returned string is generated according to serialization rules specific to that subclass.
- If the object was read from the CSSOM, such as with {{domxref("Element.computedStyleMap()")}} or {{domxref("HTMLElement.attributeStyleMap")}}, the returned string follows the CSSOM serialization rules.

For more information about serialization rules see [When and how values are serialized](/en-US/docs/Web/API/CSS_Object_Model/CSS_value_serialization#when_and_how_values_are_serialized) in _CSS value serialization_.

## Examples

### Basic usage

```js
// Parsed from a string: returns the original string
const length1 = CSSStyleValue.parse("42.0px");
length1.toString(); // "42.0px"

// Constructed directly with a CSS factory function: subclass-specific serialization
const length2 = CSS.px(42.0);
length2.toString(); // "42px"

// Read from the CSSOM: follows CSSOM serialization rules
const element = document.createElement("div");
element.style.width = "42.0px";
const length3 = element.attributeStyleMap.get("width");
length3.toString(); // "42px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- {{domxref("CSSStyleValue.parse_static", "CSSStyleValue.parse()")}}
- {{domxref("CSSStyleValue.parseAll_static", "CSSStyleValue.parseAll()")}}
