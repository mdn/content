---
title: "<s>: The Strikethrough element"
slug: Web/HTML/Element/s
page-type: html-element
browser-compat: html.elements.s
---

{{HTMLSidebar}}

The **`<s>`** [HTML](/en-US/docs/Web/HTML) element renders text with a strikethrough, or a line through it. Use the `<s>` element to represent things that are no longer relevant or no longer accurate. However, `<s>` is not appropriate when indicating document edits; for that, use the {{HTMLElement("del")}} and {{HTMLElement("ins")}} elements, as appropriate.

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Accessibility

The presence of the `s` element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS {{cssxref("content")}} property, along with the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [start of stricken text] ";
}

s::after {
  content: " [end of stricken text] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been struck out would adversely affect understanding.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Examples

```css
.sold-out {
  text-decoration: line-through;
}
```

```html
<s>Today's Special: Salmon</s> SOLD OUT<br />
<span class="sold-out">Today's Special: Salmon</span> SOLD OUT
```

### Result

{{EmbedLiveSample("Examples")}}

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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >.
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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("strike")}} element, alter ego of the `<s>` element, is obsolete and should not be used on websites anymore.
- The {{HTMLElement("del")}} element is to be used instead if the data has been _deleted_.
- The CSS {{cssxref("text-decoration-line")}} property is to be used to achieve the former visual aspect of the `<s>` element.
