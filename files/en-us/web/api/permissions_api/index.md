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

{{DefaultAPISidebar("Permissions API")}} {{AvailableInWorkers}}

The **Permissions API** provides a consistent programmatic way to query the status of API permissions attributed to the current context. For example, the Permissions API can be used to determine if permission to access a particular API has been granted or denied, or requires specific user permission.

Note that the permissions from this API effectively aggregate all security restrictions for the context, including any requirement for an API to be used in a secure context, [Permissions-Policy](/en-US/docs/Web/HTTP/Headers/Permissions-Policy) restrictions applied to the document, and user prompts.
So, for example, if an API is restricted by permissions policy, the returned permission would be `denied` and the user would not be prompted for access.

## Concepts and usage

Historically different APIs handle their own permissions inconsistently — for example the [Notifications API](/en-US/docs/Web/API/Notifications_API) provided its own methods for requesting permissions and checking permission status, whereas the [Geolocation API](/en-US/docs/Web/API/Geolocation) did not.
The Permissions API provides the tools to allow developers to implement a consistent and better user experience for working with permissions.

The `permissions` property has been made available on the {{domxref("Navigator")}} object, both in the standard browsing context and the worker context ({{domxref("WorkerNavigator")}} — so permission checks are available inside workers), and returns a {{domxref("Permissions")}} object that provides access to the Permissions API functionality.

Once you have this object you can then use the {{domxref("Permissions.query()")}} method to return a promise that resolves with the {{domxref("PermissionStatus")}} for a specific API.
Note that if the status is `prompt` the user must acknowledge a prompt before accessing the feature, and that the mechanism for launching this prompt will depend on the specific API — it is not defined as part of the Permissions API.

### Permission-aware APIs

Not all APIs' permission statuses can be queried using the Permissions API.
A non-exhaustive list of permission-aware APIs includes:

- [Background Synchronization API](/en-US/docs/Web/API/Background_Synchronization_API): `background-sync` (should always be granted)
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API): `geolocation`
- [Local Font Access API](/en-US/docs/Web/API/Local_Font_Access_API): `local-fonts`
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API): `microphone`, `camera`
- [Notifications API](/en-US/docs/Web/API/Notifications_API): `notifications`
- [Payment Handler API](/en-US/docs/Web/API/Payment_Handler_API): `payment-handler`
- [Push API](/en-US/docs/Web/API/Push_API): `push`
- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API): `screen-wake-lock`
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs): `accelerometer`, `gyroscope`, `magnetometer`, `ambient-light-sensor`
- [Storage Access API](/en-US/docs/Web/API/Storage_Access_API): `storage-access`, `top-level-storage-access`
- [Storage API](/en-US/docs/Web/API/Storage_API): `persistent-storage`
- [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API): `midi`
- [Window Management API](/en-US/docs/Web/API/Window_Management_API): `window-management`

## Examples

We have created a simple example called Location Finder. You can [run the example live](https://chrisdavidmills.github.io/location-finder-permissions-api/), or [view the source code on GitHub](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages).

Read more about how it works in our article [Using the Permissions API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API).

## Interfaces

- {{domxref("Navigator.permissions")}} and {{domxref("WorkerNavigator.permissions")}} {{ReadOnlyInline}}
  - : Provides access to the {{domxref("Permissions")}} object from the main context and worker context respectively.
- {{domxref("Permissions")}}
  - : Provides the core Permission API functionality, such as methods for querying and revoking permissions.
- {{domxref("PermissionStatus")}}
  - : Provides access to the current status of a permission, and an event handler to respond to changes in permission status.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Permissions API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API)
- [Using the Permissions API to Detect How Often Users Allow or Deny Camera Access](https://blog.addpipe.com/using-permissions-api-to-detect-getusermedia-responses/)
- {{DOMxref("Notification.permission_static", "Notification.permission")}}
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
