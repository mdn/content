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
---

{{HTMLSidebar}}{{draft}}

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
        CORS requests for this element will have the credentials flag set to
        'same-origin'.
      </td>
    </tr>
    <tr>
      <td><code>use-credentials</code></td>
      <td>
        CORS requests for this element will have the credentials flag set to
        'include'.
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

By default (that is, when the attribute is not specified), CORS is not used at all. The "anonymous" keyword means that there will be no exchange of **user credentials** via cookies, client-side SSL certificates or HTTP authentication as described in the [Terminology section of the CORS specification](https://www.w3.org/TR/cors/#user-credentials), unless it is in the same origin.

An invalid keyword and an empty string will be handled as the `anonymous` keyword.

> **Note:** Prior to Firefox 83 the `crossorigin` attribute was not supported for `rel="icon"` there is also [an open issue for Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645).

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

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'infrastructure.html#cors-settings-attributes', 'CORS settings attributes')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'embedded-content.html#attr-img-crossorigin', 'crossorigin')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

### script crossorigin

{{Compat("html.elements.script.crossorigin")}}

### video crossorigin

{{Compat("html.elements.video.crossorigin")}}

### link crossorigin

{{Compat("html.elements.link.crossorigin")}}

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTML attribute: `rel`](/en-US/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/en-US/docs/Web/HTML/")}}
