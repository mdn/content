---
title: USBDevice
slug: Web/API/USBDevice
tags:
  - API
  - Interface
  - Reference
  - USBDevice
  - WebUSB
  - WebUSB API
browser-compat: api.USBDevice
---
<p>{{SeeCompatTable}}{{APIRef("WebUSB API")}}</p>

<p>The <strong><code>USBDevice</code></strong> interface of the <a href="/en-US/docs/Web/API/WebUSB_API">WebUSB API</a> provides access to metadata about a paired USB device and methods for controlling it.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("USBDevice.configuration")}} {{readonlyinline}}</dt>
 <dd>A {{domxref("USBConfiguration")}} object for the currently selected interface for a paired USB device.</dd>
 <dt>{{domxref("USBDevice.configurations")}} {{readonlyinline}}</dt>
 <dd>An {{jsxref("array")}} of device-specific interfaces for controlling a paired USB device.</dd>
 <dt>{{domxref("USBDevice.deviceClass")}} {{readonlyinline}}</dt>
 <dd>One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are <code>USBDevice.deviceSubclass</code> and <code>USBDevice.deviceProtocol</code>.</dd>
 <dt>{{domxref("USBDevice.deviceProtocol")}} {{readonlyinline}}</dt>
 <dd>One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are <code>USBDevice.deviceClass</code> and <code>USBDevice.deviceSubclass</code>.</dd>
 <dt>{{domxref("USBDevice.deviceSubclass")}} {{readonlyinline}}</dt>
 <dd>One of three properties that identify USB devices for the purpose of loading a USB driver that will work with that device. The other two properties are <code>USBDevice.deviceClass</code> and <code>USBDevice.deviceProtocol</code>.</dd>
 <dt>{{domxref("USBDevice.deviceVersionMajor")}} {{readonlyinline}}</dt>
 <dd>The major version number of the device in a semantic versioning scheme.</dd>
 <dt>{{domxref("USBDevice.deviceVersionMinor")}} {{readonlyinline}}</dt>
 <dd>The minor version number of the device in a semantic versioning scheme.</dd>
 <dt>{{domxref("USBDevice.deviceVersionSubminor")}} {{readonlyinline}}</dt>
 <dd>The patch version number of the device in a semantic versioning scheme.</dd>
 <dt>{{domxref("USBDevice.manufacturerName")}} {{readonlyinline}}</dt>
 <dd>The of the organization that manufactured the USB device.</dd>
 <dt>{{domxref("USBDevice.opened")}} {{readonlyinline}}</dt>
 <dd>Indicates whether a session has been started with a paired USB device.</dd>
 <dt>{{domxref("USBDevice.productId")}} {{readonlyinline}}</dt>
 <dd>The manufacturer-defined code that identifies a USB device.</dd>
 <dt>{{domxref("USBDevice.productName")}} {{readonlyinline}}</dt>
 <dd>The manufacturer-defined name that identifies a USB device.</dd>
 <dt>{{domxref("USBDevice.serialNumber")}} {{readonlyinline}}</dt>
 <dd>The manufacturer-defined serial number for the specific USB device.</dd>
 <dt>{{domxref("USBDevice.usbVersionMajor")}} {{readonlyinline}}</dt>
 <dd>One of three properties that declare the USB protocol version supported by the device. The other two properties are <code>USBDevice.usbVersionMinor</code> and <code>USBDevice.usbVersionSubminor</code>.</dd>
 <dt>{{domxref("USBDevice.usbVersionMinor")}} {{readonlyinline}}</dt>
 <dd>One of three properties that declare the USB protocol version supported by the device. The other two properties are <code>USBDevice.usbVersionMajor</code> and <code>USBDevice.usbVersionSubminor</code>.</dd>
 <dt>{{domxref("USBDevice.usbVersionSubminor")}} {{readonlyinline}}</dt>
 <dd>One of three properties that declare the USB protocol version supported by the device. The other two properties are <code>USBDevice.usbVersionMajor</code> and <code>USBDevice.usbVersionMinor</code>.</dd>
 <dt>{{domxref("USBDevice.vendorId")}} {{readonlyinline}}</dt>
 <dd>The official usg.org-assigned vendor ID.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("USBDevice.claimInterface()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when the requested interface is claimed for exclusive access.</dd>
 <dt>{{domxref("USBDevice.clearHalt()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when a halt condition is cleared.</dd>
 <dt>{{domxref("USBDevice.controlTransferIn()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBTransferInResult")}} when a command or status operation has been transmitted to the USB device.</dd>
 <dt>{{domxref("USBDevice.controlTransferOut()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBTransferOutResult")}} when a command or status operation has been transmitted from the USB device.</dd>
 <dt>{{domxref("USBDevice.close()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when all open interfaces are released and the device session has ended.</dd>
 <dt>{{domxref("USBDevice.isochronousTransferIn()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousInTransferResult")}} when time sensitive information has been transmitted to the USB device.</dd>
 <dt>{{domxref("USBDevice.isochronousTransferOut()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBIsochronousOutTransferResult")}} when time sensitive information has been transmitted from the USB device.</dd>
 <dt>{{domxref("USBDevice.open()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when a device session has started.</dd>
 <dt>{{domxref("USBDevice.releaseInterface()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when a cliamed interface is released from exclusive access.</dd>
 <dt>{{domxref("USBDevice.reset()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when the device is reset and all app operations canceled and their promises rejected.</dd>
 <dt>{{domxref("USBDevice.selectAlternateInterface()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when the specified alternative endpoint is selected.</dd>
 <dt>{{domxref("USBDevice.selectConfiguration()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves when the specified configuration is selected.</dd>
 <dt>{{domxref("USBDevice.transferIn()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBTransferInResult")}} when bulk or interrupt data is received from the USB device.</dd>
 <dt>{{domxref("USBDevice.transferOut()")}}</dt>
 <dd>Returns a {{jsxref("Promise")}} that resolves with a {{domxref("USBTransferOutResult")}} when bulk or interrupt data is sent to the USB device.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
