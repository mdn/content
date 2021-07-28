---
title: content-visibility
slug: Web/CSS/content-visibility
tags:
  - CSS
  - CSS Containment
  - CSS Property
  - Layout
  - Paint
  - Reference
  - Style
  - Visibility
  - Web
browser-compat: css.properties.content-visibility
---
<p>{{CSSRef}}</p>

<p>The <strong><code>content-visibility</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>No effect. The element’s contents are laid out and rendered as normal.</dd>
 <dt><code>hidden</code></dt>
 <dd>The element skips its contents. The skipped contents must not be accessible to user-agent features, such as find-in-page, tab-order navigation, etc., nor be selectable or focusable. This is similar to giving the contents <code>display: none</code>.</dd>
 <dt><code>auto</code></dt>
 <dd>The element turns on layout containment, style containment, and paint containment. If the element is not relevant to the user, it also skips its contents. Unlike hidden, the skipped contents must still be available as normal to user-agent features such as find-in-page, tab order navigation, etc., and must be focusable and selectable as normal.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>Headings and other content will be suppressed by <code>content-visibility</code> if they are considered off-screen. This means that screen reader users may lose the benefit of having a complete page outline read out loud.</p>

<p>For more information read <a href="https://marcysutton.com/content-visibility-accessible-semantics">Content-visibility and Accessible Semantics</a>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_auto_to_reduce_rendering_cost_of_long_pages">Using auto to reduce rendering cost of long pages</h3>

<p>The following example shows the use of auto to skip painting and rendering of off-screen sections. This helps with both load and interactions on the page, since the content outside of the viewport is not rendered.</p>

<pre class="brush: html">&lt;style&gt;
section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

&lt;section&gt;...
&lt;section&gt;...
&lt;section&gt;...
&lt;section&gt;...
...
</pre>

<h3 id="Using_hidden_to_manually_manage_visibility.">Using hidden to manually manage visibility.</h3>

<p>The following example shows that it is possible to manage visibility in script. The added benefit of using <code>content-visibility: hidden</code> instead of, for example, <code>display: none</code> is that rendered content when hidden with <code>content-visibility</code> will preserve rendering state. This means that if the content is shown again, it will render quicker than the alternative.</p>

<pre class="brush: html">&lt;style&gt;
.hidden {
  content-visibility: hidden;
  /* when hidden, we want the element to size as if it had one child of 0x500px size */
  contain-intrinsic-size: 0 500px;
}
.visible {
  content-visibility: visible;
  /* this is here to avoid layout shift when switching between .hidden and .visible */
  contain: style layout paint;
}

&lt;div class=hidden&gt;...
&lt;div class=visible&gt;...
&lt;div class=hidden&gt;...
&lt;div class=hidden&gt;...
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://web.dev/content-visibility/">content-visibility: the new CSS property that boosts your rendering performance</a> (web.dev)</li>
</ul>
