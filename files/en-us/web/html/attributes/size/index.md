---
title: 'HTML attribute: size'
slug: Web/HTML/Attributes/size
tags:
  - Attribute
  - HTML
  - Input
  - Reference
  - Select
---

{{HTMLSidebar}}

The **`size`** attribute defines the width of the {{htmlelement('input')}} and the height of the {{htmlelement('select')}} element. For the `input`, if the `type` attribute is {{HTMLElement("input/text", "text")}} or {{HTMLElement("input/password", "password")}} then it's the number of characters. This must be an integer value 0 or higher. If no `size` is specified, or an invalid value is specified, the input has no size declared, and the form control will be the default width based on the user agent. If CSS targets the element with properties impacting the width, CSS takes precedence.

The `size` attribute has no impact on constraint validation.

## Examples

By adding `size` on some input types, the width of the input can be controlled. Adding size on a select changes the height, definining how many options are visible in the closed state.

```html
<label for="fruit">Enter a fruit</label> <input type="text" size="15" id="fruit">
<label for="vegetable">Enter a vegetable</label> <input type="text" id="vegetable">

<select name="fruits" size="5">
  <option>banana</option>
  <option>cherry</option>
  <option>strawberry</option>
  <option>durian</option>
  <option>blueberry</option>
</select>

<select name="vegetables" size="5">
<option>carrot</option>
<option>cucumber</option>
<option>cauliflower</option>
<option>celery</option>
<option>collard greens</option>
</select>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Specifications

| Specification                                                               | Status                   |
| --------------------------------------------------------------------------- | ------------------------ |
| {{SpecName('HTML WHATWG', 'input.html#attr-input-size', 'size attribute')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5.1', 'input.html#attr-size-accept', 'size attribute')}}    | {{Spec2('HTML5.1')}}     |

## Browser compatibility

{{Compat("html.elements.attribute.size")}}

## See also

- [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern)
