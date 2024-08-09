---
title: "Navigator: registerProtocolHandler() method"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
page-type: web-api-instance-method
browser-compat: api.Navigator.registerProtocolHandler
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

The **{{domxref("Navigator")}}** method **`registerProtocolHandler()`** lets websites register their ability to open or handle particular URL schemes (also known as protocols).

For example, this API lets webmail sites open `mailto:` URLs, or VoIP sites open `tel:` URLs.

To register a protocol handler, a website calls `registerProtocolHandler()`, passing in the protocol to register and a template URL.

When the user activates a link that uses the registered protocol, the browser will insert the [`href`](/en-US/docs/Web/HTML/Element/a#href) from the activated link into the URL template supplied during handler registration, and navigate the current page to the resulting URL.

The browser may ask the user to confirm that they want the page to be allowed to handle the protocol, either when the protocol is registered or when the user activates the link.

## Syntax

```js-nolint
registerProtocolHandler(scheme, url)
```

### Parameters

- `scheme`

  - : A string containing the scheme for the protocol that the site wishes to handle.

    This may be a custom scheme, in which case the scheme's name:

    - Begins with `web+`
    - Contains at least one letter after the `web+` prefix
    - Contains only lowercase {{Glossary("ASCII")}} letters.

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

- `url`

  - : A string containing the URL of the handler.
    This URL must include `%s`, as a placeholder that will be replaced with the [escaped](/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) URL to be handled.

    The handler URL must use the `https` scheme, and must be of the same {{glossary("origin")}} as the webpage that is attempting to register the handler.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}

  - : The user agent blocked the registration.
    This might happen if:

    - The registered scheme (protocol) is invalid, such as a scheme the browser handles itself (`https:`, `about:`, etc.)
    - The handler URL's {{Glossary("origin")}} does not match the origin of the page calling this API.
    - The handler's URL's scheme is not `https`.

- `SyntaxError` {{domxref("DOMException")}}
  - : The `%s` placeholder is missing from the handler URL.

## Examples

In this example, a page served from `https://burgers.example.org/` contains a link like this:

```html
<a href="web+burger:cheeseburger">cheeseburger</a>
```

It registers the `web+burger` with code like this:

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.org/?burger=%s",
);
```

If the registration was successful, then if the user activates the `web+burger` link, the browser will navigate to `https://burgers.example.org/?burger=web+burger:cheeseburger`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
