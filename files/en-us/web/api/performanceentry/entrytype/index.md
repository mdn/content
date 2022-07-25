---
title: PerformanceEntry.entryType
slug: Web/API/PerformanceEntry/entryType
page-type: web-api-instance-property
tags:
  - API
  - Performance Timeline API
  - PerformanceEntry
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.entryType
---
{{APIRef("Performance Timeline API")}}

The **`entryType`** property returns
a string representing the type of performance metric such as, for
example, "`mark`". This property is read only.

{{AvailableInWorkers}}

## Value

The return value depends on the subtype of the `PerformanceEntry` object and
affects the value of the {{domxref('PerformanceEntry.name')}} property as shown by the
table below.

### Performance entry type names

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Subtype</th>
      <th scope="col">Type of name property</th>
      <th scope="col">Description of name property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>element</code></td>
      <td>{{domxref('PerformanceElementTiming')}}</td>
      <td>string</td>
      <td>Reports load time of elements.</td>
    </tr>
    <tr>
      <td><code>navigation</code></td>
      <td>
        {{domxref('PerformanceNavigationTiming')}}
      </td>
      <td>{{domxref("URL")}}</td>
      <td>The document's address.</td>
    </tr>
    <tr>
      <td><code>resource</code></td>
      <td>{{domxref('PerformanceResourceTiming')}}</td>
      <td>{{domxref("URL")}}</td>
      <td>
        The resolved URL of the requested resource. This value doesn't change
        even if the request is redirected.
      </td>
    </tr>
    <tr>
      <td><code>mark</code></td>
      <td>{{domxref('PerformanceMark')}}</td>
      <td>string</td>
      <td>
        The name used when the mark was created by calling
        {{domxref("Performance.mark","performance.mark()")}}.
      </td>
    </tr>
    <tr>
      <td><code>measure</code></td>
      <td>{{domxref('PerformanceMeasure')}}</td>
      <td>string</td>
      <td>
        name used when the measure was created by calling
        {{domxref("Performance.measure","performance.measure()")}}.
      </td>
    </tr>
    <tr>
      <td><code>paint</code></td>
      <td>{{domxref('PerformancePaintTiming')}}</td>
      <td>string</td>
      <td>
        Either <code>'first-paint'</code> or
        <code>'first-contentful-paint'</code>.
      </td>
    </tr>
    <tr>
      <td><code>longtask</code></td>
      <td>{{domxref('PerformanceLongTaskTiming')}}</td>
      <td>string</td>
      <td>reports instances of long tasks</td>
    </tr>
  </tbody>
</table>

## Examples

The following example shows the use of the `entryType` property.

```js
function run_PerformanceEntry() {

  // check for feature support before continuing
  if (performance.mark === undefined) {
    console.log("performance.mark not supported");
    return;
  }

  // Create a performance entry named "begin" via the mark() method
  performance.mark("begin");

  // Check the entryType of all the "begin" entries
  const entriesNamedBegin = performance.getEntriesByName("begin");
  for (let i=0; i < entriesNamedBegin.length; i++) {
      const typeOfEntry = entriesNamedBegin[i].entryType;
      console.log(`Entry is type: ${typeOfEntry}`);
  }

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
