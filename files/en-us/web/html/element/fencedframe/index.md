---
title: "<fencedframe>: The Fenced Frame element"
slug: Web/HTML/Element/fencedframe
page-type: html-element
status:
  - experimental
browser-compat: html.elements.fencedframe
---

{{HTMLSidebar}}{{SeeCompatTable}}

The **`<fencedframe>`** [HTML](/en-US/docs/Web/HTML) element represents a nested {{Glossary("browsing context")}}, embedding another HTML page into the current one. `<fencedframe>`s are very similar to `<iframe>`s in form and function, except that:

- Communication cannot be shared between the `<fencedframe>` content and its embedding site.
- `<fencedframe>`s can access cross-site data, but only in a very specific set of controlled circumstances that preserve user privacy.
- `<fencedframes>`s cannot be manipulated or have their data accessed via regular scripting (for example reading or setting the source URL). They can only have content embedded via specific APIs, which we'll talk about below.
- The `<fencedframe>` cannot access the embedding context's DOM, or vice versa.

In effect, `<fencedframe>`s are a more privacy-respecting type of `<iframe>`, aimed at fulfilling different use cases that previously relied on third-party cookies or other mechanisms that were bad for privacy. See [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API) for more details.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `allow`

  - : Specifies a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) for the `<fencedframe>`. The policy defines what features are available to the `<fencedframe>` (for example, access to the microphone, camera, battery, web-share, etc.) based on the origin of the request.

    > **Note:** A Permissions Policy specified by the `allow` attribute implements a further restriction on top of the policy specified in the {{httpheader("Permissions-Policy")}} header. It doesn't replace it.

    THIS BIT NEEDS TO CHANGE, BUT I DON'T UNDERSTAND THE PERMISSION-POLICY SECTION IN THE SPEC: https://wicg.github.io/fenced-frame/#permissions-policy-changes

- `height`

  - : The height of the fenced frame in CSS pixels. The default is `150`.

- `width`
  - : The width of the fenced frame in CSS pixels. The default is `300`.

## Focusing across fenced frame boundaries

The ability of the document's active focus to be moved across fenced frame boundaries (i.e. from an element outside the fenced frame to one inside, or vice versa) is limited. User-initiated actions such as a click or a tab can do so, as there is no fingerprinting risk there.

However, trying to traverse the boundary via an API call such as {{domxref("HTMLElement.focus()")}} is prohibited — a malicious script could use a series of such calls to leak inferred information across the boundary. Scripted focus changes that would traverse a fenced frame boundary are skipped NOT SURE IF THIS IS RIGHT; I DIDN'T REALLY UNDERSTAND THE ALGORITHM CHANGES IN THE SPEC

## Positioning and scaling

As a [replaced element](/en-US/docs/Web/CSS/Replaced_element), the position, alignment, and scaling of the embedded document within the `<iframe>` element's box, can be adjusted with the {{cssxref("object-position")}} and {{cssxref("object-fit")}} properties.

## Examples

To set what content will be shown in a `<fencedframe>`, a utilizing API (such as [Protected Audience](https://developer.chrome.com/docs/privacy-sandbox/fledge/) or [Shared Storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/)) generates a {{domxref("FencedFrameConfig")}} object, which is then set as the value of the `<fencedframe>`'s `config` property.

The following example gets a `FencedFrameConfig` from a Protected Audience API's ad auction, which is then used to display the winning ad in a `<fencedframe>`:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` must be passed in to the `runAdAuction()` call to obtain a `FencedFrameConfig` object. If it is not set, the resulting {{jsxref("Promise")}} will resolve to a URN that can only be used in an {{htmlelement("iframe")}}.

## Accessibility concerns

People navigating with assistive technology such as a screen reader can use the [`title` attribute](/en-US/docs/Web/HTML/Global_attributes/title) on an `<fencedframe>` to label its content. The title's value should concisely describe the embedded content:

```html
<fencedframe
  title="Advertisement for new Log. From Blammo!"
  width="640"
  height="320"></fencedframe>
```

Without this title, they have to navigate into the `<iframe>` to determine what its embedded content is. This context shift can be confusing and time-consuming, especially for pages with multiple `<iframe>`s and/or if embeds contain interactive content like video or audio.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
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
      <td>{{no_tag_omission}}</td>
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
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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
- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
