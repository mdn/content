---
title: Anatomy of the DOM
slug: Web/API/Document_Object_Model/Anatomy_of_the_DOM
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

The DOM represents an XML or HTML document as a tree. This page introduces the basic structure of the DOM tree and the various properties and methods used to navigate it.

To begin with, we need to introduce some concepts related to trees. A tree is a data structure made up of _nodes_. Each node holds some _data_. The nodes are organized in a hierarchical way—every node has a single _parent node_ (except for the root node, which has no parent), and an ordered list of zero or more _child nodes_. Now we can define the following:

- A node with no parent is called the _root_ of the tree.
- A node with no children is called a _leaf_.
- Nodes that share the same parent are called _siblings_. Siblings belong to the same child node list of their parent, so they have a well-defined order.
- If we can go from node A to node B by repeatedly following parent links, then A is a _descendant_ of B, and B is an _ancestor_ of A.
- Nodes in a tree are listed in _tree order_ by first listing the node itself, then recursively listing each of its child nodes in order (preorder, depth-first traversal).

And here are a few important properties of trees:

- Every node is associated with a unique root node.
- If node A is the parent of node B, then node B is a child of node A.
- Cycles are not allowed: no node can be an ancestor or descendant of itself.

## The Node interface and its subclasses

All nodes in the DOM are represented by objects that implement the {{domxref("Node")}} interface. The `Node` interface embodies many of the previously defined concepts:

- The {{domxref("Node/parentNode", "parentNode")}} property returns the parent node, or `null` if the node has no parent.
- The {{domxref("Node/childNodes", "childNodes")}} property returns a {{domxref("NodeList")}} of the child nodes. The {{domxref("Node/firstChild", "firstChild")}} and {{domxref("Node/lastChild", "lastChild")}} properties return the first and last elements of this list, respectively, or `null` if there are no children.
- The {{domxref("Node/getRootNode", "getRootNode()")}} method returns the root of the tree that contains the node, by repeatedly following parent links.
- The {{domxref("Node/hasChildNodes", "hasChildNodes()")}} method returns `true` if it has any child nodes, i.e., it is not a leaf.
- The {{domxref("Node/previousSibling", "previousSibling")}} and {{domxref("Node/nextSibling", "nextSibling")}} properties return the previous and next sibling nodes, respectively, or `null` if there is no such sibling.
- The {{domxref("Node/contains", "contains()")}} method returns `true` if a given node is a descendant of the node.
- The {{domxref("Node/compareDocumentPosition", "compareDocumentPosition()")}} method compares two nodes by tree order. The [Comparing nodes](#comparing_nodes) section discusses this method in more detail.

But you rarely work with plain `Node` objects—instead, all objects in the DOM implement one of the interfaces that inherit from `Node`, which represent additional semantics in the document. The node types restrict what data they contain, and what children types are valid. We consider how the following HTML document is represented in the DOM:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

The root of this DOM tree is a {{domxref("Document")}} node, which represents the entire document. This node is exposed globally as the {{domxref("Window/document", "document")}} variable. This node has two important child nodes:

- An optional {{domxref("DocumentType")}} node representing the {{glossary("doctype")}} declaration. In our case, there is one. This node is also accessible via the {{domxref("Document/doctype", "doctype")}} property of the `Document` node.
- An optional {{domxref("Element")}} node representing the root element. For HTML documents (such as our case), this is typically the {{domxref("HTMLHtmlElement")}}. For SVG documents, this is typically the {{domxref("SVGSVGElement")}}. This node is also accessible via the {{domxref("Document/documentElement", "documentElement")}} property of the `Document` node.

The `DocumentType` node is always a leaf node. The `Element` node is where most of the document content is represented. Each element under it, such as {{htmlelement("head")}}, {{htmlelement("body")}}, and {{htmlelement("p")}}, is also represented by an `Element` node. In fact, each is a subclass of `Element` specific to that tag name, defined in the HTML specification, such as {{domxref("HTMLHeadElement")}} and {{domxref("HTMLBodyElement")}}, with additional properties and methods to represent the semantics of that element, but here we focus on the common behaviors of the DOM. The `Element` nodes can have other `Element` nodes as children, representing nested elements. For example, the {{htmlelement("head")}} element has three children: two {{htmlelement("meta")}} elements and a {{htmlelement("title")}} element. Additionally, elements can also have {{domxref("Text")}} nodes and {{domxref("CDATASection")}} nodes as children, representing text content. For example, the {{htmlelement("p")}} element has a single child, a `Text` node containing the string "This is a paragraph.". `Text` nodes and `CDATASection` nodes are always leaf nodes.

All nodes that can have children ({{domxref("Document")}}, {{domxref("DocumentFragment")}}, and {{domxref("Element")}}) allow two types of children: {{domxref("Comment")}} and {{domxref("ProcessingInstruction")}} nodes. These nodes are always leaf nodes.

Each element, in addition to having child nodes, can also have attributes, represented as {{domxref("Attr")}} nodes. `Attr` extend the `Node` interface, but they are not part of the main tree structure, because they are not the child of any node and their parent node is `null`. Instead, they are stored in a separate named node map, accessible via the {{domxref("Element/attributes", "attributes")}} property of the `Element` node.

The `Node` interface defines a {{domxref("Node/nodeType", "nodeType")}} property that indicates the type of the node. To summarize, we introduced the following node types:

| Node type                            | `nodeType` value                       | Valid children (besides `Comment` and `ProcessingInstruction`)           |
| ------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------ |
| {{domxref("Document")}}              | `Node.DOCUMENT_NODE` (9)               | {{domxref("DocumentType")}}, {{domxref("Element")}}                      |
| {{domxref("DocumentType")}}          | `Node.DOCUMENT_TYPE_NODE` (10)         | None                                                                     |
| {{domxref("Element")}}               | `Node.ELEMENT_NODE` (1)                | {{domxref("Element")}}, {{domxref("Text")}}, {{domxref("CDATASection")}} |
| {{domxref("Text")}}                  | `Node.TEXT_NODE` (3)                   | None                                                                     |
| {{domxref("CDATASection")}}          | `Node.CDATA_SECTION_NODE` (4)          | None                                                                     |
| {{domxref("Comment")}}               | `Node.COMMENT_NODE` (8)                | None                                                                     |
| {{domxref("ProcessingInstruction")}} | `Node.PROCESSING_INSTRUCTION_NODE` (7) | None                                                                     |
| {{domxref("Attr")}}                  | `Node.ATTRIBUTE_NODE` (2)              | None                                                                     |

> [!NOTE]
> You may notice we skipped some node types here. We will talk about them later.

## Data of each node

Each node type has its own way of representing the data it holds. The `Node` interface itself defines three properties related to data, summarized in the following table:

| Node type                            | {{domxref("Node/nodeName", "nodeName")}}             | {{domxref("Node/nodeValue", "nodeValue")}} | {{domxref("Node/textContent", "textContent")}}               |
| ------------------------------------ | ---------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| {{domxref("Document")}}              | `"#document"`                                        | `null`                                     | `null`                                                       |
| {{domxref("DocumentType")}}          | Its [`name`](#documenttype) (e.g., `"html"`)         | `null`                                     | `null`                                                       |
| {{domxref("Element")}}               | Its [`tagName`](#element) (e.g., `"HTML"`, `"BODY"`) | `null`                                     | Concatenation of all its text node descendants in tree order |
| {{domxref("Text")}}                  | `"#text"`                                            | Its [`data`](#characterdata)               | Its [`data`](#characterdata)                                 |
| {{domxref("CDATASection")}}          | `"#cdata-section"`                                   | Its [`data`](#characterdata)               | Its [`data`](#characterdata)                                 |
| {{domxref("Comment")}}               | `"#comment"`                                         | Its [`data`](#characterdata)               | Its [`data`](#characterdata)                                 |
| {{domxref("ProcessingInstruction")}} | Its [`target`](#characterdata)                       | Its [`data`](#characterdata)               | Its [`data`](#characterdata)                                 |
| {{domxref("Attr")}}                  | Its [`name`](#attr)                                  | Its [`value`](#attr)                       | Its [`value`](#attr)                                         |

### Document

The `Document` node does not hold any data itself, so its `nodeValue` and `textContent` are always `null`. Its `nodeName` is always `"#document"`.

The `Document` does define some metadata about the document, coming from the environment (for example, the HTTP response that served the document):

- The {{domxref("Document/URL", "URL")}} and {{domxref("Document/documentURI", "documentURI")}} properties return the document's URL.
- The {{domxref("Document/characterSet", "characterSet")}} property returns the character encoding used by the document, such as `"UTF-8"`.
- The {{domxref("Document/compatMode", "compatMode")}} property returns the rendering mode of the document, either `"CSS1Compat"` (standards mode) or `"BackCompat"` (quirks mode).
- The {{domxref("Document/contentType", "contentType")}} property returns the MIME type of the document, such as `"text/html"` for HTML documents.

### DocumentType

A `DocumentType` in the document looks like this:

```xml
<!doctype name PUBLIC "publicId" "systemId">
```

There are three parts you can specify, which correspond to the three properties of the `DocumentType` node: {{domxref("DocumentType/name", "name")}}, {{domxref("DocumentType/publicId", "publicId")}}, and {{domxref("DocumentType/systemId", "systemId")}}. For HTML documents, the doctype is always `<!doctype html>`, so the `name` is `"html"` and both `publicId` and `systemId` are empty strings.

### Element

An `Element` in the document looks like this:

```html
<p class="note" id="intro">This is a paragraph.</p>
```

In addition to the contents, there are two parts you can specify: the tag name and the attributes. The tag name corresponds to the {{domxref("Element/tagName", "tagName")}} property of the `Element` node, which is `"P"` in this case (note that it is always in uppercase for HTML elements). The attributes correspond to the `Attr` nodes stored in the {{domxref("Element/attributes", "attributes")}} property of the `Element` node. We will discuss attributes in more detail in the [Element and its attributes](#element_and_its_attributes) section.

The `Element` node does not hold any data itself, so its `nodeValue` is always `null`. Its `textContent` is the concatenation of all its text node descendants in tree order, which is `"This is a paragraph."` in this case. For the following element:

```html
<div>Hello, <span>world</span>!</div>
```

The `textContent` is `"Hello, world!"`, concatenating the text node `"Hello, "`, the text node `"world"` inside the {{htmlelement("span")}} element, and the text node `"!"`.

### CharacterData

{{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("Comment")}}, and {{domxref("ProcessingInstruction")}} all inherit from the {{domxref("CharacterData")}} interface, which is a subclass of `Node`. The `CharacterData` interface defines a single property, {{domxref("CharacterData/data", "data")}}, which holds the text content of the node. The `data` property is also used to implement the `nodeValue` and `textContent` properties of these nodes.

For `Text` and `CDATASection`, the `data` property holds the text content of the node. In the following document (note that we use an SVG document, because HTML does not allow CDATA sections):

```svg
<text>Some text</text>
<style><![CDATA[h1 { color: red; }]]></style>
```

The text node inside the {{svgelement("text")}} element has `"Some text"` as `data`, and the CDATA section inside the {{svgelement("style")}} element has `"h1 { color: red; }"` as `data`.

For `Comment`, the `data` property holds the content of the comment, starting after the `<!--` and ending before the `-->`. For example, in the following document:

```html
<!-- This is a comment -->
```

The comment node has `" This is a comment "` as `data`.

For `ProcessingInstruction`, the `data` property holds the content of the processing instruction, starting after the target and ending before the `?>`. For example, in the following document:

```xml
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

The processing instruction node has `'type="text/xsl" href="style.xsl"'` as `data`, and `"xml-stylesheet"` as its {{domxref("ProcessingInstruction/target", "target")}}.

In addition, the `CharacterData` interface defines the {{domxref("CharacterData/length", "length")}} property, which returns the length of the `data` string, and the {{domxref("CharacterData/substringData", "substringData()")}} method, which returns a substring of the `data`.

### Attr

For the following element:

```html
<p class="note" id="intro">This is a paragraph.</p>
```

The `<p>` element has two attributes, represented by two `Attr` nodes. Each attribute consists of a name and a value, corresponding to the {{domxref("Attr/name", "name")}} and {{domxref("Attr/value", "value")}} properties. The first attribute has `"class"` as `name` and `"note"` as `value`, while the second attribute has `"id"` as `name` and `"intro"` as `value`.

## Element and its attributes

As previously mentioned, the attributes of an `Element` node are represented by `Attr` nodes, which are stored in a separate named node map, accessible via the {{domxref("Element/attributes", "attributes")}} property of the `Element` node. This {{domxref("NamedNodeMap")}} interface defines three important properties:

- {{domxref("NamedNodeMap/length", "length")}}, which returns the number of attributes.
- {{domxref("NamedNodeMap/item", "item()")}} method, which returns the `Attr` at a given index.
- {{domxref("NamedNodeMap/getNamedItem", "getNamedItem()")}} method, which returns the `Attr` with a given name.

The `Element` interface also defines several methods to work with attributes directly, without needing to access the named node map:

- {{domxref("Element/getAttribute", "element.getAttribute(name)")}} is equivalent to `element.attributes.getNamedItem(name).value`, if the attribute exists.
- {{domxref("Element/getAttributeNode", "element.getAttributeNode(name)")}} is equivalent to `element.attributes.getNamedItem(name)`.
- {{domxref("Element/hasAttribute", "element.hasAttribute(name)")}} is equivalent to `element.attributes.getNamedItem(name) !== null`.
- {{domxref("Element/getAttributeNames", "element.getAttributeNames()")}} returns an array of all attribute names.
- {{domxref("Element/hasAttributes", "element.hasAttributes()")}} is equivalent to `element.attributes.length > 0`.

You can also access the owner element of an attribute via the {{domxref("Attr/ownerElement", "ownerElement")}} property of the `Attr` node.

There are two special attributes, `id` and `class`, which have their own properties on the `Element` interface: {{domxref("Element/id", "id")}} and {{domxref("Element/className", "className")}}, that [reflect](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes) the value of the corresponding attribute. In addition, the {{domxref("Element/classList", "classList")}} property returns a {{domxref("DOMTokenList")}} representing the list of classes in the `class` attribute.

## Working with the element tree

Because `Element` nodes form the backbone of the document structure, you can specifically traverse the element nodes, skipping other nodes (such as `Text` and `Comment`).

- For all nodes, the {{domxref("Node/parentElement", "parentElement")}} property returns the parent node if it is an `Element`, or `null` if the parent is not an `Element` (for example, if the parent is a `Document`). This is in contrast to {{domxref("Node/parentNode", "parentNode")}}, which returns the parent node regardless of its type.
- For `Document`, `DocumentFragment`, and `Element`, the {{domxref("Element/children", "children")}} property returns an {{domxref("HTMLCollection")}} of only the child `Element` nodes. This is in contrast to {{domxref("Node/childNodes", "childNodes")}}, which returns all child nodes. The {{domxref("Element/firstElementChild", "firstElementChild")}} and {{domxref("Element/lastElementChild", "lastElementChild")}} properties return the first and last elements of this collection, respectively, or `null` if there are no child elements. The {{domxref("Element/childElementCount", "childElementCount")}} property returns the number of child elements.
- For `Element` and `CharacterData`, the {{domxref("Element/previousElementSibling", "previousElementSibling")}} and {{domxref("Element/nextElementSibling", "nextElementSibling")}} properties return the previous and next sibling node that is an `Element`, or `null` if there is no such sibling. This is in contrast to {{domxref("Node/previousSibling", "previousSibling")}} and {{domxref("Node/nextSibling", "nextSibling")}}, which may return any type of sibling node.

## Comparing nodes

There are three important methods that compare nodes: {{domxref("Node/isEqualNode", "isEqualNode()")}}, {{domxref("Node/isSameNode", "isSameNode()")}}, {{domxref("Node/compareDocumentPosition", "compareDocumentPosition()")}}.

The `isSameNode()` method is legacy. Now, it just behaves like the [strict equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`), returning `true` if and only if the two nodes are the same object.

The `isEqualNode()` method compares two nodes structurally. Two nodes are considered equal if they have the same type, the same data, and their child nodes are also equal at each index. In the [Data of each node](#data_of_each_node) section, we already defined the data relevant for each node type:

- For `Document`, there is no data, so only the child nodes need to be compared.
- For `DocumentType`, the `name`, `publicId`, and `systemId` properties need to be compared.
- For `Element`, the `tagName` (more accurately, the `namespaceURI`, `prefix`, and `localName`; we will introduce these in the [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces) guide) and the attributes need to be compared.
- For `Attr`, the `name` (more accurately, the `namespaceURI`, `prefix`, and `localName`; we will introduce these in the [XML namespaces](/en-US/docs/Web/API/Document_Object_Model/XML_namespaces) guide) and `value` properties need to be compared.
- For all `CharacterData` nodes (`Text`, `CDATASection`, `Comment`, and `ProcessingInstruction`), the `data` property needs to be compared. For `ProcessingInstruction`, the `target` property also needs to be compared.

The `a.compareDocumentPosition(b)` method compares two nodes by tree order. It returns a bitmask indicating their relative positions. The possible cases are:

- Returns `0` if `a` and `b` are the same node.
- If the two nodes are both attributes of the same element node, returns `Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (34) if `a` precedes `b` in the attribute list, or `Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (36) if `a` follows `b`. If either node is an attribute, the owner element is used for further comparisons.
- If the two nodes don't have the same root node, returns either `Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_PRECEDING` (35) or `Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_FOLLOWING` (37). Which one is returned is implementation-specific.
- If `a` is an ancestor of `b` (including when `b` is an attribute of `a`), returns `Node.DOCUMENT_POSITION_CONTAINS | Node.DOCUMENT_POSITION_PRECEDING` (10).
- If `a` is a descendant of `b` (including when `a` is an attribute of `b`), returns `Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING` (20).
- If `a` precedes `b` in tree order, returns `Node.DOCUMENT_POSITION_PRECEDING` (2).
- If `a` follows `b` in tree order, returns `Node.DOCUMENT_POSITION_FOLLOWING` (4).

Bitmask values are used, so you can use a bitwise AND operation to check for specific relationships. For example, to check if `a` precedes `b`, you can do:

```js
if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING) {
  // a precedes b
}
```

Which accounts for the cases of `a` and `b` being attributes of the same element, `a` being an ancestor of `b`, and `a` preceding `b` in tree order.

## Summary

Here are all the features we've introduced so far. There are a lot, but they are all useful in different scenarios.

- All nodes in the DOM implement the {{domxref("Node")}} interface.
- To navigate around the DOM tree: {{domxref("Node/parentNode", "parentNode")}}, {{domxref("Node/childNodes", "childNodes")}}, {{domxref("Node/firstChild", "firstChild")}}/{{domxref("Node/lastChild", "lastChild")}}, {{domxref("Node/hasChildNodes", "hasChildNodes()")}}, {{domxref("Node/getRootNode", "getRootNode()")}}, {{domxref("Node/previousSibling", "previousSibling")}}/{{domxref("Node/nextSibling", "nextSibling")}}.
- To navigate around the element tree: {{domxref("Node/parentElement", "parentElement")}}, {{domxref("Element/children", "children")}}, {{domxref("Element/firstElementChild", "firstElementChild")}}/{{domxref("Element/lastElementChild", "lastElementChild")}}, {{domxref("Element/childElementCount", "childElementCount")}}, {{domxref("Element/previousElementSibling", "previousElementSibling")}}/{{domxref("Element/nextElementSibling", "nextElementSibling")}}.
- The {{domxref("Node/nodeType", "nodeType")}} property indicates the type of the node. The {{domxref("Node/nodeName", "nodeName")}}, {{domxref("Node/nodeValue", "nodeValue")}}, and {{domxref("Node/textContent", "textContent")}} properties provide the data held by the node.
- The {{domxref("Document")}} node and its two important children: {{domxref("Document/doctype", "doctype")}} and {{domxref("Document/documentElement", "documentElement")}}.
- The {{domxref("DocumentType")}} node and its three properties: {{domxref("DocumentType/name", "name")}}, {{domxref("DocumentType/publicId", "publicId")}}, and {{domxref("DocumentType/systemId", "systemId")}}.
- The {{domxref("Element")}} node and its properties: {{domxref("Element/tagName", "tagName")}}, {{domxref("Element/attributes", "attributes")}}.
- The {{domxref("Attr")}} node and its properties: {{domxref("Attr/name", "name")}} and {{domxref("Attr/value", "value")}}.
- The {{domxref("CharacterData")}} interface and its property: {{domxref("CharacterData/data", "data")}}.
- The four {{domxref("CharacterData")}} subclasses: {{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("Comment")}}, and {{domxref("ProcessingInstruction")}}. `ProcessingInstruction` also has the {{domxref("ProcessingInstruction/target", "target")}} property.
- The various ways to work with attributes, including the {{domxref("Element/id", "id")}}, {{domxref("Element/className", "className")}}, and {{domxref("Element/classList", "classList")}} properties.
- The three methods to compare nodes: {{domxref("Node/isEqualNode", "isEqualNode()")}}, {{domxref("Node/isSameNode", "isSameNode()")}}, and {{domxref("Node/compareDocumentPosition", "compareDocumentPosition()")}}.
