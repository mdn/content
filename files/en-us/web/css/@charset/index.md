---
title: '@charset'
slug: Web/CSS/@charset
tags:
  - At-rule
  - CSS
  - Layout
  - Reference
  - Web
browser-compat: css.at-rules.charset
---
<div>{{ CSSRef }}</div>

<p>The <strong><code>@charset</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/At-rule" title="At-rule">at-rule</a> specifies the character encoding used in the style sheet. It must be the first element in the style sheet and not be preceded by any character; as it is not a <a href="/en-US/docs/Web/CSS/Syntax#nested_statements">nested statement</a>, it cannot be used inside <a href="/en-US/docs/Web/CSS/At-rule#conditional_group_rules">conditional group at-rules</a>. If several <code>@charset</code> at-rules are defined, only the first one is used, and it cannot be used inside a <code>style</code> attribute on an HTML element or inside the {{ HTMLElement("style") }} element where the character set of the HTML page is relevant.</p>

<pre class="brush: css no-line-numbers">@charset "utf-8";</pre>

<p>This at-rule is useful when using non-ASCII characters in some CSS properties, like {{ cssxref("content") }}.</p>

<p>As there are several ways to define the character encoding of a style sheet, the browser will try the following methods in the following order (and stop as soon as one yields a result) :</p>

<ol>
 <li>The value of the <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Unicode byte-order</a> character placed at the beginning of the file.</li>
 <li>The value given by the <code>charset</code> attribute of the <code>Content-Type:</code> HTTP header or the equivalent in the protocol used to serve the style sheet.</li>
 <li>The <code>@charset</code> CSS at-rule.</li>
 <li>Use the character encoding defined by the referring document: the <code>charset</code> attribute of the {{ HTMLElement("link") }} element. This method is obsoleted in HTML5 and must not be used.</li>
 <li>Assume that the document is UTF-8</li>
</ol>

<h2 id="Syntax">Syntax</h2>

<pre>@charset "UTF-8";
@charset "iso-8859-15";
</pre>

<p>where:</p>

<dl>
 <dt><em>charset</em></dt>
 <dd>Is a {{cssxref("&lt;string&gt;")}} denoting the character encoding to be used. It must be the name of a web-safe character encoding defined in the <a href="http://www.iana.org/assignments/character-sets">IANA-registry</a>, and must be double-quoted, following exactly one space character (U+0020), and immediately terminated with a semicolon. If several names are associated with an encoding, only the one marked with <em>preferred</em> must be used.</dd>
</dl>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Valid_and_invalid_charset_declarations">Valid and invalid charset declarations</h3>

<pre class="brush: css">@charset "UTF-8";       /* Set the encoding of the style sheet to Unicode UTF-8 */
@charset 'iso-8859-15'; /* Invalid, wrong quoting style used */
@charset  "UTF-8";      /* Invalid, more than one space */
 @charset "UTF-8";      /* Invalid, there is a character (a space) before the at-rule */
@charset UTF-8;         /* Invalid, without ' or ", the charset is not a CSS {{cssxref("&lt;string&gt;")}} */
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Glossary/character_set">Character set</a> glossary entry</li>
 <li><a href="/en-US/docs/Glossary/Unicode">Unicode</a> glossary entry</li>
</ul>
