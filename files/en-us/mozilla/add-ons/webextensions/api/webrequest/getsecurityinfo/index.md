---
title: webRequest.getSecurityInfo()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo
page-type: webextension-api-function
browser-compat: webextensions.api.webRequest.getSecurityInfo
---

{{AddonSidebar()}}

Use this function to get detailed information about the [TLS](/en-US/docs/Glossary/TLS) connection associated with a particular request.

You pass this function the `requestId` for the request in question, and some optional extra parameters. It returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which will resolve to a {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} object.

You can only call this function from inside the {{WebExtAPIRef("webRequest.onHeadersReceived")}} listener. The `requestId` can be found in the `details` object which is passed into the listener.

You must also pass the "blocking" option to `webRequest.onHeadersReceived.addListener()`. So to use this API you must have the "webRequestBlocking" [API permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), as well as the normal permissions needed for using `webRequest` listeners (the "webRequest" permission and the [host permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the host).

## Syntax

```js-nolint
let gettingInfo = browser.webRequest.getSecurityInfo(
  requestId,       // string
  options          // object
)
```

### Parameters

- `requestId`
  - : `string`. ID of the request for which you want security info. You can get this from the `details` object that is passed into any `webRequest` event listeners.
- `options`

  - : `object`. An object which may contain any of the following properties, all optional:

    - `certificateChain` {{optional_inline}}
      - : `boolean`. If `true`, the {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} object returned will include the entire certificate chain up to and including the trust root. If `false`, it will include only the server certificate. Defaults to `false`.
    - `rawDER` {{optional_inline}}
      - : `boolean`. If true, every {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} in the {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo.certificates")}} property will contain a property `rawDER`. This contains the DER-encoded ASN.1 that comprises the certificate data.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves to a {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} object.

## Browser compatibility

{{Compat}}

## Examples

This example listens for all HTTPS requests to "mozilla.org" or its subdomains, and logs the subject name in the server certificate:

```js
async function logSubject(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      {},
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(securityInfo.certificates[0].subject);
    }
  } catch (error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(
  logSubject,
  { urls: ["https://*.mozilla.org/*"] },
  ["blocking"],
);
```

This example listens for all HTTPS requests to "mozilla.org" or its subdomains, and logs the name in the trusted root certificate:

```js
async function logRoot(details) {
  try {
    let securityInfo = await browser.webRequest.getSecurityInfo(
      details.requestId,
      { certificateChain: true },
    );
    console.log(details.url);
    if (securityInfo.state === "secure" || securityInfo.state === "weak") {
      console.log(
        securityInfo.certificates[securityInfo.certificates.length - 1].issuer,
      );
    }
  } catch (error) {
    console.error(error);
  }
}

browser.webRequest.onHeadersReceived.addListener(
  logRoot,
  { urls: ["https://*.mozilla.org/*"] },
  ["blocking"],
);
```

{{WebExtExamples}}
