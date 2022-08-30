---
title: '<datalist>: The HTML Data List element'
slug: Web/HTML/Element/datalist
tags:
  - Element
  - HTML
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.datalist
---

{{HTMLRef}}

The **`<datalist>`** [HTML](/en-US/docs/Web/HTML) element contains a set of {{HTMLElement("option")}} elements that represent the permissible or recommended options available to choose from within other controls.

{{EmbedInteractiveExample("pages/tabbed/datalist.html", "tabbed-standard")}}

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
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Either
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >
        or zero or more {{HTMLElement("option")}} elements.
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
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role"
          >listbox</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDataListElement")}}</td>
    </tr>
  </tbody>
</table>

To bind the `<datalist>` element to the control, we give it a unique identifier in the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute, and then add the [`list`](/en-US/docs/Web/HTML/Element/input#attr-list) attribute to the {{HTMLElement("input")}} element with the same identifier as value.
Only certain types of {{HTMLElement("input")}} support this behavior, and it can also vary from browser to browser.

> **Note:** The `<option>` element can store a value as internal content and in the `value` and `label` attributes. Which one will be visible in the drop-down menu depends on the browser, but when clicked, content entered into control field will always come from the `value` attribute.

## Attributes

This element has no other attributes than the [global attributes](/en-US/docs/Web/HTML/Global_attributes), common to all elements.

## Examples

### Textual types

Recommended values in types {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/number", "number")}}, are displayed in a drop-down menu when user clicks or double-clicks on the control.
Typically the right side of a control will also have an arrow pointing to the presence of predefined values.

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

{{EmbedLiveSample("Textual_types", 600, 40)}}

### Date and Time types

The types {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/time", "time")}} and {{HTMLElement("input/datetime-local", "datetime-local")}} can show an interface that allows a convenient selection of a date and time.
Predefined values can be shown there, allowing the user to quickly fill the control value.

> **Note:** When type is not supported, `text` type creating simple text field will be used instead. That field will correctly recognize recommended values and display them to the user in a drop-down menu.

```html
<input type="time" list="popularHours">
<datalist id="popularHours">
  <option value="12:00">
  <option value="13:00">
  <option value="14:00">
</datalist>
```

{{EmbedLiveSample("Date_and_Time_types", 600, 40)}}

### Range type

The recommended values in the {{HTMLElement("input/range", "range")}} type will be shown as series of hash marks that the user can easily select.

```html
<input type="range" list="tickmarks">
<datalist id="tickmarks">
  <option value="0">
  <option value="10">
  <option value="20">
  <option value="30">
</datalist>
```

{{EmbedLiveSample("Range_type", 600, 70)}}

### Color type

The {{HTMLElement("input/color", "color")}} type can show predefined colors in a browser-provided interface.

```html
<input type="color" list="redColors">
<datalist id="redColors">
  <option value="#800000">
  <option value="#8B0000">
  <option value="#A52A2A">
  <option value="#DC143C">
</datalist>
```

{{EmbedLiveSample("Color_type", 600, 70)}}

### Password type

The specification allows linking `<datalist>` with a {{HTMLElement("input/password", "password")}} type, but no browser supports it for security reasons.

```html
<input type="password" list="randomPassword">
<datalist id="randomPassword">
  <option value="5Mg[_3DnkgSu@!q#">
</datalist>
```

{{EmbedLiveSample("Password_type", 600, 40)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("input")}} element, and more specifically its {{htmlattrxref("list", "input")}} attribute;
- The {{HTMLElement("option")}} element.
