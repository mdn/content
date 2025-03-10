---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.PressureObserver
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

The **Compute Pressure API** is a JavaScript API that enables you to observe the pressure of system resources such as the CPU.

## Use cases

In real-time applications, such as video conferencing web apps, the Compute Pressure API lets you detect which pressure the system is currently facing. The system will handle any stress as well as it can, but a collaboration between system and app is useful to handle the pressure best. This API notifies you of high-level pressure state changes, so you can adjust your workloads and still offer a pleasant user experience. The signal is proactively delivered when the system pressure trend is either rising or easing to allow timely adaptation.

You can use these pressure change signals, for example, to reduce or increase the video quality or the number of video feeds shown simultaneously to avoid dropping video frames, audio cuts, or delaying other critical parts of the application. The quality of service of your web app can vary, also due to pressure from external factors and apps at unexpected times, but ideally that does not lead to a total system failure, input delay, or unresponsiveness. Instead, the set of enabled features and their quality level is balanced against the resource pressure of the end-user device. It is similar to network pressure in which case a streaming app adapts to the available bandwidth.

More use cases are:

- Web games, for which you could balance the quality and amount of 3D assets, change the framerate, resolution, depth of field etc., to ensure low latency and stable frame rate.
- User interfaces, for which you could render placeholders instead of real data while the system is under pressure, and render the real content once the pressure has eased.

## Concepts and usage

Fast and delightful web applications should balance workloads when the system's computing resources are used at (near) full capacity. The Compute Pressure API's goal is to prevent, rather than mitigate, bad user experience in the web app itself and also for the user's device to not become too hot, too loud, or to drain the battery at an unacceptable rate. Therefore, it is advised to prefer this API over feedback mechanisms or singular performance adjustments (for example, by lowering the frequency of {{domxref("window.requestAnimationFrame")}}) where bad user experience might be mitigated, but not proactively avoided. For measuring and segmenting the performance of user sessions after the fact, the {{domxref("PerformanceLongTaskTiming")}} API is better suited to analyze tasks that occupy the UI thread for 50 milliseconds or more (see also [Performance API](/en-US/docs/Web/API/Performance_API) for additional performance measurement APIs).

### Pressure source types

In your web app or website, different tasks are fighting for the processing time of different processing units (CPU, GPU, and other specialized processing units). The current version of the Compute Pressure API specification defines two main source types that can be queried to gather pressure information:

- `"thermals"` represents the global thermal state of the entire system.
- `"cpu"` represents the average pressure of the central processing unit (CPU) across all its cores. This state can be affected by other apps and sites than the observing site.

The list of supported sources varies per browser, operating system, and hardware, and is evolving. Use the static {{domxref("PressureObserver.knownSources_static", "PressureObserver.knownSources")}} hint to see which source types are available to your browser. Note that availability can also vary by your operating system and your hardware. Call {{domxref("PressureObserver.observe()", "observe()")}} and check for a `NotSupportedError` to see if pressure observation is possible.

The Compute Pressure API is available in the following contexts:

- {{domxref("Window")}} (main thread)
- {{domxref("Worker")}}
- {{domxref("SharedWorker")}}
- {{HTMLElement("iFrame")}} (if a suitable [Permissions-Policy](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/compute-pressure) is provided)

### Pressure states

The Compute Pressure API exposes high-level pressure states which abstract away complexities of system bottlenecks that cannot be adequately explained with low-level metrics such as processor clock speed and utilization. In fact, metrics for CPU utilization are often [misleading](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Therefore, the Compute Pressure API uses human-readable pressure states with the following semantics (see also the [specification](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: The conditions of the target device are at an acceptable level with no noticeable adverse effects on the user.
- 🟢 `"fair"`: Target device pressure, temperature and/or energy usage are slightly elevated, potentially resulting in reduced battery-life, as well as fans (or systems with fans) becoming active and audible. Apart from that the target device is running flawlessly and can take on additional work.
- 🟡 `"serious"`: Target device pressure, temperature and/or energy usage is consistently highly elevated. The system may be throttling as a countermeasure to reduce thermals.
- 🔴 `"critical"`: The temperature of the target device or system is significantly elevated and it requires cooling down to avoid any potential issues.

The contributing factors (that is, the underlying system metrics) for the pressure states above are not defined by the specification and can vary depending on the underlying hardware and platform behavior. However, the specification requires that the change in contributing factors must be substantial to avoid flip-flopping between states. This means you can expect the API to not report different states overly often as they aren't responding to just one fluctuating system metric.

### Security and privacy considerations

The Compute Pressure API is [policy-controlled](/en-US/docs/Web/HTTP/Permissions_Policy) by the `"compute-pressure"` directive. Its default allowlist is `'self'` which allows usage in same-origin nested frames but prevents third-party content from using the feature.

## Reference

### Interfaces

The following interfaces are present in the Compute Pressure API and the API surface is similar to other observers, such as {{domxref("IntersectionObserver")}}, {{domxref("MutationObserver")}}, or {{domxref("PerformanceObserver")}}.

- {{domxref("PressureObserver")}} {{experimental_inline}}
  - : Notifies when the system's pressure changes for a specified number of sources (e.g. the CPU) at a predefined sample interval.
- {{domxref("PressureRecord")}}
  - : Describes the pressure trend at a specific moment of transition.

### Permission-Policy directive

- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} directive
  - : Controls access to the Compute Pressure API.

## Examples

### Log current pressure

This example creates a {{domxref("PressureObserver")}} and takes action whenever there is a pressure change. The sample interval is set to 1000ms, meaning that there will be updates at most every second.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  if (lastRecord.state === "critical") {
    // disable video feeds
  } else if (lastRecord.state === "serious") {
    // disable video filter effects
  } else {
    // enable all video feeds and filter effects
  }
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Compute Pressure demo](https://w3c.github.io/compute-pressure/demo/), which uses Mandelbrot sets and workers to create artificial pressure for test purposes.
