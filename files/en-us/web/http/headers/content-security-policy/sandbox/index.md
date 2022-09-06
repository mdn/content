---
title: 'CSP: sandbox'
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Sandbox
  - Security
browser-compat: http.headers.Content-Security-Policy.sandbox
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`sandbox`** directive enables a sandbox for the requested
resource similar to the {{HTMLElement("iframe")}} {{htmlattrxref("sandbox", "iframe")}}
attribute. It applies restrictions to a page's actions including preventing popups,
preventing the execution of plugins and scripts, and enforcing a same-origin policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element or by the
        {{HTTPHeader("Content-Security-policy-Report-Only")}}
        header field.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

where `<value>` can optionally be one of the following values:

- `allow-downloads`
  - : Allows for downloads after the user clicks a button or link.
- `allow-downloads-without-user-activation` {{experimental_inline}}
  - : Allows for downloads to occur without a gesture from the user.
- `allow-forms`
  - : Allows the page to submit forms. If this keyword is not used, this operation is not
    allowed.
- `allow-modals`
  - : Allows the page to open modal windows.
- `allow-orientation-lock`
  - : Allows the page to disable the ability to lock the screen orientation.
- `allow-pointer-lock`
  - : Allows the page to use the [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Allows popups (like from `window.open`, `target="_blank"`,
    `showModalDialog`). If this keyword is not used, that functionality will
    silently fail.
- `allow-popups-to-escape-sandbox`
  - : Allows a sandboxed document to open new windows without forcing the sandboxing flags
    upon them. This will allow, for example, a third-party advertisement to be safely
    sandboxed without forcing the same restrictions upon the page the ad links to.
- `allow-presentation`
  - : Allows embedders to have control over whether an iframe can start a presentation
    session.
- `allow-same-origin`
  - : Allows the content to be treated as being from its normal origin. If this keyword is
    not used, the embedded content is treated as being from a unique origin.
- `allow-scripts`
  - : Allows the page to run scripts (but not create pop-up windows). If this keyword is
    not used, this operation is not allowed.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Lets the resource request access to the parent's storage capabilities with the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).
- `allow-top-navigation`
  - : Allows the page to navigate (load) content to the top-level browsing context. If
    this keyword is not used, this operation is not allowed.
- `allow-top-navigation-by-user-activation`
  - : Lets the resource navigate the top-level browsing context, but only if initiated by
    a user gesture.
- `allow-top-navigation-to-custom-protocols`
  - :  Allows navigations toward non-fetch schemes to be handed off to external software.

## Examples

```http
Content-Security-Policy: sandbox allow-scripts;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{htmlattrxref("sandbox", "iframe")}} attribute on {{HTMLElement("iframe")}}
  elements
