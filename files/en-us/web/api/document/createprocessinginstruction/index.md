---
title: "Document: createProcessingInstruction() method"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
page-type: web-api-instance-method
browser-compat: api.Document.createProcessingInstruction
---

{{APIRef("DOM")}}

`createProcessingInstruction()` generates a new [processing instruction](/en-US/docs/Web/API/ProcessingInstruction) node and returns it.

The new node usually will be inserted into an XML document in order to accomplish anything with it, such as with {{ domxref("node.insertBefore") }}.

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameters

- `piNode` is the resulting {{ domxref("ProcessingInstruction") }} node.
- `target` is a string containing the first part of the processing instruction (i.e., `<?target … ?>`)
- `data` is a string containing any information the processing instruction should carry, after the target. The data is up to you, but it can't contain `?>`, since that closes the processing instruction.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}

  - : Thrown if either of the following are true:

    - The [`target`](#target) value is not a valid [XML name](https://www.w3.org/TR/REC-xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.
    - The _closing processing instruction sequence_ (`?>`) is part of the [`data`](#data) value.

## Examples

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
