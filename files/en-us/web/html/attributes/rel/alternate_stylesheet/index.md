---
title: Alternate stylesheet
slug: Web/HTML/Attributes/rel/alternate_stylesheet
page-type: html-attribute-value
browser-compat: html.elements.link.rel.alternate_stylesheet
---

{{HTMLSidebar}}

The **`alternate stylesheet`** keyword pair, when used as a value for the [`rel`](/en-US/docs/Web/HTML/Element/link#rel) attribute of the {{HTMLElement("link")}} element, indicates that the target resource is an _alternative style sheet_. Specifying **alternative style sheets** in a web page allows users to see multiple versions of a page based on their needs or preferences.

> [!NOTE]
> This feature is not well supported in browsers without an extension. To offer alternative presentations that work with a user's existing preferences, see the CSS [media features](/en-US/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} and {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox lets users select alternate {{glossary("stylesheet", "stylesheets")}} using the _View > Page Style_ submenu, which displays the values of the [`title`](/en-US/docs/Web/HTML/Global_attributes/title) attributes. Other browsers require an extension to enable this functionality. The web page can also provide its own user interface to let users switch styles.

## Examples

### Specifying alternate stylesheets

Alternate stylesheets are specified using {{HTMLElement("link")}} elements with `rel="alternate stylesheet"` and `title="…"` attributes. For example:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In this example, the styles "Default Style", "Fancy", and "Basic" will be listed in the Firefox _Page Style_ submenu with "Default Style" pre-selected. When the user selects a different style, the page will immediately be re-rendered using that style sheet.

No matter what style is selected, the rules from the `reset.css` stylesheet will always be applied.

### Try it out

[Try a working example here](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Any stylesheet in a document falls into one of the following categories:

- **Persistent** (has `rel="stylesheet"`, no `title=""`): always applies to the document.
- **Preferred** (has `rel="stylesheet"`, with `title="…"` specified): applied by default, but {{domxref("StyleSheet.disabled", "disabled", "", 1)}} if an alternate stylesheet is selected. **There can only be one preferred stylesheet**, so providing stylesheets with different title attributes will cause some of them to be ignored.
- **Alternate** (`rel="alternate stylesheet"`, with `title="…"` specified): disabled by default, can be selected.

In cases where a stylesheet menu exists, when style sheets are referenced with a `title` attribute on the {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} or {{HTMLElement("style")}} element, the title becomes one of the choices offered to the user. Style sheets linked with the same [`title`](/en-US/docs/Web/HTML/Global_attributes/title) are part of the same choice. Style sheets linked without a `title` attribute are always applied.

Use `rel="stylesheet"` to link to the default style, and `rel="alternate stylesheet"` to link to alternative style sheets. This tells the browser which style sheet title should be selected by default, and makes that default selection apply in browsers that do not support alternate style sheets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS](/en-US/docs/Web/CSS)
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
