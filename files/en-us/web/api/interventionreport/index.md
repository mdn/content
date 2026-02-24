---
title: InterventionReport
slug: Web/API/InterventionReport
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.intervention
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The `InterventionReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents an intervention report.

An intervention report may be generated when usage of a feature in a web document has been blocked by the browser for reasons such as security, performance, or user annoyance.
Reports of this type can be observed from within a page using a {{domxref("ReportingObserver")}}, and a serialized version can be sent to a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

## Instance properties

- `body`
  - : The body of the report.
    This is an object with the following properties:
    - `columnNumber` {{experimental_inline}}
      - : A string representing the column in the source file in which the intervention occurred, if known, or `null` otherwise.

    - `id` {{experimental_inline}}
      - : A string representing the intervention that generated the report.
        This can be used to group reports.

    - `lineNumber` {{experimental_inline}}
      - : A string representing the line in the source file where the intervention occurred, if known, or `null` otherwise.

    - `message` {{experimental_inline}}
      - : A string containing a human-readable description of the intervention, including information such how the intervention could be avoided.
        This typically matches the message a browser will display in its DevTools console when an intervention is imposed, if one is available.

    - `sourceFile` {{experimental_inline}}
      - : A string containing the path to the source file which first used the indicated API (and which caused the intervention), if known, or `null` otherwise.

- `type`
  - : The string `"intervention"` indicating that this is an intervention report.

- `url`
  - : A string representing the URL of the document that generated the report.

## Description

An intervention report may be generated when usage of a feature in a web document has been blocked by the browser for reasons such as security, performance, or user annoyance.
For example, an advertisement can trigger a [Heavy Ad Intervention](https://developer.chrome.com/docs/web-platform/heavy-ads-intervention) (developer.chrome.com) if it slows page responsiveness or otherwise affects the user experience.

You can monitor for intervention reports within the page in which they are triggered using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
To do this you create a {{domxref("ReportingObserver")}} object to listen for reports, passing a callback method and an (optional) options property specifying the types of reports that you want to report on.
The callback method is then called with reports of the requested types, passing a report object.
For intervention reports, the object will be an `InterventionReport` instance (which has the [`type`](#type) property set to `"intervention"`).

A typical intervention report is shown below (copied from the specification).
Note that `url` represents the original page that was loaded, while `body.sourceFile`, `body.lineNumber` and `body.columnNumber` indicate the specific location of the API call that triggered the intervention.

```json
{
  "type": "intervention",
  "url": "https://example.com/",
  "body": {
    "id": "audio-no-gesture",
    "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
    "sourceFile": "https://example.com/index.js",
    "lineNumber": 1234,
    "columnNumber": 42
  }
}
```

Intervention reports are also sent as a JSON object in a `POST` to the [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) named `"default"`, if it is defined.
The reporting server endpoint and its mapping to a particular URL are set using the {{httpheader("Reporting-Endpoints")}} header.

The structure of the server report is almost exactly the same as `InterventionReport`, except that it additionally includes `age` and `user_agent` fields.

```json
{
  "type": "intervention",
  "age": 27,
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "id": "audio-no-gesture",
    "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
    "sourceFile": "https://example.com/index.js",
    "lineNumber": 1234,
    "columnNumber": 42
  }
}
```

## Examples

### Using the `ReportingObserver` interface

To observe intervention reports within the page, we construct a new {{domxref("ReportingObserver")}} object to listen for reports with the type `"intervention"`, passing a callback that will receive and log the reports.
This code needs to be loaded before the script that causes the violation:

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reports.forEach((report) => {
    console.log(report);
    console.log(JSON.stringify(report));
  });
}, options);

// Start the observer
observer.observe();
```

The stringified version of the report might look similar to the object below.
Note that the `type` is `"intervention"`.

```json
{
  "type": "intervention",
  "url": "https://example.com/",
  "body": {
    "id": "audio-no-gesture",
    "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
    "sourceFile": "https://example.com/index.js",
    "lineNumber": 1234,
    "columnNumber": 42
  }
}
```

### Sending a report to a reporting endpoint

Configuring a web page to send a intervention report requires that you set a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) named "default" using the {{httpheader("Reporting-Endpoints")}} header.
Below we set the `default` endpoint to `https://some-example.com/intervention`:

Configuring a web page to send an intervention report requires that you set the default [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).
This is just an endpoint with the name "default", as shown below:

```http
Reporting-Endpoints: default="https://some-example.com/intervention"
```

The report will then be sent as a JSON object in a `POST` to the endpoint whenever a intervention occurs.
It has the same structure as `InterventionReport`, except for the addition of `age` and `user_agent` properties.

```json
[
  {
    "type": "intervention",
    "age": 27,
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
    "body": {
      "id": "audio-no-gesture",
      "message": "A request to play audio was blocked because it was not triggered by user activation (such as a click).",
      "sourceFile": "https://example.com/index.js",
      "lineNumber": 1234,
      "columnNumber": 42
    }
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReportingObserver")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api) (developer.chrome.com)
