---
title: 'CSP: report-uri'
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
tags:
  - CSP
  - Directive
  - HTTP
  - Reference
  - Security
  - Deprecated
browser-compat: http.headers.Content-Security-Policy.report-uri
---
{{HTTPSidebar}}{{deprecated_header}}

The deprecated HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`report-uri`** directive instructs the user agent to report
attempts to violate the Content Security Policy. These violation reports consist of JSON
documents sent via an HTTP POST request to the specified URI.

> **Warning:** Though the {{CSP("report-to")}} directive is intended to replace the deprecated **`report-uri`** directive,
> {{CSP("report-to")}} isn't supported in most browsers yet.
> So for compatibility with current browsers
> while also adding forward compatibility when browsers get {{CSP("report-to")}} support,
> you can specify both **`report-uri`** and {{CSP("report-to")}}:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.com; report-to groupname
> ```
>
> In browsers that support {{CSP("report-to")}},
> the **`report-uri`** directive will be ignored.

The directive has no effect in and of itself, but only gains meaning in combination
with other directives.

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
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
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
  - : A URI where to POST the report to.

## Examples

See {{HTTPHeader("Content-Security-Policy-Report-Only")}} for more information and
examples.

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` could for example run a PHP something like
the following that logs the JSON detailing the violation and, if the violation is the
first one added to the log file, sends an email to an administrator:

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
