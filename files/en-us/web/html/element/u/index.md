---
title: '<u>: The Underline element'
slug: Web/HTML/Element/u
tags:
  - Annotation
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Reference
  - Unarticulated Annotation
  - Underline
  - Web
browser-compat: html.elements.u
---

{{HTMLSidebar}}

The **`<u>`** [HTML](/en-US/docs/Web/HTML) element represents a span of inline text which should be underlined.

{{EmbedInteractiveExample("pages/tabbed/u.html", "tabbed-shorter")}}

See the [Usage notes](#usage_notes) section for further details on when it's appropriate to use `<u>` and when it isn't.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

In general, `<u>` should not be used anymore.  Whereas it was re-added in HTML5, `<u>` was deprecated for more than a decade, in favor of the use of semantic tags and/or CSS to style elements instead; modern practice is to prefer tags like `<cite>`, `<strong>`, `<ref>`, or whatever is appropriate to your use case, then to style it with CSS using rules like [text-decoration: underline](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration), if necessary, instead.

## Examples

```html
<p>This paragraph includes <u>outdated code</u> that should be avoided.</p>
```

#### CSS

```html
<p>This is an example of <span class="underline">CSS-based underlining</span>.</p>
```

```css
span.underline {
  text-decoration: underline;
}
```

### Avoiding \<u>

Most of the time, you actually don't want to use `<u>`. Here are some examples that show what you should do instead in several cases.

#### Non-semantic underlines

To underline text without implying any semantic meaning, use a {{HTMLElement("span")}} element with the {{cssxref("text-decoration")}} property set to `"underline"`, as shown below.

##### HTML

```html
<span class="underline">Today's Special</span>
<br />
Chicken Noodle Soup With Carrots
```

##### CSS

```css
.underline {
  text-decoration: underline;
}
```

##### Result

{{EmbedLiveSample("Non-semantic_underlines", 650, 80)}}

#### Presenting a book title

Book titles should be presented using the {{HTMLElement("cite")}} element instead of `<u>` or even `<i>`.

##### Using the cite element

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

{{EmbedLiveSample("Using_the_cite_element", 650, 80)}}

##### Styling the cite element

The default styling for the `<cite>` element renders the text in italics. You can override that using CSS:

```html
<p>The class read <cite>Moby Dick</cite> in the first term.</p>
```

```css
cite {
  font-style: normal;
  text-decoration: underline;
}
```

{{EmbedLiveSample("Styling_the_cite_element", 650, 80)}}

## Technical Summary

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
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
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
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
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

## See also

- The {{HTMLElement("span")}}, {{HTMLElement("i")}}, {{HTMLElement("em")}}, {{HTMLElement("b")}}, and {{HTMLElement("cite")}} elements should usually be used instead.
- The CSS {{cssxref("text-decoration")}} property should be used for non-semantic underlining.
