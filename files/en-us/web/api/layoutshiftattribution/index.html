---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
tags:
  - API
  - Interface
  - Layout Instability API
  - LayoutShiftAttribution
  - NeedsExample
  - Performance
  - Reference
  - Web Performance
browser-compat: api.LayoutShiftAttribution
---
<div>{{APIRef("Layout Instability API")}}</div>

<p>The <code>LayoutShiftAttribution</code> interface of the <a href="/en-US/docs/Web/API/Layout_Instability_API">Layout Instability API</a> provides debugging information about elements which have shifted.</p>

<p>Instances of <code>LayoutShiftAttribution</code> are returned in an array by calling {{domxref("LayoutShift.sources")}}.</p>

<h2 id="Properties">Properties</h2>
<dl>
 <dt>{{domxref("LayoutShiftAttribution.Node")}}{{ReadOnlyInline}}</dt>
 <dd>Returns the element that has shifted (null if it has been removed).</dd>
 <dt>{{domxref("LayoutShiftAttribution.previousRect")}}{{ReadOnlyInline}}</dt>
 <dd>Returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element before the shift.</dd>
 <dt>{{domxref("LayoutShiftAttribution.currentRect")}}{{ReadOnlyInline}}</dt>
 <dd>Returns a {{domxref("DOMRectReadOnly")}} object representing the position of the element after the shift.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
  <dt>{{domxref("LayoutShiftAttribution.toJSON()")}}</dt>
 <dd>Returns a JSON representation of the <code>LayoutShiftAttribution</code> object.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example finds the element that is causing the largest layout shift, and prints that <code>node</code> to the console. For more detail on this see <a href="https://web.dev/debug-web-vitals-in-the-field/">Debug Web Vitals in the field</a>.</p>

<pre class="brush: js">function getCLSDebugTarget(entries) {
  const largestEntry = entries.reduce((a, b) => {
    return a && a.value > b.value ? a : b;
  });
  if (largestEntry && largestEntry.sources && largestEntry.sources.length) {
    const largestSource = largestEntry.sources.reduce((a, b) => {
      return a.node && a.previousRect.width * a.previousRect.height >
          b.previousRect.width * b.previousRect.height ? a : b;
    });
    if (largestSource) {
      return largestSource.node;
    }
  }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="https://web.dev/debug-layout-shifts/">Debug layout shifts</a></li>
  <li><a href="https://web.dev/debug-web-vitals-in-the-field/">Debug Web Vitals in the field</a></li>
</ul>
