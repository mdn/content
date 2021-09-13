---
title: HTMLTableRowElement.insertCell()
slug: Web/API/HTMLTableRowElement/insertCell
tags:
- API
- HTML DOM
- HTMLTableRowElement
- Method
- Reference
browser-compat: api.HTMLTableRowElement.insertCell
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <strong><code>HTMLTableRowElement.insertCell()</code></strong> method inserts a new
  cell ({{HtmlElement("td")}}) into a table row ({{HtmlElement("tr")}}) and returns a
  reference to the cell.</p>

<div class="notecard note">
  <p><strong>Note:</strong> <code>insertCell()</code> inserts the cell directly into the
    row. The cell does not need to be appended separately
    with {{domxref("Node.appendChild()")}} as would be the case if
    {{domxref("Document.createElement()")}} had been used to create the new
    <code>&lt;td&gt;</code> element.</p>

  <p>You can not use <code>insertCell()</code> to create a new <code>&lt;th&gt;</code>
    element though.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>newCell</var> = <var>HTMLTableRowElement</var>.insertCell(<var>index</var>);
</pre>

<p>{{domxref("HTMLTableRowElement")}} is a reference to an HTML {{HtmlElement("tr")}}
  element.</p>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>index</code> {{optional_inline}}</dt>
  <dd><code>index</code> is the cell index of the new cell. If <code>index</code> is
    <code>-1</code> or equal to the number of cells, the cell is appended as the last cell
    in the row. If <code>index</code> is greater than the number of cells, an
    <code>IndexSizeError</code> exception will result. If <code>index</code> is omitted it
    defaults to <code>-1</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p><code>newCell</code> is an {{domxref("HTMLTableCellElement")}} that references the new
  cell.</p>

<h2 id="Example">Example</h2>

<p>This example uses {{domxref("HTMLTableElement.insertRow()")}} to append a new row to a
  table.</p>

<p>We then use <code>insertCell(0)</code> to insert a new cell in the new row. (To be
  valid HTML, a <code>&lt;tr&gt;</code> must have at least one <code>&lt;td&gt;</code>
  element.) Finally, we add some text to the cell using
  {{domxref("Document.createTextNode()")}} and {{domxref("Node.appendChild()")}}.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;table id="my-table"&gt;
  &lt;tr&gt;&lt;td&gt;Row 1&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Row 2&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Row 3&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode('New bottom row');
  newCell.appendChild(newText);
}

// Call addRow() with the table's ID
addRow('my-table');</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("HTMLTableElement.insertRow()")}}</li>
  <li>The HTML element representing cells: {{domxref("HTMLTableCellElement")}}</li>
</ul>
