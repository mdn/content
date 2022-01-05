---
title: Document.createProcessingInstruction()
slug: Web/API/Document/createProcessingInstruction
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - createProcessInstruction
browser-compat: api.Document.createProcessingInstruction
---
{{APIRef("DOM")}}

`createProcessingInstruction()` generates a new [processing instruction](/en-US/docs/Web/API/ProcessingInstruction) node and returns it.

The new node usually will be inserted into an XML document in order to accomplish anything with it, such as with {{ domxref("node.insertBefore") }}.

## Syntax

```js
piNode = document.createProcessingInstruction(target, data)
```

### Parameters

- `piNode` is the resulting {{ domxref("ProcessingInstruction") }} node.
- `target` is a string containing the first part of the processing instruction (i.e., `<?target … ?>`)
- `data` is a string containing any information the processing instruction should carry, after the target. The data is up to you, but it can't contain `?>`, since that closes the processing instruction.

### Exceptions

- `DOM_INVALID_CHARACTER`

  - : Throws if either of the following are true:

    - The processing instruction `target` is invalid — it should be a valid _[XML name](https://www.w3.org/TR/REC-xml/#dt-name)_ that doesn't contain "xml", "XML", or any case combination of the two, other than standardized ones such as `<?xml-stylesheet ?>`.
    - The _closing processing instruction sequence_ (`?>`) is part of the `data`.

## Example

```js
var doc = new DOMParser().parseFromString('<foo />', 'application/xml');
var pi = doc.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');

doc.insertBefore(pi, doc.firstChild);

console.log(new XMLSerializer().serializeToString(doc));
// Displays: <?xml-stylesheet href="mycss.css" type="text/css"?><foo/>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
