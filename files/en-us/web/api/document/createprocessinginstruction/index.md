---
title: "Document: createProcessingInstruction() method"
short-title: createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
page-type: web-api-instance-method
browser-compat: api.Document.createProcessingInstruction
---

{{APIRef("DOM")}}

`createProcessingInstruction()` generates a new [processing instruction](/en-US/docs/Web/API/ProcessingInstruction) node and returns it.

## Syntax

```js-nolint
createProcessingInstruction(target, data)
```

### Parameters

- `target`
  - : A string containing the first part of the processing instruction (i.e., `<?target … ?>`)
- `data`
  - : A string containing any information the processing instruction should carry, after the target. The data is up to you, but it can't contain `?>`, since that closes the processing instruction.

HTML also has [additional restrictions on the `target` name](https://html.spec.whatwg.org/multipage/parsing.html#processing-instruction-target-state) for backwards compatibility. Effectively, it must match `[A-Za-z_][-_A-Za-z0-9]*` and not be prefixed with `xml` or the `InvalidCharacterError` exception is thrown. Processing instructions with invalid names in HTML documents are parsed as comments.

### Return value

- The resulting {{ domxref("ProcessingInstruction") }} node.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either of the following are true:
    - The [`target`](#target) value is not a valid [XML name](https://www.w3.org/TR/xml/#dt-name); for example, it starts with a number, hyphen, or period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.
    - The _closing processing instruction sequence_ (`?>`) is part of the [`data`](#data) value.

## Description

The new node usually will be inserted into a document in order to accomplish anything with it, such as with {{ domxref("node.insertBefore") }}.

Initially, `ProcessingInstruction` nodes were only supported in XML documents, not in HTML documents. In non-supporting browsers, a processing instruction will be considered as a comment and be represented as a {{domxref("Comment")}} object in the tree. Check the [browser compatibility](#browser_compatibility) section for support information.

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
