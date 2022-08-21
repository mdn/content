---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
page-type: web-api-interface
tags:
  - API
  - Interface
  - Performance Timeline API
  - PerformanceEntry
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry
---
{{APIRef("Performance Timeline API")}}

The **`PerformanceEntry`** object encapsulates a single performance metric that is part of the _performance timeline_. A _performance entry_ can be directly created by making a performance _{{domxref("PerformanceMark","mark")}}_ or _{{domxref("PerformanceMeasure","measure")}}_ (for example by calling the {{domxref("Performance.mark","mark()")}} method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).

`PerformanceEntry` instances will always be one of the following subtypes:

- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}

{{AvailableInWorkers}}

## Properties

- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : A value that further specifies the value returned by the {{domxref("PerformanceEntry.entryType")}} property. The value of both depends on the subtype. See property page for valid values.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : A string representing the type of performance metric such as, for example, "`mark`". See property page for valid values.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the starting time for the performance metric.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value of the duration of the performance event.

## Methods

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceEntry` object.

## Example

The following example checks all `PerformanceEntry` properties to see if the browser supports them and if so, shows their values.

```html hidden
<pre id='output'></pre>
```

```js
const output = document.getElementById('output');

function printPerformanceEntries() {
  // Use getEntries() to get a list of all performance entries
  const entries = performance.getEntries();

  entries.forEach((entry, i) => {
    output.textContent += `\n PerformanceEntry[${i}] \n`;
    printPerformanceEntry(entry);
  });
}

function printPerformanceEntry(entry) {
  const properties = ["name",
                    "entryType",
                    "startTime",
                    "duration"];

  for (const prop of properties) {
    // Check each property
    if (prop in entry) {
      output.textContent += `… ${prop} = ${entry[prop]} \n`;
    } else {
      output.textContent += `… ${prop} is NOT supported \n`;
    }
  }
}

printPerformanceEntries();
```

{{ EmbedLiveSample("Example", "100%", "400px") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
