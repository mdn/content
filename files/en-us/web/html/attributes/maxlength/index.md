---
title: 'HTML attribute: maxlength'
slug: Web/HTML/Attributes/maxlength
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - HTML
  - Input
  - Reference
  - maxlength
  - textarea
---

{{HTMLSidebar}}{{draft}}

The **`maxlength`** attribute defines the maximum number of characters (as UTF-16 code units) the user can enter into an {{htmlelement('input')}} or {{htmlelement('textarea')}}. This must be an integer value 0 or higher.

If no maxlength is specified, or an invalid value is specified, the input or textarea has no maximum length.

Any `maxlength` value must be greater than or equal to the value of [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength), if present and valid. The input will fail constraint validation if the length of the text value of the field is greater than maxlength UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.

### Constraint validation

While the browser will generally prevent user from entering more text than the maxlength attribute allows, should the length be longer than the maxlength allows, the read-only {{domxref("ValidityState.tooLong", "tooLong")}} property of a {{domxref("ValidityState")}} object will be true.

## Examples

```html
<input type="password" maxlength="4"/>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'input.html#attr-input-maxlength', 'maxlength attribute')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML5.1', 'input.html#attr-maxlength-accept', 'maxlength attribute')}}
      </td>
      <td>{{Spec2('HTML5.1')}}</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("html.elements.attribute.maxlength")}}

## See also

- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength)
- [`size`](/en-US/docs/Web/HTML/Attributes/size)
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern)
- [Constraint validation](/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Constraint validation API](/en-US/docs/Web/API/Constraint_validation)
- {{htmlelement('input')}}
