---
title: "Navigator: hid property"
short-title: hid
slug: Web/API/Navigator/hid
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.hid
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}

The **`Navigator.hid`**
read-only property returns an {{domxref("HID")}} object providing methods
for connecting to HID devices, listing attached HID devices, and event
handlers for connected HID devices.

Where a defined [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) blocks WebHID usage, the `Navigator.hid` property will not be available.

## Value

An {{domxref("HID")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebHID API](/en-US/docs/Web/API/WebHID_API)
