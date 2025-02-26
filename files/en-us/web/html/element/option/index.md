---
title: "<option>: The HTML Option element"
slug: Web/HTML/Element/option
page-type: html-element
browser-compat: html.elements.option
---

{{HTMLSidebar}}

The **`<option>`** [HTML](/en-US/docs/Web/HTML) element is used to define an item contained in a {{HTMLElement("select")}}, an {{HTMLElement("optgroup")}}, or a {{HTMLElement("datalist")}} element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document.

{{InteractiveExample("HTML Demo: &lt;option&gt;", "tabbed-standard")}}

```html interactive-example
<label for="pet-select">Choose a pet:</label>

<select id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
```

```css interactive-example
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}
```

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled)
  - : If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled {{HTMLElement("optgroup")}} element.
- `label`
  - : This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content.
- `selected`
  - : If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a {{HTMLElement("select")}} element whose [`multiple`](/en-US/docs/Web/HTML/Element/select#multiple) attribute is not set, only one single `<option>` of this {{HTMLElement("select")}} element may have the `selected` attribute.
- `value`
  - : The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.

## Styling with CSS

Styling the **`<option>`** element inside a `<select>` dropdown is highly limited and depends on the browser and operating system. Depending on the operating system, the [`font-size`](/en-US/docs/Web/CSS/font-size) of the owning `<select>` is respected in Firefox and Chromium. Chromium may additionally allow [`color`](/en-US/docs/Web/CSS/color), [`background-color`](/en-US/docs/Web/CSS/background-color), [`font-family`](/en-US/docs/Web/CSS/font-family), [`font-variant`](/en-US/docs/Web/CSS/font-variant), and [`text-align`](/en-US/docs/Web/CSS/text-align) to be set.

You can find more details about styling `<option>` in [our guide to advanced form styling](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling).

## Examples

See {{HTMLElement("select")}} for examples.

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
        Text, possibly with escaped characters (like
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory. The end tag is optional if this element is
        immediately followed by another <code>&#x3C;option></code> element or an
        {{HTMLElement("optgroup")}}, or if the parent element has no
        more content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("select")}}, an
        {{HTMLElement("optgroup")}} or a
        {{HTMLElement("datalist")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
