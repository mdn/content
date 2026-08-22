---
title: XML namespaces
slug: Web/API/Document_Object_Model/XML_namespaces
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

**XML namespace** is a standardized mechanism that allows identifiers (element or attribute names) defined by different specifications with different semantics to coexist in the same XML document without ambiguity.

In the [Anatomy of the DOM](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM) guide, we introduced the basic data associated with [`Element`](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#element) and [`Attr`](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#attr) nodes, which include the {{domxref("Element.tagName", "tagName")}} and {{domxref("Attr.name", "name")}} properties. These properties return the _qualified name_. In the DOM, there are actually four properties that pertain to the element or attribute's name:

- The **namespace** is a namespace URI or `null`. It's returned by the {{domxref("Element.namespaceURI")}} or {{domxref("Attr.namespaceURI")}} property.
- The **local name** identifies the element or attribute within that namespace. It's returned by the {{domxref("Element.localName")}} or {{domxref("Attr.localName")}} property.
- The **namespace prefix** is a short name that is bound to the namespace URI in the current XML namespace context. It's returned by the {{domxref("Element.prefix")}} or {{domxref("Attr.prefix")}} property.
- The **qualified name** is the local name by itself when there is no prefix, or the prefix and local name joined by a colon when there is one. It's returned by the {{domxref("Element.tagName")}} (but uppercased if in HTML) or {{domxref("Attr.name")}} property.

The namespace URI is an identifier. Although it often looks like a web address, it does not have to identify a resource that can be retrieved from the web. Applications compare the strings; no requests are ever sent to the URI. However, by convention, the URI points to a domain that the standard body controls to avoid collisions.

Several XML languages are relevant to the web, and each defines elements and attributes in their namespace. [HTML](/en-US/docs/Web/HTML) (although it also has its own syntax) uses `http://www.w3.org/1999/xhtml`, [SVG](/en-US/docs/Web/SVG) uses `http://www.w3.org/2000/svg`, and [MathML](/en-US/docs/Web/MathML) uses `http://www.w3.org/1998/Math/MathML`. The {{Glossary("XLink")}} namespace `http://www.w3.org/1999/xlink` is now deprecated for web purposes. XML also defines two reserved namespaces, `xml` and `xmlns`, for features such as `xml:lang` and for namespace declarations themselves. This guide explains how these namespaces are represented and manipulated through the DOM.

> [!WARNING]
> **XML namespace declarations are very restricted in HTML documents.** This guide mainly applies to XML documents, with occasional references to HTML behavior (see [HTML element and attribute names](#html_element_and_attribute_names)).

## XML element and attribute names

### The default namespace

In XML, if an element name does not have an explicit [namespace prefix](#the_namespace_prefix), its namespace is defined by the closest `xmlns` attribute (either on the element itself or on the closest ancestor element). If there's no such `xmlns` declaration, the namespace is `null` (the `null` namespace functions just like any other namespace). The namespace established by the `xmlns` declaration (or its lack thereof) is the _default namespace_.

```js
// The utility function for creating XML documents
const xml = (strings, ...values) =>
  new DOMParser().parseFromString(
    String.raw({ raw: strings }, ...values),
    "application/xml",
  );

// No xmlns declaration -> namespace is null
const doc = xml`<parent></parent>`;
console.log(doc.querySelector("parent").namespaceURI); // null

// The xmlns attribute applies to the element itself and nested elements
const doc2 = xml`<parent xmlns="https://developer.mozilla.org/">
  <child><grandchild></grandchild></child>
</parent>`;
console.log(doc2.querySelector("parent").namespaceURI); // https://developer.mozilla.org/
console.log(doc2.querySelector("child").namespaceURI); // https://developer.mozilla.org/
console.log(doc2.querySelector("grandchild").namespaceURI); // https://developer.mozilla.org/
```

For all APIs that deal with namespace identifiers, the empty string is equivalent to `null`. So for example, you can set `xmlns=""` to reset to the null namespace.

```js
const doc = xml`<parent xmlns="https://developer.mozilla.org/">
  <child xmlns="">
    <grandchild></grandchild>
  </child>
</parent>`;
console.log(doc.querySelector("parent").namespaceURI); // https://developer.mozilla.org/
console.log(doc.querySelector("child").namespaceURI); // null
console.log(doc.querySelector("grandchild").namespaceURI); // null
```

Attributes do not use the default namespace; unprefixed attributes always use the `null` namespace. The only exception is the `xmlns` attribute itself, which uses the XMLNS namespace, `http://www.w3.org/2000/xmlns/`.

```js
const doc = xml`<parent xmlns="https://developer.mozilla.org/" foo="bar">
  <child foo="bar"></child>
</parent>`;
console.log(doc.querySelector("parent").getAttributeNode("foo").namespaceURI);
// null
console.log(doc.querySelector("parent").getAttributeNode("xmlns").namespaceURI);
// http://www.w3.org/2000/xmlns/
console.log(doc.querySelector("child").getAttributeNode("foo").namespaceURI);
// null
```

In all examples above, because we've never used the namespace prefix syntax, the `prefix` property is always `null`, even when there is a non-null `namespaceURI`.

### The namespace prefix

The namespace prefix syntax allows a specific element to use a non-default namespace or a specific attribute to use a non-null namespace. The syntax is `prefix:name`, where `prefix` is the _namespace prefix_ and `name` is the _local name_.

> [!NOTE]
> During XML parsing, the full tag name is split at the first colon character, so for practical purposes, `namespace` should not contain `:`, although this is not a syntax requirement, and namespace prefixes containing `:` can still be referred to programmatically.

By default, only two valid namespace prefix identifiers exist: `xmlns` and `xml`.

- `xmlns` is bound to the XMLNS namespace, `http://www.w3.org/2000/xmlns/`, and is reserved for namespace declaration attributes.
- `xml` is bound to the XML namespace, `http://www.w3.org/XML/1998/namespace`. It is used by attributes such as `xml:lang` and `xml:space`.

For example, the following uses the `lang` attribute from the `xml` namespace:

```js
const doc = xml`<element xml:lang="en-US" />`;
const xmlLangAttr = doc.querySelector("element").getAttributeNode("xml:lang");
console.log(xmlLangAttr.namespaceURI); // http://www.w3.org/XML/1998/namespace
console.log(xmlLangAttr.prefix); // xml
```

New namespace prefix identifiers can be declared with the `xmlns:prefix="namespace URI"` attribute. This creates a new namespace prefix called `prefix` which resolves to the namespace `"namespace URI"`. Now this prefix can be used in the element and all descendant elements that don't override it.

```js
const doc = xml`<parent mdn:foo="bar" xmlns:mdn="https://developer.mozilla.org/"></parent>`;
console.log(
  doc.querySelector("parent").getAttributeNode("mdn:foo").namespaceURI,
);
// https://developer.mozilla.org/

const doc2 = xml`<parent xmlns:mdn="https://developer.mozilla.org/"><mdn:child /></parent>`;
console.log(doc2.querySelector("child").namespaceURI);
// https://developer.mozilla.org/
```

> [!NOTE]
> The [CSS type selector](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors) selects by the local name (the part after `:`), so we write `child` instead of `mdn:child` in the selector above. To use the [namespace separator](/en-US/docs/Web/CSS/Reference/Selectors/Namespace_separator) syntax, the namespace identifier must be declared separately in CSS via [`@namespace`](/en-US/docs/Web/CSS/Reference/At-rules/@namespace), which is not possible with {{domxref("Document.querySelector()")}}.

When the `prefix` is `null`, the qualified name of the element/attribute is just the `localName`; when the `prefix` is not null, the qualified name is `prefix:localName` (basically, what you actually wrote in the source code).

```js
const doc = xml`<parent mdn:foo="bar" xmlns:mdn="https://developer.mozilla.org/"></parent>`;
const fooAttr = doc.querySelector("parent").getAttributeNode("mdn:foo");
console.log(fooAttr.prefix); // mdn
console.log(fooAttr.localName); // foo
console.log(fooAttr.name); // mdn:foo
```

There is no mechanism for rebinding the `xmlns` or `xml` prefix. Attempting to do so raises a parser error.

> [!NOTE]
> Some browsers may be lenient in their XML parser and simply ignore these attributes.

```js example-bad
xml`<element xmlns:xmlns="https://developer.mozilla.org/" />`;
// XML Parsing Error: reserved prefix (xmlns) must not be declared or undeclared

xml`<element xmlns:xml="https://developer.mozilla.org/" />`;
// XML Parsing Error: reserved prefix (xml) must not be undeclared or bound to another namespace name
```

All the other prefix identifiers can be freely associated. This means you can have two prefixes that map to the same namespace URI, or the same prefix mapping to different namespace URIs in different parts of the document.

```js
const doc = xml`<mdn:parent xmlns:mdn="a">
  <mdn:child xmlns:mdn="b"></mdn:child>
</mdn:parent>`;
console.log(doc.querySelector("parent").namespaceURI); // a
console.log(doc.querySelector("child").namespaceURI); // b
```

## Namespaces in HTML

Once again, everything mentioned to this point only work in XML (which is why we've used the `xml` utility function that calls {{domxref("DOMParser")}}). In an HTML document parsed from `text/html`, by default all elements are HTML elements and belong to the HTML namespace `http://www.w3.org/1999/xhtml`. The HTML parser recognizes the {{SVGElement("svg")}} and the {{MathMLElement("math")}} elements, which put them and all their descendants into the SVG `http://www.w3.org/2000/svg` and MathML `http://www.w3.org/1998/Math/MathML` namespaces. The following do not work:

- The `xmlns` attribute has absolutely no effect. If specified on HTML elements, its value must be `"http://www.w3.org/1999/xhtml"`.
- The namespace prefix syntax does not exist and the prefix is simply seen as a part of the local name. The parser special-cases several attribute names, but only on SVG and MathML elements: `xlink:actuate`, `xlink:arcrole`, `xlink:href`, `xlink:role`, `xlink:show`, `xlink:title`, `xlink:type`, `xml:lang`, `xml:space`, `xmlns`, `xmlns:xlink`. These are the only ones for which the namespace URI is not one of HTML, SVG, or MathML. None of them are necessary on the modern web because the SVG and MathML specs have defined their own alternatives where appropriate.

For example:

```js
// The utility function for creating HTML documents
const html = (strings, ...values) =>
  new DOMParser().parseFromString(
    String.raw({ raw: strings }, ...values),
    "text/html",
  );

const doc = html`<html>
  <body xmlns:xlink="foo">
    <svg xmlns:xlink="foo" xlink:href="bar"></svg>
    <math></math>
  </body>
</html>`;
console.log(doc.querySelector("body").namespaceURI); // http://www.w3.org/1999/xhtml
console.log(doc.querySelector("svg").namespaceURI); // http://www.w3.org/2000/svg
console.log(doc.querySelector("math").namespaceURI); // http://www.w3.org/1998/Math/MathML

// xmlns:xlink seen as a normal attribute (and is non-conforming)
console.log(
  doc.querySelector("body").getAttributeNode("xmlns:xlink").namespaceURI,
); // null
// xmlns:xlink recognized but has no effect
console.log(
  doc.querySelector("svg").getAttributeNode("xmlns:xlink").namespaceURI,
); // http://www.w3.org/2000/xmlns/
// xlink:href always binds the XLink namespace despite xmlns:xlink
console.log(
  doc.querySelector("svg").getAttributeNode("xlink:href").namespaceURI,
); // http://www.w3.org/1999/xlink
```

> [!NOTE]
> Firefox sets the namespace URI to `null` for all elements, while Chrome and Safari set the appropriate namespaces.

## Looking up the prefix-namespace association

Each element in the document has a bi-directional association between prefix identifiers and namespace URIs, which it either inherits from its parent or declares itself via its `xmlns="..."` and `xmlns:prefix="..."` attributes. You can lookup this association on any node, which uses the node's relevant element:

- When called on {{domxref("Attr")}} nodes, its {{domxref("Attr.ownerElement", "ownerElement")}} is searched.
- When called on {{domxref("Document")}} nodes, its {{domxref("Document.documentElement", "documentElement")}} is searched.
- Other types of non-element nodes search their {{domxref("Node.parentElement", "parentElement")}}.

`null` is always returned if there is no relevant element for the node.

{{domxref("Node.lookupNamespaceURI()")}} takes a prefix and returns the corresponding namespace URI; `null` or `""` requests the default namespace (which, once again, is `null` by default and also `null` when reset with `xmlns=""`). The reserved prefixes `xml` and `xmlns` always resolve to the XML and XMLNS namespaces, or otherwise `null` is returned if no association is found.

```js
const doc = xml`<parent xmlns="default namespace" xmlns:mdn="https://developer.mozilla.org/"></parent>`;
const parent = doc.querySelector("parent");
console.log(parent.lookupNamespaceURI("mdn")); // https://developer.mozilla.org/
console.log(parent.lookupNamespaceURI("xmlns")); // http://www.w3.org/2000/xmlns/
console.log(parent.lookupNamespaceURI("xlink")); // null
console.log(parent.lookupNamespaceURI(null)); // default namespace
```

{{domxref("Node.lookupPrefix()")}} performs the reverse: takes a namespace URI and returns a prefix. If the namespace URI is `null` or `""`, `null` is returned. If there are multiple prefixes that bind to the same namespace URI, then the prefix used or declared by the nearest element is returned (and the first declaration is preferred among all declarations on the same element).

```js
const doc = xml`<parent
  xmlns:mdn="https://developer.mozilla.org/"
  xmlns:mdn2="https://developer.mozilla.org/">
  <mdn2:child></mdn2:child>
</parent>`;
const child = doc.querySelector("child");
console.log(child.lookupPrefix("https://developer.mozilla.org/")); // mdn2
// child itself uses the mdn2 prefix, so mdn2 is preferred

const parent = doc.querySelector("parent");
console.log(parent.lookupPrefix("https://developer.mozilla.org/")); // mdn
// parent declares both prefixes, so the first one is preferred
```

> [!NOTE]
> The above disambiguation mechanism matches the specification but may not match all browsers' behavior.

`Node.lookupPrefix()` does not use the `xmlns` default namespace declaration, nor does it special-case the XML/XMLNS namespaces. Passing the default namespace or the XML/XMLNS namespaces return `null` unless an `xmlns:prefix` declaration binds them explicitly to some prefix.

```js
const doc = xml`<parent xmlns="https://developer.mozilla.org/"></parent>`;
const parent = doc.querySelector("parent");
console.log(parent.lookupPrefix("https://developer.mozilla.org/")); // null
console.log(parent.lookupPrefix("http://www.w3.org/2000/xmlns/")); // null
console.log(parent.lookupPrefix("http://www.w3.org/XML/1998/namespace")); // null
```

{{domxref("Node.isDefaultNamespace()")}} takes a namespace and returns whether it's the default. `node.isDefaultNamespace(namespace)` is equivalent to `node.lookupNamespaceURI(null) === namespace`.

In HTML documents, these methods exist, but again `xmlns` attributes have no effect. Lookup can still use a node's stored namespace and prefix, the reserved `xml` and `xmlns` mappings, recognized declarations on parsed SVG or MathML foreign content, and namespaced nodes created from script (see below).

## Creating namespaced nodes and documents

- **In HTML documents:** The namespace-aware creation APIs work fully from script and can create nodes in any namespace. `createElement()` normally creates an HTML element, while `createElementNS()` is required for SVG, MathML, or arbitrary namespaced elements created outside the parser's built-in foreign-content handling. `DOMImplementation.createDocument()` creates a separate XML document rather than changing the current HTML document.
- {{domxref("Document/createElementNS", "Document.createElementNS()")}} for creating an element from a namespace URI and qualified name.
- {{domxref("Document/createAttributeNS", "Document.createAttributeNS()")}} for creating a detached attribute from a namespace URI and qualified name.
- {{domxref("DOMImplementation/createDocument", "DOMImplementation.createDocument()")}} for creating an `XMLDocument` with an optional namespaced document element and doctype; how the root namespace determines the document's content type.
- How a qualified name is split at `:` into prefix and local name by namespace-aware creation and attribute APIs.
- Name validation and the `InvalidCharacterError` exception for invalid namespace prefixes, element local names, and attribute local names.
- Namespace validation and the `NamespaceError` exception: a prefix requires a namespace; `xml` must use the XML namespace; and `xmlns` and the XMLNS namespace must be used together.
- {{domxref("Document/createElement", "Document.createElement()")}} as a contrast: it creates HTML-namespace elements in HTML and XHTML documents, and null-namespace elements in other documents.
- {{domxref("Document/createAttribute", "Document.createAttribute()")}} as a contrast: it always creates an attribute with a null namespace.
- Why the namespace, rather than the prefix, selects the resulting element interface, such as an SVG interface for an element in the SVG namespace.

## Finding namespaced elements

- **In HTML documents:** Both `getElementsByTagNameNS()` methods work for HTML elements and for foreign SVG, MathML, or script-created namespaced elements. Searches use the stored namespace URI and local name, not an `xmlns` declaration written on an HTML element. DOM selector APIs cannot be given namespace-prefix mappings.
- {{domxref("Document/getElementsByTagNameNS", "Document.getElementsByTagNameNS()")}} for matching descendant elements by namespace and local name.
- {{domxref("Element/getElementsByTagNameNS", "Element.getElementsByTagNameNS()")}} for the same search within an element.
- The `"*"` wildcard for either or both arguments and the empty-string-to-`null` rule for the namespace argument.
- The live `HTMLCollection` returned by the `getElementsByTagNameNS()` methods.
- {{domxref("Document/getElementsByTagName", "Document.getElementsByTagName()")}} and {{domxref("Element/getElementsByTagName", "Element.getElementsByTagName()")}} as qualified-name searches, including their HTML-document case behavior.
- How {{domxref("Document/getElementById", "Document.getElementById()")}} and {{domxref("Element/getElementsByClassName", "Element.getElementsByClassName()")}} use the DOM's null-namespace `id` and `class` attribute concepts on elements in any namespace.
- How {{domxref("HTMLCollection/namedItem", "HTMLCollection.namedItem()")}} uses an element's DOM ID regardless of its namespace, but only uses the null-namespace `name` attribute for elements in the HTML namespace.
- Why prefixes in selector strings are not a substitute: the DOM selector APIs do not support namespace prefixes.

## Working with namespaced attributes

- **In HTML documents:** Namespace-aware attribute methods work fully from script. However, ordinary attributes parsed on HTML elements—including names containing `:` and `xmlns`—have a null namespace. In SVG and MathML foreign content, the HTML parser assigns namespaces only to its fixed list of attributes such as `xlink:href`, `xml:lang`, `xmlns`, and `xmlns:xlink`.
- Attributes are unique on an element by namespace and local name, not by prefix or qualified name.
- {{domxref("Element/getAttributeNS", "Element.getAttributeNS()")}}, {{domxref("Element/setAttributeNS", "Element.setAttributeNS()")}}, {{domxref("Element/hasAttributeNS", "Element.hasAttributeNS()")}}, and {{domxref("Element/removeAttributeNS", "Element.removeAttributeNS()")}}.
- {{domxref("Element/getAttributeNodeNS", "Element.getAttributeNodeNS()")}} and {{domxref("Element/setAttributeNodeNS", "Element.setAttributeNodeNS()")}} when an `Attr` node is needed.
- {{domxref("NamedNodeMap/getNamedItemNS", "NamedNodeMap.getNamedItemNS()")}}, {{domxref("NamedNodeMap/setNamedItemNS", "NamedNodeMap.setNamedItemNS()")}}, and {{domxref("NamedNodeMap/removeNamedItemNS", "NamedNodeMap.removeNamedItemNS()")}} through {{domxref("Element/attributes", "Element.attributes")}}.
- The empty-string-to-`null` rule for namespace arguments to namespace-aware attribute lookup and removal methods.
- Why namespace-aware lookup, presence, and removal methods take a local name, while `setAttributeNS()` takes a qualified name so it can establish a prefix.
- Prefix replacement: `setAttributeNS()` identifies an existing attribute by namespace and local name, then updates its value without changing its existing prefix.
- The qualified-name methods {{domxref("Element/getAttribute", "getAttribute()")}}, {{domxref("Element/setAttribute", "setAttribute()")}}, {{domxref("Element/hasAttribute", "hasAttribute()")}}, {{domxref("Element/removeAttribute", "removeAttribute()")}}, {{domxref("Element/toggleAttribute", "toggleAttribute()")}}, and {{domxref("Element/getAttributeNode", "getAttributeNode()")}} as contrasts to their namespace-aware counterparts.
- How {{domxref("Element/getAttributeNames", "Element.getAttributeNames()")}} returns qualified names and can contain duplicates when attributes with different namespaces share a qualified name.
- How `setAttributeNode()` and `NamedNodeMap.setNamedItem()` replace attributes by namespace and local name despite their non-`NS` names, and how {{domxref("Element/removeAttributeNode", "Element.removeAttributeNode()")}} removes a particular `Attr` object.
- Namespace behavior of {{domxref("Element/id", "id")}}, {{domxref("Element/className", "className")}}, {{domxref("Element/classList", "classList")}}, and {{domxref("Element/slot", "slot")}}: their DOM concepts use null-namespace attributes even on elements outside the HTML namespace.

## Namespaces across other DOM operations

- **In HTML documents:** Equality, cloning, importing, adopting, and mutation records use the stored namespace fields exactly as they do in XML documents. The main limitation comes earlier, during HTML parsing: most parsed attributes have a null namespace unless they are among the parser's recognized foreign attributes.
- {{domxref("Node/isEqualNode", "Node.isEqualNode()")}} compares element namespaces, prefixes, and local names, and compares attribute namespaces and local names; attribute prefixes do not affect attribute equality.
- {{domxref("Node/cloneNode", "Node.cloneNode()")}} and {{domxref("Document/importNode", "Document.importNode()")}} preserve the namespace, prefix, and local name of elements and attributes.
- {{domxref("Document/adoptNode", "Document.adoptNode()")}} changes a node's document without recomputing its namespace information.
- {{domxref("MutationRecord/attributeName", "MutationRecord.attributeName")}} reports the changed attribute's local name, while {{domxref("MutationRecord/attributeNamespace", "MutationRecord.attributeNamespace")}} reports its namespace.
- {{domxref("MutationObserver/observe", "MutationObserver.observe()")}} attribute filters contain local names only and do not match attributes whose namespace is non-null.

## Namespaces in XPath and XSLT

- **In HTML documents:** The XPath APIs are available and namespace resolvers can address HTML, SVG, MathML, and script-created namespaces. The XSLT APIs are also exposed in supporting browsers, but their namespace parameters identify XSLT variables or parameters and do not make `xmlns` declarations functional in HTML markup.
- The `XPathNSResolver` callback and its `lookupNamespaceURI()` method for resolving prefixes used in XPath expressions.
- The optional namespace resolver accepted by {{domxref("XPathEvaluator/createExpression", "XPathEvaluator.createExpression()")}} and {{domxref("XPathEvaluator/evaluate", "XPathEvaluator.evaluate()")}}, including a `Node` as a resolver.
- {{domxref("XPathEvaluator/createNSResolver", "XPathEvaluator.createNSResolver()")}} as a legacy method that returns the supplied node unchanged.
- {{domxref("XSLTProcessor/setParameter", "XSLTProcessor.setParameter()")}}, {{domxref("XSLTProcessor/getParameter", "XSLTProcessor.getParameter()")}}, and {{domxref("XSLTProcessor/removeParameter", "XSLTProcessor.removeParameter()")}} identify stylesheet parameters by namespace URI and local name.

## Summary

- **In HTML documents:** Use the HTML parser's built-in HTML, SVG, and MathML namespace handling for markup; use the namespace-aware DOM APIs for other namespaces; use an XML MIME type when namespace declarations and arbitrary prefixes must be interpreted from source markup.
- Namespace identity is the namespace URI/local-name pair; prefixes only provide qualified-name syntax and in-scope bindings.
- Inspect names with `namespaceURI`, `prefix`, and `localName`; use `tagName`, `name`, and `nodeName` when the qualified name is required.
- Create, find, and update namespaced elements and attributes with the namespace-aware DOM methods.
- Resolve declarations with the `Node` namespace lookup methods, and account for namespace identity when comparing, cloning, importing, adopting, and observing nodes.
