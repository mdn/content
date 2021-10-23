---
title: '<progress>: The Progress Indicator element'
slug: Web/HTML/Element/progress
tags:
  - Element
  - HTML
  - HTML forms
  - HTML5
  - Reference
  - Web
browser-compat: html.elements.progress
---

{{HTMLRef}}

The **`<progress>`** [HTML](/en-US/docs/Web/HTML) element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

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
        >, labelable content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >, but there must be no <code>&#x3C;progress></code> element among its
        descendants.
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
      <td>{{ARIARole("progressbar")}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{ htmlattrdef("max") }}
  - : This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than `0` and be a valid floating point number. The default value is `1`.
- {{ htmlattrdef("value") }}
  - : This attribute specifies how much of the task that has been completed. It must be a valid floating point number between `0` and `max`, or between `0` and `1` if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.

> **Note:** Unlike the {{htmlelement("meter")}} element, the minimum value is always 0, and the `min` attribute is not allowed for the `<progress>` element.

> **Note:** The {{cssxref(":indeterminate")}} pseudo-class can be used to match against indeterminate progress bars. To change the progress bar to indeterminate after giving it a value you must remove the value attribute with {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}}.

## Examples

```html
<progress value="70" max="100">70 %</progress>
```

### Result

{{ EmbedLiveSample("Examples", 200, 50) }}

On Windows 7, the resulting progress looks like this:

![progress-firefox.JPG](progress-firefox.jpg)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
