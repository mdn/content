---
title: console.profileEnd()
slug: Web/API/console/profileEnd
tags:
  - API
  - DOM
  - Debugging
  - Method
  - Non-standard
  - Reference
  - Web Development
  - profileEnd
  - web console
browser-compat: api.console.profileEnd
---
{{APIRef("Console API")}}{{Non-standard_header}}

> **Warning:** Calling this API immediately after console.profile() can cause it to not work. To
> work around this, call it in a setTimeout with at least 5ms delay. See
> {{bug(1240249)}}.

The **`console.profileEnd()`** method stops recording a profile previously started with
{{DOMxRef("console.profile()")}}.

You can optionally supply an argument to name the profile. Doing so enables you to stop
only that profile if you have multiple profiles being recorded.

- if `console.profileEnd()` is passed a profile name, and it matches the
  name of a profile being recorded, then that profile is stopped.
- if `console.profileEnd()` is passed a profile name and it does not match
  the name of a profile being recorded, no changes will be made.
- if `console.profileEnd()` is not passed a profile name, the most recently
  started profile is stopped.

{{AvailableInWorkers}}

## Syntax

```js
console.profileEnd(profileName);
```

## Parameters

- `profileName`
  - : The name to give the profile. This parameter is optional.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("console.profile()")}}
