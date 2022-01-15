---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
tags:
  - Gecko
  - HAProxy
  - HTTP
  - Response Header
  - Security
  - nginx
browser-compat: http.headers.X-Frame-Options
---
{{HTTPSidebar}}

The **`X-Frame-Options`** [HTTP](/en-US/docs/Web/HTTP) response header can be used to indicate whether or not a browser should be allowed to render a page in a {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} or {{HTMLElement("object")}}. Sites can use this to avoid [click-jacking](/en-US/docs/Web/Security/Types_of_attacks#click-jacking) attacks, by ensuring that their content is not embedded into other sites.

The added security is provided only if the user accessing the document is using a browser that supports `X-Frame-Options`.

> **Note:** The {{HTTPHeader("Content-Security-Policy")}} HTTP header has a {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} directive which [obsoletes](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options) this header for supporting browsers.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

There are two possible directives for `X-Frame-Options`:

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Directives

If you specify `DENY`, not only will the browser attempt to load the page in a frame fail when loaded from other sites, attempts to do so will fail when loaded from the same site. On the other hand, if you specify `SAMEORIGIN`, you can still use the page in a frame as long as the site including it in a frame is the same as the one serving the page.

- `DENY`
  - : The page cannot be displayed in a frame, regardless of the site attempting to do so.
- `SAMEORIGIN`
  - : The page can only be displayed in a frame on the same origin as the page itself. The spec leaves it up to browser vendors to decide whether this option applies to the top level, the parent, or the whole chain, although it is argued that the option is not very useful unless all ancestors are also in the same origin (see {{bug(725490)}}). Also see {{anch("Browser compatibility")}} for support details.
- `ALLOW-FROM uri` {{deprecated_inline}}
  - : This is an obsolete directive that no longer works in modern browsers. Don't use it. In supporting legacy browsers, a page can be displayed in a frame only on the specified origin _uri_. Note that in the legacy Firefox implementation this still suffered from the same problem as `SAMEORIGIN` did — it doesn't check the frame ancestors to see if they are in the same origin. The {{HTTPHeader("Content-Security-Policy")}} HTTP header has a {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} directive which you can use instead.

## Examples

> **Note:** Setting X-Frame-Options inside the {{HTMLElement("meta")}} element is useless! For instance, `<meta http-equiv="X-Frame-Options" content="deny">` has no effect. Do not use it! `X-Frame-Options` works only by setting through the HTTP header, as in the examples below.

### Configuring Apache

To configure Apache to send the `X-Frame-Options` header for all pages, add this to your site's configuration:

```
Header always set X-Frame-Options "SAMEORIGIN"
```

To configure Apache to set the `X-Frame-Options` DENY, add this to your site's configuration:

```
Header set X-Frame-Options "DENY"
```

### Configuring Nginx

To configure Nginx to send the `X-Frame-Options` header, add this either to your http, server or location configuration:

```
add_header X-Frame-Options SAMEORIGIN always;
```

### Configuring IIS

To configure IIS to send the `X-Frame-Options` header, add this to your site's `Web.config` file:

```html
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

Or see this [Microsoft support article on setting this configuration using the IIS Manager](https://support.office.com/en-us/article/Mitigating-framesniffing-with-the-X-Frame-Options-header-1911411b-b51e-49fd-9441-e8301dcdcd79) user interface.

### Configuring HAProxy

To configure HAProxy to send the `X-Frame-Options` header, add this to your front-end, listen, or backend configuration:

```
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternatively, in newer versions:

```
http-response set-header X-Frame-Options SAMEORIGIN
```

### Configuring Express

To configure Express to send the `X-Frame-Options` header, you can use [helmet](https://helmetjs.github.io/) which uses [frameguard](https://helmetjs.github.io/docs/frameguard/) to set the header. Add this to your server configuration:

```js
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
```

Alternatively, you can use frameguard directly:

```js
const frameguard = require('frameguard')
app.use(frameguard({ action: 'SAMEORIGIN' }))
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}} directive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [HTTP Header Field X-Frame-Options - RFC 7034](https://datatracker.ietf.org/doc/html/rfc7034)
- [ClickJacking Defenses - IEBlog](https://docs.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://docs.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
