---
title: DeprecationReport
slug: Web/API/DeprecationReport
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.deprecation
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The `DeprecationReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents a deprecation report.

A deprecation report may be generated when a deprecated feature (for example a deprecated API method) is used on a document.
Note that receiving useful deprecation reports relies on browser vendors adding these warnings for deprecated features.

Reports of this type can be observed from within a page using a {{domxref("ReportingObserver")}}, or a serialized version can be sent to the default [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints).

## Instance properties

- `body`
  - : The body of the report, containing more information about the deprecation.
    This is an object with the following properties:
    - `id` {{experimental_inline}}
      - : A string representing the feature or API that is deprecated, for example `NavigatorGetUserMedia`.
        This can be used to group reports by deprecated feature.
    - `anticipatedRemoval` {{Experimental_Inline}}
      - : A {{jsxref("Date")}} object (rendered as a string) representing the date when the feature is expected to be removed from the current browser.
        If the date is not known, this property will return `null`.
        This value can be used to prioritize warnings.
        If this property returns `null` because the date is unknown, then the deprecation should be considered low priority.
    - `message` {{experimental_inline}}
      - : A string containing a human-readable description of the deprecation, including information such as what newer feature has superseded it, if any.
        This typically matches the message a browser will display in its DevTools console when a deprecated feature is used, if one is available.
    - `sourceFile` {{experimental_inline}}
      - : A string containing the path to the source file where the deprecated feature was used, if known, or `null` otherwise.
    - `lineNumber` {{experimental_inline}}
      - : A number representing the line in the source file in which the deprecated feature was used, if known, or `null` otherwise.
    - `columnNumber` {{experimental_inline}}
      - : A number representing the column in the source file in which the deprecated feature was first used, if known, or `null` otherwise.

- `type`
  - : The string `"deprecation"` indicating that this is a deprecation report.

- `url`
  - : A string representing the URL of the document that generated the report.

## Description

A deprecation report may be generated when a deprecated feature (for example a deprecated API method) is used on a document.

You can monitor for intervention reports within the page in which they are triggered using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
To do this you create a {{domxref("ReportingObserver")}} object to listen for reports, passing a callback method and an (optional) options property specifying the types of reports that you want to report on.
The callback method is then called with reports of the requested types, passing a report object.
For intervention reports, the object will be an `DeprecationReport` instance (which has the [`type`](#type) property set to `"deprecation"`).

A typical deprecation report is shown below.
Note that `url` represents the original page that was loaded, while `body.sourceFile`, `body.lineNumber` and `body.columnNumber` indicate the specific location of the API call that triggered the intervention (in this example they are the same file).

```json
{
  "type": "deprecation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 54,
    "columnNumber": 11,
    "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
    "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
    "anticipatedRemoval": null
  }
}
```

Deprecation reports are also sent as a JSON object in a `POST` to the [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) named `"default"`, if it is defined.
The reporting server endpoint and its mapping to a particular URL are set using the {{httpheader("Reporting-Endpoints")}} header.

The structure of the server report is almost exactly the same as `DeprecationReport`, except that it additionally includes `age` and `user_agent` fields.

```json
{
  "type": "deprecation",
  "age": 27,
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 54,
    "columnNumber": 11,
    "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
    "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
    "anticipatedRemoval": null
  }
}
```

## Examples

### Reporting using the API

To observe deprecation reports within the page, we construct a new {{domxref("ReportingObserver")}} object to listen for reports with the type `"deprecation"`, passing a callback that will receive and log the reports.

```js
const options = {
  types: ["deprecation"],
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

The following code uses synchronous XHR, which is a deprecated API.
Note that this code must be run after the observer is defined.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/", false); // false = synchronous (deprecated)
xhr.send();
```

As soon as the synchronous method is called, the report will trigger.
The stringified version of the report will look something like the object below.
Note that the `type` is `"deprecation"`.

```json
{
  "type": "deprecation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 54,
    "columnNumber": 11,
    "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
    "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
    "anticipatedRemoval": null
  }
}
```

### Sending a report to a reporting endpoint

Configuring a web page to send a deprecation report requires that you set a [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) named "default" using the {{httpheader("Reporting-Endpoints")}} header.
Below we set the `default` endpoint to `https://some-example.com/deprecation`:

```http
Reporting-Endpoints: default="https://some-example.com/deprecation"
```

The report will then be sent as a JSON object in a `POST` to the endpoint whenever a deprecated API is used.
It has the same structure as `DeprecationReport`, except for the addition of `age` and `user_agent` properties.

```json
[
  {
    "type": "deprecation",
    "age": 27,
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
    "body": {
      "sourceFile": "https://example.com/",
      "lineNumber": 54,
      "columnNumber": 11,
      "id": "XMLHttpRequestSynchronousInNonWorkerOutsideBeforeUnload",
      "message": "Synchronous `XMLHttpRequest` on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check https://xhr.spec.whatwg.org/.",
      "anticipatedRemoval": null
    }
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting API](/en-US/docs/Web/API/Reporting_API)
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
