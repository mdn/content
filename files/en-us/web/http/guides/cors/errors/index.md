---
title: CORS errors
slug: Web/HTTP/Guides/CORS/Errors
page-type: landing-page
sidebar: http
---

[Cross-Origin Resource Sharing](/en-US/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS")}}) is a standard that allows a server to relax the [same-origin policy](/en-US/docs/Web/Security/Defenses/Same-origin_policy). This is used to explicitly allow some cross-origin requests while rejecting others. For example, if a site offers an embeddable service, it may be necessary to relax certain restrictions. Setting up such a CORS configuration isn't necessarily easy and may present some challenges. In these pages, we'll look into some common CORS error messages and how to resolve them.

If the CORS configuration isn't set up correctly, the browser console will present an error like `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` indicating that the request was blocked due to violating the CORS security rules. This might not necessarily be a set-up mistake, though. It's possible that the request is in fact intentionally being disallowed by the user's web application and remote external service. However, if the endpoint is meant to be available, some debugging is needed to succeed.

## Identifying a CORS issue

To understand the underlying issue with the CORS configuration, you need to find out which request is at fault and why. These steps may help you do so:

1. Navigate to the website or web app in question and open the [Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Now try to reproduce the failing transaction and check the [console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) if you are seeing a CORS violation error message. It will probably look like this:

![Firefox console showing CORS error](cors-error2.png)

The text of the error message will be something similar to the following:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> For security reasons, specifics about what went wrong with a CORS request _are not available to JavaScript code_. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.

## Client-side considerations

Most CORS errors can only be resolved on the server, because the server controls whether cross-origin access is allowed. However, there are some things you can do on the client side:

### Avoid triggering a preflight

Browsers send a [preflight request](/en-US/docs/Web/HTTP/Guides/CORS#preflighted_requests) before the actual request when certain conditions are met (custom headers, methods other than `GET`/`HEAD`/`POST`, or non-simple content types). If the server does not handle preflight requests, you can restructure your request to qualify as a [simple request](/en-US/docs/Web/HTTP/Guides/CORS#simple_requests):

- Use only `GET`, `HEAD`, or `POST` methods.
- Set only [CORS-safelisted request headers](/en-US/docs/Glossary/CORS-safelisted_request_header) (such as {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}}, or {{HTTPHeader("Content-Type")}}).
- Use only `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain` for {{HTTPHeader("Content-Type")}}.

Simple requests bypass the preflight step entirely, which avoids a class of CORS errors related to preflight handling.

### Use `no-cors` mode for opaque responses

If you do not need to read the response body or headers - for example, when sending analytics beacons or loading resources into a cache via a service worker - you can set the {{domxref("Request/mode", "mode")}} to `"no-cors"` in a {{domxref("Window/fetch", "fetch()")}} call:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

The response will be [opaque](/en-US/docs/Web/API/Response/type): its status is `0`, its headers are empty, and its body is not readable by JavaScript. This is by design - `no-cors` disables the CORS check, but in exchange you lose all access to the response content.

### Use a proxy server

If you do not control the remote server and it does not set CORS headers, you can route requests through a server you do control. Your server fetches the resource on your behalf and returns it with appropriate CORS headers. This approach adds latency and introduces a dependency on your proxy, but it works when other options are unavailable.

## CORS error messages

Firefox's console displays messages in its console when requests fail due to CORS. Part of the error text is a "reason" message that provides added insight into what went wrong. The reason messages are listed below; click the message to open an article explaining the error in more detail and offering possible solutions.

- [Reason: CORS disabled](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Reason: CORS request did not succeed](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Reason: CORS header 'Origin' cannot be added](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Reason: CORS request external redirect not allowed](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Reason: CORS request not http](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Reason: CORS header 'Access-Control-Allow-Origin' missing](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '\*'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials)
- [Reason: CORS preflight channel did not succeed](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

Most CORS errors can only be resolved on the server, because the server controls whether cross-origin access is allowed. However, there are some things you can do on the client side:

### Avoid triggering a preflight

Browsers send a [preflight request](/en-US/docs/Web/HTTP/Guides/CORS#preflighted_requests) before the actual request when certain conditions are met (custom headers, methods other than `GET`/`HEAD`/`POST`, or non-simple content types). If the server does not handle preflight requests, you can restructure your request to qualify as a [simple request](/en-US/docs/Web/HTTP/Guides/CORS#simple_requests):

- Use only `GET`, `HEAD`, or `POST` methods.
- Set only [CORS-safelisted request headers](/en-US/docs/Glossary/CORS-safelisted_request_header) (such as {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}}, or {{HTTPHeader("Content-Type")}}).
- Use only `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain` for {{HTTPHeader("Content-Type")}}.

Simple requests bypass the preflight step entirely, which avoids a class of CORS errors related to preflight handling.

### Use `no-cors` mode for opaque responses

If you do not need to read the response body or headers — for example, when sending analytics beacons or loading resources into a cache via a service worker — you can set the {{domxref("Request/mode", "mode")}} to `"no-cors"` in a {{domxref("Window/fetch", "fetch()")}} call:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

The response will be [opaque](/en-US/docs/Web/API/Response/type): its status is `0`, its headers are empty, and its body is not readable by JavaScript. This is by design — `no-cors` disables the CORS check, but in exchange you lose all access to the response content.

### Use a proxy server

If you do not control the remote server and it does not set CORS headers, you can route requests through a server you do control. Your server fetches the resource on your behalf and returns it with appropriate CORS headers. This approach adds latency and introduces a dependency on your proxy, but it works when other options are unavailable.

## See also

- Glossary: {{Glossary("CORS")}}
- [CORS introduction](/en-US/docs/Web/HTTP/Guides/CORS)
- [Server-side CORS settings](/en-US/docs/Web/HTTP/Guides/CORS)
- [CORS enabled image](/en-US/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS settings attributes](/en-US/docs/Web/HTML/Reference/Attributes/crossorigin)
