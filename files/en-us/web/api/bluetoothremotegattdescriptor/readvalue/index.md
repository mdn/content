---
title: BluetoothRemoteGATTDescriptor.readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
tags:
- API
- Bluetooth
- BluetoothGattDescriptor
- BluetoothRemoteGATTDescriptor
- Experimental
- Method
- Reference
- Web Bluetooth API
- readValue()
browser-compat: api.BluetoothRemoteGATTDescriptor.readValue
---
<p>{{APIRef("Web Bluetooth API")}}{{SeeCompatTable}}</p>

<p>The
  <strong><code>BluetoothRemoteGATTDescriptor.readValue()</code></strong>
  method returns a {{jsxref("Promise")}} that resolves to
  an {{jsxref("ArrayBuffer")}} holding a duplicate  of the <code>value</code> property if
  it is available and supported. Otherwise it throws an error.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">BluetoothRemoteGATTDescriptor.readValue().then(function(<em>value</em>[]) { ... })</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves to an {{jsxref("ArrayBuffer")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
