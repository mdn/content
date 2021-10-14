---
title: XHTML
slug: Web/Guide/HTML/XHTML
tags:
  - Guide
  - HTML
  - Web
  - Web Development
  - Web Standards
  - XML
---
<p><strong>XHTML</strong> is a term that was historically used to describe <a href="/en-US/docs/Web/HTML">HTML</a> documents written to conform with {{Glossary("XML")}} syntax rules.</p>

<p>The following example shows an HTML document and corresponding "XHTML" document, and the accompanying {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} headers they should be served with.</p>

<h3 id="HTML_document">HTML document</h3>

<pre class="brush: html">Content-Type: text/html

&lt;!DOCTYPE html&gt;
&lt;html lang=en&gt;
  &lt;head&gt;
    &lt;meta charset=utf-8&gt;
    &lt;title&gt;HTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;I am a HTML document&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="XHTML_document">XHTML document</h3>

<pre class="brush: xml">Content-Type: application/xhtml+xml

&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;XHTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;I am a XHTML document&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>In practice, very few "XHTML" documents are served over the web with a <code>Content-Type: application/xhtml+xml</code> header. Instead, even though the documents are written to conform to XML syntax rules, they are served with a <code>Content-Type: text/html</code> header — so browsers parse those documents using HTML parsers rather than XML parsers, which can cause a variety of sometimes-very-surprising problems. The problems are described in more details in the following articles:</p>

<ul>
 <li><a href="http://www.webdevout.net/articles/beware-of-xhtml">Beware of XHTML</a> by David Hammond</li>
 <li><a href="http://www.hixie.ch/advocacy/xhtml">Sending XHTML as text/html Considered Harmful</a> by Ian Hickson</li>
 <li><a href="http://www.xml.com/pub/a/2003/03/19/dive-into-xml.html">XHTML's Dirty Little Secret</a> by Mark Pilgrim</li>
 <li><a href="http://hsivonen.iki.fi/xhtml-the-point/">XHTML - What's the Point?</a> by Henri Sivonen</li>
 <li><a href="http://lachy.id.au/log/2005/12/xhtml-beginners">XHTML is not for Beginners</a> by Lachlan Hunt</li>
</ul>
