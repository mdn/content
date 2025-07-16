---
title: "<legend>: The Field Set Legend element"
slug: Web/HTML/Reference/Elements/legend
page-type: html-element
browser-compat: html.elements.legend
sidebar: htmlsidebar
---

The **`<legend>`** [HTML](/en-US/docs/Web/HTML) element represents a caption for the content of its parent {{HTMLElement("fieldset")}}.

In [customizable `<select>` elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select), the `<legend>` element is allowed as a child of `<optgroup>`, to provide a label that is easy to target and style. This replaces any text set in the `<optgroup>` element's `label` attribute, and it has the same semantics.

{{InteractiveExample("HTML Demo: &lt;legend&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Choose your favorite monster</legend>

  <input type="radio" id="kraken" name="monster" value="K" />
  <label for="kraken">Kraken</label><br />

  <input type="radio" id="sasquatch" name="monster" value="S" />
  <label for="sasquatch">Sasquatch</label><br />

  <input type="radio" id="mothman" name="monster" value="M" />
  <label for="mothman">Mothman</label>
</fieldset>
```

```css interactive-example
legend {
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
}

input {
  margin: 0.4rem;
}
```

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Examples

See {{HTMLElement("form")}} for examples on `<legend>`.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing content</a
        >
        and
        <a href="/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements">headings</a>
        (h1–h6 elements).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("fieldset")}} whose first child is this
        <code>&#x3C;legend></code> element. In <a href="/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select">customizable select elements</a>, a <code>&#x3C;legend></code> element is permitted as a child of {{htmlelement("optgroup")}} .
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLLegendElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: Form role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
