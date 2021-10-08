---
title: Transforming XML with XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
tags:
  - NeedsMigration
  - Transforming_XML_with_XSLT
  - XML
  - XSLT
---
<div>{{XSLTRef}}</div>

<h2 id="An_Overview">An Overview</h2>

<p><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview">An Overview</a></p>

<p>The separation of content and presentation is a key design feature of <a href="/en-US/docs/Web/XML">XML</a>. The structure of an XML document is designed to reflect and clarify important relationships among the individual aspects of the content itself, unhindered by a need to provide any indication about how this data should eventually be presented. This intelligent structuring is particularly important as more and more data transfers are automated and take place between highly heterogeneous machines linked by a network.</p>

<p>Yet eventually much of the content stored in XML documents will need to be presented to human readers. Because a browser provides a familiar and highly flexible interface, it is an ideal mechanism for delivering such presentation versions of XML content. Built from the ground up utilizing a wide variety of XML technologies, Firefox incorporates within itself all of the mechanisms needed to process both original XML documents and the specialized stylesheets used to style and lay them out for HTML display, reducing server load with client-side processing.</p>

<p>At present, Gecko (the layout engine behind Firefox) supports two forms of XML stylesheets. For basic control of appearance — fonts, colors, position, and so forth — Gecko uses <a href="/en-US/docs/Web/CSS">CSS</a>. CSS1 and CSS2 are well supported and support for the emerging CSS3 standard is under development. For further information about CSS, see <a href="https://www.meyerweb.com/eric/css/">Eric Meyer's CSS pages</a>.</p>

<p>Our focus here is on the second type of stylesheet that Gecko supports: the XSLT stylesheet. XSLT stands for eXtensible Stylesheet Language/Transform and the name is apt. XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format (and in the case of Firefox, the focus is on converting it on the fly into HTML which can then be displayed by the browser).</p>

<h2 id="XSLTXPath_reference">XSLT/XPath reference</h2>

<h3 id="Elements">Elements</h3>

<p><a href="/en-US/docs/Web/XSLT/Element">Elements</a></p>

<ul>
 <li><a href="/en-US/docs/Web/XSLT/Element/apply-imports">xsl:apply-imports</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/apply-templates">xsl:apply-templates</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/attribute">xsl:attribute</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/attribute-set">xsl:attribute-set</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/call-template">xsl:call-template</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/choose">xsl:choose</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/comment">xsl:comment</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/copy">xsl:copy</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/copy-of">xsl:copy-of</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/decimal-format">xsl:decimal-format</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/element">xsl:element</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/fallback">xsl:fallback</a> <em>(not supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/for-each">xsl:for-each</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/if">xsl:if</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/import">xsl:import</a> <em>(mostly supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/include">xsl:include</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/key">xsl:key</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/message">xsl:message</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/namespace-alias">xsl:namespace-alias</a> <em>(not supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/number">xsl:number</a> <em>(partially supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/otherwise">xsl:otherwise</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/output">xsl:output</a> <em>(partially supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/param">xsl:param</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/preserve-space">xsl:preserve-space</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/processing-instruction">xsl:processing-instruction</a></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/sort">xsl:sort</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/strip-space">xsl:strip-space</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/stylesheet">xsl:stylesheet</a> <em>(partially supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/template">xsl:template</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/text">xsl:text</a> <em>(partially supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/transform">xsl:transform</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/value-of">xsl:value-of</a> <em>(partially supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/variable">xsl:variable</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/when">xsl:when</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XSLT/Element/with-param">xsl:with-param</a> <em>(supported)</em></li>
</ul>

<h3 id="Axes">Axes</h3>

<p><a href="/en-US/docs/Web/XPath/Axes">Axes</a></p>

<ul>
 <li><a href="/en-US/docs/Web/XPath/Axes/ancestor">ancestor</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/ancestor-or-self">ancestor-or-self</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/attribute">attribute</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/child">child</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/descendant">descendant</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/descendant-or-self">descendant-or-self</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/following">following</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/following-sibling">following-sibling</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/namespace">namespace</a> <em>(not supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/parent">parent</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/preceding">preceding</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/preceding-sibling">preceding-sibling</a></li>
 <li><a href="/en-US/docs/Web/XPath/Axes/self">self</a></li>
</ul>

<h3 id="Functions">Functions</h3>

<p><a href="/en-US/docs/Web/XPath/Functions">Functions</a></p>

<ul>
 <li><a href="/en-US/docs/Web/XPath/Functions/boolean">boolean()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/ceiling">ceiling()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/concat">concat()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/contains">contains()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/count">count()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/current">current()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/document">document()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/element-available">element-available()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/false">false()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/floor">floor()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/format-number">format-number()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/function-available">function-available()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/generate-id">generate-id()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/id">id()</a> <em>(partially supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/key">key()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/lang">lang()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/last">last()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/local-name">local-name()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/name">name()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/namespace-uri">namespace-uri()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/normalize-space">normalize-space()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/not">not()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/number">number()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/position">position()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/round">round()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/starts-with">starts-with()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/string">string()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/string-length">string-length()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/substring">substring()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/substring-after">substring-after()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/substring-before">substring-before()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/sum">sum()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/system-property">system-property()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/translate">translate()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/true">true()</a> <em>(supported)</em></li>
 <li><a href="/en-US/docs/Web/XPath/Functions/unparsed-entity-url">unparsed-entity-url()</a> <em>(not supported)</em></li>
</ul>

<h2 id="For_Further_Reading">For Further Reading</h2>

<p><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading">For Further Reading</a></p>

<ul>
 <li><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#books">Books</a></li>
 <li><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#digital">Digital</a>
  <ul>
   <li><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#websites">Websites</a></li>
   <li><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#articles">Articles</a></li>
   <li><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#tutorials.2fexamples">Tutorials/Examples</a></li>
   <li><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#other">Other</a></li>
  </ul>
 </li>
</ul>

<h2 id="Resources">Resources</h2>

<p><a href="/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/Resources">Resources</a></p>

<h2 id="Original_Document_Information">Original Document Information</h2>

<ul>
 <li>Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.</li>
 <li>Note: This reprinted article was originally part of the DevEdge site.</li>
</ul>
