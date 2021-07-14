---
title: Serial
slug: Web/API/Serial
tags:
  - API
  - Interface
  - Reference
  - Serial
browser-compat: api.Serial
---
<div>{{securecontext_header}}{{DefaultAPISidebar("Serial API")}}</div>

<h2 id="Description">Description</h2>

<p>The <code>Serial</code> interface of the {{domxref("Web_Serial_API", "Web Serial API")}} provides attributes and methods for finding and connecting to serial ports from a web page.</p>


<h2 id="Event_handlers">Event Handlers</h2>

<dl>
  <dt>{{domxref("Serial.onconnect")}}</dt>
  <dd>An event handler called when a port has been connected to the device.</dd>
  <dt>{{domxref("Serial.ondisconnect")}}</dt>
  <dd>An event handler called when a port has been disconnected from the device.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
  <dt>{{domxref("Serial.requestPort()")}}</dt>
  <dd>
    <p>Returns a {{jsxref("Promise")}} that resolves with an instance of {{domxref("SerialPort")}} representing the device chosen by the user or rejects if no device was selected.</p>
    <p>This method must be called with user activation.</p>
  </dd>
  <dt>{{domxref("Serial.getPorts()")}}</dt>
  <dd>
    Returns a {{jsxref("Promise")}} that resolves with an array of  {{domxref("SerialPort")}} objects representing serial ports connected to
    the host which the origin has permission to access.
  </dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example shows how a site can check for available ports and allow the user to grant it permission to access additional ports.</p>

<p>On load event listeners are added for the <code>connect</code> and <code>disconnect</code> events so that the site can react when a device is connected or disconnected from the system. The {{domxref("Serial.getPorts()","getPorts()")}} method is then called to see which ports are connected that the site already has access to.</p>

<p>If the site doesn't have access to any connected ports it has to wait until it has user activation to proceed. In this example we use a {{domxref("Element.click_event", "click")}} event handler on a button for this task. A filter is passed to {{domxref("Serial.requestPort()","requestPort()")}} with a USB vendor ID in order to limit the set of devices shown to the user to only USB devices built by a particular manufacturer.</p>

<pre class="brush: js">navigator.serial.addEventListener('connect', (e) => {
  // Connect to `e.target` or add it to a list of available ports.
});

navigator.serial.addEventListener('disconnect', (e) => {
  // Remove `e.target` from the list of available ports.
});

navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});

button.addEventListener('click', () => {
  const usbVendorId = ...;
  navigator.serial.requestPort({ filters: [{ usbVendorId }]}).then((port) => {
    // Connect to `port` or add it to the list of available ports.
  }).catch((e) => {
    // The user didn't select a port.
  });
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
