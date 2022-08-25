---
title: NavigatorUAData.getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getHighEntropyValues
  - NavigatorUAData
  - Experimental
browser-compat: api.NavigatorUAData.getHighEntropyValues
---
{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

The **`getHighEntropyValues()`** method of the {{domxref("NavigatorUAData")}} interface is a {{jsxref("Promise")}} that resolves with a dictionary object containing the _high entropy_ values the user-agent returns.

> **Note:** The terms _high entropy_ and _low entropy_ refer to the amount of information these values reveal about the browser.
> The values returned as properties are deemed low entropy, and unlikely to identify a user.
> The values returned by {{domxref("NavigatorUAData.getHighEntropyValues()")}} could potentially reveal more information.
> These values are therefore retrieved via a {{jsxref("Promise")}}, allowing time for the browser to request user permission, or make other checks.

## Syntax

```js
getHighEntropyValues(hints)
```

### Parameters

- `hints`

  - : An array containing the hints to be returned, one or more of:

    - `"architecture"`
    - `"bitness"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"fullVersionList"`

### Return value

A {{jsxref("Promise")}} that resolves to an object containing some or all of the following values (based on the hints requested):

- `brands`
  - : Returns an array of objects containing `brand` and `version` specifying the browser brand and its version (the same information as provided by {{domxref("NavigatorUAData.brands")}}).
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA")}} header (a [low-entropy client hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `mobile`
  - : Returns `true` if the user agent is running on a mobile device (the same information as provided by {{domxref("NavigatorUAData.mobile")}}).
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Mobile")}} header (a [low-entropy client hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `platform`
  - : Returns a string describing the platform the user agent is running on, like `"Windows"` (the same information as provided by {{domxref("NavigatorUAData.platform")}}).
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Platform")}} header (a [low-entropy client hint](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `architecture`
  - : A string containing the platform architecture. For example, `"x86"`.
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Arch")}} header after the server explicitly requests it in the {{HTTPHeader("Accept-CH")}} header.
- `bitness`
  - : A string containing the architecture bitness. For example, `"32"` or `"64"`.
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Bitness")}} header if the server explicitly requests it in the {{HTTPHeader("Accept-CH")}} header.
- `model`
  - : A string containing the model of mobile device. For example, `"Pixel 2XL"`. If device is not a mobile device or if device model is not known, `model` will be `""`.
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Model")}} header if the server explicitly requests it in the {{HTTPHeader("Accept-CH")}} header.
- `platformVersion`
  - : A string containing the platform version. Platform name itself is always available as low-entropy hint `platform`. For example, `"10.0"`.
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Platform-Version")}} header if the server explicitly requests it in the {{HTTPHeader("Accept-CH")}} header.
- `uaFullVersion` {{Deprecated_Inline}}
  - : A string containing the full browser version. For example, `"103.0.5060.134"`. Deprecated in favor of `fullVersionList`.
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Full-Version")}} header if the server explicitly requests it in the {{HTTPHeader("Accept-CH")}} header.
- `fullVersionList`
  - : An array of objects with properties `"brand"` and `"version"` representing the browser name and full version respectively.
      For example, `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
      Please note that one object may intentionally contain invalid information to prevent sites from relying on a fixed list of browsers.
      Note that this information can be sent to a server in the {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} header if the server explicitly requests it in the {{HTTPHeader("Accept-CH")}} header.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the user-agent decides that one or more of the `hints` requested should not be returned.

## Examples

In the following example a number of hints are requested using the `getHighEntropyValues()` method.
When the promise resolves, this information is printed to the console.

```js
navigator.userAgentData.getHighEntropyValues(
  ["architecture",
  "model",
  "platformVersion",
  "fullVersionList"])
  .then((values) => console.log(values));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- These values are also available as via HTTP request headers:
  - [Low-entropy client hints](/en-US/docs/Web/HTTP/Client_hints#low_entropy_hints)) are sent automatically:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Servers can request to receive high-entropy client hints on subsequent requests, using the {{HTTPHeader("Accept-CH")}} header:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
