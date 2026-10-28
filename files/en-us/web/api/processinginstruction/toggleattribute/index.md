---
title: "ProcessingInstruction: toggleAttribute() method"
short-title: toggleAttribute()
slug: Web/API/ProcessingInstruction/toggleAttribute
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ProcessingInstruction.toggleAttribute
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`toggleAttribute()`** method of the {{domxref("ProcessingInstruction")}} interface toggles a boolean attribute on the given processing instruction, removing it if present and adding it if not present.

## Syntax

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### Parameters

- `name`
  - : A string specifying the name of the attribute to be toggled.
- `force` {{optional_inline}}
  - : A boolean value that has the following effects:
    - If not specified at all, the attribute is removed if it is present and added if it is not present.
    - If set to `true`, the attribute is added if it is not present, but it isn't removed if it is present.
    - If set to `false`, the attribute is removed if it is present, but it isn't added if it is not present.

### Return value

`true` if the attribute is present after the `toggleAttribute()` operation completes, and `false` if not.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The specified attribute `name` contains one or more characters that are not valid in attribute names.
    The `name` must have at least one character, and may not contain ASCII whitespace, `NULL`, `/`, `=` or `>` (U+0000, U+002F, U+003D, or U+003E, respectively).

## Examples

### Basic usage

```js
const pi = document.createProcessingInstruction("start", 'name=""');

pi.toggleAttribute("name");
pi.toggleAttribute("surname");
console.log(pi);
// logs:
// <?start surname=""?>
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
