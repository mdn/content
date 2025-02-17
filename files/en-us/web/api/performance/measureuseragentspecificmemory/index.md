---
title: "Performance: measureUserAgentSpecificMemory() method"
short-title: measureUserAgentSpecificMemory()
slug: Web/API/Performance/measureUserAgentSpecificMemory
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Performance.measureUserAgentSpecificMemory
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`measureUserAgentSpecificMemory()`** method is used to estimate the memory usage of a web application including all its iframes and workers.

## Syntax

```js-nolint
measureUserAgentSpecificMemory()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an object containing the following properties:

- `bytes`
  - : A number representing the total memory usage.
- `breakdown`
  - : An {{jsxref("Array")}} of objects partitioning the total `bytes` and providing attribution and type information. The object contains the following properties:
    - `bytes`
      - : The size of the memory that this entry describes.
    - `attribution`
      - : An {{jsxref("Array")}} of container elements of the JavaScript realms that use the memory. This object has the following properties:
        - `url`
          - : If this attribution corresponds to a same-origin JavaScript realm, then this property contains the realm's URL. Otherwise it is the string "cross-origin-url".
        - `container`
          - : An object describing the DOM element that contains this JavaScript realm. This object has the following properties:
            - `id`
              - : The `id` attribute of the container element.
            - `src`
              - : The `src` attribute of the container element. If the container element is an {{HTMLElement("object")}} element, then this field contains the value of the `data` attribute.
        - `scope`
          - : A string describing the type of the same-origin JavaScript realm. Either `"Window"`, `"DedicatedWorkerGlobalScope"`, `"SharedWorkerGlobalScope"`, `"ServiceWorkerGlobalScope"` or `"cross-origin-aggregated"` for the cross-origin case.
    - `types`
      - : An array of implementation-defined memory types associated with the memory.

An example return value looks like this:

```js
{
  bytes: 1500000,
  breakdown: [
    {
      bytes: 1000000,
      attribution: [
        {
          url: "https://example.com",
          scope: "Window",
        },
      ],
      types: ["DOM", "JS"],
    },
    {
      bytes: 0,
      attribution: [],
      types: [],
    },
    {
      bytes: 500000,
      attribution: [
        {
          url: "https://example.com/iframe.html"
          container: {
            id: "example-id",
            src: "redirect.html?target=iframe.html",
          },
          scope: "Window",
        }
      ],
      types: ["JS", "DOM"],
    },
  ],
}
```

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the [security requirements](#security_requirements) for preventing cross-origin information leaks aren't fulfilled.

## Description

The browser automatically allocates memory when objects are created and frees it when they are not reachable anymore (garbage collection). This garbage collection (GC) is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is impossible (see also [JavaScript Memory Management](/en-US/docs/Web/JavaScript/Memory_management)). Developers need to make sure that objects are garbage collected, memory isn't leaked, and memory usage doesn't grow unnecessarily over time leading to slow and unresponsive web applications. Memory leaks are typically introduced by forgetting to unregister an event listener, not closing a worker, accumulating objects in arrays, and more.

The `measureUserAgentSpecificMemory()` API aggregates memory usage data to help you find memory leaks. It can be used for memory regression detection or for A/B testing features to evaluate their memory impact. Rather than make single calls to this method, it's better to make periodic calls to track how memory usage changes over the duration of a session.

The `byte` values this API returns aren't comparable across browsers or between different versions of the same browser as these are highly implementation dependent. Also, how `breakdown` and `attribution` arrays are provided is up to the browser as well. It is best to not hardcode any assumptions about this data. This API is rather meant to be called periodically (with a randomized interval) to aggregate data and analyze the difference between the samples.

## Security requirements

To use this method your document must be in a [secure context](/en-US/docs/Web/Security/Secure_Contexts) and {{domxref("Window.crossOriginIsolated","cross-origin isolated","","nocode")}}.

You can use the {{domxref("Window.crossOriginIsolated")}} and {{domxref("WorkerGlobalScope.crossOriginIsolated")}} properties to check if the document is cross-origin isolated:

```js
if (crossOriginIsolated) {
  // Use measureUserAgentSpecificMemory
}
```

## Examples

### Monitoring memory usage

The following code shows how to call the `measureUserAgentSpecificMemory()` method once every five minutes at a random interval using [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution#Random_variate_generation).

```js
function runMemoryMeasurements() {
  const interval = -Math.log(Math.random()) * 5 * 60 * 1000;
  console.log(`Next measurement in ${Math.round(interval / 1000)} seconds.`);
  setTimeout(measureMemory, interval);
}

async function measureMemory() {
  const memorySample = await performance.measureUserAgentSpecificMemory();
  console.log(memorySample);
  runMemoryMeasurements();
}

if (crossOriginIsolated) {
  runMemoryMeasurements();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.setTimeout", "setTimeout()")}}
- [Monitor your web page's total memory usage with measureUserAgentSpecificMemory() - web.dev](https://web.dev/articles/monitor-total-page-memory-usage)
