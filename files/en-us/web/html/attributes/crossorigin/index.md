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
spec-urls:
  - https://html.spec.whatwg.org/multipage/infrastructure.html#cors-settings-attributes
  - https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin
---

{{HTMLSidebar}}

The crossorigin attribute, valid on the {{ HTMLElement("audio") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}, and {{ HTMLElement("video") }} elements, provides support for [CORS](/en-US/docs/Web/HTTP/CORS), defining how the element handles crossorigin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.

The `crossorigin` content attribute on media elements is a CORS settings attribute.

These attributes are enumerated, and have the following possible values:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Keyword</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>anonymous</code></td>
      <td>
        Request uses CORS headers and credentials flag is set to 'same-origin'. There is no exchange of **user credentials** via cookies, client-side SSL certificates or HTTP authentication, unless destination is the same origin.
      </td>
    </tr>
    <tr>
      <td><code>use-credentials</code></td>
      <td>
        Request uses CORS headers, credentials flag is set to 'include' and **user credentials** are always included.
      </td>
    </tr>
    <tr>
      <td><code>""</code></td>
      <td>
        Setting the attribute name to an empty value, like
        <code>crossorigin</code> or <code>crossorigin=""</code>, is the same as
        <code>anonymous</code>.
      </td>
    </tr>
  </tbody>
</table>

An invalid keyword and an empty string will be handled as the `anonymous` keyword.

By default (that is, when the attribute is not specified), CORS is not used at all. User-agent will not ask for permission for full access to the resource and in case of cross-origin request, its usage will be limited in following ways:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Restrictions</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        When resource is placed in {{HTMLElement("canvas")}}, element is marked as "[tainted](/en-US/docs/Web/HTML/CORS_enabled_image#what_is_a_tainted_canvas)".
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Access to error logging via {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} will be limited.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Request with no appropriate `crossorigin` header may be discarded.
      </td>
    </tr>
  </tbody>
</table>

> **Note:** Prior to Firefox 83 the `crossorigin` attribute was not supported for `rel="icon"` there is also [an open issue for Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645).

### Example: crossorigin with the script element

You can use the following {{HTMLElement("script")}} element to tell a browser to execute the `https://example.com/example-framework.js` script without sending user-credentials.

```html
<script src="https://example.com/example-framework.js" crossorigin="anonymous"></script>
```

### Example: Webmanifest with credentials

The `use-credentials` value must be used when fetching a [manifest](/en-US/docs/Web/Manifest) that requires credentials, even if the file is from the same origin.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials">
```

## Specifications

{{Specifications}}

## Browser compatibility

### script crossorigin

{{Compat("html.elements.script.crossorigin")}}

### video crossorigin

{{Compat("html.elements.video.crossorigin")}}

### link crossorigin

{{Compat("html.elements.link.crossorigin")}}

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTML attribute: `rel`](/en-US/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/en-US/docs/Web/HTML/")}}
