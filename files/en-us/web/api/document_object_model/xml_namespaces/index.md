---
title: XML namespaces
slug: Web/API/Document_Object_Model/XML_namespaces
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

**XML namespace** is a standardized mechanism that allows identifiers (element or attribute names) defined by different specifications with different semantics to coexist in the same XML document without ambiguity.

In the [Anatomy of the DOM](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM) guide, we introduced the basic data associated with [`Element`](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#element) and [`Attr`](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#attr) nodes, which include the {{domxref("Element.tagName", "tagName")}} and {{domxref("Attr.name", "name")}} properties. These properties return the _qualified name_. In the DOM, elements and attributes actually keep three properties that identify their names:

- The **namespace** is a string or `null`. We will also refer to it as the _namespace URI_ or _namespace identifier_. It's returned by the {{domxref("Element.namespaceURI")}} or {{domxref("Attr.namespaceURI")}} property.

  > [!NOTE]
  > Although the namespace uses the URI format, it does not have to identify a resource that can be retrieved from the web. Applications compare the strings; no requests are ever sent. However, by convention, the URI points to a domain that the standard body controls to avoid collisions.

- The **local name** is a string identifying the element or attribute within that namespace. It's returned by the {{domxref("Element.localName")}} or {{domxref("Attr.localName")}} property.
- The **namespace prefix** is a string or `null`. If specified, it explicitly sets a namespace during parse time (see [The namespace prefix](#the_namespace_prefix)). It's returned by the {{domxref("Element.prefix")}} or {{domxref("Attr.prefix")}} property.

The **qualified name** is not a primitive property; it's the local name by itself when there is no prefix, or the prefix and local name joined by a colon when there is one. It's returned by the {{domxref("Element.tagName")}} (but uppercased if in HTML) or {{domxref("Attr.name")}} property.

Several XML languages are relevant to the web, and each defines elements and attributes in their namespace. [HTML](/en-US/docs/Web/HTML) (although it also has its own syntax) uses `http://www.w3.org/1999/xhtml`, [SVG](/en-US/docs/Web/SVG) uses `http://www.w3.org/2000/svg`, and [MathML](/en-US/docs/Web/MathML) uses `http://www.w3.org/1998/Math/MathML`. The {{Glossary("XLink")}} namespace `http://www.w3.org/1999/xlink` is now deprecated for web purposes. XML also defines two reserved namespaces, `xml` and `xmlns`, for features such as `xml:lang` and for namespace declarations themselves. This guide explains how these namespaces are represented and manipulated through the DOM.

## XML namespace syntax

> [!WARNING]
> **The XML namespace syntax is very restricted in HTML.** This section mainly applies to XML documents; see [Namespace syntax in HTML](#namespace_syntax_in_html) for how they differ.

To create XML documents, we'll use the following utility function, which is a [template tag](/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) that invokes the {{domxref("DOMParser")}} on the template string.

```js
const xml = (strings, ...values) =>
  new DOMParser().parseFromString(
    String.raw({ raw: strings }, ...values),
    "application/xml",
  );
```

### The default namespace

In XML, if an element name does not have an explicit [namespace prefix](#the_namespace_prefix), it belongs to its _default namespace_. The default namespace is the `null` namespace by default. The `xmlns` attribute sets the default namespace for the containing element as well as all of its descendants (unless it gets overridden in a subtree).

```js
// No xmlns declaration -> namespace is null
const doc = xml`<parent></parent>`;
console.log(doc.querySelector("parent").namespaceURI); // null

// The xmlns attribute applies to the element itself and all descendants
const doc2 = xml`<parent xmlns="https://developer.mozilla.org/">
  <child><grandchild></grandchild></child>
</parent>`;
console.log(doc2.querySelector("parent").namespaceURI); // https://developer.mozilla.org/
console.log(doc2.querySelector("child").namespaceURI); // https://developer.mozilla.org/
console.log(doc2.querySelector("grandchild").namespaceURI); // https://developer.mozilla.org/
```

The descendant may specify another `xmlns` attribute, which sets a different default namespace in its subtree (much like JavaScript variable scopes). For all purposes of namespace URIs, the empty string is equivalent to `null`. So for example, you can set `xmlns=""` to reset to the null namespace.

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

New namespace prefix identifiers can be declared with the `xmlns:prefix="namespace URI"` attribute. This creates a new namespace prefix called `prefix` which resolves to the namespace `"namespace URI"`. Now this prefix can be used in the element and all its descendants.

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
> The [CSS type selector](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors) selects by the local name (the part after `:`), so we write `child` instead of `mdn:child` in the selector above. See [Querying namespaced elements](#querying_namespaced_elements).

When the `prefix` is `null`, the qualified name of the element/attribute is just the `localName`; when the `prefix` is not null, the qualified name is `prefix:localName` (basically, what you actually wrote in the source code).

```js
const doc = xml`<parent mdn:foo="bar" xmlns:mdn="https://developer.mozilla.org/"></parent>`;
const fooAttr = doc.querySelector("parent").getAttributeNode("mdn:foo");
console.log(fooAttr.prefix); // mdn
console.log(fooAttr.localName); // foo
console.log(fooAttr.name); // mdn:foo
```

The parser enforces the following invariants:

- The `xmlns` and `xml` prefixes cannot be rebound.
- The XML and XMLNS namespaces cannot be bound to a custom prefix.
- The prefix must be defined in scope.

```js example-bad
xml`<element xmlns:xmlns="https://developer.mozilla.org/" />`;
// XML Parsing Error: reserved prefix (xmlns) must not be declared or undeclared

xml`<element xmlns:mdn="http://www.w3.org/XML/1998/namespace" />`;
// XML Parsing Error: prefix must not be bound to one of the reserved namespace names

xml`<element mdn:href="Document.querySelector()" />`;
// XML Parsing Error: prefix not bound to a namespace
```

All other prefix identifiers can be freely associated. This means you can have two prefixes that map to the same namespace URI, or the same prefix mapping to different namespace URIs in different parts of the document. During parse time, it's guaranteed that for any element, each prefix maps unambiguously to one namespace URI; this is not enforced [during runtime updating](#building_and_updating_namespaced_nodes).

> [!NOTE]
> Note that the default namespace and the namespace prefix are parsing-time concepts. At runtime, programmatically adding/updating the `xmlns` attributes do not change the namespaces of existing elements.
>
> All namespaced DOM methods take explicit namespace URIs paired with local names, because that is the only unambiguous way to identify elements and attributes. The prefix has about as much semantic significance as the element's text content; it participates in node equality, XML serialization, and a few methods that take qualified names.

## Namespace syntax in HTML

Once again, the [XML namespace syntax](#xml_namespace_syntax) section only applies to XML (which is why we've used the `xml` utility function that calls {{domxref("DOMParser")}}). In an HTML document parsed from `text/html`, by default all elements are HTML elements and belong to the HTML namespace `http://www.w3.org/1999/xhtml`. The HTML parser recognizes the {{SVGElement("svg")}} and the {{MathMLElement("math")}} elements, which put them and all their descendants into the SVG `http://www.w3.org/2000/svg` and MathML `http://www.w3.org/1998/Math/MathML` namespaces (unless escape hatches like {{SVGElement("foreignObject")}} are used). The following do not work:

- The `xmlns` attribute has absolutely no effect. If specified on HTML elements, its value must be `"http://www.w3.org/1999/xhtml"`.
- The namespace prefix syntax does not exist and the prefix is simply seen as a part of the local name. The parser special-cases several attribute names, but only on SVG and MathML elements: `xlink:actuate`, `xlink:arcrole`, `xlink:href`, `xlink:role`, `xlink:show`, `xlink:title`, `xlink:type`, `xml:lang`, `xml:space`, `xmlns`, `xmlns:xlink`. These have hard-coded namespace associations and are the only ones for which the namespace URI is not `null`. None of them is necessary in modern HTML documents because the SVG and MathML specs have defined their own alternatives where appropriate.

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

However, this is only to say that the _syntax_ of namespaces is very limited in HTML. DOM nodes in all contexts store and process namespaces in the same way, so all programmatic APIs introduced from this point on do not vary in behavior in HTML or XML, except in very certain places.

## Looking up the prefix-namespace association

Each element in the document has a many-to-one association between prefix identifiers and namespace URIs. It either inherits the association from its parent, declares itself via `xmlns="..."` and `xmlns:prefix="..."` attributes, or gets it from the its own `namespaceURI` and `prefix`. You can lookup this association on any node, which uses the node's relevant element:

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

> [!NOTE]
> Firefox has a bug where it does not consult the element's own `namespaceURI` when querying the default namespace on an unprefixed element.

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

`Node.lookupPrefix()` does not special-case the XML/XMLNS namespaces. Unless explicitly declared, they will return `null`. It also doesn't consider `xmlns="..."` attributes.

```js
const doc = xml`<parent xmlns="https://developer.mozilla.org/"></parent>`;
const parent = doc.querySelector("parent");
console.log(parent.lookupPrefix("https://developer.mozilla.org/")); // null
console.log(parent.lookupPrefix("http://www.w3.org/2000/xmlns/")); // null
console.log(parent.lookupPrefix("http://www.w3.org/XML/1998/namespace")); // null
```

{{domxref("Node.isDefaultNamespace()")}} takes a namespace and returns whether it's the default for the relevant element. `node.isDefaultNamespace(namespace)` (when `namespace` is not the empty string) is equivalent to `node.lookupNamespaceURI(null) === namespace`.

Note that the information you look up has no real significance (other than for usage with {{domxref("XPathEvaluator.createExpression()")}}), because newly created elements and attributes don't consult this mapping, and it does not even reflect the information used as parse time—the results are affected by runtime attribute updates.

## Building and updating namespaced nodes

Most nodes do not have associated namespaces, so their creation/updating methods mentioned in [Building and updating the DOM tree](/en-US/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree) remain unchanged. Only elements and attributes need another look.

If elements or attributes are in the wrong namespace, they will not receive their intended semantics and usually become invalid because they don't exist in the default namespace. In HTML documents, if you create SVG and MathML elements in the HTML namespace, they will not render. In the example below, the `<svg>` and `<circle>` elements are seen as HTML elements and are therefore non-conforming.

```js example-bad
const svg = document.createElement("svg");
svg.setAttribute("width", "200");
svg.setAttribute("height", "120");

const circle = document.createElement("circle");
circle.setAttribute("cx", "100");
circle.setAttribute("cy", "60");
circle.setAttribute("r", "40");
circle.setAttribute("fill", "skyblue");

svg.appendChild(circle);
document.body.appendChild(svg);
```

By default, the {{domxref("Document.createElement()")}} method creates elements in the HTML namespace if the document is an HTML document (including XHTML), and creates elements in the `null` namespace otherwise. As mentioned previously, the `xmlns` and `xmlns:prefix` attributes are parse-time concepts. They do not rebind the namespace at runtime. Therefore, the following is wrong for creating namespaced elements:

```js example-bad
const doc = xml`<parent xmlns="https://developer.mozilla.org/" />`;
const child = doc.createElement("child"); // Note: this element is created without a namespace!
child.setAttribute("xmlns", "https://example.com/");
doc.querySelector("parent").appendChild(child);
console.log(child.namespaceURI); // null
```

Furthermore, the name you pass to `createElement` is a _local name_, which means any colon in the name is treated as a part of the name instead of as a namespace prefix.

```js example-bad
const doc = xml`<parent xmlns:mdn="https://developer.mozilla.org/" />`;
const child = doc.createElement("mdn:child"); // Not a namespace prefix
doc.querySelector("parent").appendChild(child);
console.log(child.namespaceURI); // null
console.log(child.localName); // mdn:child
```

In order to specify the parts other than local name—namely, the namespace URI and namespace prefix—you must use the {{domxref("Document.createElementNS()")}} method instead. Instead of a local name, it takes two parts: the namespace URI and the _qualified name_. The qualified name is composed from the namespace prefix and the local name, so the method can extract those two parts as necessary.

```js example-good
const doc = new Document();
const child = doc.createElementNS("https://example.com/", "child");
console.log(child.namespaceURI); // https://example.com/
console.log(child.prefix); // null
console.log(child.localName); // child

const child2 = doc.createElementNS(
  "https://developer.mozilla.org/",
  "mdn:child",
);
console.log(child2.namespaceURI); // https://developer.mozilla.org/
console.log(child2.prefix); // mdn
console.log(child2.localName); // child
```

The idea is the same for attributes. {{domxref("Document.createAttribute()")}} always takes a local name and creates an `Attr` node in the `null` namespace. Most attributes parsed from XML source code live in the `null` namespace anyway (if there's no explicit prefix), but if you do want to use an explicit namespace, you should use {{domxref("Document.createAttributeNS()")}} instead.

Note that the prefix, after parsing, has no significance and does not need to be declared with `xmlns:`. It is just a piece of data stored inside the node. For example, above we used the `mdn:` prefix without ever declaring it with `xmlns:mdn`. The namespaced creation methods like `createElementNS` and `createAttributeNS` do enforce certain invariants.

- If a prefix exists, then the namespace cannot be `null`. (In other words, you can't create prefixed elements/attributes in the `null` namespace.)
- If the prefix is `xml`, then the namespace must be the XML namespace `http://www.w3.org/XML/1998/namespace`.
- The prefix is `xmlns` or the qualified name is `xmlns`, if and only if the namespace is the XMLNS namespace `http://www.w3.org/2000/xmlns/`.

Apart from these (and that you cannot use certain characters), anything is permitted regarding what prefix and namespace you specify. You can achieve other things that are impossible in XML source code, like having the same prefix map to different namespace URIs in the same scope. However, it is recommended that you keep the prefix consistent with how it would be written in the XML source code. This avoids bugs and ensures that your DOM can be serialized if needed.

In [Anatomy of the DOM](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM#element_and_its_attributes), we introduced that attributes associated with an element are stored in the {{domxref("Element/attributes", "attributes")}} {{domxref("NamedNodeMap")}}. This map is keyed by the attributes' namespace and local name—not by the qualified name. It is possible, although extremely rare in practice (because it can't happen when parsed from XML source code), for two attributes to have the same qualified names but different namespaces.

```js
const doc = xml`<parent />`;
const parent = doc.querySelector("parent");
parent.setAttributeNS("https://example.com/", "foo", "bar");
parent.setAttributeNS("https://example.org/", "foo", "baz");
console.log(parent.attributes.length); // 2
console.log(parent.getAttribute("foo")); // bar
console.log(parent.getAttributeNames()); // ['foo', 'foo']
```

There are two types of methods that read or modify this `attributes` map.

The first type takes existing `Attr` nodes: {{domxref("Element.setAttributeNode()")}}, {{domxref("Element.removeAttributeNode()")}}, and {{domxref("NamedNodeMap.setNamedItem()")}}. Because the `Attr` node already contains all namespace information, these methods are already namespace-aware. They either have no namespaced counterpart (no `Element.removeAttributeNodeNS()`) or the namespaced counterpart is exactly equivalent ({{domxref("Element.setAttributeNodeNS()")}} and {{domxref("NamedNodeMap.setNamedItemNS()")}}) and serves no particular purpose.

The second type takes qualified names: {{domxref("Element.getAttributeNode()")}}, {{domxref("Element.hasAttribute()")}}, {{domxref("Element.getAttribute()")}}, {{domxref("Element.setAttribute()")}}, {{domxref("Element.removeAttribute()")}}, {{domxref("NamedNodeMap.getNamedItem()")}} and {{domxref("NamedNodeMap.removeNamedItem()")}}. As shown above, qualified names are unreliable for unique identification. To precisely identify namespaced attributes, use the namespaced counterparts, which take a namespace URI and a local name. The {{domxref("Element/setAttributeNS", "setAttributeNS()")}} method takes a _qualified name_ instead of a local name, allowing you to specify the prefix for the new attribute as well. If the attribute already exists with a different prefix, the initial one is kept.

```js
const a = document.createElementNS("http://www.w3.org/2000/svg", "a");
a.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "https://developer.mozilla.org",
);
```

## Querying namespaced elements

The {{domxref("Document.querySelector()")}} method and its likes use [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors). The [CSS type selector](/en-US/docs/Web/CSS/Reference/Selectors/Type_selectors) selects by elements' local name. To explicitly select a certain namespace, you must use the [namespace separator](/en-US/docs/Web/CSS/Reference/Selectors/Namespace_separator) syntax, which requires declaring the namespace identifier separately via [`@namespace`](/en-US/docs/Web/CSS/Reference/At-rules/@namespace) (CSS does not consider the namespace prefix in DOM). This is not possible with `document.querySelector()`. Therefore, for example, there's no way to select only HTML {{HTMLElement("a")}} elements but not SVG {{SVGElement("a")}} elements using `querySelectorAll()`. The same goes for [attribute selectors](/en-US/docs/Web/CSS/Reference/Selectors/Attribute_selectors).

The {{domxref("Document.getElementsByTagName()")}} takes a qualified name, so it can distinguish, for example, `<a />` and `<mdn:a />`, but only if the elements have explicit prefixes. But as mentioned towards the end of [XML namespace syntax](#xml_namespace_syntax), prefixes and qualified names are unreliable for identification purposes. HTML almost never contains prefixes; in XML, explicit prefixes are also rarer than using `xmlns` to switch default namespaces. To query by the actual namespace, use {{domxref("Document.getElementsByTagNameNS()")}} instead, which takes a namespace and a local name. You can also pass `*` for either argument (to not filter for namespace or local name).

```js
const doc1 = xml`<parent xmlns:mdn="https://developer.mozilla.org">
  <a href="foo" />
  <mdn:a href="bar" />
</parent>`;
console.log(doc1.getElementsByTagName("a").length); // 1
console.log(doc1.getElementsByTagName("mdn:a").length); // 1

const doc2 = xml`<parent>
  <a href="foo" />
  <a href="bar" xmlns="http://www.w3.org/1999/xhtml" />
</parent>`;
console.log(doc2.getElementsByTagName("a").length); // 2
console.log(doc2.getElementsByTagNameNS(null, "a").length); // 1
console.log(
  doc2.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "a").length,
); // 1
```

The element's {{domxref("Element/id", "id")}} and {{domxref("Element/className", "className")}} only reflect the attributes in the `null` namespace with local name `id` and `class`. This behavior thus affects [class selectors](/en-US/docs/Web/CSS/Reference/Selectors/Class_selectors), [ID selectors](/en-US/docs/Web/CSS/Reference/Selectors/ID_selectors), {{domxref("Document.getElementsByClassName()")}}, {{domxref("Document.getElementById()")}}, etc.

```js
const doc = new Document();
const parent = doc.createElement("parent");
doc.append(parent);

const child1 = doc.createElement("child");
// namespace=null, prefix=null
child1.setAttributeNS(null, "class", "foo");
const child2 = doc.createElement("child");
// namespace=MDN, prefix=null
child2.setAttributeNS("https://developer.mozilla.org/", "class", "foo");

parent.append(child1, child2);
console.log(doc.querySelectorAll(".foo").length); // 1
console.log(doc.getElementsByClassName("foo").length); // 1
```

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

This guide provides an augment to the previous guides: [Anatomy of the DOM](/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM), [Selection and traversal](/en-US/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree), and [Building and updating](/en-US/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree). We've systematically covered how methods working with element and attributes need to be switched to be namespace-aware if necessary.

- Element and attribute nodes maintain three properties: namespace ({{domxref("Element.namespaceURI")}}/{{domxref("Attr.namespaceURI")}}), local name ({{domxref("Element.localName")}}/{{domxref("Attr.localName")}}), and namespace prefix ({{domxref("Element.prefix")}} or {{domxref("Attr.prefix")}}). The qualified name ({{domxref("Element.tagName")}}/{{domxref("Attr.name")}}) is derived from the namespace prefix and the local name.
- Namespaces in XML are declared using the `xmlns="..."` (for default) and `xmlns:prefix="..."` syntax. Elements and attributes can specify an explicit namespace using the `<prefix:local-name />` or `prefix:local-name="..."` syntax.
- The namespace syntax in HTML is basically non-existent; the HTML parser takes care of assigning namespaces.
- The {{domxref("Node.lookupNamespaceURI()")}}, {{domxref("Node.lookupPrefix()")}}, and {{domxref("Node.isDefaultNamespace()")}} methods can be used to look up the prefix-namespace association.
- The DOM methods mentioned in [Building and updating the DOM tree](/en-US/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree) do not take namespace URIs; they take either local names or qualified names. Use the versions suffixed with `NS` when dealing with element and attribute names.
- The `querySelector` methods cannot select by namespaces due to the lack of `@namespace` declarations. {{domxref("Document.getElementsByTagNameNS()")}} is the only `NS`-suffixed selection method.
