---
title: "HTML attribute: readonly"
short-title: readonly
slug: Web/HTML/Attributes/readonly
page-type: html-attribute
browser-compat:
  - html.elements.input.readonly
  - html.elements.textarea.readonly
---

{{HTMLSidebar}}

The Boolean **`readonly`** attribute, when present, makes the element not mutable, meaning the user can not edit the control.

{{EmbedInteractiveExample("pages/tabbed/attribute-readonly.html", "tabbed-shorter")}}

## Overview

If the `readonly` attribute is specified on an input element, because the user can not edit the input, the element does not participate in constraint validation.

The `readonly` attribute is supported by `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}`, and `{{HTMLElement("input/number","number")}}` {{HTMLElement("input")}} types and the {{HTMLElement("textarea")}} form control elements. If present on any of these input types and elements, the {{cssxref(':read-only')}} pseudo class will match. If the attribute is not included, the {{cssxref(':read-write')}} pseudo class will match.

The attribute is not supported or relevant to {{HTMLElement("select")}} or input types that are already not mutable, such as `{{HTMLElement("input/checkbox","checkbox")}}` and `{{HTMLElement("input/radio","radio")}}` or cannot, by definition, start with a value, such as the `{{HTMLElement("input/file","file")}}` input type. `{{HTMLElement("input/range","range")}}` and `{{HTMLElement("input/color","color")}}`, as both have default values. It is also not supported on `{{HTMLElement("input/hidden","hidden")}}` as it can not be expected that a user to fill out a form that is hidden. Nor is it supported on any of the button types, including `image`.

> [!NOTE]
> Only text controls can be made read-only, since for other controls (such as checkboxes and buttons) there is no useful distinction between being read-only and being disabled, so the `readonly` attribute does not apply.

When an input has the `readonly` attribute, the {{cssxref(":read-only")}} pseudo-class also applies to it. Conversely, inputs that support the `readonly` attribute but don't have the attribute set match the {{cssxref(":read-write")}} pseudo-class.

### Attribute interactions

The difference between [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) and `readonly` is that read-only controls can still function and are still focusable, whereas disabled controls can not receive focus and are not submitted with the form and generally do not function as controls until they are enabled.

Because a read-only field cannot have its value changed by a user interaction, [`required`](/en-US/docs/Web/HTML/Attributes/required) does not have any effect on inputs with the `readonly` attribute also specified.

The only way to modify dynamically the value of the readonly attribute is through a script.

> [!NOTE]
> The `required` attribute is not permitted on inputs with the `readonly` attribute specified.

### Usability

Browsers display the `readonly` attribute.

### Constraint validation

If the element is read-only, then the element's value can not be updated by the user, and does not participate in constraint validation.

## Example

### HTML

```html
<div class="group">
  <input type="text" value="Some value" readonly="readonly" id="text" />
  <label for="text">Text box</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Date</label>
</div>
<div class="group">
  <input type="email" value="Some value" readonly="readonly" id="email" />
  <label for="email">Email</label>
</div>
<div class="group">
  <input type="password" value="Some value" readonly="readonly" id="pwd" />
  <label for="pwd">Password</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Some value</textarea>
  <label for="ta">Message</label>
</div>
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(':read-only')}} and {{cssxref(':read-write')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
