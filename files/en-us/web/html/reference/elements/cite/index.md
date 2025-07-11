---
title: "<cite>: The Citation element"
slug: Web/HTML/Reference/Elements/cite
page-type: html-element
browser-compat: html.elements.cite
sidebar: htmlsidebar
---

The **`<cite>`** [HTML](/en-US/docs/Web/HTML) element is used to mark up the title of a creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.

{{InteractiveExample("HTML Demo: &lt;cite&gt;", "tabbed-standard")}}

```html interactive-example
<figure>
  <blockquote>
    <p>
      It was a bright cold day in April, and the clocks were striking thirteen.
    </p>
  </blockquote>
  <figcaption>
    First sentence in
    <cite
      ><a href="http://www.george-orwell.org/1984/0.html"
        >Nineteen Eighty-Four</a
      ></cite
    >
    by George Orwell (Part 1, Chapter 1).
  </figcaption>
</figure>
```

```css interactive-example
cite {
  /* Add your styles here */
}
```

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Usage notes

In the context of the `<cite>` element, a creative work could be, for example, one of the following:

- A book
- A research paper
- An essay
- A poem
- A musical score
- A song
- A play or film script
- A film
- A television show
- A game
- A sculpture
- A painting
- A theatrical production
- A play
- An opera
- A musical
- An exhibition
- A legal case report
- A computer program
- A website
- A web page
- A blog post or comment
- A forum post or comment
- A tweet
- A Facebook post
- A written or oral statement
- And so forth.

To include a reference to the source of quoted material which is contained within a {{HTMLElement("blockquote")}} or {{HTMLElement("q")}} element, use the [`cite`](/en-US/docs/Web/HTML/Reference/Elements/blockquote#cite) attribute on the element.

Typically, browsers style the contents of a `<cite>` element in italics by default. To avoid this, apply the CSS {{cssxref("font-style")}} property to the `<cite>` element.

## Examples

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

### Result

{{EmbedLiveSample("Example", 640, 80)}}

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
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
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
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        {{domxref("HTMLSpanElement")}} interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The element {{HTMLElement("blockquote")}} for long quotations.
- The element {{HTMLElement("q")}} for inline quotations and the [`cite`](/en-US/docs/Web/HTML/Reference/Elements/q#cite) attribute.
