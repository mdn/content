---
title: "Element: hasAttribute() method"
short-title: hasAttribute()
slug: Web/API/Element/hasAttribute
page-type: web-api-instance-method
browser-compat: api.Element.hasAttribute
---

{{APIRef("DOM")}}

The **`Element.hasAttribute()`** method returns a
**Boolean** value indicating whether the specified element has the
specified attribute or not.

## Syntax

```js-nolint
hasAttribute(name)
```

### Parameters

- `name`
  - : is a string representing the name of the attribute.

### Return value

A boolean.

## Examples

```js
const foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // do something
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttributes()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
