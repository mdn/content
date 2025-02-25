---
title: "<rtc>: The Ruby Text Container element"
slug: Web/HTML/Element/rtc
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.rtc
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<rtc>`** [HTML](/en-US/docs/Web/HTML) element embraces semantic annotations of characters presented in a ruby of {{HTMLElement("rb")}} elements used inside of {{ HTMLElement("ruby") }} element. {{HTMLElement("rb")}} elements can have both pronunciation ({{HTMLElement("rt")}}) and semantic (`<rtc>`) annotations.

{{InteractiveExample("HTML Demo: &lt;rtc&gt;", "tabbed-standard")}}

```html interactive-example
<ruby xml:lang="zh-Hant" style="ruby-position: under;">
    <rbc>
        <rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp>
        <rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp>
        <rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp>
        <rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp>
    </rbc>
    <rtc xml:lang="en" style="ruby-position: over;">
        <rp>(</rp><rt>Malaysia</rt><rp>)</rp>
    </rtc>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

```html
<div class="info">
  <ruby>
    <rtc>
      <rb>旧</rb><rt>jiù</rt>
      <rb>金</rb><rt>jīn</rt>
      <rb>山</rb><rt>shān</rt>
    </rtc>
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

### Result

{{EmbedLiveSample("Examples", 600, 120)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >
        or {{HTMLElement("rt")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The closing tag can be omitted if it is immediately followed by a
        {{HTMLElement("rb")}}, <code>&lt;rtc&gt;</code> or
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
