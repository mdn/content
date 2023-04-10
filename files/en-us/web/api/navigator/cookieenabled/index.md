---
title: "Navigator: cookieEnabled property"
short-title: cookieEnabled
slug: Web/API/Navigator/cookieEnabled
page-type: web-api-instance-property
browser-compat: api.Navigator.cookieEnabled
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` returns a Boolean value that indicates whether cookies are enabled or not.

The property is read-only.

## Value

A boolean.

> **Note:** When the browser is configured to block third-party cookies, and `navigator.cookieEnabled` is invoked inside a third-party iframe, it returns `true` in Safari, Edge Spartan and IE (while trying to set a cookie in such scenario would fail). It returns `false` in Firefox and Chromium-based browsers.

> **Note:** Web browsers may prevent writing certain cookies in certain scenarios. For example, Chrome-based browsers, as well as some experimental version of Firefox, does not allow creating cookies with [`SameSite=None`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) attribute, unless they are created over HTTPS and with `Secure` attribute.

## Examples

```js
if (!navigator.cookieEnabled) {
  // The browser does not support or is blocking cookies from being set.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
