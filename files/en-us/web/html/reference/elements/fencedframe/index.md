---
title: "<fencedframe>: The Fenced Frame element"
slug: Web/HTML/Reference/Elements/fencedframe
page-type: html-element
status:
  - experimental
browser-compat: html.elements.fencedframe
---

{{HTMLSidebar}}{{SeeCompatTable}}

The **`<fencedframe>`** [HTML](/en-US/docs/Web/HTML) element represents a nested {{Glossary("browsing context")}}, embedding another HTML page into the current one. `<fencedframe>`s are very similar to {{htmlelement("iframe")}} elements in form and function, except that:

- Communication is restricted between the `<fencedframe>` content and its embedding site.
- A `<fencedframe>` can access cross-site data, but only in a very specific set of controlled circumstances that preserve user privacy.
- A `<fencedframe>` cannot be manipulated or have its data accessed via regular scripting (for example reading or setting the source URL). `<fencedframe>` content can only be embedded via [specific APIs](/en-US/docs/Web/API/Fenced_frame_API#use_cases).
- A `<fencedframe>` cannot access the embedding context's DOM, nor can the embedding context access the `<fencedframe>`'s DOM.

The `<fencedframe>` element is a type of `<iframe>` with more native privacy features built in. It addresses shortcomings of `<iframe>`s such as reliance on third-party cookies and other privacy risks. See [Fenced frame API](/en-US/docs/Web/API/Fenced_frame_API) for more details.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}

  - : Specifies a [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) for the `<fencedframe>`, which defines what features are available to the `<fencedframe>` based on the origin of the request. See [Permissions policies available to fenced frames](#permissions_policies_available_to_fenced_frames) for more details of which features can be controlled via a policy set on a fenced frame.

- `height` {{experimental_inline}}

  - : A unitless integer representing the height of the fenced frame in CSS pixels. The default is `150`.

- `width` {{experimental_inline}}
  - : A unitless integer representing the width of the fenced frame in CSS pixels. The default is `300`.

## Permissions policies available to fenced frames

Permissions delegated from the top-level context to a fenced frame for allowing and denying features could be used as a communication channel, so constitute a privacy threat. As a result, standard web features that can have their availability controlled via [Permissions Policy](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy) (for example, [`camera`](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) or [`geolocation`](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)) are **not available** within fenced frames.

The only features that can be enabled by a policy inside fenced frames are the specific features designed to be used inside fenced frames:

- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Currently these are always enabled inside fenced frames. In the future, which ones are enabled will be controllable using the `<fencedframe>` `allow` attribute. Blocking privacy sandbox features in this manner will also block the fenced frame from loading — there will be no communication channel at all.

## Focusing across fenced frame boundaries

The ability of the document's active focus to be moved across fenced frame boundaries (i.e., from an element outside the fenced frame to one inside, or vice versa) is limited. User-initiated actions such as a click or a tab can do so, as there is no fingerprinting risk there.

However, trying to traverse the boundary via an API call such as {{domxref("HTMLElement.focus()")}} is prohibited — a malicious script could use a series of such calls to leak inferred information across the boundary.

## Positioning and scaling

Being a {{ glossary("replaced elements", "replaced element")}}, the `<fencedframe>` allows the position of the embedded document within its box to be adjusted using the {{cssxref("object-position")}} property.

> [!NOTE]
> The {{cssxref("object-fit")}} property has no effect on `<fencedframe>` elements.

The size of the embedded content may be set by internal `contentWidth` and `contentHeight` properties of the `<fencedframe>`'s {{domxref("HTMLFencedFrameElement.config", "config")}} object. In such cases, changing the `width` or `height` of the `<fencedframe>` will change the size of the embedded container on the page, but the document inside the container will be visually scaled to fit. The reported width and height of the embedded document (i.e., {{domxref("Window.innerWidth")}} and {{domxref("Window.innerHeight")}}) will be unchanged.

## Accessibility

People navigating with assistive technology, such as a screen reader, can use the [`title` attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/title) on a `<fencedframe>` to label its content. The title's value should concisely describe the embedded content:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Without this title, they have to navigate into the `<fencedframe>` to determine what its embedded content is. This context shift can be confusing and time-consuming, especially for pages with multiple `<fencedframe>`s and/or if embeds contain interactive content like video or audio.

## Examples

To set what content will be shown in a `<fencedframe>`, a utilizing API (such as [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) or [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) generates a {{domxref("FencedFrameConfig")}} object, which is then set as the value of the `<fencedframe>`'s `config` property.

The following example gets a `FencedFrameConfig` from a Protected Audience API's ad auction, which is then used to display the winning ad in a `<fencedframe>`:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` must be passed in to the `runAdAuction()` call to obtain a `FencedFrameConfig` object. If it is not set, the resulting {{jsxref("Promise")}} will resolve to a URN that can only be used in an {{htmlelement("iframe")}}.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, embedded content, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts embedded content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLFencedFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) on privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com
