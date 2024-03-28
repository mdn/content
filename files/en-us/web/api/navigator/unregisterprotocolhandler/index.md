---
title: "Navigator: unregisterProtocolHandler() method"
short-title: unregisterProtocolHandler()
slug: Web/API/Navigator/unregisterProtocolHandler
page-type: web-api-instance-method
browser-compat: api.Navigator.unregisterProtocolHandler
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

The **{{domxref("Navigator")}}** method **`unregisterProtocolHandler()`** removes a protocol handler for a given URL [scheme](#permitted_schemes).

This method is the inverse of **`registerProtocolHandler()`**.

## Syntax

```js-nolint
unregisterProtocolHandler(scheme, url)
```

### Parameters

- `scheme`
  - : A string containing the [permitted scheme](#permitted_schemes) in the protocol handler that will be unregistered.
    For example, you can unregister the handler for SMS text message links by passing the `"sms"` scheme.
- `url`
  - : A string containing the URL of the handler.
    **This URL should match the one that was used to register the handler (e.g. it must include `%s`)**.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The user agent blocked unregistration.
    This might happen if:
    - The scheme (protocol) is invalid, such as a scheme the browser handles itself (`https:`, `about:`, etc.)
    - The handler URL's {{Glossary("origin")}} does not match the origin of the page calling this API.
    - The browser requires that this function is called from a secure context.
    - The browser requires that the handler's URL be over HTTPS.
- `SyntaxError` {{domxref("DOMException")}}
  - : The `%s` placeholder is missing from the handler URL.

## Permitted schemes

For security reasons, `unregisterProtocolHandler()` restricts which schemes can be unregistered.

A **custom scheme** may be unregistered as long as:

- The custom scheme's name begins with `web+`
- The custom scheme's name includes at least 1 letter after the `web+` prefix
- The custom scheme has only lowercase ASCII letters in its name.

For example, `web+burger`, as shown in the [Example](#examples) below.

Otherwise, the scheme must be one of the following:

- `bitcoin`
- `ftp`
- `ftps`
- `geo`
- `im`
- `irc`
- `ircs`
- `magnet`
- `mailto`
- `matrix`
- `mms`
- `news`
- `nntp`
- `openpgp4fpr`
- `sftp`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tel`
- `urn`
- `webcal`
- `wtai`
- `xmpp`

## Examples

If your site is `burgers.example.com`, and you have a `web+burger:` scheme, you can unregister the handler for it like so:

```js
navigator.unregisterProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
);
```

This script must be run from the same origin as the handler URL (so any page at `https://burgers.example.com`), and the handler URL must be `http` or `https`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
