---
title: scroll-padding-inline-end
slug: Web/CSS/scroll-padding-inline-end
tags:
  - CSS
  - CSS Property
  - Web
  - 'recipe:css-property'
  - scroll-padding-inline
  - scroll-padding-inline-end
browser-compat: css.properties.scroll-padding-inline-end
---
<div>{{CSSRef}}</div>

<p>The <code>scroll-padding-inline-end</code> property defines offsets for the end edge in the inline dimension of the <dfn>optimal viewing region</dfn> of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-padding-inline-end.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Keyword values */
scroll-padding-inline-end: auto;

/* &lt;length&gt; values */
scroll-padding-inline-end: 10px;
scroll-padding-inline-end: 1em;
scroll-padding-inline-end: 10%;

/* Global values */
scroll-padding-inline-end: inherit;
scroll-padding-inline-end: initial;
scroll-padding-inline-end: revert;
scroll-padding-inline-end: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code><var>&lt;length-percentage&gt;</var></code></dt>
 <dd>An inwards offset from the inline end edge of the scrollport, as a valid length or a percentage.</dd>
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
