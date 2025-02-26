---
title: "PerformanceNavigation: type property"
short-title: type
slug: Web/API/PerformanceNavigation/type
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceNavigation.type
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

The legacy
**`PerformanceNavigation.type`**
read-only property returns an `unsigned short` containing a constant
describing how the navigation to this page was done.

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete).
> Please use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Value

An `unsigned short`.

Possible values are:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Constant name</th>
      <th scope="col">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td><code>TYPE_NAVIGATE</code></td>
      <td>
        The page was accessed by following a link, a bookmark, a form
        submission, a script, or typing the URL in the address bar.
      </td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>TYPE_RELOAD</code></td>
      <td>
        The page was accessed by clicking the Reload button or via the
        {{domxref("Location.reload()")}} method.
      </td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>TYPE_BACK_FORWARD</code></td>
      <td>The page was accessed by navigating into the history.</td>
    </tr>
    <tr>
      <td><code>255</code></td>
      <td><code>TYPE_RESERVED</code></td>
      <td>Any other way.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Historically, developers tested for a `type` of `"TYPE_BACK_FORWARD"` to get an indication of back/forward cache ({{glossary("bfcache")}}) hit rate. This however did not provide any reasons for bfcache blocking, or any other data. The {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} property should be used to monitor the bfcache, going forward. See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceNavigation")}} interface it belongs to.
