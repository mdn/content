---
title: PerformanceEntry.name
slug: Web/API/PerformanceEntry/name
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.name
---
{{APIRef("Performance Timeline API")}}

The **`name`** property of the
{{domxref("PerformanceEntry")}} interface returns a value that further specifies the
value returned by the {{domxref("PerformanceEntry.entryType")}} property. This
property is read only.

{{AvailableInWorkers}}

## Value

The return value depends on the subtype of the `PerformanceEntry` object and
the value of {{domxref("PerformanceEntry.entryType")}}, as shown by the table below.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Subtype</th>
      <th scope="col">entryType values</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("URL")}}</td>
      <td>
        {{domxref('PerformanceNavigationTiming')}}
      </td>
      <td><code>frame</code>, <code>navigation</code></td>
      <td>The document's address.</td>
    </tr>
    <tr>
      <td>{{domxref("URL")}}</td>
      <td>{{domxref('PerformanceResourceTiming')}}</td>
      <td><code>resource</code></td>
      <td>
        The resolved URL of the requested resource. This value doesn't change
        even if the request is redirected.
      </td>
    </tr>
    <tr>
      <td>string</td>
      <td>{{domxref('PerformanceMark')}}</td>
      <td><code>mark</code></td>
      <td>
        The name used when the mark was created by calling
        {{domxref("Performance.mark","performance.mark()")}}.
      </td>
    </tr>
    <tr>
      <td>string</td>
      <td>{{domxref('PerformanceMeasure')}}</td>
      <td><code>measure</code></td>
      <td>
        name used when the measure was created by calling
        {{domxref("Performance.measure","performance.measure()")}}.
      </td>
    </tr>
    <tr>
      <td>string</td>
      <td>{{domxref('PerformancePaintTiming')}}</td>
      <td><code>paint</code></td>
      <td>
        Either <code>'first-paint'</code> or
        <code>'first-contentful-paint'</code>.
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example shows the use of the `name` property.

```js
function run_PerformanceEntry() {
  console.log("PerformanceEntry support…");

  if (performance.mark === undefined) {
    console.log("The property performance.mark is not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  const p = performance.getEntries();
  for (let i=0; i < p.length; i++) {
    log(`Entry[${i}]`);
    check_PerformanceEntry(p[i]);
  }
}
function check_PerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  for (let i = 0; i < properties.length; i++) {
    // check each property
    const supported = properties[i] in obj;
    if (supported) {
      console.log(`…${properties[i]} = ${obj[properties[i]]}`);
    } else {
      console.log(`…${properties[i]} = Not supported`);
    }
  }
  for (let i = 0; i < methods.length; i++) {
    // check each method
    const supported = typeof obj[methods[i]] === "function";
    if (supported) {
      const js = obj[methods[i]]();
      console.log(`…${methods[i]}() = ${JSON.stringify(js)}`);
    } else {
      console.log(`…${methods[i]} = Not supported`);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
