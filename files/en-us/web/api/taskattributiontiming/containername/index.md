---
title: TaskAttributionTiming.containerName
slug: Web/API/TaskAttributionTiming/containerName
tags:
- API
- Long Tasks API
- Performance
- Property
- Reference
- TaskAttributionTiming
browser-compat: api.TaskAttributionTiming.containerName
---
<p>{{SeeCompatTable}}{{APIRef("Long Tasks")}}</p>

<p>The <strong><code>containerName</code></strong> readonly property of the
  {{domxref("TaskAttributionTiming")}} interface returns the container's <code>name</code>
  attribute. A container is the iframe, embed or object etc. that is being implicated, on
  the whole, for a long task.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>containerName</em> = TaskAttributionTiming.containerName;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} containing the container's <code>name</code> attribute.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
