---
title: console.profile()
slug: Web/API/console/profile
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Non-standard
  - Reference
  - Web Development
  - profile
  - web console
browser-compat: api.console.profile
---
{{APIRef("Console API")}}{{Non-standard_header}}

The **`console.profile()`** starts recording a performance profile (for example, the [Firefox performance tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).

You can optionally supply an argument to name the profile and this then enables you to
stop only that profile if multiple profiles being recorded. See
{{domxref("console.profileEnd()")}} to see how this argument is interpreted.

To stop recording call {{domxref("console.profileEnd()")}}.

{{AvailableInWorkers}}

## Syntax

```js
profile(profileName)
```

### Parameters

- `profileName`
  - : The name to give the profile. Optional.

### Return value

None ({{jsxref("undefined")}}).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console.profileEnd()")}}
