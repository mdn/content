---
title: NavigatorUAData.getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
tags:
  - API
  - Method
  - Reference
  - getHighEntropyValues
  - NavigatorUAData
browser-compat: api.NavigatorUAData.getHighEntropyValues
---
{{DefaultAPISidebar("")}}

The **`getHighEntropyValues()`** method of the {{domxref("NavigatorUAData")}} interface is a {{jsxref("Promise")}} that resolves with a dictionary object containing the _high entropy_ values the user-agent returns.

> **Note:** The terms _high entropy_ and _low entropy_ refer to the amount of information these values reveal about the browser. The values returned as properties are deemed low entropy, and unlikely to identify a user. The values returned by {{domxref("NavigatorUAData.getHighEntropyValues()")}} could potentially reveal more information. These values are therefore retrieved via a {{jsxref("Promise")}}, allowing time for the browser to request user permission, or make other checks.

## Syntax

```js
NavigatorUAData.getHighEntropyValues(hints);
```

### Parameters

- `hints`

  - : An array containing the hints to be returned, one or more of:

    - `"architecture"`
    - `"bitness"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"`

### Return value

An object containing some or all of the following values, based on the hints requested:

- `architecture`
  - : A {{domxref("DOMString","string")}} containing the platform architecture. For example, `"x86"`.
- `bitness`
  - : A {{domxref("DOMString","string")}} containing the architecture bitness. For example, `"64"`.
- `model`
  - : A {{domxref("DOMString","string")}} containing the device model. For example, `"Pixel 2XL"`.
- `platformVersion`
  - : A {{domxref("DOMString","string")}} containing the platform version. For example, `"10.0"`.
- `uaFullVersion`
  - : A {{domxref("DOMString","string")}} containing the full browser version. For example, `"91.0.4472.124"`.

### Exceptions

- A {{domxref("DOMException")}} `NotAllowedError`
  - : Thrown if the user-agent decides that one or more of the `hints` requested should not be returned.

## Examples

In the following example a number of hints are requested using the `getHighEntropyValues()` method. When the promise resolves, this information is printed to the console.

```js
navigator.userAgentData.getHighEntropyValues(
  ["architecture",
  "model",
  "platformVersion",
  "uaFullVersion"])
  .then(ua => { console.log(ua) });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
