---
title: "HTML attribute: size"
slug: Web/HTML/Attributes/size
page-type: html-attribute
browser-compat:
  - html.elements.select.size
  - html.elements.input.size
---

{{HTMLSidebar}}

The **`size`** attribute defines the width of the {{htmlelement('input')}} and the height of the {{htmlelement('select')}} element. For an `input` element, it defines the number of characters that the user agent allows the user to see when editing the value. For a `select` element, it defines the number of options that should be shown to the user. This must be a valid non-negative integer greater than zero.

If no `size` is specified, or an invalid value is specified, the input has no size declared, and the form control will be the default width based on the user agent. If CSS targets the element with properties impacting the width, CSS takes precedence.

The `size` attribute has no impact on constraint validation.

{{EmbedInteractiveExample("pages/tabbed/attribute-size.html", "tabbed-standard")}}

## Examples

By adding `size` on some input types, the width of the input can be controlled. Adding size on a select changes the height, defining how many options are visible in the closed state.

```html
<label for="fruit">Enter a fruit</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">Enter a vegetable</label>
<input type="text" id="vegetable" />

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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength)
- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength)
- [`pattern`](/en-US/docs/Web/HTML/Attributes/pattern)
