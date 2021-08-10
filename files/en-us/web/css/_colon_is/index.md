---
title: ':is() (:matches(), :any())'
slug: Web/CSS/:is
tags:
  - ':is'
  - CSS
  - Experimental
  - Pseudo-class
  - Reference
  - Selector
  - Selectors
  - Web
browser-compat: css.selectors.is
---
<p>{{CSSRef}}</p>

<div class="notecard note">
<p><strong>Note:</strong> <code>:matches()</code> was renamed to <code>:is()</code> in <a href="https://github.com/w3c/csswg-drafts/issues/3258">CSSWG issue #3258</a>.</p>
</div>

<p>The <strong><code>:is()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> function takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. This is useful for writing large selectors in a more compact form.</p>

<pre class="brush: css no-line-numbers">/* Selects any paragraph inside a header, main
   or footer element that is being hovered */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* The above is equivalent to the following */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
</pre>

<p>Pseudo-elements are not valid in the selector list for <code>:is()</code>.</p>

<p>Note that older browsers support this functionality as <code>:matches()</code>, or through an older, prefixed pseudo-class — <code>:any()</code>, including older versions of Chrome, Firefox, and Safari. <code>:any()</code> works in exactly the same way as <code>:matches()</code>/<code>:is()</code>, except that it requires vendor prefixes and doesn't support <a href="/en-US/docs/Learn/CSS/Building_blocks/Selectors">complex selectors</a>.</p>

<p>These legacy pseudo-classes can be used to provide backwards compatibility.</p>

<pre class="brush: css no-line-numbers">/* Backwards-compatible version with :-*-any() and :matches()
   (It is not possible to group selectors into single rule,
   because presence of invalid selector would invalidate whole rule.) */
:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
</pre>

<h3 id="Forgiving_Selector_Parsing">Forgiving Selector Parsing</h3>

<p>The specification defines <code>:is()</code> and <code>:where()</code> as accepting a <a href="https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list">forgiving selector list</a>.</p>

<p>In CSS when using a selector list, if any of the selectors are invalid then the whole list is deemed invalid. When using <code>:is()</code> or <code>:where() </code>instead of the whole list of selectors being deemed invalid if one fails to parse, the incorrect or unsupported selector will be ignored and the others used.</p>

<pre class="brush: css">:is(:valid, :unsupported) {
  ...
}</pre>

<p>Will still parse correctly and match <code>:valid</code> even in browsers which don't support <code>:unsupported</code>, whereas:</p>

<pre class="brush: css">:valid, :unsupported {
  ...
}</pre>

<p>Will be ignored in browsers which don't support <code>:unsupported</code> even if they support <code>:valid</code>.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Cross-browser_example">Cross-browser example</h3>

<pre class="brush: html">&lt;header&gt;
  &lt;p&gt;This is my header paragraph&lt;/p&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;p&gt;This is my first&lt;/p&gt;&lt;p&gt;list item&lt;/p&gt;&lt;/li&gt;
    &lt;li&gt;&lt;p&gt;This is my second&lt;/p&gt;&lt;p&gt;list item&lt;/p&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;This is my footer paragraph&lt;/p&gt;
&lt;/footer&gt;</pre>

<pre class="brush: css">:-webkit-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:-moz-any(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:matches(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}
</pre>

<pre class="brush: js">let matchedItems;

try {
  matchedItems = document.querySelectorAll(':is(header, main, footer) p');
} catch(e) {
  try {
    matchedItems = document.querySelectorAll(':matches(header, main, footer) p');
  } catch(e) {
    try {
      matchedItems = document.querySelectorAll(':-webkit-any(header, main, footer) p');
    } catch(e) {
      try {
        matchedItems = document.querySelectorAll(':-moz-any(header, main, footer) p');
      } catch(e) {
        console.log('Your browser doesn\'t support :is(), :matches(), or :any()');
      }
    }
  }
}

matchedItems.forEach(applyHandler);

function applyHandler(elem) {
  elem.addEventListener('click', function(e) {
    alert('This paragraph is inside a ' + e.target.parentNode.nodeName);
  });
}</pre>

<p>{{EmbedLiveSample("Cross-browser_example", "100%", 300)}}</p>

<h3 id="Simplifying_list_selectors">Simplifying list selectors</h3>

<p>The <code>:is()</code> pseudo-class can greatly simplify your CSS selectors. For example, the following CSS:</p>

<pre class="brush: css">/* 3-deep (or more) unordered lists use a square */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
</pre>

<p>... can be replaced with:</p>

<pre class="brush: css">/* 3-deep (or more) unordered lists use a square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}</pre>

<h3 id="Simplifying_section_selectors">Simplifying section selectors</h3>

<p>The <code>:is()</code> pseudo-class is particularly useful when dealing with HTML5 <a href="/en-US/docs/Web/HTML/Element/Heading_Elements">sections and headings</a>. Since {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, and {{HTMLElement("nav")}} are commonly nested together, without <code>:is()</code>, styling them to match one another can be tricky.</p>

<p>For example, without <code>:is()</code>, styling all the {{HTMLElement("h1")}} elements at different depths could be very complicated:</p>

<pre class="brush: css">/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
section h1, article h1, aside h1, nav h1 {
  font-size: 25px;
}
/* Level 2 */
section section h1, section article h1, section aside h1, section nav h1,
article section h1, article article h1, article aside h1, article nav h1,
aside section h1, aside article h1, aside aside h1, aside nav h1,
nav section h1, nav article h1, nav aside h1, nav nav h1 {
  font-size: 20px;
}
/* Level 3 */
/* ... don't even think about it! */
</pre>

<p>Using <code>:is()</code>, though, it's much easier:</p>

<pre class="brush: css">/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
:is(section, article, aside, nav)
:is(section, article, aside, nav) h1 {
  font-size: 15px;
}
</pre>

<h3 id="Difference_between_is_and_where">Difference between :is() and :where()</h3>

<p>The difference between the two is that <code>:is()</code> counts towards the specificity of the overall selector (it takes the specificity of its most specific argument), whereas <code><a href="/en-US/docs/Web/CSS/:where">:where()</a></code> has a specificity value of 0. This is demonstrated by the <a href="/en-US/docs/Web/CSS/:where#examples">example on the <code>:where()</code> reference page</a>.</p>

<h2 id="Syntax">Syntax</h2>

{{CSSSyntax}}

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef(":where", ":where()")}} - Like <code>:is()</code>, but with 0 <a href="/en-US/docs/Web/CSS/Specificity">specificity</a>.</li>
 <li><a href="/en-US/docs/Web/CSS/Selector_list">Selector list</a></li>
 <li><a href="/en-US/docs/Web/Web_Components">Web components</a></li>
</ul>
