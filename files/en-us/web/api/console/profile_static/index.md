---
title: "console: profile() static method"
short-title: profile()
slug: Web/API/console/profile_static
page-type: web-api-static-method
status:
  - non-standard
browser-compat: api.console.profile_static
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

The **`console.profile()`** static method starts recording a performance profile (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).

You can optionally supply an argument to name the profile and this then enables you to stop only that profile if multiple profiles being recorded. See {{domxref("console/profileEnd_static", "console.profileEnd()")}} to see how this argument is interpreted.

To stop recording call {{domxref("console/profileEnd_static", "console.profileEnd()")}}.

## Syntax

```js-nolint
console.profile(profileName)
```

### Parameters

- `profileName` {{Optional_Inline}}
  - : The name to give the profile.

### Return value

None ({{jsxref("undefined")}}).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/profileEnd_static", "console.profileEnd()")}}
