---
title: Element.toggleAttribute()
slug: Web/API/Element/toggleAttribute
tags:
  - API
  - Element
  - Method
  - Reference
browser-compat: api.Element.toggleAttribute
---
{{APIRef("DOM")}}

The **`toggleAttribute()`** method of the
{{domxref("Element")}} interface toggles a Boolean attribute (removing it if it is
present and adding it if it is not present) on the given element.

## Syntax

```js
toggleAttribute(name);
toggleAttribute(name, force);
```

### Parameters

- `name`
  - : A {{domxref("DOMString")}} specifying the name of the attribute to be toggled. The
    attribute name is automatically converted to all lower-case when
    `toggleAttribute()` is called on an HTML element in an HTML document.
- `force` {{optional_inline}}
  - : A boolean value which has the following effects:
    - if not specified at all, the `toggleAttribute` method “toggles” the attribute named `name` — removing it if it is present, or else adding it if it is not present
    - if true, the `toggleAttribute` method adds an attribute named `name`
    - if false, the `toggleAttribute` method removes the attribute named `name`

### Return value

`true` if attribute **`name`** is eventually
present, and `false` otherwise.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The specified attribute `name` contains one or more characters which
    are not valid in attribute names.

## Example

In the following example, `toggleAttribute()` is used to toggle the
`disabled` attribute of an {{HTMLElement("input")}}.

### HTML

```html
<input value="text">
<button>toggleAttribute("disabled")</button>
```

### JavaScript

```js
var button = document.querySelector("button");
var input = document.querySelector("input");

button.addEventListener("click", function(){
  input.toggleAttribute("disabled");
});
```

### Result

{{ EmbedLiveSample('Example', '300', '50') }}

{{DOMAttributeMethods}}

## Polyfill

```js
if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function(name, force) {
    if(force !== void 0) force = !!force

    if (this.hasAttribute(name)) {
      if (force) return true;

      this.removeAttribute(name);
      return false;
    }
    if (force === false) return false;

    this.setAttribute(name, "");
    return true;
  };
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
