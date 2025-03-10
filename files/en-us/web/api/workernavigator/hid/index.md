---
title: "WorkerNavigator: hid property"
short-title: hid
slug: Web/API/WorkerNavigator/hid
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WorkerNavigator.hid
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`WorkerNavigator.hid`**
read-only property returns an {{domxref("HID")}} object providing methods for accessing HID device connections and events that fire when the user agent connects to or disconnects from a device.

Where a defined [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) blocks WebHID usage, the `WorkerNavigator.hid` property will not be available.

## Value

An {{domxref("HID")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebHID API](/en-US/docs/Web/API/WebHID_API)
