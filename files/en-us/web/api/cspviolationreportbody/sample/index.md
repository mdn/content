---
title: "CSPViolationReportBody: sample property"
short-title: sample
slug: Web/API/CSPViolationReportBody/sample
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.sample
---

{{APIRef("Reporting API")}}

The **`sample`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string that contains a part of the resource that violated the [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

This sample is usually the first 40 characters of the inline script, event handler, or style that violated a CSP restriction.
If not populated it is the empty string `""`.

Note that this is only populated when attempting to load _inline_ scripts, event handlers, or styles that violate CSP [`script-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) and [`style-src*`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) rules — external resources that violate the CSP will not generate a sample.
In addition, a sample is only included if the `Content-Security-Policy` directive that was violated also contains the [`'report-sample'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) keyword.

> [!NOTE] Violation reports should be considered attacker-controlled data.
> The content of this field _in particular_ should be sanitized before storing or rendering.

## Value

A string containing a sample of the inline resource that violated the CSP, usually the first 40 characters, or the empty string.

## Examples

### CSP inline script violation

This example triggers a CSP violation using an inline script, and reports the violation using a {{domxref("ReportingObserver")}}.
We also add `'report-sample'` to the CSP in order to populate a `sample` in the body.

#### HTML

The HTML file below uses the [`<meta>`](/en-US/docs/Web/HTML/Element/meta) element to set the {{httpheader('Content-Security-Policy')}} `script-src-elem` to `self`, which allows scripts to be loaded from the same domain, but does not allow inline scripts to be executed.
We include `'report-sample'` in the directive so that a sample is generated.
The document also includes an inline script, which should trigger a CSP violation.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src-elem 'self' 'report-sample'" />
    <script src="main.js"></script>
    <title>CSP: Violation due to inline script</title>
  </head>
  <body>
    <h1>CSP: Violation due to inline script</h1>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

#### JavaScript (main.js)

The document above also loads the external script `main.js`, which is shown below.
Because this is loaded from the same domain as the HTML, it is not blocked by the CSP.

The script creates a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function is invoked, we get the body of the first entry of the reports array, and use it to log the violation `sample` to the console.

```js
// main.js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`sample: ${reports[0].body.sample}`);
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

The console output for the above code is:

```plain
sample: const int = 4;
```

In this case the sample contains the entire content of the inline script.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.sample")}}
