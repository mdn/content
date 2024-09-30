---
title: "CSP: report-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
page-type: http-csp-directive
status:
  - deprecated
browser-compat: http.headers.Content-Security-Policy.report-uri
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> The {{CSP("report-to")}} directive is intended to replace `report-uri`, and in browsers that support `report-to`, the `report-uri` directive is ignored.
>
> However until `report-to` is broadly supported you can specify both headers as shown:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

The deprecated HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`** directive instructs the user agent to report attempts to violate the Content Security Policy.
These violation reports consist of [JSON documents](#violation_report_syntax) sent via an HTTP `POST` request to the specified URI.

The directive has no effect in and of itself, but only gains meaning in combination with other directives.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Reporting directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}} element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: report-uri <uri>;
Content-Security-Policy: report-uri <uri> <uri>;
```

- \<uri>
  - : A URI indicating where the report must be sent.

### Violation report syntax

The report JSON object is sent via an HTTP `POST` operation with a {{HTTPHeader("Content-Type")}} of `application/csp-report`.

> [!NOTE] Violation reports should be considered attacker-controlled data.
> The content should be properly sanitized before storing or rendering.
> This is particularly true of the [script-sample](#script-sample) property, if supplied.

The report JSON object has a single top-level property, `"csp-report"`, which contains an object with the following properties:

- `blocked-uri`
  - : The URI of the resource that was blocked from loading by the Content Security Policy.
    If the blocked URI is from a different origin than the `document-uri`, then the blocked URI is truncated to contain just the scheme, host, and port.
- `disposition`
  - : Either `"enforce"` or `"report"` depending on whether the {{HTTPHeader("Content-Security-Policy-Report-Only")}} header or the `Content-Security-Policy` header is used.
- `document-uri`
  - : The URI of the document in which the violation occurred.
- `effective-directive`
  - : The directive whose enforcement caused the violation.
    Some browsers may provide different values, such as Chrome providing `style-src-elem`/`style-src-attr`, even when the enforced directive was `style-src`.
- `original-policy`
  - : The original policy as specified by the `Content-Security-Policy` HTTP header.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : The referrer of the document in which the violation occurred.
- `script-sample`

  - : The first 40 characters of the inline script, event handler, or style that caused the violation.
    Violations originating from external files are not included in the report.

    This is only applicable to [`script-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) and [`style-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) violations, when the corresponding `Content-Security-Policy` directive contains the [`'report-sample'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) keyword.

- `status-code`
  - : The HTTP status code of the resource on which the global object was instantiated.
- `violated-directive` {{deprecated_inline}}
  - : The directive whose enforcement caused the violation. The `violated-directive` is a historic name for the `effective-directive` field and contains the same value.

## Examples

### CSP violation report with Content-Security-Policy

Let's consider a page located at `http://example.com/signup.html`.
It uses the following policy, disallowing everything except stylesheets loaded from `cdn.example.com`.

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

The HTML of `signup.html` looks like this:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    Here be content.
  </body>
</html>
```

Can you spot the mistake? Stylesheets are allowed to be loaded only from `cdn.example.com`, yet the website tries to load one from its own origin (`http://example.com`).
A browser capable of enforcing CSP would send the following violation report as a `POST` request to `http://example.com/_/csp-reports` when the document is visited:

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

As you can see, the report includes the full path to the violating resource in `blocked-uri`.
This is not always the case.
For example, if `signup.html` attempted to load CSS from `http://anothercdn.example.com/stylesheet.css`, the browser would _not_ include the full path, only the origin,
(`http://anothercdn.example.com`) in order to prevent leaking sensitive information about cross-origin resources.
The CSP specification [gives an explanation](https://www.w3.org/TR/CSP/#security-violation-reports) of this behavior.

### CSP violation report with Content-Security-Policy-Report-Only

The `report-uri` directive can also be used with the {{httpheader("Content-Security-Policy-Report-Only")}} response header.
This header allows the browser to report but not block on violations when testing.

The HTTP header would be much the same.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

The report would be the same except for the disposition `"report"` and of course the `"original-policy"`:

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

### CSP violation logging

Given a server that sends responses with the following `Content-Security-Policy` header:

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` could for example run a PHP script like the following that logs the JSON detailing the violation and, if the violation is the first one added to the log file, sends an email to an administrator:

```php
<?php

// Start configure
$log_file = dirname(__FILE__) . '/csp-violations.log';
$log_file_size_limit = 1000000; // bytes - once exceeded no further entries are added
$email_address = 'admin@example.com';
$email_subject = 'Content-Security-Policy violation';
// End configuration

$current_domain = preg_replace('/www\./i', '', $_SERVER['SERVER_NAME']);
$email_subject = $email_subject . ' on ' . $current_domain;

http_response_code(204); // HTTP 204 No Content

$json_data = file_get_contents('php://input');

// We pretty print the JSON before adding it to the log file
if ($json_data = json_decode($json_data)) {
  $json_data = json_encode($json_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

  if (!file_exists($log_file)) {
    // Send an email
    $message = "The following Content-Security-Policy violation occurred on " .
      $current_domain . ":\n\n" .
      $json_data .
      "\n\nFurther CPS violations will be logged to the following log file, but no further email notifications will be sent until this log file is deleted:\n\n" .
      $log_file;
    mail($email_address, $email_subject, $message,
         'Content-Type: text/plain;charset=utf-8');
  } else if (filesize($log_file) > $log_file_size_limit) {
    exit(0);
  }

  file_put_contents($log_file, $json_data, FILE_APPEND | LOCK_EX);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- {{CSP("report-to")}}
