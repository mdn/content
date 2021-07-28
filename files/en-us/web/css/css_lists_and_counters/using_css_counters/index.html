---
title: Using CSS counters
slug: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
tags:
  - Advanced
  - CSS
  - CSS Counter Styles
  - Guide
  - Layout
  - Reference
  - Web
---
<div>{{CSSRef}}</div>

<p><strong>CSS counters</strong> let you adjust the appearance of content based on its location in a document. For example, you can use counters to automatically number the headings in a webpage. Counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how many times they're used.</p>

<h2 id="Using_counters">Using counters</h2>

<h3 id="Manipulating_a_counters_value">Manipulating a counter's value</h3>

<p>To use a CSS counter, it must first be initialized to a value with the {{cssxref("counter-reset")}} property (<code>0</code> by default). The same property can also be used to change its value to any specific number. Once initialized, a counter's value can be increased or decreased with {{cssxref("counter-increment")}}. The counter's name must not be "none", "inherit", or "initial"; otherwise the declaration is ignored.</p>

<h3 id="Displaying_a_counter">Displaying a counter</h3>

<p>The value of a counter can be displayed using either the {{cssxref("counter()", "counter()")}} or {{cssxref("counters()", "counters()")}} function in a {{cssxref("content")}} property.</p>

<p>The {{cssxref("counter()")}} function has two forms: 'counter(<var>name</var>)' or 'counter(<var>name</var>, <var>style</var>)'. The generated text is the value of the innermost counter of the given name in scope at the given pseudo-element.The counter is rendered in the specified style (<code>decimal</code> by default).</p>

<p>The {{cssxref("counters()")}} function also has two forms: 'counters(<var>name</var>, <var>string</var>)' or 'counters(<var>name</var>, <var>string</var>, <var>style</var>)'. The generated text is the value of all counters with the given name in scope at the given pseudo-element, from outermost to innermost, separated by the specified string. The counters are rendered in the specified style (<code>decimal</code> by default).</p>

<h3 id="Basic_example">Basic example</h3>

<p>This example adds "Section [the value of the counter]:" to the beginning of each heading.</p>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">body {
  counter-reset: section;                       /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section;                   /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": ";    /* Display the word 'Section ', the value of
                                                   section counter, and a colon before the content
                                                   of each h3 */
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;h3&gt;Introduction&lt;/h3&gt;
&lt;h3&gt;Body&lt;/h3&gt;
&lt;h3&gt;Conclusion&lt;/h3&gt;</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Basic_example", "100%", 150)}}</p>

<h3 id="A_more_sophisticated_example">A more sophisticated example</h3>

<p>A counter must not necessarily be shown every time is incremented. This example counts all links, however the counter is shown only when a link has no text, as a convenient replacement.</p>

<h4 id="CSS2">CSS</h4>

<pre class="brush: css">:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}</pre>

<h4 id="HTML2">HTML</h4>

<pre class="brush: html">&lt;p&gt;See &lt;a href="https://www.mozilla.org/"&gt;&lt;/a&gt;&lt;/p&gt;
&lt;p&gt;Do not forget to &lt;a href="contact-me.html"&gt;leave a message&lt;/a&gt;!&lt;/p&gt;
&lt;p&gt;See also &lt;a href="https://developer.mozilla.org/"&gt;&lt;/a&gt;&lt;/p&gt;</pre>

<h4 id="Result2">Result</h4>

<p>{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}</p>

<h2 id="Nesting_counters">Nesting counters</h2>

<p>A CSS counter can be especially useful for making outlined lists, because a new instance of the counter is automatically created in child elements. Using the {{cssxref("counters()")}} function, separating text can be inserted between different levels of nested counters.</p>

<h3 id="Example_of_a_nested_counter">Example of a nested counter</h3>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">ol {
  counter-reset: section;                /* Creates a new instance of the
                                            section counter with each ol
                                            element */
  list-style-type: none;
}

li::before {
  counter-increment: section;            /* Increments only this instance
                                            of the section counter */
  content: counters(section, ".") " ";   /* Combines the values of all instances
                                            of the section counter, separated
                                            by a period */
}
</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 1     --&gt;
  &lt;li&gt;item               &lt;!-- 2     --&gt;
    &lt;ol&gt;
      &lt;li&gt;item&lt;/li&gt;      &lt;!-- 2.1   --&gt;
      &lt;li&gt;item&lt;/li&gt;      &lt;!-- 2.2   --&gt;
      &lt;li&gt;item           &lt;!-- 2.3   --&gt;
        &lt;ol&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.1 --&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.2 --&gt;
        &lt;/ol&gt;
        &lt;ol&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.1 --&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.2 --&gt;
          &lt;li&gt;item&lt;/li&gt;  &lt;!-- 2.3.3 --&gt;
        &lt;/ol&gt;
      &lt;/li&gt;
      &lt;li&gt;item&lt;/li&gt;      &lt;!-- 2.4   --&gt;
    &lt;/ol&gt;
  &lt;/li&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 3     --&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 4     --&gt;
&lt;/ol&gt;
&lt;ol&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 1     --&gt;
  &lt;li&gt;item&lt;/li&gt;          &lt;!-- 2     --&gt;
&lt;/ol&gt;</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample("Example_of_a_nested_counter", "100%", 350)}}</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS3 Lists", "#auto-numbering", "CSS Counters")}}</td>
   <td>{{Spec2("CSS3 Lists")}}</td>
   <td>No change</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "generate.html#counters", "CSS Counters")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("counter-reset")}}</li>
 <li>{{cssxref("counter-set")}}</li>
 <li>{{cssxref("counter-increment")}}</li>
 <li>{{cssxref("@counter-style")}}</li>
</ul>
