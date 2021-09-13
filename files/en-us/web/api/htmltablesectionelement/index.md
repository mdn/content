---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLTableSectionElement
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <strong><code>HTMLTableSectionElement</code></strong> interface provides special properties and methods (beyond the {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of sections, that is headers, footers and bodies, in an HTML table.</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("HTMLElement")}}.</em></p>

<dl>
 <dt>{{domxref("HTMLTableSectionElement.align")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} containing an enumerated value reflecting the {{htmlattrxref("align", "tr")}} attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are <code>"left"</code>, <code>"right"</code>, and <code>"center"</code>.</dd>
 <dt>{{domxref("HTMLTableSectionElement.rows")}} {{readonlyInline}}</dt>
 <dd>Returns a live {{domxref("HTMLCollection")}} containing the rows in the section. The <code>HTMLCollection</code> is live and is automatically updated when rows are added or removed.</dd>
 <dt>{{domxref("HTMLTableSectionElement.ch")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} containing one single chararcter. This character is the one to align all the cell of a column on. It reflects the {{htmlattrxref("char", "tr")}} and default to the decimal points associated with the language, e.g. <code>'.'</code> for English, or <code>','</code> for French. This property was optional and was not very well supported.</dd>
 <dt>{{domxref("HTMLTableSectionElement.chOff")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by <code>HTMLTableRowElement.ch</code>. This property was optional and was not very well supported.</dd>
 <dt>{{domxref("HTMLTableSectionElement.vAlign")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the {{htmlattrxref("valign", "tr")}} attribute and can have one of the following values: <code>"top"</code>, <code>"middle"</code>, <code>"bottom"</code>, or <code>"baseline"</code>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent, {{domxref("HTMLElement")}}</em>.</p>

<dl>
 <dt>{{domxref("HTMLTableSectionElement.deleteRow()")}}</dt>
 <dd>Removes the row at the given position in the section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than <code>0</code>, it raises a {{domxref("DOMException")}} with the <code>IndexSizeError</code> value.</dd>
 <dt>{{domxref("HTMLTableSectionElement.insertRow()")}}</dt>
 <dd>Inserts a new row just before the given position in the section. If the given position is not given or is <code>-1</code>, it appends the row to the end of section. If the given position is greater (or equal as it starts at zero) than the amount of rows in the section, or is smaller than <code>-1</code>, it raises a {{domxref("DOMException")}} with the <code>IndexSizeError</code> value.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The HTML elements implementing this interface: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, and {{HTMLElement("tbody")}}.</li>
</ul>
