---
title: 'regexp:replace()'
slug: Web/EXSLT/regexp/replace
tags:
  - EXSLT
  - NeedsSpecTable
  - Reference
---
<div>{{XSLTRef}}{{QuickLinksWithSubpages("/en-US/docs/Web/EXSLT")}}</div>

<p><code>regexp:replace()</code> replaces the portions of a string that match a given regular expression with the contents of another string.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">regexp:replace(<var>originalString</var>, <var>regExpString</var>, <var>flagsString</var>, <var>replaceString</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>originalString</code></dt>
 <dd>The string perform a search-and-replace operation upon.</dd>
 <dt><code>regExpString</code></dt>
 <dd>The JavaScript style regular expression to evaluate.</dd>
 <dt><code>flagsString</code></dt>
 <dd>The string containing character flags.</dd>
 <dt><code>replaceString</code></dt>
 <dd>The string with which the matched substrings are to be replaced.</dd>
</dl>

<p>The character flags are:</p>

<dl>
 <dt><code>g</code> - Global replace</dt>
 <dd>If this flag is specified, all occurrences of the regular expression within the <code><em>originalString</em></code> are replaced. Otherwise only the first occurrence is replaced.</dd>
 <dt><code>i</code> - Case insensitive match</dt>
 <dd>If this flag is specified, the match is performed in a case insensitive fashion.</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>The revised version of the string.</p>

<h2 id="Specifications">Specifications</h2>

<p><a href="http://www.exslt.org/regexp/functions/replace/index.html">EXSLT - REGEXP:REPLACE</a></p>
