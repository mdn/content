---
title: "Element: ariaInvalid property"
short-title: ariaInvalid
slug: Web/API/Element/ariaInvalid
page-type: web-api-instance-property
browser-compat: api.Element.ariaInvalid
---

{{APIRef("DOM")}}

The **`ariaInvalid`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) attribute. Relevant for the [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role), [`slider`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), and [`tree`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) roles, it indicates to the accessibility API whether the entered value does not conform to the format expected by the application.

If the attribute is not present, or is set to the empty string, assistive technology will treat the value as if it were set to `false`. If the attribute is present but set to a value other than `false`, `grammar`, `spelling` or the empty string (`""`), assistive technology treats the value as `true`. The property reflects the attribute value as set, not as handled by assistive technology.

## Value

A string with one of the following values:

- `"true"`
  - : The element is invalid.
- `"false"` (default)
  - : The element is not in an invalid state.
- `"grammar"`
  - : The element is in an invalid state because grammatical error was detected.
- `"spelling"`
  - : The element is in an invalid state because spelling error was detected.

## Examples

In this example the [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) attribute on the element with an ID of `quote` is omitted, returning `null` and treated as `false`. Using `ariaInvalid` we update the value to `grammar` (because there are two errors).

```html
<div id="quote" role="textbox" contenteditable>you are your best thing..</div>
```

```html hidden
<hr />
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const el = document.getElementById("quote");
log(`Initial value: ${el.ariaInvalid}`);
el.ariaInvalid = "grammar";
log(`Updated value: ${el.ariaInvalid}`);
```

{{EmbedLiveSample("Examples", "", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.ariaRequired")}}
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- {{domxref("Element.ariaErrorMessageElements")}}
