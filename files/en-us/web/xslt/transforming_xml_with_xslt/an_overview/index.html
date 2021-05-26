---
title: An Overview
slug: Web/XSLT/Transforming_XML_with_XSLT/An_Overview
tags:
  - NeedsHelp
  - NeedsMarkupWork
  - Transforming_XML_with_XSLT
  - XML
  - XSLT
---
<a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT">« Transforming XML with XSLT</a>

<p>The eXtensible Stylesheet Language/Transform is a very powerful language, and a complete discussion of it is well beyond the scope of this article, but a brief discussion of some basic concepts will be helpful in understanding the description of Netscape's capabilities that follows.</p>

<dl>
 <dt>An XSLT stylesheet is an XML document.</dt>
 <dd>Unlike CSS, which has its own specialized syntax, an XSLT stylesheet is an XML document, which must conform to all XML rules, including well-formedness. So the model for transformation is that one XML document is used to transform another XML document.</dd>
 <dt>An XSLT stylesheet is marked as such by the inclusion of a standard XSLT heading.</dt>
 <dd>The outermost element in an XSLT stylesheet must be the <code>&lt;xsl:stylesheet&gt;</code> element (an acceptable alternate is the <code>&lt;xsl:transform&gt;</code> element). This element will include at least one namespace declaration and the mandatory version attribute. Other namespaces and three optional attributes may also be included.</dd>
 <dt>The mandatory namespace for XSLT is <code>"http://www.w3.org/1999/XSL/Transform"</code>.</dt>
 <dd>
 <p>Namespaces are the subject of a fair amount of confusion in XML. Despite the fact that very often namespaces appear to be URIs, they do not, in fact, refer to a resource located at that address. Instead they are a way of specifying a unique identifier for a known set of elements. The string <code>"http://www.w3.org/1999/XSL/Transform"</code> is a constant that designates the elements so marked as belonging to the set of tags designated by the W3C in the 1999 XSLT Recommendation. Another string that is occasionally seen in stylesheets, <code>"http://www.w3.org/TR/WD-xsl"</code>, indicates compliance with an earlier working draft (hence the WD) of the W3C document. This latter namespace is not compatible with the one that the W3C eventually adopted and is not supported by Netscape.</p>

 <p>Because typing <code>"http://www.w3.org/1999/XSL/Transform"</code> repeatedly would be tedious and would render the markup difficult to read, there is a standard mechanism for assigning a shorthand name to the namespace in the stylesheet heading. Thus a full example of the opening stylesheet element might look like this.</p>
 </dd>
 <dt><code>&lt;xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"&gt;</code></dt>
 <dd>The xmlns pseudo-attribute maps the shorthand name xsl onto the full namespace for use throughout the document that follows. Thus the stylesheet element above is prefixed with <code>xsl:</code>. Although xsl is the conventionally used shorthand name (called the prefix), it is not mandatory and it is quite possible to choose a different one. The examples in this article all assume the use of the xsl prefix.</dd>
 <dt>All XSLT transformations are performed on trees, not documents.</dt>
 <dd>
 <p>The XSLT transformation engine, called the processor, does not work directly on documents. Before transformation can take place, the primary XML document(s) and the stylesheet document(s) must be run through a parser, which creates an abstract representation of the structure of the document in memory. This representation, called the tree, is what is actually manipulated by the processor. The tree is an abstract datatype, a conceptual model which can be implemented in various ways depending on the parser and the processor. :Netscape's uses a structure similar to the W3C DOM as its tree structure, but others are possible. The only requirements concern the disposition of objects in the tree, their properties, and their relationships.</p>

 <p>The tree consists of a hierarchical framework of nodes. It can be made up of seven different types of nodes: the single root node, element nodes, text nodes, attribute nodes, comment nodes, processing instruction nodes, and namespace nodes.</p>

 <p>At the top of the tree is the root node. The root node does not correspond to any individual part of the XML document: it represents the document as whole. Below the root node are its children, which can be elements, comments, processing instructions and so on. Some of those children may also have children. And this can continue for several levels. There are certain constraints on which type of nodes can occur where: for example, text nodes can have no children.</p>

 <p>The result of the processor's action is also a tree. Netscape uses this tree to render the contents in the browser window.</p>
 </dd>
 <dt>XSLT is a high-level declarative language.</dt>
 <dd>In essence, an XSLT stylesheet is a set of rules, called templates, which declare that any node that matches this specific pattern should be manipulated in this specific way and end up in this specific position in the result tree. The particulars of how this is to be accomplished are left up to the processor. Because the order of execution of the stylesheet cannot be guaranteed, XSLT does not support any functionality that produces side-effects. In this it is like Lisp or Scheme.</dd>
 <dt>Locations on the tree are specified using XPath, another W3C Recommendation.</dt>
 <dd>Transformations depend on the processor's being able to pinpoint individual nodes on the tree. To facilitate this, the W3C decided to use a separate language, XPath, which also has uses outside the XSLT context. As its name implies, XPath defines a "path" the processor must take through the tree to arrive at the desired node. This path consists of XPath-specific expressions to be evaluated, expressions which may include a number of conditions to be matched, a way of associating nodes, and/or an indication of directionality within the tree. A fuller description of the parts of XPath most commonly used in XSLT follows in the reference section.</dd>
 <dt>Potential conflicts in template matching are resolved by using a set of cascading precedence rules.</dt>
 <dd>In general, a more specific template rule takes precedence over a less specific one and, other things being equal, a template rule that appears later in the document takes precedence over one that appears earlier.</dd>
 <dt>Stylesheets can be attached to an XML document via a processing instruction.</dt>
 <dd>The simplest way to indicate which XSLT stylesheet should be used to process a particular XML document is to include a processing instruction in the XML document itself. For example, if the stylesheet is called inventory.xsl and resides in the same directory as the xml document, the processing instruction in the xml document would look like this:</dd>
 <dt><code>&lt;?xml-stylesheet type="text/xml" href="inventory.xsl"?&gt;</code></dt>
 <dd>This must be placed in the prolog section of the xml document.</dd>
</dl>

<p>To learn more about XSLT and XPath, see the <a href="/en-US/Transforming_XML_with_XSLT/For_Further_Reading">For Further Reading</a> section at the end of this article.</p>
