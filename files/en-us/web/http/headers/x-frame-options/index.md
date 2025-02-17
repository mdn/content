---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
page-type: http-header
browser-compat: http.headers.X-Frame-Options
---

{{HTTPSidebar}}

> [!NOTE]
> For more comprehensive options than offered by this header, see the {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} directive in a {{HTTPHeader("Content-Security-Policy")}} header.

The HTTP **`X-Frame-Options`** {{Glossary("response header")}} can be used to indicate whether a browser should be allowed to render a page in a {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} or {{HTMLElement("object")}}. Sites can use this to avoid [clickjacking](/en-US/docs/Web/Security/Types_of_attacks#clickjacking) attacks, by ensuring that their content is not embedded into other sites.

The added security is provided only if the user accessing the document is using a browser that supports `X-Frame-Options`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

There are two possible directives for `X-Frame-Options`:

```http
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
```

### Directives

If you specify `DENY`, not only will the browser attempt to load the page in a frame fail when loaded from other sites, attempts to do so will fail when loaded from the same site. On the other hand, if you specify `SAMEORIGIN`, you can still use the page in a frame as long as the site including it in a frame is the same as the one serving the page.

- `DENY`
  - : The page cannot be displayed in a frame, regardless of the site attempting to do so.
- `SAMEORIGIN`
  - : The page can only be displayed if all ancestor frames are same origin to the page itself.
- `ALLOW-FROM origin` {{deprecated_inline}}
  - : This is an obsolete directive. Modern browsers that encounter response headers with this directive will ignore the header completely. The {{HTTPHeader("Content-Security-Policy")}} HTTP header has a {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} directive which you should use instead.

## Examples

> [!WARNING]
> Setting `X-Frame-Options` inside the {{HTMLElement("meta")}} element (e.g., `<meta http-equiv="X-Frame-Options" content="deny">`) has no effect. `X-Frame-Options` is only enforced via HTTP headers, as shown in the examples below.

### Configuring Apache

To configure Apache to send the `X-Frame-Options` header for all pages, add this to your site's configuration:

```apacheconf
Header always set X-Frame-Options "SAMEORIGIN"
```

To configure Apache to set `X-Frame-Options` to `DENY`, add this to your site's configuration:

```apacheconf
Header set X-Frame-Options "DENY"
```

### Configuring Nginx

To configure Nginx to send the `X-Frame-Options` header, add this either to your http, server or location configuration:

```nginx
add_header X-Frame-Options SAMEORIGIN always;
```

You can set the `X-Frame-Options` header to `DENY` using:

```nginx
add_header X-Frame-Options DENY always;
```

### Configuring IIS

To configure IIS to send the `X-Frame-Options` header, add this to your site's `Web.config` file:

```xml
<system.webServer>
  …
  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>
  …
</system.webServer>
```

For more information, see the [Microsoft support article on setting this configuration using the IIS Manager](https://support.microsoft.com/en-US/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79) user interface.

### Configuring HAProxy

To configure HAProxy to send the `X-Frame-Options` header, add this to your front-end, listen, or backend configuration:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

Alternatively, in newer versions:

```plain
http-response set-header X-Frame-Options SAMEORIGIN
```

### Configuring Express

To set `X-Frame-Options` to `SAMEORIGIN` using [Helmet](https://helmetjs.github.io/) add the following to your server configuration:

```js
const helmet = require("helmet");
const app = express();
app.use(
  helmet({
    xFrameOptions: { action: "sameorigin" },
  }),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}} directive {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}}
- [ClickJacking Defenses - IEBlog](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
