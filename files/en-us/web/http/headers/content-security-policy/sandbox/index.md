---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.sandbox
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`sandbox`** directive enables a sandbox for the requested
resource similar to the {{HTMLElement("iframe")}} [`sandbox`](/en-US/docs/Web/HTML/Element/iframe#sandbox)
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
  - : Allows downloading files through an {{HTMLElement("a")}} or {{HTMLElement("area")}} element with the [download](/en-US/docs/Web/HTML/Element/a#download) attribute, as well as through the navigation that leads to a download of a file. This works regardless of whether the user clicked on the link, or JS code initiated it without user interaction.
- `allow-downloads-without-user-activation` {{experimental_inline}}
  - : Allows for downloads to occur without a gesture from the user.
- `allow-forms`
  - : Allows the page to submit forms. If this keyword is not used, form will be displayed as normal, but submitting it will not trigger input validation, sending data to a web server or closing a dialog.
- `allow-modals`
  - : Allows the page to open modal windows by {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}} and {{domxref("Window.prompt()")}}, while opening a {{HTMLElement("dialog")}} is allowed regardless of this keyword. It also allows the page to receive {{domxref("BeforeUnloadEvent")}} event.
- `allow-orientation-lock`
  - : Lets the resource [lock the screen orientation](/en-US/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Allows the page to use the [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Allows popups (like from {{domxref("Window.open()")}}, `target="_blank"`, {{domxref("Window.showModalDialog()")}}). If this keyword is not used, that functionality will silently fail.
- `allow-popups-to-escape-sandbox`
  - : Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them. This will allow, for example, a third-party advertisement to be safely sandboxed without forcing the same restrictions upon the page the ad links to.
- `allow-presentation`
  - : Allows embedders to have control over whether an iframe can start a [presentation session](/en-US/docs/Web/API/PresentationRequest).
- `allow-same-origin`
  - : If this token is not used, the resource is treated as being from a special origin that always fails the {{Glossary("same-origin policy")}} (potentially preventing access to [data storage/cookies](/en-US/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) and some JavaScript APIs).
- `allow-scripts`
  - : Allows the page to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Lets the resource request access to the parent's storage capabilities with the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).
- `allow-top-navigation`
  - : Lets the resource navigate the top-level browsing context (the one named `_top`).
- `allow-top-navigation-by-user-activation`
  - : Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.
- `allow-top-navigation-to-custom-protocols`
  - : Allows navigations to non-`http` protocols built into browser or [registered by a website](/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers). This feature is also activated by `allow-popups` or `allow-top-navigation` keyword.

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
- [`sandbox`](/en-US/docs/Web/HTML/Element/iframe#sandbox) attribute on {{HTMLElement("iframe")}}
  elements
