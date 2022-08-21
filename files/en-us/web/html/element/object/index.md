---
title: '<object>: The External Object element'
slug: Web/HTML/Element/object
tags:
  - Element
  - HTML
  - HTML embedded content
  - Reference
  - Web
browser-compat: html.elements.object
---

{{HTMLRef}}

The **`<object>`** [HTML](/en-US/docs/Web/HTML) element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>;
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content">phrasing content</a>;
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content">embedded content</a>, palpable content; if the element has a
        {{htmlattrxref("usemap","object")}} attribute, <a href="/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content">interactive content</a>;
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_listed">listed</a>,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_submittable">submittable</a>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form-associated_content">form-associated</a> element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        zero or more {{HTMLElement("param")}} elements, then
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#transparent_content_model">transparent</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content">embedded content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("application")}}, {{ARIARole("document")}}, {{ARIARole("image")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLObjectElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{HTMLAttrDef("archive")}} {{deprecated_inline}}
  - : A space-separated list of URIs for archives of resources for the object.
- {{HTMLAttrDef("border")}} {{deprecated_inline}}
  - : The width of a border around the control, in pixels.
- {{HTMLAttrDef("classid")}} {{deprecated_inline}}
  - : The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute.
- {{HTMLAttrDef("codebase")}} {{deprecated_inline}}
  - : The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document.
- {{HTMLAttrDef("codetype")}} {{deprecated_inline}}
  - : The content type of the data specified by **classid**.
- {{HTMLAttrDef("data")}}
  - : The address of the resource as a valid URL. At least one of **data** and **type** must be defined.
- {{HTMLAttrDef("declare")}} {{deprecated_inline}}
  - : The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. Repeat the `<object>` element completely each time the resource is reused.
- {{HTMLAttrDef("form")}}
  - : The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a {{HTMLElement("form")}} element in the same document.
- {{HTMLAttrDef("height")}}
  - : The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). — (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- {{HTMLAttrDef("name")}}
  - : The name of valid browsing context (HTML5), or the name of the control (HTML 4).
- {{HTMLAttrDef("standby")}} {{deprecated_inline}}
  - : A message that the browser can show while loading the object's implementation and data.
- {{HTMLAttrDef("type")}}
  - : The [content type](/en-US/docs/Glossary/MIME_type) of the resource specified by **data**. At least one of **data** and **type** must be defined.
- {{HTMLAttrDef("usemap")}}
  - : A hash-name reference to a {{HTMLElement("map")}} element; that is a '#' followed by the value of a {{htmlattrxref("name", "map")}} of a map element.
- {{HTMLAttrDef("width")}}
  - : The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). — (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

## Examples

### Embed a YouTube Video

```html
<object type="video/mp4"
    data="https://www.youtube.com/watch?v=Sp9ZfSvpf7A"
    width="1280"
    height="720">
</object>
```

Note that a `type` field is normally specified, but is not needed for youtube videos.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("applet")}} {{deprecated_inline}}
- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
