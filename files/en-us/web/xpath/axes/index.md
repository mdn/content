---
title: Axes
slug: Web/XPath/Axes
tags:
  - Transforming_XML_with_XSLT
  - XPath
  - XPath_Reference
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }} There are thirteen different axes in the [XPath](/en-US/docs/Web/XPath) specification. An axis represents a relationship to the context node, and is used to locate nodes relative to that node on the tree.

For further information on using XPath expressions, please see the [For Further Reading](/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading) section at the end of [Transforming XML with XSLT](/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT) document. Also see the ['axes' section in the xpath spec](https://www.w3.org/TR/xpath-30/#axes).

- [ancestor](/en-US/docs/Web/XPath/Axes/ancestor)
  - : Indicates all the ancestors of the context node beginning with the parent node and traveling through to the root node.
- [ancestor-or-self](/en-US/docs/Web/XPath/Axes/ancestor-or-self)
  - : Indicates the context node and all of its ancestors, including the root node.
- [attribute](/en-US/docs/Web/XPath/Axes/attribute)
  - : Indicates the attributes of the context node. Only elements have attributes. This axis can be abbreviated with the at sign (`@`).
- [child](/en-US/docs/Web/XPath/Axes/child)
  - : Indicates the children of the context node. If an XPath expression does not specify an axis, this is understood by default. Since only the root node or element nodes have children, any other use will select nothing.
- [descendant](/en-US/docs/Web/XPath/Axes/descendant)
  - : Indicates all of the children of the context node, and all of their children, and so forth. Attribute and namespace nodes are **not** included - the `parent` of an `attribute` node is an element node, but `attribute` nodes are not the children of their parents.
- [descendant-or-self](/en-US/docs/Web/XPath/Axes/descendant-or-self)
  - : Indicates the context node and all of its descendants. Attribute and namespace nodes are **not** included - the `parent` of an `attribute` node is an element node, but `attribute` nodes are not the children of their parents.
- [following](/en-US/docs/Web/XPath/Axes/following)
  - : Indicates all the nodes that appear after the context node, except any `descendant`, `attribute`, and `namespace` nodes.
- [following-sibling](/en-US/docs/Web/XPath/Axes/following-sibling)
  - : Indicates all the nodes that have the same parent as the context node and appear after the context node in the source document.
- [namespace](/en-US/docs/Web/XPath/Axes/namespace) _(not supported)_
  - : Indicates all the nodes that are in scope for the context node. In this case, the context node must be an element node.
- [parent](/en-US/docs/Web/XPath/Axes/parent)
  - : Indicates the single node that is the parent of the context node. It can be abbreviated as two periods (`..`).
- [preceding](/en-US/docs/Web/XPath/Axes/preceding)
  - : Indicates all the nodes that precede the context node in the document except any `ancestor`, `attribute` and `namespace` nodes.
- [preceding-sibling](/en-US/docs/Web/XPath/Axes/preceding-sibling)
  - : Indicates all the nodes that have the same parent as the context node and appear before the context node in the source document.
- [self](/en-US/docs/Web/XPath/Axes/self)
  - : Indicates the context node itself. It can be abbreviated as a single period (`.`).

{{QuickLinksWithSubpages("/en-US/docs/Web/XPath")}}
