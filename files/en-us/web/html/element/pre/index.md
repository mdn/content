---
title: '<pre>: The Preformatted Text element'
slug: Web/HTML/Element/pre
tags:
  - Element
  - HTML
  - HTML grouping content
  - HTML:Flow content
  - Reference
  - Web
browser-compat: html.elements.pre
---

{{HTMLRef}}

The **`<pre>`** [HTML](/en-US/docs/Web/HTML) element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or "[monospaced](https://en.wikipedia.org/wiki/Monospaced_font), font. Whitespace inside this element is displayed as written.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
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
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("cols")}} {{non-standard_inline}}{{deprecated_inline}}
  - : Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of {{htmlattrxref("width", "pre")}}. To achieve such an effect, use CSS {{Cssxref("width")}} instead.
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS {{Cssxref("width")}} instead.
- {{htmlattrdef("wrap")}} {{non-standard_inline}}
  - : Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS {{Cssxref("white-space")}} instead.

## Example

### HTML

```html
<p>Using CSS to change the font color is easy.</p>
<pre>
body {
  color: red;
}
</pre>
```

### Result

{{EmbedLiveSample("Example")}}

## Accessibility concerns

It is important to provide an alternate description for any images or diagrams created using preformatted text. The alternate description should clearly and concisely describe the image or diagram's content.

People experiencing low vision conditions and browsing with the aid of assistive technology such as a screen reader may not understand what the preformatted text characters are representing when they are read out in sequence.

A combination of the {{HTMLElement("figure")}} and {{HTMLElement("figcaption")}} elements, supplemented by a combination of an {{htmlattrxref("id")}} and the [ARIA](/en-US/docs/Web/Accessibility/ARIA) `role` and `aria-labelledby` attributes allow the preformatted text to be announced as an image, with the `figcaption` serving as the image's alternate description.

### Example

    <figure role="img" aria-labelledby="cow-caption">
      <pre>
      ___________________________
    < I'm an expert in my field. >
      ---------------------------
             \   ^__^
              \  (oo)\_______
                 (__)\       )\/\
                     ||----w |
                     ||     ||
      </pre>
      <figcaption id="cow-caption">
        A cow saying, "I'm an expert in my field." The cow is illustrated using preformatted text characters.
      </figcaption>
    </figure>

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- Related element: {{HTMLElement("code")}}
