---
title: msFirstPaint
slug: Web/API/MsFirstPaint
tags:
- msFirstPaint
---
<div>{{APIRef("DOM")}}</div>

<p>{{Non-standard_header()}}</p>

<p><code><strong>msFirstPaint</strong></code> is a read-only property which gets the time
  when the document loaded by the window object began to be displayed to the user.</p>

<p>Put another way, <code>msFirstPaint</code> utilizes the browser to measure when the
  first content completes being painted in the window. It is available from javascript and
  can be reported from the field.</p>

<p>This proprietary property is specific to Internet Explorer and Microsoft Edge.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">

p = object.msFirstPaint;

</pre>

<h2 id="Value">Value</h2>

<p>An Integer value that represents the time when the document began to be displayed or 0
  if the document could not be loaded.</p>

<p>The numerical value reported represents the number of milliseconds between the recorded
  time and midnight January 1, 1970 (UTC).</p>

<p>This property is supported only for documents displayed in IE9 Standards mode.</p>

<h2 id="Example">Example</h2>

<p>The following example shows how to calculate the time that is required to request the
  document before the document begins to display for the user.</p>

<pre class="brush: js">  var oTiming = window.performance.timing;
  var iTimeMS = oTiming.msFirstPaint - oTiming.navigationStart;
</pre>
