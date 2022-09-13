---
title: '<dl>: The Description List element'
slug: Web/HTML/Element/dl
tags:
  - Definition List
  - Description list
  - Element
  - HTML
  - HTML grouping content
  - HTML:Flow content
  - HTML:Palpable Content
  - Reference
  - Web
browser-compat: html.elements.dl
---

{{HTMLRef}}

The **`<dl>`** [HTML](/en-US/docs/Web/HTML) element represents a description list. The element encloses a list of groups of terms (specified using the {{HTMLElement("dt")}} element) and descriptions (provided by {{HTMLElement("dd")}} elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

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
        >, and if the <code>&#x3C;dl></code> element's children include one
        name-value group, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <p>
          Either: Zero or more groups each consisting of one or more
          {{HTMLElement("dt")}} elements followed by one or more
          {{HTMLElement("dd")}} elements, optionally intermixed with
          {{HTMLElement("script")}} and
          {{HTMLElement("template")}} elements.<br />Or: (in
          {{Glossary("WHATWG")}} HTML, {{Glossary("W3C")}} HTML 5.2
          and later) One or more {{HTMLElement("div")}} elements,
          optionally intermixed with {{HTMLElement("script")}} and
          {{HTMLElement("template")}} elements.
        </p>
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
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
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
      <td>
        {{ARIARole("group")}},
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >, {{ARIARole("none")}}, {{ARIARole("presentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

### Single term and description

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("Single_term_and_description")}}

### Multiple terms, single description

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("Multiple_terms_single_description")}}

### Single term, multiple descriptions

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform,
    graphical web browser developed by the
    Mozilla Corporation and hundreds of
    volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser
    Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger
    than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("Single_term_multiple_descriptions")}}

### Multiple terms and descriptions

It is also possible to define multiple terms with multiple corresponding descriptions, by combining the examples above.

### Metadata

Description lists are useful for displaying metadata as a list of key-value pairs.

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

Tip: It can be handy to define a key-value separator in the CSS, such as:

```css
dt::after {
  content: ": ";
}
```

### Wrapping name-value groups in `div` elements

[WHATWG](/en-US/docs/Glossary/WHATWG) HTML allows wrapping each name-value group in a {{HTMLElement("dl")}} element in a {{HTMLElement("div")}} element. This can be useful when using [microdata](/en-US/docs/Web/HTML/Microdata), or when [global attributes](/en-US/docs/Web/HTML/Global_attributes) apply to a whole group, or for styling purposes.

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

## Notes

Do not use this element (nor {{HTMLElement("ul")}} elements) to merely create indentation on a page. Although it works, this is a bad practice and obscures the meaning of description lists.

To change the indentation of a description term, use the [CSS](/en-US/docs/Web/CSS) {{cssxref("margin")}} property.

## Accessibility concerns

Each screen reader announces `<dl>` content differently. As of iOS 14, VoiceOver will announce that `<dl>` content is a list when navigating with the virtual cursor (not via the read-all command). Because of this, make sure each list item's content is written in such a way that it communicates its relationship to the other list items in the list grouping.

- [CodePen - HTML Buddies: dt & dd](https://cdpn.io/pen/debug/NzGaKP)
- [VoiceOver on iOS 14 Supports Description Lists](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dt")}}
- {{HTMLElement("dd")}}
