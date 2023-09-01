---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.NavigatorUAData
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

The User-Agent Client Hints API extends [Client Hints](/en-US/docs/Web/HTTP/Client_hints) to provide a way of exposing browser and platform information via User-Agent response and request headers, and a JavaScript API.

## Concepts and Usage

Parsing the User-Agent string has historically been the way to get information about the user's browser or device. A typical user agent string looks like the following example, identifying Chrome 92 on Windows:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User agent Client Hints aims to provide this information in a more privacy-preserving way by enforcing a model where the server requests a set of information. The browser decides what to return. This approach means that a user-agent could provide settings that allow a user to hide some of the information that could fingerprint them from such requests.

In order to decide what to return, the information accessed via this API is split into two groups—**low entropy** and **high entropy** hints. Low entropy hints are those that do not give away much information, the API makes these easily accessible with every request. High entropy hints have the potential to give away more information and therefore are gated in such a way that the browser can make a decision as to whether to provide them. This decision could potentially be based on user preferences, or behind a permission request.

### Use cases for User-Agent Client Hints

Potential use cases include:

- Providing custom-tailored polyfills to users on identifying that their browser lacked some web platform feature.
- Working around browser bugs.
- Recording browser analytics.
- Adapting content based on user-agent information.
  This includes serving different content to mobile devices, in particular devices identified as low-powered.
  It might also include adapting the design to tailor the interfaces to the user's OS, or providing links to OS-specific ones.
- Providing a notification when a user logs in from a different browser or device, as a security feature.
- Providing the correct binary executable, on a site offering a download.
- Collecting information about the browser and device to identify application errors.
- Blocking spammers, bots, and crawlers.

## Interfaces

- {{domxref("NavigatorUAData")}}
  - : Provides properties and methods to access data about the user's browser and operating system.

## Examples

### Getting the brands

The following example prints the value of {{domxref("NavigatorUAData.brands")}} to the console.

```js
console.log(navigator.userAgentData.brands);
```

### Returning high entropy values

In the following example a number of hints are requested using the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method. When the promise resolves, this information is printed to the console.

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
- [Migrate to User-Agent Client Hints](https://web.dev/migrate-to-ua-ch/)
