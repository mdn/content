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

The **`<selectedcontent>`** [HTML](/en-US/docs/Web/HTML) element can be used to display the content of the currently selected `<option>` inside a closed `<select>` element.

## Attributes

The `<selectedcontent>` element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes), but they will essentially be ignored because when used correctly as a child of a select button, the element is rendered [inert](/en-US/docs/Web/HTML/Reference/Global_attributes/inert).

The select button and all its content are inert by default so that if interactive children (for example, links or buttons) are included inside it, it will still be treated like a single button for interaction purposes.

No other attributes are defined on `<selectedcontent>`.

## Description

When creating a [Customizable select element](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select), you can include the `<selectedcontent>` element inside a {{htmlelement("button")}} element, which in turn needs to be the first child of the `<select>` element:

```html
<select>
  <button>
    <selectedcontent></selectedcontent>
  </button>

  ...
</select>
```

`<selectedcontent>` contains a clone of a {{htmlelement("select")}} element's currently-selected {{htmlelement("option")}} element content, created using {{domxref("Node.cloneNode", "cloneNode()")}} under the hood.

Any subsequent `<select>` content will be included in the drop-down picker.

Whenever the `<select>` element's selected `<option>` switches from one option to another, the `<selectedcontent>` element's content is removed and replaced by a new cloned copy of the DOM structure of the newly selected `<option>`, which is created using {{domxref("Node.cloneNode", "cloneNode()")}}.
Dynamic modifications to the selected `<option>` element's content made after the `<select>` element has been created are not automatically cloned to the `<selectedcontent>` element, and must be manually updated by the developer.

> [!WARNING]
> In particular, this may cause issues with sites that use popular front-end JavaScript frameworks where {{htmlelement("option")}} elements are dynamically updated after creation, as these updates will not be cloned to the `<selectedcontent>` element.

## Styling with CSS

It is useful to be able to target the currently-selected `<option>` element's content as it appears inside the select button with CSS styles, without affecting the styling of the content as it appears inside the picker.

For example, your `<option>` elements may contain icons, images, or even videos. This content might look nice inside the picker, but could cause the select button to increase in size, look untidy, and affect the surrounding layout.

This could be fixed by hiding the problem content when it is contained inside `<selectedcontent>`. For example:

```css
selectedcontent img {
  display: none;
}
```

> [!NOTE]
> If the `<button>` and/or `<selectedcontent>` elements are not included inside the `<select>` markup, the browser will place the selected option content inside the select button implicitly, but this targeting will not be possible.

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

Not currently part of a specification. See https://github.com/whatwg/html/pull/10633 for the relevant specification PR.

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("select")}} element
- The {{HTMLElement("option")}} element
- The {{HTMLElement("optgroup")}} element
- [Customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)
