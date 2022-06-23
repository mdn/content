---
title: XRPermissionStatus
slug: Web/API/XRPermissionStatus
page-type: web-api-interface
tags:
  - API
  - AR
  - Interface
  - Mixed
  - Permissions
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRPermissionStatus
  - augmented
browser-compat: api.XRPermissionStatus
---
{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The **`XRPermissionStatus`** interface defines the object returned by calling {{domxref("Permissions.query", "navigator.permissions.query()")}} for the `xr` permission name; it indicates whether or not the app or site has permission to use WebXR, and may be monitored over time for changes to that permissions tate.

{{InheritanceDiagram}}

## Properties

_In addition to the properties listed below, `XRPermissionStatus` includes the properties defined by its parent interface, {{domxref("PermissionStatus")}}._

- {{domxref("XRPermissionStatus.granted", "granted")}}
  - : An array of strings listing the names of the features for which permission has been granted as of the time at which `navigator.permissions.query()` was called. Any feature which was specified in either `optionalFeatures` or `requiredFeatures` when calling `navigator.permissions.query()` are listed in `granted` if and only if permission to use them is granted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security)
- {{domxref("XRPermissionStatus")}}
- {{domxref("navigator.permissions")}} and {{domxref("WorkerNavigator.permissions")}}
- {{domxref("Permissions")}}
