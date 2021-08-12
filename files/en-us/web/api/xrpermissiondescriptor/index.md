---
title: XRPermissionDescriptor
slug: Web/API/XRPermissionDescriptor
tags:
  - API
  - AR
  - Dictionary
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
  - XRPermissionDescriptor
  - augmented
  - descriptor
browser-compat: api.XRPermissionDescriptor
---
{{APIRef("WebXR Device API")}}{{SecureContext_header}}

User permissions in the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) are managed using the [Permissions API](/en-US/docs/Web/API/Permissions_API). To that end, the **`XRPermissionDescriptor`** dictionary is used to describe the WebXR features the app needs to use, as well as those features it would like ot use if permision is granted.

The `XRPermissionDescriptor`'s {{domxref("PermissionDescriptor.name", "name")}} must be set to `xr` in order to direct the Permissions API to correctly handle the request as applying to WebXR.

## Properties

In addition to inheriting the properties of the parent interface, {{domxref("PermissionDescriptor")}}, `XRPermissionDescriptor` provides the following properties.

- {{domxref("XRPermissionDescriptor.mode", "mode")}}
  - : An string indicating the XR mode (`inline`, `immersive-vr`, or `immersive-ar`) for which the permissions are requested.
- {{domxref("XRPermissionDescriptor.optionalFeatures", "optionalFeatures")}}
  - : An array of strings, each specifying the name of a WebXR feature which is requested but not required for the app to function.
- {{domxref("XRPermissionDescriptor.requiredFeatures", "requiredFeatures")}}
  - : An array of strings giving the names of the WebXR features for which permission *must* be obtained in order to use your app or site.

## Examples

The example below demonstrates performing the permission request for an application that requires the `local-floor` reference space in an `immersive-vr` environment.

If the [Permissions API](/en-US/docs/Web/API/Permissions_API) is found to be available (by checking to see if {{domxref("navigator.permissions")}} is defined), its {{domxref("Permissions.query", "query()")}} method is called, specifying the permission descriptor we've established, `xrPermissionDesc`.

When the returned [promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) resolves, we check the returned status. If permission has been granted, we call a function `setupXR()` that handles preparing the WebXR environment for use. If permission is conditional based on prompting, we call a function `promptAndSetupXR()` that would handle asking for permission before enabling and starting up the environment. And for any other returned state—which is almost certainly `denied`, which is the only other option as of this article's writing—we do nothing, since we can't use WebXR.

If the permission request promise is rejected, the error is handled (currently by just dumping it to the console using domxref("console.log()")}}).

If the Permissions API isn't available at all, this example assumes that WebXR will report an appropriate error if permission isn't available, and tries to start up the WebXR session using the same `setupXR()` function called by the `granted` case.

```js
let xrPermissionDesc = {
  name: "xr",
  mode: "immersive-vr",
  requiredFeatures: [ "local-floor" ]
};

if (navigator.permissions) {
  navigator.permissions.query(xrPermissionDesc).then(({state}) => {
    switch(state) {
      case "granted":
        setupXR();
        break;
      case "prompt":
        promptAndSetupXR();
        break;
      default:
        /* do nothing otherwise */
       break;
  }
  .catch(err) {
    console.log(err);
  }
} else {
  setupXR();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions and security for WebXR](/en-US/docs/Web/API/WebXR_Device_API/Permissions_and_security)
- {{domxref("XRPermissionStatus")}}
- {{domxref("navigator.permissions")}} and {{domxref("WorkerNavigator.permissions")}}
- {{domxref("Permissions")}}
