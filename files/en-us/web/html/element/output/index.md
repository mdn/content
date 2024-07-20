---
title: "<output>: The Output element"
slug: Web/HTML/Element/output
page-type: html-element
browser-compat: html.elements.output
---

{{HTMLSidebar}}

The **`<output>`** [HTML](/en-US/docs/Web/HTML) element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- [`for`](/en-US/docs/Web/HTML/Attributes/for)
  - : A space-separated list of other elements' [`id`](/en-US/docs/Web/HTML/Global_attributes#id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation.
- `form`

  - : The {{HTMLElement("form")}} element to associate the output with (its _form owner_). The value of this attribute must be the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of a `<form>` in the same document. (If this attribute is not set, the `<output>` is associated with its ancestor `<form>` element, if any.)

    This attribute lets you associate `<output>` elements to `<form>`s anywhere in the document, not just inside a `<form>`. It can also override an ancestor `<form>` element.

- `name`
  - : The element's name. Used in the {{domxref("HTMLFormElement.elements", "form.elements")}} API.

The `<output>` value, name, and contents are NOT submitted during form submission.

## Accessibility

Many browsers implement this element as an [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) region. Assistive technology will thereby announce the results of UI interactions posted inside it without requiring that focus is switched away from the controls that produce those results.

## Examples

In the following example, the form provides a slider whose value can range between `0` and `100`, and an {{HTMLElement("input")}} element into which you can enter a second number. The two numbers are added together, and the result is displayed in the `<output>` element each time the value of any of the controls changes.

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

### Result

{{ EmbedLiveSample('Examples')}}

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
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#form_listed"
          >listed</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#form_labelable"
          >labelable</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#form_resettable"
          >resettable</a
        >
        <a
          href="/en-US/docs/Web/HTML/Content_categories#form-associated_content"
          >form-associated element</a
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
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
