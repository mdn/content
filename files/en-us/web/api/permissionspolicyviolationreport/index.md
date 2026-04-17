---
title: PermissionsPolicyViolationReport
slug: Web/API/PermissionsPolicyViolationReport
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ReportingObserver.ReportingObserver.options_parameter.types_property.permissions-policy-violation
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

The `PermissionsPolicyViolationReport` dictionary of the [Reporting API](/en-US/docs/Web/API/Reporting_API) represents a report that is generated when a document violates its [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).

Reports of this type can be observed from within a page using a {{domxref("ReportingObserver")}}, and a serialized version can be sent to the [default reporting server endpoint](/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint).

## Instance properties

- `body`
  - : The body of the report.
    This is an object with the following properties:
    - `columnNumber`
      - : The character position in the line of the script at which the violation occurred, or `null` if not known.
    - `disposition`
      - : A string indicating whether the policy that was violated was enforced or only reported.
        This can have the value `"enforce"` for violations of policies set with {{httpheader("Permissions-Policy")}}, and `report` for violations set with `Permissions-Policy-Report-Only`.
    - `featureId`
      - : A string representing the [Permissions Policy directive](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) that was violated (for example, `"geolocation"`).
    - `lineNumber`
      - : The line number in the script at which the violation occurred, or `null` if not known.
    - `message`
      - : A string containing a human-readable description of the violation.
    - `sourceFile`
      - : A string representing the URL of the script in which the violation occurred, or `null` if not known.
        Both `columnNumber` and `lineNumber` should have non-null values if this property is not `null`.

- `type`
  - : The string `"permissions-policy-violation"`, indicating that this is a Permissions Policy violation report.
- `url`
  - : A string representing the URL of the document that generated the report.

## Description

Permissions Policy violations are reported when a document attempts to use a browser feature that is blocked by its [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
The policy is set using the {{httpheader("Permissions-Policy")}} HTTP header, or a `<meta http-equiv="permissions-policy">` element.

You can monitor for Permissions-Policy violation reports within the page that sets the policy using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
To do this you create a {{domxref("ReportingObserver")}} object to listen for reports, passing a callback method and an (optional) `options` property specifying the types of reports that you want to report on.
The callback method is then called with reports of the requested types, passing a report object.
For `Permissions-Policy` violations, the object will be a `PermissionsPolicyViolationReport` instance with `PermissionsPolicyViolationReport.type == "permissions-policy-violation"`.

The structure of a typical in-page report is shown below.
Note that we can see the URL of the page that had its policy violated (`url`), and from `body.featureId` we can see which feature was blocked.
The `body.disposition` field shows that the violation was enforced.

```json
{
  "type": "permissions-policy-violation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 44,
    "columnNumber": 29,
    "featureId": "geolocation",
    "disposition": "enforce",
    "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document."
  }
}
```

Violation reports may also be sent as a JSON object in a {{httpmethod("POST")}} request to the [reporting server endpoint](/en-US/docs/Web/API/Reporting_API#reporting_server_endpoints) named `"default"`, if one is defined.
The reporting server endpoint and its mapping to a particular URL are set using the {{httpheader("Reporting-Endpoints")}} header.

The structure of the server report is almost exactly the same as `PermissionsPolicyViolationReport`, except that it additionally includes `age` and `user_agent` fields.

> [!NOTE]
> Chrome's server-side serialization uses `policyId` rather than `featureId` for the feature name in the body of a server report.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "policyId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

## Examples

### Using the `ReportingObserver` interface

You can obtain a `PermissionsPolicyViolationReport` object by configuring your page to block a browser feature, and then attempting to use it.

In this example, we will block the Geolocation API for the current document using either the {{httpheader("Permissions-Policy")}} HTTP header:

```http
Permissions-Policy: geolocation=()
```

Or equivalently via an HTML `<meta>` element:

```html
<meta http-equiv="permissions-policy" content="geolocation=()" />
```

Then we will attempt to use the Geolocation API:

```js
// This should generate a Permissions Policy violation
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Finally, we will create a new {{domxref("ReportingObserver")}} object to listen for Permissions Policy violations (this will need to be loaded before the code that triggers the violation).

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    reports.forEach((violation) => {
      console.log(violation);
      console.log(JSON.stringify(violation));
    });
  },
  {
    types: ["permissions-policy-violation"],
    buffered: true,
  },
);

observer.observe();
```

Above we log each violation report object and a JSON-string version of the object, which might look similar to the object below.
Note that the `type` is `"permissions-policy-violation"` and `body.featureId` identifies the blocked feature.

```json
{
  "type": "permissions-policy-violation",
  "url": "https://example.com/",
  "body": {
    "sourceFile": "https://example.com/",
    "lineNumber": 44,
    "columnNumber": 29,
    "featureId": "geolocation",
    "disposition": "enforce",
    "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document."
  }
}
```

### Sending a Permissions Policy violation report to a reporting endpoint

Here we define the define reporting endpoint named `"default"` using the {{httpheader("Reporting-Endpoints")}} response header, and set the `Permissions-Policy` header to block use of the `geolocation` feature.

```http
Reporting-Endpoints: default="https://example.com/reports"
Permissions-Policy: geolocation=()
```

As before, a violation is triggered by attempting to use a blocked feature:

```js
// This should generate a Permissions Policy violation
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

The violation report will then be sent to the default endpoint as a JSON array.
Note that the `type` is `"permissions-policy-violation"` and the `body` property is a serialization of the `PermissionsPolicyViolationReport` object.

> [!NOTE]
> Chrome's server-side serialization uses `policyId` rather than `featureId` for the feature name.

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "policyId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ReportingObserver")}}
- {{httpheader("Permissions-Policy")}}
- {{httpheader("Reporting-Endpoints")}}
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Reporting API](/en-US/docs/Web/API/Reporting_API)
