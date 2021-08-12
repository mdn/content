---
title: scroll-padding-left
slug: Web/CSS/scroll-padding-left
tags:
  - CSS
  - CSS Property
  - Reference
  - 'recipe:css-property'
  - scroll-padding
  - scroll-padding-left
browser-compat: css.properties.scroll-padding-left
---
<div>{{CSSRef}}</div>

<p>The <code>scroll-padding-left</code> property defines offsets for the left of the <dfn>optimal viewing region</dfn> of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-padding-left.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Keyword values */
scroll-padding-left: auto;

/* &lt;length&gt; values */
scroll-padding-left: 10px;
scroll-padding-left: 1em;
scroll-padding-left: 10%;

/* Global values */
scroll-padding-left: inherit;
scroll-padding-left: initial;
scroll-padding-left: revert;
scroll-padding-left: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code><var>&lt;length-percentage&gt;</var></code></dt>
 <dd>An inwards offset from the left edge of the scrollport, as a valid length or a percentage.</dd>
 <dt><code>auto</code></dt>
 <dd>The offset is determined by the user agent. This will generally be 0px, but a user agent is able to detect and do something else if a non-zero value is more appropriate.</dd>
</dl>
<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/CSS/CSS_Scroll_Snap">CSS Scroll Snap</a></li>
  <li><a href="https://developers.google.com/web/updates/2018/07/css-scroll-snap">Well-Controlled Scrolling with CSS Scroll Snap</a></li>
</ul>
