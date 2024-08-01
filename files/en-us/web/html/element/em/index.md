---
title: "<em>: The Emphasis element"
slug: Web/HTML/Element/em
page-type: html-element
browser-compat: html.elements.em
---

{{HTMLSidebar}}

The **`<em>`** [HTML](/en-US/docs/Web/HTML) element marks text that has stress emphasis. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis.

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<em>` element is for words that have a stressed emphasis compared to surrounding text, which is often limited to a word or words of a sentence and affects the meaning of the sentence itself.

Typically this element is displayed in italic type. However, it should not be used to apply italic styling; use the CSS {{cssxref("font-style")}} property for that purpose. Use the {{HTMLElement("cite")}} element to mark the title of a work (book, play, song, etc.). Use the {{HTMLElement("i")}} element to mark text that is in an alternate tone or mood, which covers many common situations for italics such as scientific names or words in other languages. Use the {{HTMLElement("strong")}} element to mark text that has greater importance than surrounding text.

### \<i> vs. \<em>

Some developers may be confused by how multiple elements seemingly produce similar visual results. `<em>` and `<i>` are a common example, since they both italicize text. What's the difference? Which should you use?

By default, the visual result is the same. However, the semantic meaning is different. The `<em>` element represents stress emphasis of its contents, while the `<i>` element represents text that is set off from the normal prose, such as a foreign word, fictional character thoughts, or when the text refers to the definition of a word instead of representing its semantic meaning. (The title of a work, such as the name of a book or movie, should use `<cite>`.)

This means the right one to use depends on the situation. Neither is for purely decorative purposes, that's what CSS styling is for.

Examples for `<em>` could be:

```html live-sample___em-example
<p>Just <em>do</em> it already!</p>
<p>We <em>had</em> to do something about it.</p>
```

{{EmbedLiveSample('em-example', "", 85)}}

A person or software reading the text would pronounce the words in italics with an emphasis, using verbal stress.

Examples for `<i>` could be:

```html live-sample___i-example
<p>The word <i>the</i> is an article.</p>
<p>The <i>Queen Mary</i> sailed last night.</p>
```

{{EmbedLiveSample('i-example', "", 85)}}

Here, there is no added emphasis or importance on the word "Queen Mary". It is merely indicated that the object in question is not a queen named Mary but a ship named "Queen Mary".

## Examples

In this example, the `<em>` element is used to highlight an implicit or explicit contrast between two ingredient lists:

```html
<p>
  Ice cream is made with milk, sweetener, and cream. Frozen custard, on the
  other hand, is made of milk, cream, sweetener, and <em>egg yolks</em>.
</p>
```

### Result

{{EmbedLiveSample("Example")}}

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
      <td>None, both the starting and ending tag are mandatory.</td>
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
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">emphasis</a
          ></code
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

- {{HTMLElement("i")}}
