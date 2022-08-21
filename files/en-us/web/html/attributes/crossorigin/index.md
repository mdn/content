---
title: 'HTML attribute: crossorigin'
slug: Web/HTML/Attributes/crossorigin
tags:
  - Advanced
  - Attribute
  - CORS
  - HTML
  - NeedsContent
  - Reference
  - Security
spec-urls: https://html.spec.whatwg.org/multipage/infrastructure.html#cors-settings-attributes
browser-compat:
  - html.elements.img.crossorigin
  - html.elements.link.crossorigin
  - html.elements.script.crossorigin
  - html.elements.video.crossorigin
---
{{HTMLSidebar}}

The **`crossorigin`** attribute, valid on the {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, and {{HTMLElement("video")}} elements, provides support for [CORS](/en-US/docs/Web/HTTP/CORS), defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.

The `crossorigin` content attribute on media elements is a CORS settings attribute.

These attributes are enumerated, and have the following possible values:

- `anonymous`
  - : Request uses CORS headers and credentials flag is set to `'same-origin'`. There is no exchange of **user credentials** via cookies, client-side SSL certificates or HTTP authentication, unless destination is the same origin.
- `use-credentials`
  - : Request uses CORS headers, credentials flag is set to `'include'` and **user credentials** are always included.
- `""`
  - : Setting the attribute name to an empty value, like `crossorigin` or `crossorigin=""`, is the same as `anonymous`.

An invalid keyword and an empty string will be handled as the `anonymous` keyword.

By default (that is, when the attribute is not specified), CORS is not used at all. The user agent will not ask for permission for full access to the resource and in the case of a cross-origin request, certain limitations will be applied based on the type of element concerned:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Restrictions</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        When resource is placed in {{HTMLElement("canvas")}}, element is marked as <a href="/en-US/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases"><em>tainted</em></a>.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Access to error logging via {{domxref('Window.error_event', 'window.onerror')}} will be limited.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Request with no appropriate <code>crossorigin</code> header may be discarded.
      </td>
    </tr>
  </tbody>
</table>

> **Note:** Prior to Firefox 83 the `crossorigin` attribute was not supported for `rel="icon"`. There is also [an open issue for Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645).

### Example: `crossorigin` with the `<script>` element

You can use the following {{HTMLElement("script")}} element to tell a browser to execute the `https://example.com/example-framework.js` script without sending user-credentials.

```html
<script src="https://example.com/example-framework.js" crossorigin="anonymous"></script>
```

### Example: Web manifest with credentials

The `use-credentials` value must be used when fetching a [manifest](/en-US/docs/Web/Manifest) that requires credentials, even if the file is from the same origin.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTML attribute: `rel`](/en-US/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/en-US/docs/Web/HTML/")}}
