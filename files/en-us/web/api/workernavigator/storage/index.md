---
title: WorkerNavigator.storage
slug: Web/API/WorkerNavigator/storage
tags:
  - API
  - Navigator
  - Property
  - Reference
  - Secure context
  - Storage
browser-compat: api.WorkerNavigator.storage
---
<p>{{securecontext_header}}{{APIRef("Storage")}}</p>

<p>The <code><strong>WorkerNavigator.storage</strong></code>
    read-only property returns the singleton {{domxref("StorageManager")}} object used to
    access the overall storage capabilities of the browser for the current site or app.
  The returned object lets you examine and configure persistence of data stores and
  learn approximately how much more space your browser has available for local storage
  use.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>storageManager</em> = navigator.storage;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("StorageManager")}} object you can use to maintain persistence for stored
  data, as well as to determine roughly how much room there is for data to be stored.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("StorageManager")}}</li>
  <li>{{domxref("WorkerNavigator")}}</li>
</ul>
