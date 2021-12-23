---
title: ReportingObserver
slug: Web/API/ReportingObserver
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Reporting API
  - ReportingObserver
browser-compat: api.ReportingObserver
---
{{SeeCompatTable}}{{APIRef("Reporting API")}}

The `ReportingObserver` interface of the [Reporting API](/en-US/docs/Web/API/Reporting_API) allows you to collect and access reports.

## Constructor

- {{domxref("ReportingObserver.ReportingObserver", "ReportingObserver()")}}
  - : Creates a new `ReportingObserver` object instance, which can be used to collect and access reports.

## Properties

_This interface has no properties defined on it._

## Methods

- {{domxref("ReportingObserver.disconnect()")}}
  - : Stops a reporting observer that had previously started observing from collecting reports.
- {{domxref("ReportingObserver.observe()")}}
  - : Instructs a reporting observer to start collecting reports in its report queue.
- {{domxref("ReportingObserver.takeRecords()")}}
  - : Returns the current list of reports contained in the observer's report queue, and empties the queue.

## Events

_This interface has no events that fire on it._

## Examples

In our [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) example, we create a simple reporting observer to observe usage of deprecated features on our web page:

```js
let options = {
  types: ['deprecation'],
  buffered: true
}

let observer = new ReportingObserver(function(reports, observer) {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

We then tell it to start observing reports using {{domxref("ReportingObserver.observe()")}}; this tells the observer to start collecting reports in its report queue, and runs the callback function specified inside the constructor:

```js
observer.observe();
```

Later on in the example we deliberately use the deprecated version of {{domxref("MediaDevices.getUserMedia()")}}:

```js
if(navigator.mozGetUserMedia) {
  navigator.mozGetUserMedia(
    constraints,
    success,
    failure);
} else {
  navigator.getUserMedia(
    constraints,
    success,
    failure);
}
```

This causes a deprecation report to be generated; because of the event handler we set up inside the `ReportingObserver()` constructor, we can now click the button to display the report details.

![image of a jolly bearded man with various stats displayed below it about a deprecated feature](reporting_api_example.png)

> **Note:** If you look at the [complete source code](https://github.com/mdn/dom-examples/blob/master/reporting-api/deprecation_report.html), you'll notice that we actually call the deprecated `getUserMedia()` method twice. After the first time we call {{domxref("ReportingObserver.takeRecords()")}}, which returns the first generated report and empties the queue. Because of this, when the button is pressed only the second report is listed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
