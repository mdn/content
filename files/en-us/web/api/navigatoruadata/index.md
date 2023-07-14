---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigatorUAData
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

The **`NavigatorUAData`** interface of the {{domxref('User-Agent Client Hints API')}} returns information about the browser and operating system of a user.

An instance of this object is returned by calling {{domxref("Navigator.userAgentData")}}. Therefore, this interface has no constructor.

> **Note:** The terms _high entropy_ and _low entropy_ refer to the amount of information these values reveal about the browser. The values returned as properties are deemed low entropy, and unlikely to identify a user. The values returned by {{domxref("NavigatorUAData.getHighEntropyValues()")}} could potentially reveal more information. These values are therefore retrieved via a {{jsxref("Promise")}}, allowing time for the browser to request user permission, or make other checks.

## Instance properties

- {{domxref("NavigatorUAData.brands")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of brand information containing the browser name and version.
- {{domxref("NavigatorUAData.mobile")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if the user-agent is running on a mobile device.
- {{domxref("NavigatorUAData.platform")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the platform brand the user-agent is running on.

## Instance methods

- {{domxref("NavigatorUAData.getHighEntropyValues()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with a dictionary object containing the _high entropy_ values the user-agent returns.
- {{domxref("NavigatorUAData.toJSON()")}} {{Experimental_Inline}}
  - : A _serializer_ that returns a JSON representation of the _low entropy_ properties of the `NavigatorUAData` object.

## Examples

### Getting the brands

The following example prints the value of {{domxref("NavigatorUAData.brands")}} to the console.

```js
console.log(navigator.userAgentData.brands);
```

### Returning high entropy values

In the following value a number of hints are requested using the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method. When the promise resolves, this information is printed to the console.

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
  .then((ua) => {
    console.log(ua);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/)
