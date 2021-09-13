---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Web Workers
  - WorkerNavigator
  - Workers
browser-compat: api.WorkerNavigator
---
{{APIRef("Web Workers API")}}

The **`WorkerNavigator`** interface represents a subset of the {{DOMxRef("Navigator")}} interface allowed to be accessed from a {{DOMxRef("Worker")}}. Such an object is initialized for each worker and is available via the {{DOMxRef("WorkerGlobalScope.navigator", "self.navigator")}} property.

## Properties

_The `WorkerNavigator` interface doesn't inherit any property._

- {{DOMxRef("WorkerNavigator.appCodeName")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Always returns `'Mozilla'`, in any browser. This property is kept only for compatibility purposes.
- {{DOMxRef("WorkerNavigator.appName")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Returns the official name of the browser. Do not rely on this property to return the correct value.
- {{DOMxRef("WorkerNavigator.appVersion")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Returns the version of the browser as a string. Do not rely on this property to return the correct value.
- {{DOMxRef("WorkerNavigator.connection")}}{{ReadOnlyInline}}
  - : Provides a {{DOMxRef("NetworkInformation")}} object containing information about the network connection of a device.
- {{DOMxRef("WorkerNavigator.hardwareConcurrency")}}{{ReadOnlyInline}}
  - : Returns the number of logical processor cores available.
- {{DOMxRef("WorkerNavigator.language")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown.
- {{DOMxRef("WorkerNavigator.languages")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns an array of {{domxref("DOMString")}} representing the languages known to the user, by order of preference.
- {{DOMxRef("WorkerNavigator.locks")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns a {{DOMxRef("LockManager")}} object which provides methods for requesting a new {{DOMxRef('Lock')}} object and querying for an existing `Lock` object.
- {{DOMxRef("WorkerNavigator.onLine")}}{{ReadOnlyInline}}
  - : Returns a boolean value indicating whether the browser is online.
- {{DOMxRef("WorkerNavigator.permissions")}} {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Returns a {{DOMxRef("Permissions")}} object that can be used to query and update permission status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).
- {{DOMxRef("WorkerNavigator.platform")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Returns a string representing the platform of the browser. Do not rely on this property to return the correct value.
- {{DOMxRef("WorkerNavigator.product")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : Always returns `'Gecko'`, on any browser. This property is kept only for compatibility purposes.
- {{domxref("WorkerNavigator.serial")}} {{readonlyInline}}
  - : Returns a {{domxref("Serial")}} object, which represents the entry point into the {{domxref("Web Serial API")}} to enable the control of serial ports.
- {{DOMxRef("WorkerNavigator.storage")}}{{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a {{DOMxRef('StorageManager')}} interface for managing persistance permissions and estimating available storage.
- {{DOMxRef("WorkerNavigator.userAgent")}}{{ReadOnlyInline}}
  - : Returns the user agent string for the current browser.
- {{domxref("WorkerNavigator.userAgentData")}} {{readonlyInline}}
  - : Returns a {{domxref("NavigatorUAData")}} object, which gives access to information about the browser and operating system of the user.

## Methods

_The `WorkerNavigator` interface neither inherits nor implements any method._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other Worker-related interfaces: {{DOMxRef("Worker")}}, {{DOMxRef("WorkerLocation")}}, and {{DOMxRef("WorkerGlobalScope")}}.
- [Using web workers.](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
