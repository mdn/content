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

The **`<selectedcontent>`** [HTML](/en-US/docs/Web/HTML) is used inside a {{htmlelement("select")}} element to display the contents of its currently selected {{htmlelement("option")}} within its first child {{htmlelement("button")}}. This enables you to style all parts of a `<select>` element, referred to as "[customizable selects](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)".

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Description

You use the `<selectedcontent>` element as the only child of a {{htmlelement("button")}} element, which must be the first child of the {{htmlelement("select")}} element. Any {{htmlelement("option")}} element, the only other valid child of `<select>`, must come after the `<button>` and nested `<selectedcontent>` pair.

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option></option>
  ...
</select>
```

### How `<selectedcontent>` works behind the scenes

The `<selectedcontent>` element contains a clone of the content of the currently selected {{htmlelement("option")}}. The browser renders this clone using {{domxref("Node.cloneNode", "cloneNode()")}}. When the selected `<option>` changes, such as during a [`change`](HTMLElement/change_event) event, the contents of `<selectedcontent>` are replaced with a clone of the newly selected `<option>`. Being aware of this behavior is important, especially when working with dynamic content.

> [!WARNING]
> Since the browser updates `<selectedcontent>` only when the selected `<option>` changes, any dynamic modifications to the content of the selected `<option>` after the `<select>` is rendered won't be cloned to `<selectedcontent>`. You'll need to update `<selectedcontent>` manually. Watch out if you're using any of the popular front-end JavaScript frameworks where `<option>` elements are updated dynamically after the initial render–the result may not match what you expect in `<selectedcontent>`.

### Inertness

By default, any `<button>` inside a `<select>` element is [inert](/en-US/docs/Web/HTML/Reference/Global_attributes/inert). As a result, all content inside that button—including `<selectedcontent>`—is also inert.
This means users can't interact with or focus on content inside `<selectedcontent>`.

### Styling the selected option's content with CSS

You can target the currently selected `<option>` element's content as it appears inside the select button with CSS styles, without affecting the styling of the content of the `<option>` that was cloned.

For example, your `<option>` elements may contain icons, images, or even videos that render nicely inside the drop-down, but could cause the select `<button>` to increase in size, look untidy, and affect the surrounding layout.

By targeting the content inside `<selectedcontent>`, you can hide elements such as images in the button, without affecting how they appear in the drop-down, as shown in the following snippet:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> If the `<button>` and/or `<selectedcontent>` elements are not included inside `<select>`, the browser creates an implicit `<button>` to display the contents of the selected `<option>`. This fallback button cannot be targeted with CSS using the `button` or `selectedcontent` type selector.

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
