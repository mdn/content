---
title: Permissions API
slug: Web/API/Permissions_API
page-type: web-api-overview
tags:
  - API
  - Introduction
  - Overview
  - Permissions
  - Permissions API
  - Web
  - access
browser-compat: api.Permissions
---
{{DefaultAPISidebar("Permissions API")}}

The **Permissions API** provides a consistent programmatic way to query the status of API permissions attributed to the current context. For example, the Permissions API can be used to determine if permission to access a particular API has been granted or denied.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (although not current versions of Firefox, as [WorkerNavigator.permissions](/en-US/docs/Web/API/WorkerNavigator/permissions) is not implemented).

## Concepts and usage

Historically different APIs handle their own permissions inconsistently — for example the [Notifications API](/en-US/docs/Web/API/Notifications_API) allows for explicit checking of permission status and requesting permission, whereas the [Geolocation API](/en-US/docs/Web/API/Geolocation) doesn't (which causes problems if the user denied the initial permission request). The Permissions API provides the tools to allow developers to implement a better user experience as far as permissions are concerned.

The `permissions` property has been made available on the {{domxref("Navigator")}} object, both in the standard browsing context and the worker context ({{domxref("WorkerNavigator")}} — so permission checks are available inside workers), and returns a {{domxref("Permissions")}} object that provides access to the Permissions API functionality.

Once you have this object you can then perform permission-related tasks, for example querying a permission using the {{domxref("Permissions.query()")}} method to return a promise that resolves with the {{domxref("PermissionStatus")}} for a specific API.

Not all APIs' permission statuses can be queried using the Permissions API. Notable APIs that are Permissions-aware include:

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Notifications API](/en-US/docs/Web/API/Notifications_API)
- [Push API](/en-US/docs/Web/API/Push_API)
- Web MIDI API

More APIs will gain Permissions API support over time.

## Examples

We have made a simple example available called Location Finder. You can [run the example live](https://chrisdavidmills.github.io/location-finder-permissions-api/), or [view the source code on GitHub](https://github.com/chrisdavidmills/location-finder-permissions-api/tree/gh-pages).

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
- {{DOMxRef("Notification.permission")}}
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
