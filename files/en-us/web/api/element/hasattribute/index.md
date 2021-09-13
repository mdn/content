---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.hasAttribute
---
{{APIRef("DOM")}}

The **`Element.hasAttribute()`** method returns a
**Boolean** value indicating whether the specified element has the
specified attribute or not.

## Syntax

```js
var result = element.hasAttribute(name);
```

- `result`
  - : holds the return value `true` or `false`.
- `name`
  - : is a string representing the name of the attribute.

## Example

```js
var foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
    // do something
}
```

## Polyfill

```js
;(function(prototype) {
    prototype.hasAttribute = prototype.hasAttribute || function(name) {
        return !!(this.attributes[name] &&
                  this.attributes[name].specified);
    }
})(Element.prototype);
```

## Notes

{{DOMAttributeMethods}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
