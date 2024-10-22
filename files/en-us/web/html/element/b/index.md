---
title: "<b>: The Bring Attention To element"
slug: Web/HTML/Element/b
page-type: html-element
browser-compat: html.elements.b
---

{{HTMLSidebar}}

The **`<b>`** [HTML](/en-US/docs/Web/HTML) element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text or granting importance. If you wish to create boldface text, you should use the CSS {{cssxref("font-weight")}} property. If you wish to indicate an element is of special importance, you should use the {{HTMLElement("strong")}} element.

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

- Use the `<b>` for cases like keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced (but not including any special importance).
- Do not confuse the `<b>` element with the {{HTMLElement("strong")}}, {{HTMLElement("em")}}, or {{HTMLElement("mark")}} elements. The {{HTMLElement("strong")}} element represents text of certain _importance_, {{HTMLElement("em")}} puts some emphasis on the text and the {{HTMLElement("mark")}} element represents text of certain _relevance_. The `<b>` element doesn't convey such special semantic information; use it only when no others fit.
- Similarly, do not mark titles and headings using the `<b>` element. For this purpose, use the {{HTMLElement("Heading_Elements", "h1")}} to {{HTMLElement("Heading_Elements", "h6")}} tags. Further, stylesheets can change the default style of these elements, with the result that they are not _necessarily_ displayed in bold.
- It is a good practice to use the [`class`](/en-US/docs/Web/HTML/Global_attributes/class) attribute on the `<b>` element in order to convey additional semantic information as needed (for example `<b class="lead">` for the first sentence in a paragraph). This makes it easier to manage multiple use cases of `<b>` if your stylistic needs change, without the need to change all of its uses in the HTML.
- Historically, the `<b>` element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of the `<b>` element has been changed.
- If there is no semantic purpose to using the `<b>` element, you should use the CSS {{cssxref("font-weight")}} property with the value `"bold"` instead in order to make text bold.

## Examples

```html
<p>
  This article describes several <b class="keywords">text-level</b> elements. It
  explains their usage in an <b class="keywords">HTML</b> document.
</p>
Keywords are displayed with the default style of the
<b>element, likely in bold.</b>
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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
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

- Other elements conveying text-level semantics: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- [Using \<b> and \<i> elements (W3C)](https://www.w3.org/International/questions/qa-b-and-i-tags)
