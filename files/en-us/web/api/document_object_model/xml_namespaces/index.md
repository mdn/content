---
title: XML namespaces
slug: Web/API/Document_Object_Model/XML_namespaces
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

**XML namespace** is a standardized mechanism that allows identifiers (element or attribute names) defined by different specifications with different semantics to coexist in the same XML document without ambiguity.

Several XML languages are relevant to the web. [HTML](/en-US/docs/Web/HTML) (although it also has its own syntax) uses `http://www.w3.org/1999/xhtml`, [SVG](/en-US/docs/Web/SVG) uses `http://www.w3.org/2000/svg`, and [MathML](/en-US/docs/Web/MathML) uses `http://www.w3.org/1998/Math/MathML`. XML also defines reserved namespaces for features such as `xml:lang` and for namespace declarations themselves. This guide explains how these namespaces are represented and manipulated through the DOM.

a HTML

> [!WARNING]
> **XML namespace declarations are very restricted in HTML documents.** When markup is parsed as `text/html`, `xmlns` attributes do not bind prefixes or change an element's namespace, and the namespace prefix syntax usually does not work. This guide mainly applies to XML documents, with occasional references to HTML behavior.

## Element and attribute names

In the [Anatomy of the DOM](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM) guide, we introduced the basic data associated with [`Element`](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#element) and [`Attr`](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#attr) nodes, which include the {{domxref("Element.tagName", "tagName")}} and {{domxref("Attr.name", "name")}} properties.

- **In HTML documents:** Namespace declarations in markup do not work as they do in XML. The HTML parser chooses the HTML, SVG, or MathML namespace from HTML parsing rules rather than from author-defined prefix bindings; arbitrary XML namespace declarations require an XML document.
- Why namespaces let XML vocabularies such as HTML, SVG, and MathML use the same local names without collisions.
- A namespace is identified by a namespace URI string; the URI is an identifier and does not need to be retrievable.
- The difference between a namespace, a namespace prefix, a local name, and a qualified name (`prefix:localName`).
- Prefixes are aliases, not namespace identities: different prefixes can bind to the same namespace, and the same prefix can bind to different namespaces in different scopes.
- The difference between a null namespace and a default namespace, including the normalization of an empty namespace string to `null` in DOM APIs.
- Namespace declaration attributes: `xmlns` for the default namespace and `xmlns:prefix` for a prefixed binding.
- The reserved `xml` prefix and XML namespace (`http://www.w3.org/XML/1998/namespace`), and the reserved `xmlns` name and XMLNS namespace (`http://www.w3.org/2000/xmlns/`).
- The standard HTML (`http://www.w3.org/1999/xhtml`), SVG (`http://www.w3.org/2000/svg`), and MathML (`http://www.w3.org/1998/Math/MathML`) namespace URIs.

XML namespaces make it possible to use elements and attributes from different XML vocabularies in the same document without name collisions. A namespace is identified by a **namespace URI**, such as `http://www.w3.org/2000/svg` for SVG.

The namespace URI is an identifier. Although it often looks like a web address, it does not have to identify a resource that can be retrieved from the web. Applications compare the URI strings; they do not fetch the addresses to determine what the namespaces mean.

For example, this SVG document contains two elements named `title`. One belongs to SVG, while the other belongs to an application-specific metadata vocabulary:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:meta="https://example.com/metadata">
  <title>An SVG title</title>
  <meta:title>A metadata title</meta:title>
</svg>
```

The two elements have the same **local name**, `title`, but different namespace URIs. Their namespace/local-name pairs therefore identify different kinds of elements.

### Namespaces in HTML

Namespace declarations in markup only have their XML meaning when the document is parsed as XML, such as when SVG is served as `image/svg+xml` or XHTML is served as `application/xhtml+xml`.

When a document is parsed as `text/html`, an `xmlns` attribute does not select a namespace, declare an arbitrary prefix, or change how descendants are parsed. Instead, the HTML parser assigns namespaces using fixed rules:

- Most elements are placed in the HTML namespace.
- A `<svg>` element and its foreign-content descendants are placed in the SVG namespace.
- A `<math>` element and its foreign-content descendants are placed in the MathML namespace.
- A fixed set of attributes in SVG and MathML content, such as `xml:lang` and `xlink:href`, are assigned to their predefined namespaces.

For example, a `<svg>` element embedded in an HTML document is placed in the SVG namespace because its local name is `svg`, not because of an `xmlns` attribute. Adding another `xmlns` value would not change the namespace chosen by the HTML parser.

Namespace-aware DOM APIs are not subject to this parsing restriction. Scripts running in an HTML document can use methods such as {{domxref("Document/createElementNS", "createElementNS()")}} and {{domxref("Element/setAttributeNS", "setAttributeNS()")}} to create elements and attributes in any namespace. However, if arbitrary namespace declarations need to be interpreted directly from source markup, the document must use XML syntax and an XML MIME type.

### Local names, prefixes, and qualified names

A namespaced element or attribute has several related parts:

- Its **namespace** is a namespace URI or `null`.
- Its **local name** identifies the element or attribute within that namespace.
- Its **namespace prefix** is a short name that is bound to the namespace URI in the current XML namespace context. A prefix is optional.
- Its **qualified name** is the local name by itself when there is no prefix, or the prefix and local name joined by a colon when there is one.

In the preceding example, the two `title` elements have the following names:

| Markup         | Namespace URI                  | Prefix | Local name | Qualified name |
| -------------- | ------------------------------ | ------ | ---------- | -------------- |
| `<title>`      | `http://www.w3.org/2000/svg`   | `null` | `title`    | `title`        |
| `<meta:title>` | `https://example.com/metadata` | `meta` | `title`    | `meta:title`   |

The namespace and local name determine the identity of a name. The prefix does not. Multiple prefixes can be bound to the same namespace URI, so these two elements have the same namespace and local name despite having different qualified names:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:a="https://example.com/metadata"
  xmlns:b="https://example.com/metadata">
  <a:title>First title</a:title>
  <b:title>Second title</b:title>
</svg>
```

Conversely, a prefix can be rebound to a different namespace URI in a nested scope. Code must not assume that a particular prefix always identifies the same namespace. It should use the namespace URI and local name when comparing or locating namespaced nodes.

### Default and null namespaces

A declaration written as `xmlns="namespace URI"` defines the **default namespace** for its element and, unless overridden, its descendant elements. In the first example, the default namespace declaration places the unprefixed `svg` and `title` element names in the SVG namespace.

A default namespace is an in-scope namespace binding. It is different from the **null namespace**, which means that a DOM element or attribute has no namespace at all. DOM namespace APIs represent the null namespace with `null`. For the namespace arguments accepted by most namespace-aware DOM methods, the empty string is treated as `null` as well.

The default namespace applies to unprefixed element names, but it does not apply to unprefixed attribute names. Consider the attributes on this SVG element:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:meta="https://example.com/metadata"
  viewBox="0 0 100 100"
  meta:viewBox="overview"
  xml:lang="en"></svg>
```

The `svg` element is in the SVG namespace. Its unprefixed `viewBox` attribute is in the null namespace, while `meta:viewBox` is in the metadata namespace. The two attributes can coexist because an attribute is identified by its namespace URI and local name, not by its local name alone. The `xml:lang` attribute is in the reserved XML namespace.

### Namespace declaration attributes

XML provides two forms of namespace declaration:

- `xmlns="namespace URI"` binds the default namespace.
- `xmlns:prefix="namespace URI"` binds `prefix` to the namespace URI.

Namespace declarations are themselves represented as attributes in the XMLNS namespace, `http://www.w3.org/2000/xmlns/`. A default declaration has the local name `xmlns` and no prefix. A prefixed declaration has the prefix `xmlns` and uses the declared prefix as its local name. For example, `xmlns:meta` has the prefix `xmlns` and the local name `meta`.

Again, this description applies to XML parsing. On an HTML element parsed from `text/html`, an `xmlns` attribute is placed in the null namespace and has no namespace-declaration effect. The HTML parser recognizes `xmlns` and `xmlns:xlink` as namespaced attributes only in its SVG and MathML foreign-content handling, and even there the parser—not the declaration's value—determines the namespace of elements.

### Reserved namespaces and common namespace URIs

The `xml` and `xmlns` prefixes have predefined meanings:

- `xml` is bound to the XML namespace, `http://www.w3.org/XML/1998/namespace`. It is used by attributes such as `xml:lang` and `xml:space`.
- `xmlns` is associated with the XMLNS namespace, `http://www.w3.org/2000/xmlns/`, and is reserved for namespace declaration attributes.

Namespace-aware DOM creation and attribute methods enforce these relationships. For example, they reject a qualified name with the `xml` prefix if the supplied namespace is not the XML namespace, and reject invalid combinations of `xmlns` and the XMLNS namespace.

The namespace URIs most commonly encountered in web documents are:

| Vocabulary | Namespace URI                          |
| ---------- | -------------------------------------- |
| HTML       | `http://www.w3.org/1999/xhtml`         |
| SVG        | `http://www.w3.org/2000/svg`           |
| MathML     | `http://www.w3.org/1998/Math/MathML`   |
| XML        | `http://www.w3.org/XML/1998/namespace` |
| XMLNS      | `http://www.w3.org/2000/xmlns/`        |

These strings must be written exactly. Namespace URI comparison is case-sensitive, and a trailing slash or other spelling difference identifies a different namespace.

## How the DOM represents namespaced names

- **In HTML documents:** Parsed HTML elements are in the HTML namespace with a null prefix; parsed `<svg>` and `<math>` subtrees use the SVG and MathML namespaces. A colon in an HTML element or ordinary HTML attribute name is treated as a literal character, not as a namespace separator; only the parser's fixed foreign-content cases produce prefixed namespaced attributes.
- Elements and attributes store a namespace, namespace prefix, and local name separately; their namespace and prefix can be `null`.
- {{domxref("Element/namespaceURI", "Element.namespaceURI")}}, {{domxref("Element/prefix", "Element.prefix")}}, and {{domxref("Element/localName", "Element.localName")}}.
- {{domxref("Attr/namespaceURI", "Attr.namespaceURI")}}, {{domxref("Attr/prefix", "Attr.prefix")}}, and {{domxref("Attr/localName", "Attr.localName")}}.
- How qualified names are derived from a prefix and local name, and how {{domxref("Element/tagName", "Element.tagName")}}, {{domxref("Attr/name", "Attr.name")}}, and {{domxref("Node/nodeName", "Node.nodeName")}} expose qualified names.
- Qualified names are returned in uppercase for HTML elements in HTML documents, versus case-sensitive names in XML documents and for non-HTML namespaces.
- An element's expanded name as the namespace/local-name pair; the prefix is syntax and is not part of namespace identity.
- An attribute's expanded name as the namespace/local-name pair; one element can therefore contain attributes with the same qualified name but different namespaces.
- Namespace declarations determine which namespace the XML parser assigns to a name, but changing a declaration later does not change an existing node's stored `namespaceURI`, `prefix`, or `localName`.
- Default namespaces apply to element names, while unprefixed attributes have no namespace.

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

## Resolving prefixes and namespace declarations

- **In HTML documents:** These methods exist, but arbitrary `xmlns` attributes on HTML elements do not participate in lookup because the HTML parser puts them in the null namespace. Lookup can still use a node's stored namespace and prefix, the reserved `xml` and `xmlns` mappings, recognized declarations on parsed SVG or MathML foreign content, and namespaced nodes created from script.
- {{domxref("Node/lookupNamespaceURI", "Node.lookupNamespaceURI()")}} for resolving a prefix in a node's namespace context; `null` or `""` requests the default namespace.
- {{domxref("Node/lookupPrefix", "Node.lookupPrefix()")}} for finding an in-scope prefix for a namespace URI; the result is not necessarily unique.
- {{domxref("Node/isDefaultNamespace", "Node.isDefaultNamespace()")}} and its equivalence to comparing a namespace with `lookupNamespaceURI(null)`.
- How lookup uses an element's own name, namespace declaration attributes, and then ancestor elements.
- The implicit mappings returned for the reserved `xml` and `xmlns` prefixes.
- How lookup starts from a document's document element, an attribute's owner element, or another node's parent element; `DocumentType` and `DocumentFragment` have no namespace context.
- Clearing the default namespace with an empty namespace declaration and the resulting `null` lookup result.

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
