---
title: Navigator
slug: Web/API/Navigator
tags:
  - API
  - DOM
  - Interface
  - Navigator
  - Reference
  - Web
  - Web Performance
browser-compat: api.Navigator
---
{{APIRef("DOM")}}

The **`Navigator`** interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

A `Navigator` object can be retrieved using the read-only {{domxref("window.navigator")}} property.

## Properties

_Doesn't inherit any properties._

### Standard properties

- {{domxref("Navigator.connection")}} {{readonlyInline}} {{experimental_inline}}
  - : Provides a {{domxref("NetworkInformation")}} object containing information about the network connection of a device.
- {{domxref("Navigator.cookieEnabled")}} {{readonlyinline}}
  - : Returns false if setting a cookie will be ignored and true otherwise.
- {{domxref("Navigator.credentials")}} {{readonlyInline}}
  - : Returns the {{domxref("CredentialsContainer")}} interface which exposes methods to request credentials and notify the user agent when interesting events occur such as successful sign in or sign out.
- {{domxref("Navigator.deviceMemory")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns the amount of device memory in gigabytes. This value is an approximation given by rounding to the nearest power of 2 and dividing that number by 1024.
- {{domxref("Navigator.geolocation")}} {{readonlyInline}}
  - : Returns a {{domxref("Geolocation")}} object allowing accessing the location of the device.
- {{domxref("Navigator.hid")}} {{readonlyInline}}
  - : Returns an {{domxref("HID")}} object providing methods
    for connecting to HID devices, listing attached HID devices, and event
    handlers for connected HID devices.
- {{domxref("Navigator.hardwareConcurrency")}} {{readonlyInline}}
  - : Returns the number of logical processor cores available.
- {{domxref('Navigator.keyboard')}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref('Keyboard')}} object which provides access to functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.
- {{domxref("Navigator.language")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown.
- {{domxref("Navigator.languages")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.
- {{domxref("Navigator.locks")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("LockManager")}} object which provides methods for requesting a new {{domxref('Lock')}} object and querying for an existing {{domxref('Lock')}} object
- {{domxref("Navigator.maxTouchPoints")}} {{readonlyInline}}
  - : Returns the maximum number of simultaneous touch contact points are supported by the current device.
- {{domxref("Navigator.mediaCapabilities")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("MediaCapabilities")}} object that can expose information about the decoding and encoding capabilities for a given format and output capabilities.
- {{domxref("Navigator.mediaDevices")}} {{readonlyinline}}
  - : Returns a reference to a {{domxref("MediaDevices")}} object which can then be used to get information about available media devices ({{domxref("MediaDevices.enumerateDevices()")}}), find out what constrainable properties are supported for media on the user's computer and user agent ({{domxref("MediaDevices.getSupportedConstraints()")}}), and to request access to media using {{domxref("MediaDevices.getUserMedia()")}}.
- {{domxref("Navigator.mediaSession")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns {{domxref("MediaSession")}} object which can be used to provide metadata that can be used by the browser to present information about the currently-playing media to the user, such as in a global media controls UI.
- {{domxref("Navigator.onLine")}} {{readonlyInline}}
  - : Returns a boolean value indicating whether the browser is working online.
- {{domxref("Navigator.permissions")}} {{readonlyinline}} {{experimental_inline}}
  - : Returns a {{domxref("Permissions")}} object that can be used to query and update permission status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).
- {{domxref("Navigator.presentation")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns a reference to the {{domxref("Presentation")}} API.
- {{domxref("Navigator.serial")}} {{readonlyInline}}
  - : Returns a {{domxref("Serial")}} object, which represents the entry point into the {{domxref("Web Serial API")}} to enable the control of serial ports.
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("Navigator.storage")}} {{readonlyinline}}
  - : Returns the singleton {{domxref('StorageManager')}} object used for managing persistence permissions and estimating available storage on a site-by-site/app-by-app basis.
- {{domxref("Navigator.userAgent")}} {{readonlyInline}}
  - : Returns the user agent string for the current browser.
- {{domxref("Navigator.userAgentData")}} {{readonlyInline}}
  - : Returns a {{domxref("NavigatorUAData")}} object, which gives access to information about the browser and operating system of the user.
- {{domxref("Navigator.vendor")}} {{readonlyInline}}
  - : Returns the vendor name of the current browser (e.g., "Netscape6").
- {{domxref("Navigator.webdriver")}} {{readonlyInline}} {{experimental_inline}}
  - : Indicates whether the user agent is controlled by automation.
- {{domxref("Navigator.xr")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns {{domxref("XRSystem")}} object, which represents the entry point into the [WebXR API](/en-US/docs/Web/API/WebXR_Device_API).

### Non-standard properties

- {{domxref("Navigator.buildID")}} {{non-standard_inline}}
  - : Returns the build identifier of the browser. In modern browsers this property now returns a fixed timestamp as a privacy measure, e.g. `20181001000000` in Firefox 64 onwards.
- {{domxref("Navigator.contacts")}} {{readonlyInline}} {{non-standard_inline}}
  - : Returns a {{domxref('ContactsManager')}} interface which allows users to select entries from their contact list and share limited details of the selected entries with a website or application.
- {{domxref("Navigator.securitypolicy")}} {{non-standard_inline}}
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- {{domxref("Navigator.standalone")}} {{non-standard_inline}}
  - : Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.
- {{domxref("Navigator.wakeLock")}} {{readonlyInline}} {{non-standard_inline}}
  - : Returns a {{domxref("WakeLock")}} interface you can use to request screen wake locks and prevent screen from dimming, turning off, or showing a screen saver.

### Deprecated properties

- {{domxref("Navigator.appCodeName")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns the internal "code" name of the current browser. Do not rely on this property to return the correct value.
- {{domxref("Navigator.appName")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns a {{domxref("DOMString")}} with the official name of the browser. Do not rely on this property to return the correct value.
- {{domxref("Navigator.appVersion")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns the version of the browser as a {{domxref("DOMString")}}. Do not rely on this property to return the correct value.
- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns an array containing every {{domxref("VRDisplay")}} object that is currently presenting ({{domxref("VRDisplay.ispresenting")}} is `true`).
- {{domxref("Navigator.battery")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns a {{domxref("BatteryManager")}} object you can use to get information about the battery charging status.
- {{domxref("Navigator.doNotTrack")}} {{readonlyInline}} {{experimental_inline}}
  - : Reports the value of the user's do-not-track preference. When this value is "yes", your web site or application should not track the user.
- {{domxref("Navigator.mimeTypes")}} {{readonlyInline}}{{deprecated_inline}}
  - : Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.
- {{domxref("Navigator.oscpu")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns a string that represents the current operating system.
- {{domxref("Navigator.platform")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns a string representing the platform of the browser. Do not rely on this function to return a significant value.
- {{domxref("Navigator.plugins")}} {{readonlyInline}}{{deprecated_inline}}
  - : Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.
- {{domxref("Navigator.product")}} {{readonlyInline}} {{deprecated_inline}}
  - : Always returns `'Gecko'`, on any browser. This property is kept only for compatibility purpose.
- {{domxref("Navigator.productSub")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns the build number of the current browser (e.g., "20060909").
- {{domxref("Navigator.vendorSub")}} {{readonlyInline}} {{deprecated_inline}}
  - : Returns the vendor version number (e.g. "6.1").

## Methods

_Doesn't inherit any method._

- {{domxref("Navigator.canShare()")}}
  - : Returns `true` if a call to `Navigator.share()` would succeed.
- {{domxref("Navigator.clearAppBadge()")}}
  - : Clears a badge on the current app's icon and returns a {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.
- {{domxref("Navigator.getBattery()")}}
  - : Returns a promise that resolves with a {{domxref("BatteryManager")}} object that returns information about the battery charging status.
- {{domxref("Navigator.javaEnabled()")}} {{readonlyInline}}
  - : Returns false.
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : Allows web sites to register themselves as a possible handler for a given protocol.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : Returns a {{jsxref("Promise")}} for a MediaKeySystemAccess object.
- {{domxref("Navigator.sendBeacon()")}}
  - : Used to asynchronously transfer a small amount of data using {{Glossary("HTTP")}} from the User Agent to a web server.
- {{domxref("Navigator.setAppBadge()")}}
  - : Sets a badge on the icon associated with this app and returns a {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.
- {{domxref("Navigator.share()")}}
  - : Invokes the native sharing mechanism of the current platform.
- {{domxref("Navigator.vibrate()")}}
  - : Causes vibration on devices with support for it. Does nothing if vibration support isn't available.

### Deprecated methods

- {{domxref("Navigator.getVRDisplays()")}} {{deprecated_inline}}
  - : Returns a promise that resolves to an array of {{domxref("VRDisplay")}} objects representing any available VR devices connected to the computer.
- {{domxref("Navigator.getUserMedia()")}} {{deprecated_inline}}
  - : After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer.
- {{domxref("Navigator.taintEnabled()")}} {{deprecated_inline}}
  - : Returns `false`. JavaScript taint/untaint functions removed in JavaScript 1.2.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
