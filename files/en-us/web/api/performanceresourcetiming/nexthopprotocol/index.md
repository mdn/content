---
title: "PerformanceResourceTiming: nextHopProtocol property"
short-title: nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.nextHopProtocol
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`nextHopProtocol`** read-only property is a string representing the network protocol used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids).

When a proxy is used, if a tunnel connection is established, this property returns the ALPN Protocol ID of the tunneled protocol. Otherwise, this property returns the ALPN Protocol ID of the first hop to the proxy.

## Value

The `nextHopProtocol` property can have the following values:

- A string representing the network protocol used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids). Typical values are:
  - `"http/0.9"`
  - `"http/1.0"`
  - `"http/1.1"`
  - `"h2"`
  - `"h2c"`
  - `"h3"`
- An empty string if the resource is a cross-origin request and no {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header is used.

## Examples

### Logging resources that use neither HTTP/2 nor HTTP/3

The `nextHopProtocol` property can be used to see resources that don't use the HTTP/2 or HTTP/3 protocols.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const protocol = entry.nextHopProtocol;
    if (protocol && !(protocol === "h2" || protocol === "h3")) {
      console.log(`${entry.name} uses ${protocol}.`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const protocol = entry.nextHopProtocol;
  if (protocol && !(protocol === "h2" || protocol === "h3")) {
    console.log(`${entry.name} uses ${protocol}.`);
  }
});
```

### Cross-origin network protocol information

If the value of the `nextHopProtocol` property is an empty string, the resource might be a cross-origin request. To expose cross-origin network protocol information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see network protocol information, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Timing-Allow-Origin")}}
- {{Glossary("HTTP 2", "HTTP/2")}}
- {{Glossary("HTTP 3", "HTTP/3")}}
