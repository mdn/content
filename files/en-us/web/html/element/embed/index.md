---
title: "<embed>: The Embed External Content element"
slug: Web/HTML/Element/embed
page-type: html-element
browser-compat: html.elements.embed
---

{{HTMLSidebar}}

The **`<embed>`** [HTML](/en-US/docs/Web/HTML) element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.

{{EmbedInteractiveExample("pages/tabbed/embed.html", "tabbed-standard")}}

> [!NOTE]
> This topic documents only the element that is defined as part of the [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element). It does not address earlier, non-standardized implementation of the element.

Keep in mind that most modern browsers have deprecated and removed support for browser plug-ins, so relying upon `<embed>` is generally not wise if you want your site to be operable on the average user's browser.

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `height`
  - : The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.
- `src`
  - : The URL of the resource being embedded.
- `type`
  - : The {{glossary("MIME type")}} to use to select the plug-in to instantiate.
- `width`
  - : The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed.

## Usage notes

You can use the {{cssxref("object-position")}} property to adjust the positioning of the embedded object within the element's frame.

> [!NOTE]
> The {{cssxref("object-fit")}} property has no effect on `<embed>` elements.

## Accessibility

Use the [`title` attribute](/en-US/docs/Web/HTML/Global_attributes/title) on an `embed` element to label its content so that people navigating with assistive technology such as a screen reader can understand what it contains. The title's value should concisely describe the embedded content. Without a title, they may not be able to determine what its embedded content is. This context shift can be confusing and time-consuming, especially if the `embed` element contains interactive content like video or audio.

## Examples

```html
<embed
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Title of my video" />
```

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
        >, embedded content, interactive content,
        <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
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
      <td>{{domxref("HTMLEmbedElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other elements that are used for embedding content of various types include {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, and {{HTMLElement("video")}}.
- Positioning and sizing the embedded content within its frame: {{cssxref("object-position")}} and {{cssxref("object-fit")}}
