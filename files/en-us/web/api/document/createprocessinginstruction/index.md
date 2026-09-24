---
title: "Document: createProcessingInstruction() method"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
page-type: web-api-instance-method
browser-compat: api.Document.createProcessingInstruction
---

{{APIRef("DOM")}}

The **`createProcessingInstruction()`** method of the {{domxref("Document")}} interface creates a new {{domxref("ProcessingInstruction")}} object and returns it.

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameters

- `target`
  - : A string containing the first part of the processing instruction (i.e., `<?target … ?>`)
- `data`
  - : A string containing any information the processing instruction should carry, after the target. The data can contain any character pattern, except that it can't contain `?>`, since that closes the processing instruction.

### Return value

- A {{ domxref("ProcessingInstruction") }} node.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either of the following are true:
    - The [`target`](#target) value is not a valid [XML name](https://www.w3.org/TR/xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.
    - The _closing processing instruction sequence_ (`?>`) is included as part of the [`data`](#data) value.

## Description

The `createProcessingInstruction()` method creates a new processing instruction. The new node will usually be inserted into a document to accomplish a task with it, using a method such as {{ domxref("node.insertBefore") }}.

Initially, `ProcessingInstruction` nodes were only supported in XML documents, not in HTML documents. In non-supporting browsers, a processing instruction will be interpreted as a comment and represented as a {{domxref("Comment")}} object in the DOM tree.

## Examples

### Basic usage

This example creates an `<xml-stylesheet>` processing instruction and adds it to the top of an example XML document.

```js
const doc = new DOMParser().parseFromString("<foo />", "application/xml");
const pi = doc.createProcessingInstruction(
  "xml-stylesheet",
  'href="mycss.css"',
);

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// Displays: <?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
