---
title: "XMLSerializer: serializeToString() method"
short-title: serializeToString()
slug: Web/API/XMLSerializer/serializeToString
page-type: web-api-instance-method
browser-compat: api.XMLSerializer.serializeToString
---

{{APIRef("DOM Parsing")}}

The {{domxref("XMLSerializer")}} method
**`serializeToString()`** constructs a string representing the
specified {{Glossary("DOM")}} tree in {{Glossary("XML")}} form.

## Syntax

```js-nolint
serializeToString(rootNode)
```

### Parameters

- `rootNode`
  - : The {{domxref("Node")}} to use as the root of the DOM tree or subtree for which to
    construct an XML representation.

### Return value

A string containing the XML representation of the specified DOM tree.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the specified `rootNode` is not a compatible node type. The root node
    must be either {{domxref("Node")}} or {{domxref("Attr")}}.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the tree could not be successfully serialized, probably due to issues with the
    content's compatibility with XML serialization.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if a serialization of HTML was requested but could not succeed due to the content not
    being well-formed.

## Usage notes

### Compatible node types

The specified root node—and all of its descendants—must be compatible with the XML
serialization algorithm. The root node itself must be either a {{domxref("Node")}} or
{{domxref("Attr")}} object.

The following types are also permitted as descendants of the root node, in addition to
`Node` and `Attr`:

- {{domxref("DocumentType")}}
- {{domxref("Document")}}
- {{domxref("DocumentFragment")}}
- {{domxref("Element")}}
- {{domxref("Comment")}}
- {{domxref("Text")}}
- {{domxref("ProcessingInstruction")}}
- {{domxref("Attr")}}

If any other type is encountered, a {{jsxref("TypeError")}} exception is thrown.

### Notes on the resulting XML

There are some things worth noting about the XML output by
`serializeToString()`:

- For XML serializations, `Element` and `Attr` nodes are always
  serialized with their {{domxref("Element.namespaceURI", "namespaceURI")}} intact. This
  may mean that a previously-specified {{domxref("Element.prefix", "prefix")}} or default
  namespace may be dropped or altered.
- The resulting XML is compatible with the HTML parser.
- Elements in the HTML namespace that have no child nodes (thereby representing empty
  tags) are serialized with both begin and end tags
  (`"<someelement></someelement>"`) instead of using the
  empty-element tag (`"<someelement/>"`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Parsing and serializing XML](/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- Serializing to HTML: {{domxref("Element.innerHTML")}} and
  {{domxref("Element.outerHTML")}}
- Parsing HTML or XML to create a DOM tree: {{domxref("DOMParser")}}
