---
title: '<rtc>: The Ruby Text Container element'
slug: Web/HTML/Element/rtc
tags:
  - Deprecated
  - Element
  - HTML
  - NeedsContent
  - Reference
  - Ruby Text
  - Text
  - Web
  - rtc
browser-compat: html.elements.rtc
---

{{HTMLRef}}{{deprecated_header}}

The **`<rtc>`** [HTML](/en-US/docs/Web/HTML) element embraces semantic annotations of characters presented in a ruby of {{HTMLElement("rb")}} elements used inside of {{ HTMLElement("ruby") }} element. {{HTMLElement("rb")}} elements can have both pronunciation ({{HTMLElement("rt")}}) and semantic ({{HTMLElement("rtc")}}) annotations.

{{EmbedInteractiveExample("pages/tabbed/rtc.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >
        or {{HTMLElement("rt")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The closing tag can be omitted if it is immediately followed by a
        {{HTMLElement("rb")}}, {{HTMLElement("rtc")}} or
        {{HTMLElement("rt")}} element opening tag or by its parent
        closing tag.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>A {{HTMLElement("ruby")}} element.</td>
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

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

```html
<div class="info">
  <ruby>
    <rbc>
      <rb>旧</rb><rt>jiù</rt>
      <rb>金</rb><rt>jīn</rt>
      <rb>山</rb><rt>shān</rt>
    </rbc>
    <rtc>San Francisco</rtc>
  </ruby>
</div>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

{{EmbedLiveSample("Examples", 600, 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rbc")}}
