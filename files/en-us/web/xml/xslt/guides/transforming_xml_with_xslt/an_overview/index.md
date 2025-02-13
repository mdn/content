---
title: An overview
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/An_Overview
page-type: guide
sidebar: xmlsidebar
---

The eXtensible Stylesheet Language/Transform is a very powerful language, and a complete discussion of it is well beyond the scope of this article, but a brief discussion of some basic concepts will be helpful in understanding the description of Netscape's capabilities that follows.

- An XSLT stylesheet is an XML document.
  - : Unlike CSS, which has its own specialized syntax, an XSLT stylesheet is an XML document, which must conform to all XML rules, including well-formedness. So the model for transformation is that one XML document is used to transform another XML document.
- An XSLT stylesheet is marked as such by the inclusion of a standard XSLT heading.
  - : The outermost element in an XSLT stylesheet must be the `<xsl:stylesheet>` element (an acceptable alternate is the `<xsl:transform>` element). This element will include at least one namespace declaration and the mandatory version attribute. Other namespaces and three optional attributes may also be included.
- The mandatory namespace for XSLT is `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namespaces are the subject of a fair amount of confusion in XML. Despite the fact that very often namespaces appear to be URIs, they do not, in fact, refer to a resource located at that address. Instead they are a way of specifying a unique identifier for a known set of elements. The string `"http://www.w3.org/1999/XSL/Transform"` is a constant that designates the elements so marked as belonging to the set of tags designated by the W3C in the 1999 XSLT Recommendation. Another string that is occasionally seen in stylesheets, `"http://www.w3.org/TR/WD-xsl"`, indicates compliance with an earlier working draft (hence the WD) of the W3C document. This latter namespace is not compatible with the one that the W3C eventually adopted and is not supported by Netscape.

    Because typing `"http://www.w3.org/1999/XSL/Transform"` repeatedly would be tedious and would render the markup difficult to read, there is a standard mechanism for assigning a shorthand name to the namespace in the stylesheet heading. Thus a full example of the opening stylesheet element might look like this.

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : The xmlns pseudo-attribute maps the shorthand name xsl onto the full namespace for use throughout the document that follows. Thus the stylesheet element above is prefixed with `xsl:`. Although xsl is the conventionally used shorthand name (called the prefix), it is not mandatory and it is quite possible to choose a different one. The examples in this article all assume the use of the xsl prefix.
- All XSLT transformations are performed on trees, not documents.

  - : The XSLT transformation engine, called the processor, does not work directly on documents. Before transformation can take place, the primary XML document(s) and the stylesheet document(s) must be run through a parser, which creates an abstract representation of the structure of the document in memory. This representation, called the tree, is what is actually manipulated by the processor. The tree is an abstract datatype, a conceptual model which can be implemented in various ways depending on the parser and the processor. :Netscape's uses a structure similar to the W3C DOM as its tree structure, but others are possible. The only requirements concern the disposition of objects in the tree, their properties, and their relationships.

    The tree consists of a hierarchical framework of nodes. It can be made up of seven different types of nodes: the single root node, element nodes, text nodes, attribute nodes, comment nodes, processing instruction nodes, and namespace nodes.

    At the top of the tree is the root node. The root node does not correspond to any individual part of the XML document: it represents the document as whole. Below the root node are its children, which can be elements, comments, processing instructions and so on. Some of those children may also have children. And this can continue for several levels. There are certain constraints on which type of nodes can occur where: for example, text nodes can have no children.

    The result of the processor's action is also a tree. Netscape uses this tree to render the contents in the browser window.

- XSLT is a high-level declarative language.
  - : In essence, an XSLT stylesheet is a set of rules, called templates, which declare that any node that matches this specific pattern should be manipulated in this specific way and end up in this specific position in the result tree. The particulars of how this is to be accomplished are left up to the processor. Because the order of execution of the stylesheet cannot be guaranteed, XSLT does not support any functionality that produces side-effects. In this it is like Lisp or Scheme.
- Locations on the tree are specified using XPath, another W3C Recommendation.
  - : Transformations depend on the processor's being able to pinpoint individual nodes on the tree. To facilitate this, the W3C decided to use a separate language, XPath, which also has uses outside the XSLT context. As its name implies, XPath defines a "path" the processor must take through the tree to arrive at the desired node. This path consists of XPath-specific expressions to be evaluated, expressions which may include a number of conditions to be matched, a way of associating nodes, and/or an indication of directionality within the tree. A fuller description of the parts of XPath most commonly used in XSLT follows in the reference section.
- Potential conflicts in template matching are resolved by using a set of cascading precedence rules.
  - : In general, a more specific template rule takes precedence over a less specific one and, other things being equal, a template rule that appears later in the document takes precedence over one that appears earlier.
- Stylesheets can be attached to an XML document via a processing instruction.
  - : The simplest way to indicate which XSLT stylesheet should be used to process a particular XML document is to include a processing instruction in the XML document itself. For example, if the stylesheet is called inventory.xsl and resides in the same directory as the XML document, the processing instruction in the XML document would look like this:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : This must be placed in the prolog section of the XML document.

To learn more about XSLT and XPath, see the [For Further Reading](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) section at the end of this article.
