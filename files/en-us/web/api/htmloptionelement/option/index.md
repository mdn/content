---
title: Option()
slug: Web/API/HTMLOptionElement/Option
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - HTML DOM
  - HTMLOptionElement
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsExample
  - NeedsSpecTable
browser-compat: api.HTMLOptionElement.Option
---
{{APIRef("HTML DOM")}}

The **`Option()`** constructor creates a new
{{domxref("HTMLOptionElement")}}.

## Syntax

```js
new Option()
new Option(text)
new Option(text, value)
new Option(text, value, defaultSelected)
new Option(text, value, defaultSelected, selected)
```

### Parameters

- `text` {{optional_inline}}
  - : A string representing the content of the element, i.e. the
    displayed text. If this is not specified, a default value of "" (empty string) is
    used.
- `value` {{optional_inline}}
  - : A string representing the value of the
    {{domxref("HTMLOptionElement")}}, i.e. the value attribute of the equivalent
    {{htmlelement("option")}}. If this is not specified, the value of text is used as the
    value, e.g. for the associated {{htmlelement("select")}} element's value when the form
    is submitted to the server.
- `defaultSelected` {{optional_inline}}
  - : A value of either `true` or `false` that sets the {{htmlattrxref("selected", "option")}}
    attribute value, i.e. so that this {{htmlelement("option")}} will be the default value
    selected in the {{htmlelement("select")}} element when the page is first loaded. If
    this is not specified, a default value of false is used. Note that a value of true
    does not set the option to selected if it is not already selected.
- `selected` {{optional_inline}}
  - : A value of either `true` or `false` that sets the option's selected state; the default is false
    (not selected). If omitted, even if the defaultSelected argument is true, the option
    is not selected.

## Examples

### Just add new options

```js
 /* assuming we have the following HTML
<select id='s'>

</select>
*/

const s = document.getElementById('s');
const options = [Four, Five, Six];

options.forEach((element,key) => {
    s[key] = new Option(element,key);
});
```

### Append options with different parameters

```js
/* assuming we have the following HTML
<select id="s">
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
</select>
*/

const s = document.getElementById('s');
const options = [ 'zero', 'one', 'two' ];

options.forEach((element, key) => {
  if (element === 'zero') {
    s[key] = new Option(element, s.options.length, false, false);
  }
  if (element === 'one') {
    s[key] = new Option(element, s.options.length, true, false); // Will add the "selected" attribute
  }
  if (element === 'two') {
    s[key] = new Option(element, s.options.length, false, true); // Just will be selected in "view"
  }
});

/* Result
<select id="s">
  <option value="0">zero</option>
  <option value="1" selected="">one</option>
  <option value="2">two</option> // User will see this as 'selected'
</select>
*/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
