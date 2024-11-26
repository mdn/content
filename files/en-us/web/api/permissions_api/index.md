---
title: Permissions API
slug: Web/API/Permissions_API
page-type: web-api-overview
browser-compat:
  - api.Permissions
  - api.Navigator.permissions
  - api.WorkerNavigator.permissions
spec-urls: https://w3c.github.io/permissions/
---

{{DefaultAPISidebar("Permissions API")}}{{AvailableInWorkers}}

The **Permissions API** provides a consistent programmatic way to query the status of API permissions attributed to the current context, such as a web page or worker.
For example, it can be used to determine if permission to access a particular feature or API has been granted, denied, or requires specific user permission.

## Concepts and usage

Historically different APIs handle their own permissions inconsistently — for example the [Notifications API](/en-US/docs/Web/API/Notifications_API) provided its own methods for requesting permissions and checking permission status, whereas the [Geolocation API](/en-US/docs/Web/API/Geolocation) did not.
The Permissions API provides the tools to allow developers to implement a consistent user experience for working with permissions.

The permissions from this API effectively aggregate all security restrictions for the context, including any requirement for an API to be used in a secure context, [Permissions-Policy](/en-US/docs/Web/HTTP/Headers/Permissions-Policy) restrictions applied to the document, requirements for user interaction, and user prompts.
So, for example, if an API is restricted by permissions policy, the returned permission would be `denied` and the user would not be prompted for access.

The `permissions` property has been made available on the {{domxref("Navigator")}} object, both in the standard browsing context and the worker context ({{domxref("WorkerNavigator")}} — so permission checks are available inside workers), and returns a {{domxref("Permissions")}} object that provides access to the Permissions API functionality.

Once you have this object you can then use the {{domxref("Permissions.query()")}} method to return a promise that resolves with the {{domxref("PermissionStatus")}} for a specific API.

### Requesting permission

If the permission status is `prompt`, the user must acknowledge a prompt to grant access to the feature.

The mechanism that triggers this prompt will depend on the specific API — it is not defined as part of the Permissions API.
Generally the trigger is code calling a method to access or open the feature, or that registers for notifications from the feature that will subsequently access it.

Note that not all features require a prompt.
Permission might be granted by a `Permission Policy`, implicitly by {{glossary("transient activation")}}, or via some other mechanism.

### Revoking permission

Permission revocation is not managed by the API.
More specifically, a {{domxref("Permissions.revoke()")}} method was proposed, but has since been removed from those browsers where it was implemented.

Users can manually remove permission for particular sites using browser settings:

- **Firefox**: _Hamburger Menu > Settings > Privacy & Security > Permissions_ (then select the **Settings** button for the permission of interest).
- **Chrome**: _Hamburger Menu > Settings > Show advanced settings_. In the _Privacy_ section, click _Content Settings_. In the resulting dialog, find the _Location_ section and select _Ask when a site tries to…_. Finally, click _Manage Exceptions_ and remove the permissions you granted to the sites you are interested in.

### Permission-aware APIs

Not all APIs' permission statuses can be queried using the Permissions API.
A non-exhaustive list of permission-aware APIs includes:

- [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API): `background-sync` (should always be granted)
- [Clipboard_API](/en-US/docs/Web/API/Clipboard_API#security_considerations): `clipboard-read`, `clipboard-write`
- [Compute Pressure API](/en-US/docs/Web/API/Compute_Pressure_API): `compute-pressure`
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API#security_considerations): `geolocation`
- [Local Font Access API](/en-US/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/en-US/docs/Web/API/Notifications_API): `notifications`
- [Payment Handler API](/en-US/docs/Web/API/Payment_Handler_API): `payment-handler`
- [Push API](/en-US/docs/Web/API/Push_API): `push`
- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API): `screen-wake-lock`
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [Storage Access API](/en-US/docs/Web/API/Storage_Access_API): `storage-access`, `top-level-storage-access`
- [Storage API](/en-US/docs/Web/API/Storage_API): `persistent-storage`
- [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API): `bluetooth`
- [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API): `midi`
- [Window Management API](/en-US/docs/Web/API/Window_Management_API): `window-management`

## Interfaces

- {{domxref("Permissions")}}
  - : Provides the core Permission API functionality, such as methods for querying and revoking permissions.
- {{domxref("PermissionStatus")}}
  - : Provides access to the current status of a permission, and an event handler to respond to changes in permission status.

### Extensions to other interfaces

- {{domxref("Navigator.permissions")}} and {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : Provides access to the {{domxref("Permissions")}} object from the main context and worker context respectively.

## Examples

We have created an example called Location Finder.
You can [run the example live](https://chrisdavidmills.github.io/location-finder-permissions-api/), [view the source code on GitHub](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages), or read more about how it works in our article [Using the Permissions API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API).

The [`Permissions.query()` example](/en-US/docs/Web/API/Permissions/query#test_support_for_various_permissions) also so shows code that tests most permissions on the current browser and logs the result.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Permissions API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
