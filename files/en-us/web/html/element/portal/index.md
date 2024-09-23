---
title: "<portal>: The Portal element"
slug: Web/HTML/Element/portal
page-type: html-element
status:
  - experimental
browser-compat: html.elements.portal
---

{{HTMLSidebar}}{{SeeCompatTable}}

The **`<portal>`** [HTML](/en-US/docs/Web/HTML) element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.

A `<portal>` is similar to an `<iframe>`. An `<iframe>` allows a separate {{Glossary("browsing context")}} to be embedded. However, the embedded content of a `<portal>` is more limited than that of an `<iframe>`. It cannot be interacted with, and therefore is not suitable for embedding widgets into a document. Instead, the `<portal>` acts as a preview of the content of another page. It can be navigated into therefore allowing for seamless transition to the embedded content.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `referrerpolicy`
  - : Sets the [referrer policy](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) to use when requesting the page at the URL given as the value of the `src` attribute.
- `src`
  - : The URL of the page to embed.

## Accessibility

The preview displayed by a `<portal>` is not interactive, therefore does not receive input events or focus. Therefore the embedded contents of the portal are not exposed as elements in the {{Glossary("accessibility tree")}}. The portal can be navigated to and activated like a button, the default behavior when clicking on the portal is to activate it.

Portals are given a default label which is the title of the embedded page. If no title is present the visible text in the preview is concatenated to create a label. The [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute can be used to override this.

Portals used for prerendering only should be hidden with the hidden HTML attribute or the CSS {{cssxref("display")}} property with a value of `none`.

When using animations during portal activation the {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} [media feature](/en-US/docs/Web/CSS/@media#media_features) should be respected.

## Examples

### Basic example

The following example will embed the contents of `https://example.com` as a preview.

```html
<portal id="exampleportal" src="https://example.com/"></portal>
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
          >button</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLPortalElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
