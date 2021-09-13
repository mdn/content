---
title: SourceBuffer.buffered
slug: Web/API/SourceBuffer/buffered
tags:
- API
- Audio
- Experimental
- MSE
- Media Source Extensions
- Property
- Reference
- SourceBuffer
- Video
- buffered
browser-compat: api.SourceBuffer.buffered
---
<div>{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}{{draft}}</div>

<p>The <code><strong>buffered</strong></code> read-only property of the
  {{domxref("SourceBuffer")}} interface returns the time ranges that are currently
  buffered in the <code>SourceBuffer</code> as a normalized {{domxref("TimeRanges")}}
  object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>myBufferedRange</em> = <em>sourceBuffer</em>.buffered;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("TimeRanges")}} object.</p>

<h2 id="Example">Example</h2>

<p>TBD</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MediaSource")}}</li>
  <li>{{domxref("SourceBufferList")}}</li>
</ul>
