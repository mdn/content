---
title: "<mark>: The Mark Text element"
slug: Web/HTML/Element/mark
page-type: html-element
browser-compat: html.elements.mark
---

{{HTMLSidebar}}

The **`<mark>`** [HTML](/en-US/docs/Web/HTML) element represents text which is **marked** or **highlighted** for reference or notation purposes due to the marked passage's relevance in the enclosing context.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

Typical use cases for `<mark>` include:

- When used in a quotation ({{HTMLElement("q")}}) or block quote ({{HTMLElement("blockquote")}}), it generally indicates text which is of special interest but is not marked in the original source material, or material which needs special scrutiny even though the original author didn't think it was of particular importance. Think of this like using a highlighter pen in a book to mark passages that you find of interest.
- Otherwise, `<mark>` indicates a portion of the document's content which is likely to be relevant to the user's current activity. This might be used, for example, to indicate the words that matched a search operation.
- Don't use `<mark>` for syntax highlighting purposes; instead, use the {{HTMLElement("span")}} element with appropriate CSS applied to it.

> **Note:** Don't confuse `<mark>` with the {{HTMLElement("strong")}} element; `<mark>` is used to denote content which has a degree of _relevance_, while `<strong>` indicates spans of text of _importance_.

## Examples

### Marking text of interest

In this first example, a `<mark>` element is used to mark some text within a quote which is of particular interest to the user.

```html
<blockquote>
  It is a period of civil war. Rebel spaceships, striking from a hidden base,
  have won their first victory against the evil Galactic Empire. During the
  battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire's
  ultimate weapon, the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
</blockquote>
```

#### Result

{{EmbedLiveSample("Marking_text_of_interest", 650, 130)}}

### Identifying context-sensitive passages

This example demonstrates using `<mark>` to mark search results within a passage.

```html
<p>
  It is a dark time for the Rebellion. Although the Death Star has been
  destroyed, <mark class="match">Imperial</mark> troops have driven the Rebel
  forces from their hidden base and pursued them across the galaxy.
</p>

<p>
  Evading the dreaded <mark class="match">Imperial</mark> Starfleet, a group of
  freedom fighters led by Luke Skywalker has established a new secret base on
  the remote ice world of Hoth.
</p>
```

To help distinguish the use of `<mark>` for search results from other potential usage, this example applies the custom class `"match"` to each match.

#### Result

{{EmbedLiveSample("Identifying_context-sensitive_passages", 650, 130)}}

## Accessibility concerns

The presence of the `mark` element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS {{cssxref("content")}} property, along with the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements.

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [highlight start] ";
}

mark::after {
  content: " [highlight end] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been highlighted would adversely affect understanding.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

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
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
