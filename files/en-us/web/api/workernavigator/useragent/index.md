---
title: WorkerNavigator.userAgent
slug: Web/API/WorkerNavigator/userAgent
page-type: web-api-instance-property
tags:
  - API
  - WorkerNavigator
  - Property
  - Read-only
  - Reference
browser-compat: api.WorkerNavigator.userAgent
---
{{ApiRef("HTML DOM")}}

The **`WorkerNavigator.userAgent`** read-only property returns the
user agent string for the current browser.

> **Note:** The specification asks browsers to provide as little information via this field as
> possible. Never assume that the value of this property will stay the same in future
> versions of the same browser. Try not to use it at all, or only for current and past
> versions of a browser. New browsers may start using the same UA, or part of it, as an
> older browser: you really have no guarantee that the browser agent is indeed the one
> advertised by this property.
>
> Also keep in mind that users of a browser can change the value of this field if they
> want (UA spoofing).

Browser identification based on detecting the user agent string is
**unreliable** and **is not recommended**, as the user agent
string is user configurable. For example:

- In Firefox, you can change the preference `general.useragent.override` in
  `about:config`. Some Firefox extensions do that; however, this only changes
  the HTTP header that gets sent, and doesn't affect browser detection performed by
  JavaScript code.
- Opera 6+ allows users to set the browser identification string via a menu.
- Microsoft Internet Explorer uses the Windows registry.
- Safari and iCab allow users to change the browser user agent string to predefined
  Internet Explorer or Netscape strings via a menu.

## Value

A string specifying the complete user agent string the browser
provides both in {{Glossary("HTTP")}} headers and in response to this and other related
methods on the {{domxref("WorkerNavigator")}} object.

The user agent string is built on a formal structure which can be decomposed into
several pieces of info. Each of these pieces of info comes from other navigator
properties which are also settable by the user. Gecko-based browsers comply with the
following general structure:

```
userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
```

## Examples

```js
alert(navigator.userAgent)
// alerts "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("User-Agent")}} HTTP header
