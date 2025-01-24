---
title: "CSPViolationReportBody: blockedURL property"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
page-type: web-api-instance-property
browser-compat: api.CSPViolationReportBody.blockedURL
---

{{APIRef("Reporting API")}}

The **`blockedURL`** read-only property of the {{domxref("CSPViolationReportBody")}} interface is a string value that represents the resource that was blocked because it violates a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

## Value

An string containing a value or URL that represents the resource that violated the policy.

If the value is not the URL of a resource, it must be one of the following strings:

- `inline`
  - : An inline resource.
    For example, an inline script that was used when [`'unsafe-inline'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline) was not specified in the CSP.
- `eval`
  - : An `eval()`.
    For example, `eval()` was used but [`'unsafe-eval'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) was not specified in the CSP.
- `wasm-eval`
  - : An Wasm evaluation.
    For example, `eval()` was used but [`'wasm-unsafe-eval'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#wasm-unsafe-eval) was not specified in the CSP.
- `trusted-types-policy`
  - : A resource that violated the [`trusted-types`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) CSP directive.
    For example, a {{domxref("TrustedTypePolicy")}} was created using {{domxref("TrustedTypePolicyFactory/createPolicy", "window.trustedTypes.createPolicy()")}} with a name that wasn't listed in the CSP `trusted-types` directive.
- `trusted-types-sink`
  - : A resource that violated the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) CSP directive.
    For example, the directive was set to `script` but the document did not use a {{domxref("TrustedTypePolicy")}} to sanitize data before passing it to a sink such as {{domxref("Element.innerHTML")}}.

## Examples

The following examples show HTML that would result in some of the `blockedURL` values outlined above.

The examples assume that you have a JavaScript file named `main.js` imported into your script from the same domain.
The script, which is shown below, creates a new {{domxref("ReportingObserver")}} to observe content violation reports of type `"csp-violation"`.
Each time the callback function is invoked, we log the `blockedURL` in the first entry of the reports array.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`blockedURL: ${reports[0].body.blockedURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Note that while there might be multiple reports in the returned array, for brevity we only log the blocked URL of the first report.

### blockedURL for an external resource

The HTML below sets a policy of `Content-Security-Policy: default-src 'self'`, which only allows resources from the same site to be loaded, and then attempts to load a script from the external site `https://apis.google.com`.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
    <script src="main.js"></script>
  </head>
  <body>
    <!-- This should generate a CSP violation -->
    <script src="https://apis.google.com/js/platform.js"></script>
  </body>
</html>
```

The result of logging the `blockedURL` would be:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL for unsafe-inline resources

The HTML below demonstrates the conditions that would result in a `blockedURL` of `inline`.
This sets a policy of `Content-Security-Policy: default-src 'self'`, which does not allow inline scripts to be executed, causing a violation because the page contains an inline script.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
    <script src="main.js"></script>
  </head>
  <body>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

The result of logging the `blockedURL` would be:

```plain
blockedURL: inline
```

### blockedURL for trusted-types-policy resources

The HTML below demonstrates the conditions that would result in a `blockedURL` of `trusted-types-policy`.
First it defines a policy that allows `'unsafe-inline'` scripts to be executed, so that we can create a {{domxref("TrustedTypePolicy")}} that will trigger a violation.
The policy also uses the `trusted-types` directive to specify that a {{domxref("TrustedTypePolicy")}} with the name `myPolicy` is allowed to be created.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' 'report-sample' 'unsafe-inline'; trusted-types myPolicy" />
    <script src="main.js"></script>
  </head>

  <body></body>

  <script>
    const policy = trustedTypes.createPolicy("somePolicy", {
      createHTML: (string) => {
        // Some (insufficient) sanitization code
        return string.replace(/</g, "&lt;");
      },
    });
  </script>
</html>
```

In the script a policy is created with the name `somePolicy`.

> [!NOTE]
> The particular policy we defined above is not a very good policy.
> The aim of using trusted types is not to enforce a _particular_ policy, but to require enforcement of some policy, and ensure that the sanitization code is in one place and easy to review.

Because this is not listed in the `trusted-types` directive it is a CSP violation, and we'd see the log output:

```plain
blockedURL: trusted-types-policy
```

If we changed the name of the allowed policy to `somePolicy`, the page would no longer be in violation.

### blockedURL for trusted-types-sink resources

The HTML below demonstrates the conditions that would result in a `blockedURL` of `trusted-types-sink`.
First it defines a policy that allows `'unsafe-inline'` scripts to be executed, and as in the previous example it use the `trusted-types` directive to specify that a {{domxref("TrustedTypePolicy")}} with the name `myPolicy` is allowed to be created.

In addition, it specifies the directive `require-trusted-types-for 'script'`, which enforces that sinks should only be passed content that has been sanitized using a trusted type.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' 'report-sample' 'unsafe-inline'; trusted-types 'myPolicy'; require-trusted-types-for 'script'" />
    <script src="main.js"></script>
  </head>
  <body>
    <input type="text" id="userInput" />
    <button onclick="updateContent()">Update Content</button>
    <div id="content"></div>
  </body>

  <script>
    function updateContent() {
      const userInput = document.getElementById("userInput").value;

      // Passing unsanitized content - a violation of the policy
      document.getElementById("content").innerHTML = userInput;
    }
  </script>
</html>
```

The `updateContent()` method passes unsanitized content to the element's `innerHTML` property, which will cause a CSP violation.
We'd see the log output:

```plain
blockedURL: trusted-types-sink
```

In order to avoid the violation we would need to update the script to define a trusted type policy, and use it to sanitize the input passed to the element:

```js
const policy = trustedTypes.createPolicy("myPolicy", {
  createHTML: (string) => {
    // Some (insufficient) sanitization code
    return string.replace(/</g, "&lt;");
  },
});

function updateContent() {
  const userInput = document.getElementById("userInput").value;
  const sanitizedInput = policy.createHTML(userInput);
  document.getElementById("content").innerHTML = sanitizedInput;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SecurityPolicyViolationEvent.blockedURI")}}
