---
title: caret
slug: Glossary/caret
tags:
  - Cursor
  - Glossary
  - Input
  - caret
  - insertion point
  - text cursor
  - text entry
  - text input
  - text insertion point
---
<p>A <strong>caret</strong> (sometimes called a "text cursor") is an indicator displayed on the screen to indicate where text input will be inserted.</p>

<p>Most user interfaces represent the caret using a thin vertical line or a character-sized box that flashes, but this can vary. This point in the text is called the <strong>insertion point</strong>. The word "caret" differentiates the text insertion point from the mouse cursor.</p>

<p>On the web, a caret is used to represent the insertion point in {{HTMLElement("input")}} and {{HTMLElement("textarea")}} elements, as well as any elements whose {{htmlattrxref("contenteditable")}} attribute is set, thereby allowing the contents of the element to be edited by the user.</p>

<h2 id="see_also">See also</h2>

<ul>
	<li>{{interwiki("wikipedia", "Caret navigation")}} on Wikipedia</li>
</ul>

<h3 id="CSS_related_to_the_caret">CSS related to the caret</h3>

<p>You can set the color of the caret for a given element's editable content by setting the element's CSS {{cssxref("caret-color")}} property to the appropriate {{cssxref("&lt;color&gt;")}} value.</p>

<h3 id="HTML_elements_that_may_present_a_caret">HTML elements that may present a caret</h3>

<p>These elements provide text entry fields or boxes and therefore make use of the caret.</p>

<ul>
	<li><code><a href="/en-US/docs/Web/HTML/Element/input/text">&lt;input type="text"&gt;</a></code></li>
	<li><code><a href="/en-US/docs/Web/HTML/Element/input/password">&lt;input type="password"&gt;</a></code></li>
	<li><code><a href="/en-US/docs/Web/HTML/Element/input/search">&lt;input type="search"&gt;</a></code></li>
	<li><code><a href="/en-US/docs/Web/HTML/Element/input/date">&lt;input type="date"&gt;</a></code>, <code><a href="/en-US/docs/Web/HTML/Element/input/time">&lt;input type="time"&gt;</a></code>, <code><a href="/en-US/docs/Web/HTML/Element/input/datetime">&lt;input type="datetime"&gt;</a></code>, and <code><a href="/en-US/docs/Web/HTML/Element/input/datetime-local">&lt;input type="datetime-local"&gt;</a></code></li>
	<li><code><a href="/en-US/docs/Web/HTML/Element/input/number">&lt;input type="number"&gt;</a></code><a href="/en-US/docs/Web/HTML/Element/input/number">, </a><code><a href="/en-US/docs/Web/HTML/Element/input/range">&lt;input type="range"&gt;</a></code></li>
	<li><code><a href="/en-US/docs/Web/HTML/Element/input/email">&lt;input type="email"&gt;</a></code>, <code><a href="/en-US/docs/Web/HTML/Element/input/tel">&lt;input type="tel"&gt;</a></code>, and <code><a href="/en-US/docs/Web/HTML/Element/input/url">&lt;input type="url"&gt;</a></code></li>
	<li>{{HTMLElement("textarea")}}</li>
	<li>Any element with its {{htmlattrxref("contenteditable")}} attribute set</li>
</ul>
