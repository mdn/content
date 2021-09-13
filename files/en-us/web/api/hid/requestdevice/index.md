---
title: HID.requestDevice()
slug: Web/API/HID/requestDevice
tags:
  - API
  - Method
  - Reference
  - requestDevice
  - HID
browser-compat: api.HID.requestDevice
---
<div>{{securecontext_header}}{{DefaultAPISidebar("WebHID API")}}</div>

<p>The <strong><code>requestDevice()</code></strong> method of the {{domxref("HID")}} interface requests access to a HID device.</p>

<p>The user agent will present a permission dialog including a list of connected devices, and ask the user to select and grant permission to one of these devices.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">HID.requestDevice(options);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>options</code></dt>
  <dd>An object containing an array of filter objects for possible devices to pair with. Each filter object can have the following properties:
    <dl>
      <dt><code>vendorId</code>{{Optional_Inline}}</dt>
      <dd>An integer representing the vendorId of the requested HID device</dd>
      <dt><code>productId</code>{{Optional_Inline}}</dt>
      <dd>An integer representing the productId of the requested HID device.</dd>
      <dt><code>usagePage</code>{{Optional_Inline}}</dt>
      <dd><p>An integer representing the usage page component of the HID usage of the requested device. The usage for a top level collection is used to identify the device type.</p>
      <p>Standard HID usage values can be found in the <a href="https://usb.org/document-library/hid-usage-tables-122">HID Usage Tables</a> document</p>
      </dd>
      <dt><code>usage</code>{{Optional_Inline}}</dt>
      <dd>An integer representing the usage ID component of the HID usage of the requested device.</dd>
    </dl>
  </dd>
</dl>

<div class="notecard note">
  <p><strong>Note:</strong> The device filters are used to narrow the list of devices presented to the user. If no filters are present, all connected devices are shown. When one or more filters are included, a device is included if any filter matches. To match a filter, all of the rules included in that filter must match.</p>
</div>

<h3 id="Returns">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with an array of connected {{domxref("HIDDevice")}} objects that match the filters passed in.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{domxref("DOMException")}} <code>SecurityError</code></dt>
  <dd>Thrown if the page does not allow access to the HID feature.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3>Matching a device with all four filter rules</h3>

<p>In the following example a HID device is requested that has a vendor ID of <code>0xABCD</code>, product ID of <code>0x1234</code>, usage page <code>0x0C</code> and usage ID <code>0x01</code>. Only devices that match all of these rules will be shown.</p>

<pre class="brush:js">let requestButton = document.getElementById("request-hid-device");
  requestButton.addEventListener("click", async () => {
    let device;
    try {
      const devices = await navigator.hid.requestDevice({
        filters: [
          {
            vendorId: 0xabcd,
            productId: 0x1234,
            usagePage: 0x0c,
            usage: 0x01,
          },
        ],
      });
      device = devices[0];
    } catch (error) {
      console.log("An error occurred.");
    }

    if (!device) {
      console.log("No device was selected.");
    } else {
      console.log(`HID: ${device.productName}`);
    }
  });</pre>

  <h3>An example with two filters</h3>

  <p>This next example includes two filters. Devices will be shown if they match either of these filters.</p>

  <pre class="brush: js">// Filter on devices with the Nintendo Switch Joy-Con USB Vendor/Product IDs.
  const filters = [
    {
      vendorId: 0x057e, // Nintendo Co., Ltd
      productId: 0x2006 // Joy-Con Left
    },
    {
      vendorId: 0x057e, // Nintendo Co., Ltd
      productId: 0x2007 // Joy-Con Right
    }
  ];

  // Prompt user to select a Joy-Con device.
  const [device] = await navigator.hid.requestDevice({ filters });</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
