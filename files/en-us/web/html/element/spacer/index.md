---
title: <spacer>
slug: Web/HTML/Element/spacer
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.spacer
---
<div>{{non-standard_header}}{{deprecated_header}}</div>

<p>The <strong><code>&lt;spacer&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <code>&lt;spacer&gt;</code> no longer supported by any major browser and the same effects can now be achieved using simple CSS.</p>

<p>Firefox, which is the descendant of Netscape's browsers, removed support for <code>&lt;spacer&gt;</code> in version 4.</p>

<h2 id="Attributes">Attributes</h2>

<p>Like all other HTML elements, this element supports the <a href="/en-US/docs/Web/HTML/Global_attributes" title="HTML/Global attributes">global attributes</a>.</p>

<dl>
 <dt>{{ htmlattrdef("type") }}</dt>
 <dd>This attribute determines type of spacer. Possible values are <code>horizontal</code>, <code>vertical</code> and <code>block</code>.</dd>
 <dt>{{ htmlattrdef("size") }}</dt>
 <dd>This attribute can be used for defining size of spacer in pixels when type is <code>horizontal</code> or <code>vertical</code>.</dd>
 <dt>{{ htmlattrdef("width") }}</dt>
 <dd>This attribute can be used for defining width of spacer in pixels when type is <code>block</code>.</dd>
 <dt>{{ htmlattrdef("height") }}</dt>
 <dd>This attribute can be used for defining height of spacer in pixels when type is <code>block</code>.</dd>
 <dt>{{ htmlattrdef("align") }}</dt>
 <dd>This attribute determines alignment of spacer. Possible values are <code>left</code>, <code>right</code> and <code>center</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush:html">&lt;span&gt;Just a text node&lt;/span&gt;
&lt;spacer type="horizontal" size="10"&gt;&lt;/spacer&gt;
&lt;span&gt;Just another text node&lt;/span&gt;
&lt;spacer type="block" width="10" height="10"&gt;&lt;/spacer&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<p>{{ HTMLRef }}</p>
