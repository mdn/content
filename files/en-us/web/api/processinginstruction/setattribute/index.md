---
title: "ProcessingInstruction: setAttribute() method"
short-title: setAttribute()
slug: Web/API/ProcessingInstruction/setAttribute
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ProcessingInstruction.setAttribute
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`setAttribute()`** method of the {{domxref("ProcessingInstruction")}} interface sets the value of an attribute on the processing instruction.
If the attribute already exists, the value is updated; otherwise, a new attribute is added with the specified name and value.

## Syntax

```js-nolint
setAttribute(qualifiedName, value)
```

### Parameters

- `qualifiedName`
  - : A string containing the qualified name of the attribute whose value is to be set.

    The format of the qualified name is `prefix:localName` or `localName`, where the parts are defined as:
    - `prefix` {{optional_inline}}
      - : A "short alias" for the namespace, as returned by the {{DOMxRef("Attr.prefix")}} property.
    - `localName`
      - : The local name of the attribute, as returned by the {{DOMxRef("Attr.localName")}} property.

- `value`
  - : A string containing the value to assign to the attribute.

    Specified non-string values are automatically converted into strings.

    For boolean attributes, you should, by convention, set `value` to the empty string (`""`) or the attribute's name, with no leading or trailing whitespace.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either the [`prefix`](#prefix) or [`localName`](#localname) is not valid:
    - The `prefix` must have at least one character, and cannot contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
    - The `localName` must have at least one character, and may not contain ASCII whitespace, `NULL`, `/`, `=` or `>` (U+0000, U+002F, U+003D, or U+003E, respectively).

## Description

**`setAttribute()`** sets the value of an attribute on the specified processing instruction.
If the attribute already exists, the value is updated; otherwise, a new attribute is added with the specified name and value.

To set the value of a Boolean attribute, such as `disabled`, you can specify any value.
It doesn't matter what value you use; if the attribute is present, its value is considered to be `true`.
By convention, we enable boolean attributes by setting their value to either the name of the attribute or the empty string (`""`).
The absence of a boolean attribute means its value is `false`; you must call {{domxref("ProcessingInstruction.removeAttribute()")}} to "undo" the effect of enabling a boolean attribute.

To get the current value of an attribute, use {{domxref("ProcessingInstruction.getAttribute", "getAttribute()")}}; to remove an attribute, call {{domxref("ProcessingInstruction.removeAttribute", "removeAttribute()")}}.

## Examples

### Basic usage

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

pi.setAttribute("name", "new text");
console.log(pi);
// logs:
// <?start name="new text"?>
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
- {{domxref("ProcessingInstruction.removeAttribute()")}}
- {{domxref("ProcessingInstruction.toggleAttribute()")}}
