---
title: BluetoothRemoteGATTCharacteristic.getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - getDescriptor()
browser-compat: api.BluetoothRemoteGATTCharacteristic.getDescriptor
---
<p>{{SeeCompatTable}}</p>

<p>
  The <strong><code>BluetoothRemoteGATTCharacteristic.getDescriptor()</code></strong> method
  returns a {{jsxref("Promise")}} that resolves to the
  first {{domxref("BluetoothRemoteGATTDescriptor")}} for a given descriptor UUID.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">BluetoothRemoteGATTCharacteristic.getDescriptor(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptor) { ... })</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves to the
  first {{domxref("BluetoothRemoteGATTDescriptor")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<div>{{APIRef("Web Bluetooth")}}</div>
