---
title: scroll-padding-right
slug: Web/CSS/scroll-padding-right
tags:
  - CSS
  - Reference
  - Web
  - 'recipe:css-property'
  - scroll-padding
  - scroll-padding-right
browser-compat: css.properties.scroll-padding-right
---
<div>{{CSSRef}}</div>

<p>The <code>scroll-padding-right</code> property defines offsets for the right of the <dfn>optimal viewing region</dfn> of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.</p>

<div>{{EmbedInteractiveExample("pages/css/scroll-padding-right.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* Keyword values */
scroll-padding-right: auto;

/* &lt;length&gt; values */
scroll-padding-right: 10px;
scroll-padding-right: 1em;
scroll-padding-right: 10%;

/* Global values */
scroll-padding-right: inherit;
scroll-padding-right: initial;
scroll-padding-right: revert;
scroll-padding-right: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code><var>&lt;length-percentage&gt;</var></code></dt>
 <dd>An inwards offset from the top edge of the scrollport, as a valid length or a percentage.</dd>
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
