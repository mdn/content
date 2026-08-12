---
title: "ProcessingInstruction: toggleAttribute() method"
short-title: toggleAttribute()
slug: Web/API/ProcessingInstruction/toggleAttribute
page-type: web-api-instance-method
browser-compat: api.ProcessingInstruction.toggleAttribute
---

{{APIRef("DOM")}}

The **`toggleAttribute()`** method of the {{domxref("ProcessingInstruction")}} interface toggles a Boolean attribute on the given processing instruction, removing it if present and adding it if not present.

## Syntax

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### Parameters

- `name`
  - : A string specifying the name of the attribute to be toggled.
    The attribute name is automatically converted to all lower-case when `toggleAttribute()` is called on an HTML processing instruction in an HTML document.
- `force` {{optional_inline}}
  - : A boolean value which has the following effects:
    - if not specified at all, the `toggleAttribute` method "toggles" the attribute named `name` — removing it if it is present, or else adding it if it is not present
    - if true, the `toggleAttribute` method adds an attribute named `name`
    - if false, the `toggleAttribute` method removes the attribute named `name`

### Return value

`true` if attribute **`name`** is eventually
present, and `false` otherwise.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The specified attribute `name` contains one or more characters that are not valid in attribute names.
    The `name` must have at least one character, and may not contain ASCII whitespace, `NULL`, `/`, `=` or `>` (U+0000, U+002F, U+003D, or U+003E, respectively).

## Examples

```js
const pi = document.createProcessingInstruction("start", 'name=""');

pi.toggleAttribute("name");
pi.toggleAttribute("surname");
console.log(pi);
// logs:
// <?start surname?>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ProcessingInstruction.hasAttribute()")}}
- {{domxref("ProcessingInstruction.hasAttributes()")}}
- {{domxref("ProcessingInstruction.getAttribute()")}}
- {{domxref("ProcessingInstruction.getAttributeNames()")}}
- {{domxref("ProcessingInstruction.setAttribute()")}}
- {{domxref("ProcessingInstruction.removeAttribute()")}}
