---
title: ReportingObserver
slug: Web/API/ReportingObserver
page-type: web-api-interface
browser-compat: api.ReportingObserver
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

The `ReportingObserver` interface of the [Reporting API](/en-US/docs/Web/API/Reporting_API) allows you to collect and access reports.

## Constructor

- {{domxref("ReportingObserver.ReportingObserver", "ReportingObserver()")}}
  - : Creates a new `ReportingObserver` object instance, which can be used to collect and access reports.

## Instance properties

_This interface has no properties defined on it._

## Instance methods

- {{domxref("ReportingObserver.disconnect()")}}
  - : Stops a reporting observer that had previously started observing from collecting reports.
- {{domxref("ReportingObserver.observe()")}}
  - : Instructs a reporting observer to start collecting reports in its report queue.
- {{domxref("ReportingObserver.takeRecords()")}}
  - : Returns the current list of reports contained in the observer's report queue, and empties the queue.

## Events

_This interface has no events that fire on it._

## Examples

### Displaying deprecation reports

This example shows how to observe `"deprecation"` reports using a `ReportingObserver`.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  margin: 10px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

First we construct a new {{domxref("ReportingObserver")}} object to listen for reports with the type `"deprecation"`, passing a callback that will receive and log the reports.

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    // console.log(report);
    log(JSON.stringify(report, null, 2));
  });
}, options);

// Start the observer
observer.observe();
```

We then call the following code which uses synchronous XHR (deprecated API).
Note that this is defined after the observer it triggers once the observer is running.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

#### Results

On browsers that support deprecation reports, a report should be displayed below.
Note that the `type` is `"deprecation"`.

{{EmbedLiveSample("Using the `ReportingObserver` interface", "100%", "280px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
