---
title: "<legend>: The Field Set Legend element"
slug: Web/HTML/Element/legend
page-type: html-element
browser-compat: html.elements.legend
---

{{HTMLSidebar}}

The **`<legend>`** [HTML](/en-US/docs/Web/HTML) element represents a caption for the content of its parent {{HTMLElement("fieldset")}}.

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

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

See {{HTMLElement("form")}} for examples on `<legend>`.

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
        and
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements">headings</a>
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
        <code>&#x3C;legend></code> element
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
