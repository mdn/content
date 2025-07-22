---
title: "<selectedcontent>: The selected option display element"
slug: Web/HTML/Reference/Elements/selectedcontent
page-type: html-element
status:
  - experimental
  - non-standard
browser-compat: html.elements.selectedcontent
sidebar: htmlsidebar
---

{{SeeCompatTable}}{{non-standard_header}}

The **`<selectedcontent>`** [HTML](/en-US/docs/Web/HTML) element can be used to declaratively show the selected {{htmlelement("option")}} element's contents within the {{htmlelement("select")}} element's first child {{htmlelement("button")}} element. Useful when creating a [customizable select element](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select), it displays the contents of the currently selected `<option>` inside a closed `<select>` element.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Description

The `<selectedcontent>` element can be included as the only child of a {{htmlelement("button")}} element, which in turn needs to be the first child of the {{htmlelement("select")}} element. Any {{htmlelement("option")}} elements, the only other valid children of a `<select>` element, must come after the `<button>` and nested `<selectedcontent>` pair.

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### Option cloning

The `<selectedcontent>` contains a clone of a {{htmlelement("select")}} element's currently-selected {{htmlelement("option")}} element content. This clone is rendered by the user agent using {{domxref("Node.cloneNode", "cloneNode()")}}. When a different `<option>` is selected, when a [`change`](HTMLElement/change_event) event occurs, the `<selectedcontent>` element's content is replaced by a new cloned copy of the newly selected `<option>`.

> [!WARNING]
> As browser cloning updates to the `<selectedcontent>` element only occurs on `change`, dynamic modifications to the selected `<option>` element's content made after the `<select>` element has been created are not automatically cloned to the `<selectedcontent>` element. These must be manually updated by the developer. In particular, this may cause issues with sites that use popular front-end JavaScript frameworks where {{htmlelement("option")}} elements are dynamically updated after creation, as these updates will not be cloned to the `<selectedcontent>` element.

### Inertness

As the `<selectedcontent>` element is rendered inside a `<button>`, and the `<button>` element when rendered inside a `<select>` is rendered [inert](/en-US/docs/Web/HTML/Reference/Global_attributes/inert), all the `<button>` contents, including the `<selectedcontent>`, are inert by default.

### Styling with CSS

You can target the currently selected `<option>` element's content as it appears inside the select button with CSS styles, without affecting the styling of the content of the `<option>` that was cloned.

For example, your `<option>` elements may contain icons, images, or even videos that render nicely inside the picker, but may cause the select button to increase in size, look untidy, and affect the surrounding layout.

This could be fixed by hiding the problem content when it is contained inside `<selectedcontent>`. For example:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> If the `<button>` and/or `<selectedcontent>` elements are not included inside the `<select>` markup, the browser places the contents of the selected `<option>` inside an implicit `<button>` within the `<select>`, but this implicit button is not selectable using the `button` or `selectedcontent` [type selector](/en-US/docs/Web/CSS/Type_selectors).

## Examples

You can see a full example that includes the `<selectedcontent>` element in our [Customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) guide.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
       None
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Mirrors content from the selected {{htmlelement("option")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{htmlelement("button")}} element that is the first child of a {{htmlelement("select")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        None
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        None
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLSelectedContentElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("select")}} element
- The {{HTMLElement("option")}} element
- The {{HTMLElement("optgroup")}} element
- [Customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)
