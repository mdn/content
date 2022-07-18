---
title: WorkerGlobalScope.navigator
slug: Web/API/WorkerGlobalScope/navigator
page-type: web-api-instance-property
tags:
  - API
  - Navigator
  - Property
  - Reference
  - Web Workers
  - WorkerGlobalScope
browser-compat: api.WorkerGlobalScope.navigator
---
{{APIRef("Web Workers API")}}

The **`navigator`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns the {{domxref("WorkerNavigator")}} associated with the worker. It is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.

## Value

A {{domxref("WorkerNavigator")}} object.

## Examples

If you call the following

```js
console.log(navigator);
```

inside a worker (which would basically be the equivalent of `self.console.log(self.navigator);`, as these are being called on the worker scope, which can be referenced with {{domxref("WorkerGlobalScope.self")}}), you will get a {{domxref("WorkerNavigator")}} object written to the console — something like the following:

```
Object {onLine: true, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) Ap…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36", product: "Gecko", platform: "MacIntel", appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKi…ML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"…}
    appCodeName: "Mozilla"
    appName: "Netscape"
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    hardwareConcurrency: 4
    onLine: true
    platform: "MacIntel"
    product: "Gecko"
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36"
    __proto__: Object
```

You could use this navigator object to return more information about the runtime environment, as you might do with a normal {{domxref("Navigator")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("WorkerNavigator")}}
