---
title: "ProcessingInstruction: ProcessingInstruction() constructor"
short-title: ProcessingInstruction()
slug: Web/API/ProcessingInstruction/ProcessingInstruction
page-type: web-api-constructor
browser-compat: api.ProcessingInstruction.ProcessingInstruction
---

{{APIRef("DOM")}}

The **`ProcessingInstruction()`** constructor creates a new {{domxref("ProcessingInstruction")}} object instance.

## Syntax

```js-nolint
new ProcessingInstruction(target, data)
```

### Parameters

- `target`
  - : A string representing the type of event.
- `data`
  - : A string containing any information the processing instruction should carry, after the target. The data is up to you, but it can't contain `?>`, since that closes the processing instruction.

### Return value

Processing instructions are, as the name suggests, are instructions about how to process the document. They can include stylesheets for XML documents, placeholders for HTML documents, or other processing instructions.

A new {{domxref("ProcessingInstruction")}} object, if used internally by the browser.

Developers cannot use the `ProcessingInstruction()` constructor directly to create a new `ProcessingInstruction` instance, and must use the {{domxref("document.createProcessingInstruction()")}} method instead. Attempting to use the `ProcessingInstruction()` constructor directly results in an "illegal constructor" error.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either of the following are true:
    - The [`target`](#target) value is not a valid [XML name](https://www.w3.org/TR/xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.
    - The _closing processing instruction sequence_ (`?>`) is part of the [`data`](#data) value.

- {{jsxref("TypeError")}}
  - : Thrown with the message `"Illegal constructor"` when used directly.

## Examples

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [document.createProcessingInstruction()](/en-US/docs/Web/API/Document/createProcessingInstruction)
- The [DOM API](/en-US/docs/Web/API/Document_Object_Model)
