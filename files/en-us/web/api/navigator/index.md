---
title: Navigator
slug: Web/API/Navigator
page-type: web-api-interface
browser-compat: api.Navigator
---

{{APIRef("DOM")}}

The **`Navigator`** interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

A `Navigator` object can be retrieved using the read-only {{domxref("window.navigator")}} property.

## Instance properties

_Doesn't inherit any properties._

### Standard properties

- {{domxref("Navigator.clipboard")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Clipboard")}} object that provides read and write access to the system clipboard.
- {{domxref("Navigator.connection")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("NetworkInformation")}} object containing information about the network connection of a device.
- {{domxref("Navigator.cookieEnabled")}} {{ReadOnlyInline}}
  - : Returns false if setting a cookie will be ignored and true otherwise.
- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CredentialsContainer")}} interface which exposes methods to request credentials and notify the user agent when interesting events occur such as successful sign in or sign out.
- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the amount of device memory in gigabytes. This value is an approximation given by rounding to the nearest power of 2 and dividing that number by 1024.
- {{domxref("Navigator.geolocation")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Geolocation")}} object allowing accessing the location of the device.
- {{domxref("Navigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("GPU")}} object for the current browsing context. The entry point for the {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}.
- {{domxref("Navigator.hid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an {{domxref("HID")}} object providing methods
    for connecting to HID devices, listing attached HID devices, and event
    handlers for connected HID devices.
- {{domxref("Navigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : Returns the number of logical processor cores available.
- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an {{domxref("Ink")}} object for the current document, providing access to [Ink API](/en-US/docs/Web/API/Ink_API) functionality.
- {{domxref('Navigator.keyboard')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref('Keyboard')}} object which provides access to functions that retrieve keyboard layout maps and toggle capturing of key presses from the physical keyboard.
- {{domxref("Navigator.language")}} {{ReadOnlyInline}}
  - : Returns a string representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown.
- {{domxref("Navigator.languages")}} {{ReadOnlyInline}}
  - : Returns an array of strings representing the languages known to the user, by order of preference.
- {{domxref("Navigator.locks")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("LockManager")}} object that provides methods for requesting a new {{domxref('Lock')}} object and querying for an existing {{domxref('Lock')}} object.
- {{domxref("Navigator.maxTouchPoints")}} {{ReadOnlyInline}}
  - : Returns the maximum number of simultaneous touch contact points are supported by the current device.
- {{domxref("Navigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaCapabilities")}} object that can expose information about the decoding and encoding capabilities for a given format and output capabilities.
- {{domxref("Navigator.mediaDevices")}} {{ReadOnlyInline}}
  - : Returns a reference to a {{domxref("MediaDevices")}} object which can then be used to get information about available media devices ({{domxref("MediaDevices.enumerateDevices()")}}), find out what constrainable properties are supported for media on the user's computer and user agent ({{domxref("MediaDevices.getSupportedConstraints()")}}), and to request access to media using {{domxref("MediaDevices.getUserMedia()")}}.
- {{domxref("Navigator.mediaSession")}} {{ReadOnlyInline}}
  - : Returns {{domxref("MediaSession")}} object which can be used to provide metadata that can be used by the browser to present information about the currently-playing media to the user, such as in a global media controls UI.
- {{domxref("Navigator.onLine")}} {{ReadOnlyInline}}
  - : Returns a boolean value indicating whether the browser is working online.
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : Returns `true` if the browser can display PDF files inline when navigating to them, and `false` otherwise.
- {{domxref("Navigator.permissions")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Permissions")}} object that can be used to query and update permission status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).
- {{domxref("Navigator.presentation")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("Presentation")}} API.
- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("Serial")}} object, which represents the entry point into the {{domxref("Web Serial API")}} to enable the control of serial ports.
- {{domxref("Navigator.serviceWorker")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{domxref("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("Navigator.scheduling")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("Scheduling")}} object for the current document.
- {{domxref("Navigator.storage")}} {{ReadOnlyInline}}
  - : Returns the singleton {{domxref('StorageManager')}} object used for managing persistence permissions and estimating available storage on a site-by-site/app-by-app basis.
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("UserActivation")}} object containing information about the current window's user activation state.
- {{domxref("Navigator.userAgent")}} {{ReadOnlyInline}}
  - : Returns the user agent string for the current browser.
- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("NavigatorUAData")}} object, which gives access to information about the browser and operating system of the user.
- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("VirtualKeyboard")}} API, to take control of the on-screen virtual keyboard.
- {{domxref("Navigator.webdriver")}} {{ReadOnlyInline}}
  - : Indicates whether the user agent is controlled by automation.
- {{domxref("Navigator.windowControlsOverlay")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WindowControlsOverlay")}} interface which exposes information about the geometry of the title bar in desktop Progressive Web Apps, and an event to know whenever it changes.
- {{domxref("Navigator.xr")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns {{domxref("XRSystem")}} object, which represents the entry point into the [WebXR API](/en-US/docs/Web/API/WebXR_Device_API).

### Non-standard properties

- {{domxref("Navigator.buildID")}} {{Non-standard_Inline}}
  - : Returns the build identifier of the browser. In modern browsers this property now returns a fixed timestamp as a privacy measure, e.g. `20181001000000` in Firefox 64 onwards.
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref('ContactsManager')}} interface which allows users to select entries from their contact list and share limited details of the selected entries with a website or application.
- {{domxref("Navigator.globalPrivacyControl")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Returns a boolean indicating a user's consent to their information being shared or sold.
- {{domxref("Navigator.securitypolicy")}} {{Non-standard_Inline}}
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : Returns a boolean indicating whether the browser is running in standalone mode. Available on Apple's iOS Safari only.
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WakeLock")}} interface you can use to request screen wake locks and prevent screen from dimming, turning off, or showing a screen saver.

### Deprecated properties

- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Always returns `'Mozilla'`, in any browser.
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Always returns `'Netscape'`, in any browser.
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns the version of the browser as a string. Do not rely on this property to return the correct value.
- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns an array containing every {{domxref("VRDisplay")}} object that is currently presenting ({{domxref("VRDisplay.ispresenting")}} is `true`).
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Reports the value of the user's do-not-track preference. When this value is "1", your website or application should not track the user.
- {{domxref("Navigator.mimeTypes")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns an {{domxref("MimeTypeArray")}} listing the MIME types supported by the browser.
- {{domxref("Navigator.oscpu")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns a string that represents the current operating system.
- {{domxref("Navigator.platform")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns a string representing the platform of the browser. Do not rely on this function to return a significant value.
- {{domxref("Navigator.plugins")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns a {{domxref("PluginArray")}} listing the plugins installed in the browser.
- {{domxref("Navigator.product")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Always returns `'Gecko'`, in any browser.
- {{domxref("Navigator.productSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns either the string `'20030107'`, or `'"20100101'`.
- {{domxref("Navigator.vendor")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Returns either the empty string, `'Apple Computer Inc.'`, or `'Google Inc.'`.
- {{domxref("Navigator.vendorSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Always returns the empty string.

## Instance methods

_Doesn't inherit any method._

- {{domxref("Navigator.canShare()")}}
  - : Returns `true` if a call to `Navigator.share()` would succeed.
- {{domxref("Navigator.clearAppBadge()")}}
  - : Clears a badge on the current app's icon and returns a {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.
- {{domxref("Navigator.getAutoplayPolicy()")}} {{Experimental_Inline}}
  - : Returns a value indicating whether the specified media element, audio context, or media feature "type" is allowed to autoplay.
- {{domxref("Navigator.getBattery()")}}
  - : Returns a promise that resolves with a {{domxref("BatteryManager")}} object that returns information about the battery charging status.
- {{domxref("Navigator.getInstalledRelatedApps()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves with an array of objects representing any related native or [Progressive Web Applications](/en-US/docs/Web/Progressive_web_apps) that the user has installed.
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : Allows websites to register themselves as a possible handler for a given protocol.
- {{domxref("Navigator.unregisterProtocolHandler()")}}
  - : Unregister a website that is a handler for a given protocol.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : Returns a {{jsxref("Promise")}} for a MediaKeySystemAccess object.
- {{domxref("Navigator.requestMIDIAccess()")}}
  - : Returns a {{jsxref('Promise')}} representing a request for access to MIDI devices on the user's system.
- {{domxref("Navigator.sendBeacon()")}}
  - : Used to asynchronously transfer a small amount of data using {{Glossary("HTTP")}} from the User Agent to a web server.
- {{domxref("Navigator.setAppBadge()")}}
  - : Sets a badge on the icon associated with this app and returns a {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}}.
- {{domxref("Navigator.share()")}}
  - : Invokes the native sharing mechanism of the current platform.
- {{domxref("Navigator.vibrate()")}}
  - : Causes vibration on devices with support for it. Does nothing if vibration support isn't available.

### Deprecated methods

- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a promise that resolves to an array of {{domxref("VRDisplay")}} objects representing any available VR devices connected to the computer.
- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}}
  - : After having prompted the user for permission, returns the audio or video stream associated to a camera or microphone on the local computer.
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : Returns `false`. JavaScript taint/untaint functions removed in JavaScript 1.2.
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : Always returns false.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
