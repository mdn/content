---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Method
  - Navigator
  - Reference
  - Web-Based Protocol Handlers
  - registerProtocolHandler
browser-compat: api.Navigator.registerProtocolHandler
---
{{APIRef("HTML DOM")}}{{securecontext_header}}

The **{{domxref("Navigator")}}** method **`registerProtocolHandler()`** lets websites register their ability to open or handle particular URL schemes (aka protocols).

For example, this API lets webmail sites open `mailto:` URLs, or VoIP sites open `tel:` URLs.

## Syntax

```js
registerProtocolHandler(scheme, url)
registerProtocolHandler(scheme, url, title)
```

> **Note:** The version with the deprecated `title` argument is recommended for compatibility reasons (see parameter information below).

### Parameters

- `scheme`

  - : A string containing the [permitted scheme](#permitted_schemes) for the protocol that the site wishes to handle.
    For example, you can register to handle SMS text message links by passing the `"sms"` scheme.

- `url`

  - : A string containing the URL of the handler.
    **This URL must include `%s`**, as a placeholder that will be replaced with the [escaped](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL to be handled.

    > **Note:** The handler URL must use the `https` scheme. Older browsers also supported `http`.

- `title` {{deprecated_inline}}

  - : A human-readable title string for the handler.
    **This will be displayed to the user**, such as prompting "Allow this site to handle \[scheme] links?" or listing registered handlers in the browser's settings.

    > **Note:** The title has been removed from the spec due to spoofing concerns.
    > The `title` should still be set because some browsers **still require it** (see the [compatibility table below](#browser_compatibility)).
    > Browsers that support the updated spec most likely will be accept but ignore the title.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The user agent blocked the registration.
    This might happen if:

    - The registered scheme (protocol) is invalid, such as a scheme the browser handles itself (`https:`, `about:`, etc.)
    - The handler URL's {{Glossary("origin")}} does not match the origin of the page calling this API.
    - The browser requires that this function is called from a secure context.
    - The browser requires that the handler's URL be over HTTPS.

- `SyntaxError` {{domxref("DOMException")}}
  - : The `%s` placeholder is missing from the handler URL.

## Permitted schemes

For security reasons, `registerProtocolHandler()` restricts which schemes can be registered.

A **custom scheme** may be registered as long as:

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

<!-- This must match: https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme -->

## Examples

If your site is `burgers.example.com`, you can register a protocol handler for it to handle `web+burger:` links, like so:

```js
navigator.registerProtocolHandler("web+burger",
                                  "https://burgers.example.com/?burger=%s",
                                  "Burger handler"); // last title arg included for compatibility
```

This creates a handler that lets `web+burger:` links send the user to your site, inserting the accessed burger URL into the `%s` placeholder.

This script must be run from the same origin as the handler URL (so any page at `https://burgers.example.com`), and the handler URL must be `http` or `https`.

The user will be notified that your code asked to register the protocol handler, so that they can decide whether or not to allow it. See the screenshot below for an example on `google.co.uk`:

![A browser notification reads "Add Burger handler (www.google.co.uk) as an application for burger links?", and offers an "Add Application" button and a close to ignore the handler request.](protocolregister.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web-based protocol handlers](/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers)
- [RegisterProtocolHandler Enhancing the Federated Web](https://blog.mozilla.org/webdev/2010/07/26/registerprotocolhandler-enhancing-the-federated-web/) (Mozilla Webdev)
