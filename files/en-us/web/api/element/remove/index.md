---
title: Element.remove()
slug: Web/API/Element/remove
tags:
  - API
  - Element
  - DOM
  - Method
browser-compat: api.Element.remove
---
{{APIRef("DOM")}}

The **`Element.remove()`** method removes the element from the
tree it belongs to.

## Syntax

```js
remove()
```

## Examples

### Using `remove()`

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
```

```js
var el = document.getElementById('div-02');
el.remove(); // Removes the div with the 'div-02' id
```

### `Element.remove()` is unscopable

The `remove()` method is not scoped into the `with` statement.
See {{jsxref("Symbol.unscopables")}} for more information.

```js
with(node) {
  remove();
}
// ReferenceError: remove is not defined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill](https://github.com/chenzhenxi/element-remove)
