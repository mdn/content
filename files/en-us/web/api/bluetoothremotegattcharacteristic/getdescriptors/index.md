---
title: BluetoothRemoteGATTCharacteristic.getDescriptors()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - getDescriptors()
browser-compat: api.BluetoothRemoteGATTCharacteristic.getDescriptors
---
<p>{{SeeCompatTable}}</p>

<p>
  The <strong><code>BluetoothRemoteGATTCharacteristic.getDescriptors()</code></strong> method
  returns a {{jsxref("Promise")}} that resolves to an {{jsxref("Array")}} of all
  {{domxref("BluetoothRemoteGATTDescriptor")}} objects for a given descriptor UUID. </p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">BluetoothRemoteGATTCharacteristic.getDescriptors(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptors[]) { ... })</pre>

<h3 id="Returns">Returns</h3>

<p>A {{jsxref("Promise")}} that resolves to an {{jsxref("Array")}}
  of {{domxref("BluetoothRemoteGATTDescriptor")}} objects.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<div>{{APIRef("Web Bluetooth")}}</div>
