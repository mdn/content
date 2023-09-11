---
title: "<ins>: The Inserted Text element"
slug: Web/HTML/Element/ins
page-type: html-element
browser-compat: html.elements.ins
---

{{HTMLSidebar}}

The **`<ins>`** [HTML](/en-US/docs/Web/HTML) element represents a range of text that has been added to a document. You can use the {{HTMLElement("del")}} element to similarly represent a range of text that has been deleted from the document.

{{EmbedInteractiveExample("pages/tabbed/ins.html", "tabbed-standard")}}

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
        <a
          href="/en-US/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
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
      <td>{{domxref("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `cite`
  - : This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.
- `datetime`
  - : This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see [Format of a valid date string](/en-US/docs/Web/HTML/Date_and_time_formats#date_strings). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings).

## Examples

```html
<ins>This text has been inserted</ins>
```

### Result

{{EmbedLiveSample("Examples")}}

## Accessibility concerns

The presence of the `<ins>` element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS {{cssxref("content")}} property, along with the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements.

```css
ins::before,
ins::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

ins::before {
  content: " [insertion start] ";
}

ins::after {
  content: " [insertion end] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been inserted would adversely affect understanding.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("del")}} element for marking deletion into a document
