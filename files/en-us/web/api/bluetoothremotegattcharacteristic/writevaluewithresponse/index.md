---
title: BluetoothRemoteGATTCharacteristic.writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
tags:
- API
- Bluetooth
- BluetoothRemoteGATTCharacteristic
- Experimental
- Property
- Reference
- Web Bluetooth API
- writeValueWithResponse
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithResponse
---
<p>The<strong><code>BluetoothRemoteGATTCharacteristic.writeValueWithResponse()</code></strong> method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object’s <code>value</code> property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls <a href="https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue"><code>WriteCharacteristicValue</code>(<var>this</var>=<code>this</code>, <var>value=value</var>, <var>response</var>=<code>"required"</code>)</a>, and returns the resulting {{JSxRef("Promise")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">BluetoothRemoteGATTCharacteristic.writeValueWithResponse(value).then(function() { ... })</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}}.</p>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>value</dt>
  <dd>An {{jsxref("ArrayBuffer")}}. </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<div>{{APIRef("Web Bluetooth")}}</div>
