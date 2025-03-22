---
title: writingsuggestions
slug: Web/HTML/Global_attributes/writingsuggestions
page-type: html-attribute
browser-compat: html.global_attributes.writingsuggestions
---

{{HTMLSidebar("Global_attributes")}}

The **`writingsuggestions`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an {{glossary("enumerated")}} attribute indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

Some browsers provide writing suggestions to users as they type in editable fields. Suggestions usually appear as greyed-out text positioned after the text cursor, completing the user's sentence. While this can be helpful to users, developers might want to turn writing suggestions off in some cases, such as when providing site-specific writing suggestions.

The `writingsuggestions` attribute can be set on editable fields such as {{htmlelement('input')}} or {{htmlelement('textarea')}} elements, or on other HTML elements to control the behavior of the browser's suggestions on sections of a page, or on the entire page.

## Syntax

In browsers that support them, writing suggestions are enabled by default. To disable them, set the `writingsuggestions` attribute's value to `false`. Setting the attribute's value to `true`, or omitting the value, enables writing suggestions.

To disable writing suggestions:

```html
<input type="text" writingsuggestions="false" />
```

To enable writing suggestions:

```html
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute
- [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute
- [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute
- {{HTMLElement("textarea")}}
- {{HTMLElement("input")}}
- {{HTMLElement("datalist")}} and [`list`](/en-US/docs/Web/HTML/Element/input#list) attribute
