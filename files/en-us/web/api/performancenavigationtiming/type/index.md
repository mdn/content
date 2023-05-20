---
title: "PerformanceNavigationTiming: type property"
short-title: type
slug: Web/API/PerformanceNavigationTiming/type
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.type
---

{{APIRef("Performance API")}}

The **`type`** read-only property returns the type of navigation.

You can use this property to categorize your navigation timing data as each of these types will have different performance characteristics. Users going back and forth might experience a faster site than users performing navigation for the first time or submitting forms, etc.

For example, if your site provides new content frequently, you might want to refresh that content using [Fetch](/en-US/docs/Web/API/Fetch_API) or similar and avoid users having to hit reload for the entire page all the time. The `"reload"` type can help you find pages that are reloaded frequently.

## Value

The `type` property can have the following values:

- `"navigate"`
  - : Navigation started by clicking a link, entering the URL in the browser's address bar, form submission, or initializing through a script operation other than `reload` and `back_forward` as listed below.
- `"reload"`
  - : Navigation is through the browser's reload operation, {{domxref("location.reload()")}} or a Refresh pragma directive like `<meta http-equiv="refresh" content="300">`.
- `"back_forward"`
  - : Navigation is through the browser's history traversal operation.
- `"prerender"`
  - : Navigation is initiated by a [prerender hint](/en-US/docs/Web/HTML/Attributes/rel/prerender).

## Examples

### Logging reload navigation

The `type` property can be used to check whether the navigation was of type `reload`. You could collect these `reload` entries in a server-side endpoint to determine which pages of your site gets reloaded the most, or collect all navigation types and determine what percent of users go back and forward, for example.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.type === "reload") {
      console.log(`${entry.name} was reloaded!`);
      console.log(entry);
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  if (entry.type === "reload") {
    console.log(`${entry.name} was reloaded!`);
    console.log(entry);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
