---
title: "CSSStyleDeclaration: getPropertyValue() method"
short-title: getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
page-type: web-api-instance-method
browser-compat: api.CSSStyleDeclaration.getPropertyValue
---

{{ APIRef("CSSOM") }}

The **CSSStyleDeclaration.getPropertyValue()** method interface returns a string containing the value of a specified CSS property.

## Syntax

```js-nolint
getPropertyValue(property)
```

### Parameters

- `property`
  - : A string representing the property name (in hyphen case) to be checked.

### Return value

A string containing the value of the property. If not set, returns the empty string.

The property value is dynamically computed, not what was originally specified in the declaration. The serialization happens in the following way:

- If `property` is a shorthand property, then get all longhand properties it corresponds to. Note that shorthand properties specified in the original stylesheet were already expanded during parse time. If at least one of those longhand properties is undeclared, or their `!important` statuses differ, then the result is the empty string. Otherwise, a property value that expands to the same list of longhand property values is returned, and this shorthand value will omit as many components as possible, and reordered to match the canonical order in the formal definition if possible. If either of the above syntactic translations would be less backwards-compatible, do not perform them.
- Otherwise, the property is serialized according to its data type. Each data type has one canonical representation; for example, `<color>` values always use `rgb(R, G, B)` or `rgba(R, G, B, A)`.

In essence, the property value is _canonicalized_, ensuring that two property values with the same rendering effect compare equal even when they are declared differently.

## Examples

The following JavaScript code queries the value of the `margin` property in
a CSS selector rule:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

The returned string might differ from the value specified in the style specification of the element. For instance this styling:

```html
<style>
  p#blueish {
    color: hsl(250 90 50);
  }
</style>
<script>
  const declaration = document.styleSheets[0].cssRules[0].style;
  const value = declaration.getPropertyValue("color");
</script>
```

Will set a value `rgb(51, 13, 242);`. This is important when comparing styles by string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
