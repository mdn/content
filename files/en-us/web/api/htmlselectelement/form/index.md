---
title: HTMLSelectElement.form
slug: Web/API/HTMLSelectElement/form
tags:
  - API
  - HTMLSelectElement
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLSelectElement.form
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.form`** read-only property returns a
{{domxref("HTMLFormElement")}} representing the form that this element is associated
with. If the element is not associated with of a {{HTMLElement("form")}} element, then
it returns `null`.

## Syntax

```js
aForm = aSelectElement.form.selectname;
```

## Example

### HTML

```html
<form action="http://www.google.com/search" method="get">
 <label>Google: <input type="search" name="q"></label> <input type="submit" value="Search...">
</form>
```

### Javascript

A property available on all form elements, "type" returns the type of the calling form
element. For SELECT, the two possible values are "`select-one`" or
"`select-multiple`", depending on the type of selection list. The below code
gives all SELECT elements in a particular form a CSS class of
"`selectclass`":

```html
<script type="text/javascript">
var form_element = document.getElementById('subscribe_form');
var vist = form_element.style;
if (vist.display=='' || vist.display=='none')
{
  vist.display = 'block';
}
else
{
  vist.display = 'none';
}
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
