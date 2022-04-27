---
title: '<del>: The Deleted Text element'
slug: Web/HTML/Element/del
tags:
  - Deleted Text
  - Element
  - HTML
  - HTML edits
  - Reference
  - Web
  - del
browser-compat: html.elements.del
---

{{HTMLRef}}

The **`<del>`** [HTML](/en-US/docs/Web/HTML) element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The {{HTMLElement("ins")}} element can be used for the opposite purpose: to indicate text that has been added to the document.

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

This element is often (but need not be) rendered by applying a strike-through style to the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
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
      <td>{{domxref("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
  - : A URI for a resource that explains the change (for example, meeting minutes).
- {{htmlattrdef("datetime")}}
  - : This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Date strings](/en-US/docs/Web/HTML/Date_and_time_formats#date_strings). The format of the string if it includes both date and time is covered in [Local date and time strings](/en-US/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings).

## Examples

```html
<p><del>This text has been deleted</del>,
here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### Result

{{EmbedLiveSample("Examples")}}

## Accessibility concerns

The presence of the `del` element is not announced by most screen reading technology in its default configuration. It can be made to be announced by using the CSS {{cssxref("content")}} property, along with the {{cssxref("::before")}} and {{cssxref("::after")}} pseudo-elements.

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [deletion start] ";
}

del::after {
  content: " [deletion end] ";
}
```

Some people who use screen readers deliberately disable announcing content that creates extra verbosity. Because of this, it is important to not abuse this technique and only apply it in situations where not knowing content has been deleted would adversely affect understanding.

- [Short note on making your mark (more accessible) | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("ins")}} element for insertions into a text
- {{HTMLElement("s")}} element for strikethrough separate from representing deletion of text
