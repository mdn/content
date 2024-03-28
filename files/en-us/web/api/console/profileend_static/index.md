---
title: "console: profileEnd() static method"
short-title: profileEnd()
slug: Web/API/console/profileend_static
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.console.profileEnd_static
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

The **`console.profileEnd()`** static method stops recording a profile previously started with {{domxref("console/profile_static", "console.profile()")}}.

You can optionally supply an argument to name the profile. Doing so enables you to stop only that profile if you have multiple profiles being recorded.

- If `console.profileEnd()` is passed a profile name, and it matches the name of a profile being recorded, then that profile is stopped.
- If `console.profileEnd()` is passed a profile name and it does not match the name of a profile being recorded, no changes will be made.
- If `console.profileEnd()` is not passed a profile name, the most recently started profile is stopped.

## Syntax

```js-nolint
profileEnd(profileName)
```

### Parameters

- `profileName` {{Optional_Inline}}
  - : The name to give the profile.

### Return value

None ({{jsxref("undefined")}}).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("console/profile_static", "console.profile()")}}
