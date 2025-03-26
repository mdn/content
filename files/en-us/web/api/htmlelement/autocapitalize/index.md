---
title: "HTMLElement: autocapitalize property"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
page-type: web-api-instance-property
browser-compat: api.HTMLElement.autocapitalize
---

{{APIRef("HTML DOM")}}

The **`autocapitalize`** property of the {{domxref("HTMLElement")}} interface represents the element's capitalization behavior for user input. It is available on all HTML elements, though it doesn't affect all of them, including:

- {{htmlelement("input")}} and {{htmlelement("textarea")}} elements.
- Any element with [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) set on it.

`autocapitalize` doesn't affect behavior when typing on a physical keyboard. It affects the behavior of other input mechanisms such as virtual keyboards on mobile devices and voice input. This can assist users by making data entry quicker and easier, for example by automatically capitalizing the first letter of each sentence.

It reflects the value of the [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) HTML global attribute.

## Value

A string that represents the element's capitalization behavior for user input. Valid values are as follows:

- `none` or `off`
  - : No autocapitalization should be applied, that is, all letters should default to lowercase.
- `sentences` or `on`
  - : The first letter of each sentence should default to a capital letter; all other letters should default to lowercase.
- `words`
  - : The first letter of each word should default to a capital letter; all other letters should default to lowercase.
- `characters`
  - : All letters should default to uppercase.

## Examples

The following example shows how to control capitalization behavior for user input via script:

```html
<div>Current capitalization behavior is: <span id="ac-label"></span></div>
<div id="ac-element" contenteditable="true" autocapitalize="default">
  input here
</div>
<select id="ac-controller" type="checkbox" checked>
  <option value="default">default</option>
  <option value="none">none</option>
  <option value="sentences">sentences</option>
  <option value="words">words</option>
  <option value="characters">characters</option></select
>Select the capitalization behavior
```

```js
const label = document.getElementById("ac-label");
const element = document.getElementById("ac-element");
const controller = document.getElementById("ac-controller");

controller.addEventListener("input", (e) => {
  const behavior = e.target.value;
  label.textContent = behavior;
  element.autocapitalize = behavior;
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) HTML global attribute
