---
title: "Navigator: userAgent property"
short-title: userAgent
slug: Web/API/Navigator/userAgent
page-type: web-api-instance-property
browser-compat: api.Navigator.userAgent
---

{{ApiRef("HTML DOM")}}

The **`Navigator.userAgent`** read-only property returns the
user agent string for the current browser.

> [!NOTE]
> The specification asks browsers to provide as little information via this field as
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
  the HTTP header that gets sent and that is returned by `navigator.userAgent`.
  There might be other methods that utilize JavaScript code to identify the browser.
- Opera 6+ allows users to set the browser identification string via a menu.

## Value

A string specifying the complete user agent string the browser
provides both in {{Glossary("HTTP")}} headers and in response to this and other related
methods on the {{domxref("Navigator")}} object.

The user agent string is built on a formal structure which can be decomposed into
several pieces of info. Each of these pieces of info comes from other navigator
properties which are also settable by the user. For more information about the
form of the user agent string, see the {{HTTPHeader("User-agent")}} HTTP header.

## Examples

```js
alert(window.navigator.userAgent);
// alerts "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("User-Agent")}} HTTP header
