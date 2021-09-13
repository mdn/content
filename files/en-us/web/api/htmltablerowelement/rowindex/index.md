---
title: HTMLTableRowElement.rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
tags:
- API
- HTML DOM
- NeedsSpecTable
- Property
- Reference
browser-compat: api.HTMLTableRowElement.rowIndex
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <strong><code>HTMLTableRowElement.rowIndex</code></strong> read-only property
  represents the position of a row in relation to the whole {{HtmlElement("table")}}.</p>

<p>Even when the {{HtmlElement("thead")}}, {{HtmlElement("tbody")}}, and
  {{HtmlElement("tfoot")}} elements are out of order in the HTML, browsers render the
  table in the right order. Therefore the rows count from <code>&lt;thead&gt;</code> to
  <code>&lt;tbody&gt;</code>, from <code>&lt;tbody&gt;</code> to
  <code>&lt;tfoot&gt;</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>index</em> = <em>HTMLTableRowElement</em>.rowIndex</pre>

<h3 id="Value">Value</h3>

<p>Returns the index of the row, or <code>-1</code> if the row is not part of a table.</p>

<h2 id="Example">Example</h2>

<p>This example uses JavaScript to label all the row numbers in a table.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Item&lt;/th&gt;        &lt;th&gt;Price&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Bananas&lt;/td&gt;     &lt;td&gt;$2&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Oranges&lt;/td&gt;     &lt;td&gt;$8&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;Top Sirloin&lt;/td&gt; &lt;td&gt;$20&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;&lt;td&gt;Total&lt;/td&gt;       &lt;td&gt;$30&lt;/td&gt;&lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let rows = document.querySelectorAll('tr');

rows.forEach((row) =&gt; {
  let z = document.createElement("td");
  z.textContent = `(row #${row.rowIndex})`;
  row.appendChild(z);
});</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
