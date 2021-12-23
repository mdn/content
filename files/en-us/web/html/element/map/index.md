---
title: '<map>: The Image Map element'
slug: Web/HTML/Element/map
tags:
  - Element
  - HTML
  - HTML embedded content
  - Multimedia
  - Reference
  - Web
browser-compat: html.elements.map
---

{{HTMLRef}}

The **`<map>`** [HTML](/en-US/docs/Web/HTML) element is used with {{HTMLElement("area")}} elements to define an image map (a clickable link area).

{{EmbedInteractiveExample("pages/tabbed/map.html", "tabbed-standard")}}

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
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Any
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >transparent</a
        >
        element.
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
      <td>{{domxref("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("name")}}
  - : The `name` attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the `name` attribute must not be equal to the value of the `name` attribute of another `<map>` element in the same document. If the {{htmlattrxref("id")}} attribute is also specified, both attributes must have the same value.

## Examples

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html">
  <area shape="circle" coords="275,75,75" href="right.html">
</map>
<img usemap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic">
```

### Result

{{ EmbedLiveSample('Examples', '350', '166', '', 'Web/HTML/Element/map') }}

### Expected live example output

The live example above should appear similar to the following images (when using your keyboard tab key):

_For the `left.html` link:_
![](screen_shot_2017-02-02_at_10.48.40_pm.png)

_For the `right.html` link_
![](screen_shot_2017-02-02_at_10.49.04_pm.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
