---
title: CrashReportContext
slug: Web/API/CrashReportContext
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CrashReportContext
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The `CrashReportContext` interface of the [Reporting API](/en-US/docs/Web/API/Reporting_API) provides methods enabling arbitrary data to be recorded for the current top-level browsing context, which is then added to a {{domxref("CrashReport")}} and sent to a reporting endpoint when a browser crash occurs.

The `CrashReportContext` object for a particular browsing context is accessed via the {{domxref("Window.crashReport")}} property.

## Instance methods

- {{domxref("CrashReportContext.delete()")}} {{experimental_inline}}
  - : Deletes a previously-stored key-value pair.
- {{domxref("CrashReportContext.initialize()")}} {{experimental_inline}}
  - : Initializes a portion of memory to be used for storing crash report data specified by {{domxref("CrashReportContext.set", "set()")}}. This must be called before any other method is invoked on the object.
- {{domxref("CrashReportContext.set()")}} {{experimental_inline}}
  - : Stores a key-value pair in the memory initialized by {{domxref("CrashReportContext.initialize", "initialize()")}}.

## Description

Crash reports containing arbitrary information can be sent to a server endpoint using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
This is useful because we can store detailed diagnostic information throughout the lifetime of an application and use the reports to debug crashes more effectively.

The information is stored in a special key-value store, which is similar to [Web Storage](/en-US/docs/Web/API/Web_Storage_API) except that its scope is restricted to the current top-level origin, and it doesn't have a getter method available. It allows document-specific state information to be recorded and deleted. The top-level document will record diagnostic information relating to it and any embedded documents, and send any related crash reports.

To use this API, a document first needs to call {{domxref("CrashReportContext.initialize", "window.crashReport.initialize()")}}, which takes as an argument a number specifying the maximum number of bytes that can be recorded in the key-value store by each individual {{domxref("CrashReportContext.set", "window.crashReport.set()")}} call. Values are then recorded using `set()`, and deleted using {{domxref("CrashReportContext.delete", "window.crashReport.delete()")}}.

When the browser crashes, the information stored in the key-value store is added to a {{domxref("CrashReport")}} and sent to the [default reporting server endpoint](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint).

> [!NOTE]
> It is not possible to retrieve {{domxref("CrashReport")}}s using a {{domxref("ReportingObserver")}}.

## Examples

### Recording data in a crash report

To start using crash reporting, A web application has to call {{domxref("CrashReportContext.initialize", "window.crashReport.initialize()")}}, specifying a maximum number of bytes that can be stored in the key-value store per `set()` call. Here we initialize the store with one kilobyte of storage space:

```js
window.crashReport.initialize(1024).then(() => {
  init();
});
```

Once the promise resolves, there are a couple of common strategies that can be adopted in subsequent code. For example, we could set a key-value pair that stores input data for a complex operation that might cause it to crash, then try running the operation with those inputs. If the browser crashes, the resulting {{domxref("CrashReport")}} will contain that data. If it doesn't crash, we can delete that key-value pair as it isn't relevant at this current time.

```js
const arg1 = "a";
const arg2 = "b";
window.crashReport.set("complex-operation-input", `${arg1}_${arg2}`);
complexOperationThatMightCrash(arg1, arg2);
window.crashReport.delete("complex-operation-input");
```

Because crash storage data is accessible among all same-origin documents under a traversable navigable, you might wish to prefix keys for certain common operations that multiple documents may perform at the same time. For example, imagine a common {{domxref("fetch()")}} operation is invoked in several different documents at different times, and certain conditions result in the operation causing a crash.

To help identify where the `fetch()` was called at the time of a crash, we can adopt a prefixing strategy:

```js
async function fetchURL(url) {
  const prefix = `[top-level=${self === window.top}]`;
  window.crashReport.set(`${prefix}-fetching`, url);
  const response = await fetch(url);
  window.crashReport.delete(`${prefix}-fetching`, url);
}
```

This also prevents key-value pairs that identify the same issue occurring at different times or places from overwriting one another. In this case, we differentiate crash report data set in the top-level document versus data set in embedded documents.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
