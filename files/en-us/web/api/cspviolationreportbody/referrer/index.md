---
title: "CSPViolationReportBody: referrer property"
short-title: referrer
slug: Web/API/CSPViolationReportBody/referrer
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.referrer
---

{{APIRef("Reporting API")}}

The **`referrer`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that represents the URL of the referring page of the resource who's [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) was violated.

The referrer is the page that caused the page with the CSP violation to be loaded. For example, if we followed a link to a page with a CSP violation, the `referrer` is the page that we navigated from.

## Value

A string representing the URL for the referrer of the page with the CSP violation, or null.

Note that if the referrer is an HTTP(S) URL then any username, password or fragment is removed.
If the URL scheme is not `http:` or `https:` then just the scheme is returned.

## Examples

### CSP inline script violation showing referrer

This example triggers a CSP violation using an inline script, and reports the violation using a {{domxref("ReportingObserver")}}.
We navigate to the page from another page and log the `referrer`, `documentURL`, and `blockedURL`.

#### HTML

First we define our referrer page `/bounce/index.html`.
This page just contains a link to another page `../report_sample/index.html`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <ul>
      <li><a href="../report_sample/">report sample</a></li>
    </ul>
  </body>
</html>
```

The `../report_sample/index.html` HTML file is defined below.
This uses the [`<meta>`](/en-US/docs/Web/HTML/Element/meta) element to set the {{httpheader('Content-Security-Policy')}} `script-src-elem` to `self`, which allows scripts to be loaded from the same domain, but does not allow inline scripts to be executed.
The document also includes an inline script, which will trigger a CSP violation.

```html
<!doctype html>
<!-- /report_sample/index.html -->
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src-elem 'self' 'report-sample'" />
    <script src="main.js"></script>
  </head>
  <body>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

The report sample above also loads the external script `main.js`, which is shown below.
Because this is loaded from the same domain as the HTML, it is not blocked by the CSP.

The script creates a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function is invoked, we get the body of the first entry of the reports array, and use it to log the violation `documentURL`, `referrer`, and `blockedURL` to the console.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`documentURL: ${reports[0].body.referrer}`);
    console.log(`referrer: ${reports[0].body.referrer}`);
    console.log(`blockedURL: ${reports[0].body.blockedURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the values of the first element.

#### Results

The console output for the above code would look a bit like that below (the site will depend on how the pages are served):

```plain
documentURL: http://127.0.0.1:9999/report_sample/
referrer: http://127.0.0.1:9999/bounce/
blockedURL: inline
```

Note that `referrer` is the page we navigated from, `documentURL` is the page with the CSP violation, and `blockedURL` is not an URL at all in this case, but an indication that the violation was caused by an unsafe inline script.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.referrer")}}
- {{httpheader("Referer")}}
