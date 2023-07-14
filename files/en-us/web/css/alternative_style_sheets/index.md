---
title: Alternative style sheets
slug: Web/CSS/Alternative_style_sheets
page-type: guide
browser-compat: html.elements.link.rel.alternate_stylesheet
---

{{CSSRef}}

Specifying **alternative style sheets** in a web page provides a way for users to see multiple versions of a page, based on their needs or preferences.

> **Note:** This feature is not well supported in browsers without an extension. To offer alternative presentations that work with a user's existing preferences, see the CSS [media features](/en-US/docs/Web/CSS/@media#media_features) {{cssxref("@media/prefers-color-scheme","prefers-color-scheme")}} and {{cssxref("@media/prefers-contrast","prefers-contrast")}}.

Firefox lets the user select the stylesheet using the _View > Page Style_ submenu. Other browsers require an extension to enable this functionality. The web page can also provide its own user interface to let the user switch styles.

## An example: specifying the alternative stylesheets

The alternate stylesheets are commonly specified using a {{HTMLElement("link")}} element with `rel="alternate stylesheet"` and `title="…"` attributes. For example:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

In this example, the styles "Default Style", "Fancy", and "Basic" will be listed in the _Page Style_ submenu, with "Default Style" pre-selected. When the user selects a different style, the page will immediately be re-rendered using that style sheet.

No matter what style is selected, the rules from the reset.css stylesheet will always be applied.

### Try it out

[Try a working example here](https://mdn.github.io/css-examples/alt-style-sheets/).

## Details

Any stylesheet in a document falls into one of the following categories:

- **Persistent** (no `rel="stylesheet"`, no `title=""`): always applies to the document.
- **Preferred** (no `rel="stylesheet"`, with `title="…"` specified): applied by default, but {{domxref("StyleSheet.disabled", "disabled", "", 1)}} if an alternate stylesheet is selected. **There can only be one preferred stylesheet**, so providing stylesheets with different title attributes will cause some of them to be ignored.
- **Alternate** (`rel="alternate stylesheet"`, `title="…"` must be specified): disabled by default, can be selected.

When style sheets are referenced with a `title` attribute on the {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} or {{HTMLElement("style")}} element, the title becomes one of the choices offered to the user. Style sheets linked with the same `title` are part of the same choice. Style sheets linked without a `title` attribute are always applied.

Use `rel="stylesheet"` to link to the default style, and `rel="alternate stylesheet"` to link to alternative style sheets. This tells the browser which style sheet title should be selected by default, and makes that default selection apply in browsers that do not support alternate style sheets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
