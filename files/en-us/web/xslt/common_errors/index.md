---
title: Common XSLT Errors
slug: Web/XSLT/Common_errors
tags:
  - XSLT
---
<h3 id="MIME_types">MIME types</h3>

<p>Your server needs to send both the source and the stylesheet with a XML mime type, <code>text/xml</code> or <code>application/xml</code>. To find out the current type, load the file in Mozilla and look at the page info. Or use a download tool, those usually tell the mime type.</p>

<p>In Firefox 6 and forward, you can also use the official XSLT mimetype: <code>application/xslt+xml</code>.</p>

<h3 id="Namespace">Namespace</h3>

<p>The XSLT 1.0 namespace is <code><a href="https://www.w3.org/1999/XSL/Transform">http://www.w3.org/1999/XSL/Transform</a></code>. Older versions of IE used a different namespace. However these versions also used a draft version of XSLT which is incompatible with what eventually became the XSLT 1.0 specification. Firefox only supports the official XSLT 1.0 version.</p>

<h3 id="Missing_features">Missing features</h3>

<p>There are some features in the XSLT 1.0 specification which Firefox unfortunately does not yet support. Specifically:</p>

<ul>
 <li>The <code>namespace::</code> axis in XPath expressions. Support for this will hopefully be available in the future.</li>
 <li>The <code>disable-output-escaping</code> attribute. This feature controls how serializing the constructed output document works. However Firefox never serializes the output document and so the attribute isn't really applicable. While we could try to add some heuristics to serialize and reparse just the part of the output document which has <code>disable-output-escaping</code> applied, heuristics often get things wrong and lead to surprising results, hence we've been reluctant to add this so far. Often times stylesheets contain code like <code>&lt;xsl:text disable-output-escaping="yes"&gt;&amp;nbsp;&lt;/xsl:text&gt;</code>, this is equivalent to putting <code>&amp;#160;</code> in the stylesheet which will work great in all XSLT engines. We do realize that the lack of <code>disable-output-escaping</code> is a problem and we'd like to find a solution for it, however so far we haven't found any good solutions.</li>
 <li>The <code>&lt;xsl:namespace-alias&gt;</code> element.</li>
</ul>

<p>If you'd like to help out with any of the above features, help would be greatly appreciated.</p>
