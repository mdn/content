---
title: Axes
slug: Web/XML/XPath/Reference/Axes
page-type: landing-page
sidebar: xmlsidebar
---

There are thirteen different axes in the [XPath](/en-US/docs/Web/XML/XPath) specification. An axis represents a relationship to the context node, and is used to locate nodes relative to that node on the tree.

For further information on using XPath expressions, please see the [For Further Reading](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) section of the [Transforming XML with XSLT](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT) guide. Also see the ['axes' section in the xpath spec](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Indicates all the ancestors of the context node beginning with the parent node and traveling through to the root node.
- `ancestor-or-self`
  - : Indicates the context node and all of its ancestors, including the root node.
- `attribute`
  - : Indicates the attributes of the context node. Only elements have attributes. This axis can be abbreviated with the at sign (`@`).
- `child`
  - : Indicates the children of the context node. If an XPath expression does not specify an axis, this is understood by default. Since only the root node or element nodes have children, any other use will select nothing.
- `descendant`
  - : Indicates all the children of the context node, and all of their children, and so forth. Attribute and namespace nodes are **not** included - the `parent` of an `attribute` node is an element node, but `attribute` nodes are not the children of their parents.
- `descendant-or-self`
  - : Indicates the context node and all of its descendants. Attribute and namespace nodes are **not** included - the `parent` of an `attribute` node is an element node, but `attribute` nodes are not the children of their parents.
- `following`
  - : Indicates all the nodes that appear after the context node, except any `descendant`, `attribute`, and `namespace` nodes.
- `following-sibling`
  - : Indicates all the nodes that have the same parent as the context node and appear after the context node in the source document.
- `namespace` _(not supported)_
  - : Indicates all the nodes that are in scope for the context node. In this case, the context node must be an element node.
- `parent`
  - : Indicates the single node that is the parent of the context node. It can be abbreviated as two periods (`..`).
- `preceding`
  - : Indicates all the nodes that precede the context node in the document except any `ancestor`, `attribute` and `namespace` nodes.
- `preceding-sibling`
  - : Indicates all the nodes that have the same parent as the context node and appear before the context node in the source document.
- `self`
  - : Indicates the context node itself. It can be abbreviated as a single period (`.`).
