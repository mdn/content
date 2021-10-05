---
title: '<fieldset>: The Field Set element'
slug: Web/HTML/Element/fieldset
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.fieldset
---

{{HTMLRef}}

The **`<fieldset>`** [HTML](/en-US/docs/Web/HTML) element is used to group several controls as well as labels ({{HTMLElement("label")}}) within a web form.

{{EmbedInteractiveExample("pages/tabbed/fieldset.html", "tabbed-standard")}}

As the example above shows, the `<fieldset>` element provides a grouping for a part of an HTML form, with a nested {{htmlelement("legend")}} element providing a caption for the `<fieldset>`. It takes few attributes, the most notable of which are `form`, which can contain the `id` of a {{htmlelement("form")}} on the same page, allowing you to make the `<fieldset>` part of that `<form>` even if it is not nested inside it, and `disabled`, which allows you to disable the `<fieldset>` and all its contents in one go.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("disabled")}}
  - : If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the {{htmlelement("form")}}. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the {{HTMLElement("legend")}} element won't be disabled.
- {{htmlattrdef("form")}}
  - : This attribute takes the value of the {{htmlattrxref("id")}} attribute of a {{HTMLElement("form")}} element you want the `<fieldset>` to be part of, even if it is not inside the form. Please note that usage of this is confusing — if you want the {{HTMLElement("input")}} elements inside the `<fieldset>` to be associated with the form, you need to use the `form` attribute directly on those elements. You can check which elements are associated with a form via JavaScript, using {{domxref("HTMLFormElement.elements")}}.
- {{htmlattrdef("name")}}

  - : The name associated with the group.

    > **Note:** The caption for the fieldset is given by the first {{HTMLElement("legend")}} element nested inside it.

## Styling with CSS

There are several special styling considerations for `<fieldset>`.

Its {{cssxref("display")}} value is `block` by default, and it establishes a [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context). If the `<fieldset>` is styled with an inline-level `display` value, it will behave as `inline-block`, otherwise it will behave as `block`. By default there is a `2px` `groove` border surrounding the contents, and a small amount of default padding. The element has {{cssxref("min-inline-size", "min-inline-size: min-content")}} by default.

If a {{htmlelement("legend")}} is present, it is placed over the `block-start` border. The `<legend>` shrink-wraps, and also establishes a formatting context. The `display` value is blockified. (For example, `display: inline` behaves as `block`.)

There will be an anonymous box holding the contents of the `<fieldset>`, which inherits certain properties from the `<fieldset>`. If the `<fieldset>` is styled with `display: grid` or `display: inline-grid`, then the anonymous box will be a grid formatting context. If the `<fieldset>` is styled with `display: flex` or `display: inline-flex`, then the anonymous box will be a flex formatting context. Otherwise, it establishes a block formatting context.

You can feel free to style the `<fieldset>` and `<legend>` in any way you want to suit your page design.

## Examples

### Simple fieldset

This example shows a really simple `<fieldset>` example, with a `<legend>`, and a single control inside it.

```html
<form action="#">
  <fieldset>
    <legend>Simple fieldset</legend>
    <input type="radio" id="radio">
    <label for="radio">Spirit of radio</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Simple_fieldset', '100%', '80') }}

### Disabled fieldset

This example shows a disabled `<fieldset>` with two controls inside it. Note how both the controls are disabled due to being inside a disabled `<fieldset>`.

```html
<form action="#">
  <fieldset disabled>
    <legend>Disabled fieldset</legend>
    <div>
      <label for="name">Name: </label>
      <input type="text" id="name" value="Chris">
    </div>
    <div>
      <label for="pwd">Archetype: </label>
      <input type="password" id="pwd" value="Wookie">
    </div>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Disabled_fieldset', '100%', '110') }}

## Technical summary

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
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_root"
          >sectioning root</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_listed"
          >listed</a
        >,
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#form-associated_content"
          >form-associated</a
        >
        element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        An optional {{HTMLElement("legend")}} element, followed by flow
        content.
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
      <td>{{ARIARole("group")}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("radiogroup")}},
        {{ARIARole("presentation")}}, {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLFieldSetElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("legend")}} element
- The {{HTMLElement("input")}} element
- The {{HTMLElement("label")}} element
- The {{HTMLElement("form")}} element
