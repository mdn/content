---
title: "PerformanceResourceTiming: contentType property"
short-title: contentType
slug: Web/API/PerformanceResourceTiming/contentType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceResourceTiming.contentType
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`contentType`** read-only property of the {{domxref("PerformanceResourceTiming")}} interface is a string indicating the content type of the fetched resource, formatted as a {{glossary("MIME type")}} and subtype separated by a forward slash.

The content type is a minimized and "standardized" version of the MIME type that is extracted from the {{httpheader("Content-Type")}} HTTP header sent in the resource's fetch response.
For JavaScript, JSON, SVG, and XML, the MIME type is replaced by a representative MIME type/subtype string.
Other types supported by the browser are represented by the MIME type/subtype string in the header (other information in the header is discarded).

## Value

A string indicating the MIME type "essence" of the content.
This may be one of the following values:

- `text/javascript`
  - : JavaScript content.
- `application/json`
  - : JSON content.
- `image/svg+xml`
  - : SVG content.
- `application/xml`
  - : XML content (other than SVG).
- MIME type/subtype
  - : Any other MIME type/subtype supported by the user agent.
- `""` (empty string)
  - : Returned for MIME types that are not supported by the browser, or if the resource fetch failed due to [CORS](/en-US/docs/Web/HTTP/CORS) checks.

## Examples

### Filtering resources

The `contentType` property can be used to get specific resource timing entries only; for example, only those related to scripts.

The following example uses a {{domxref("PerformanceObserver")}} to notify of new `resource` performance entries as they are recorded in the browser's performance timeline.
The `buffered` option is used for accessing entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const javascriptResources = list.getEntries().filter((entry) => {
    return entry.contentType === "text/javascript";
  });
  console.log(javascriptResources);
});

observer.observe({ type: "resource", buffered: true });
```

The following example uses {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call the method.

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.contentType === "text/javascript";
});
console.log(scripts);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
