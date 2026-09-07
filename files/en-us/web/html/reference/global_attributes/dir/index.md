---
title: "`dir` HTML global attribute"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
page-type: html-attribute
browser-compat: html.global_attributes.dir
sidebar: htmlsidebar
---

The **`dir`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) is an [enumerated](/en-US/docs/Glossary/Enumerated) attribute that sets the element's _base text direction_ and directionally isolates its contents from surrounding text.

{{InteractiveExample("HTML Demo: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>

<hr />

<p lang="ar">هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p lang="ar" dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

## Values

It can have the following values:

- `ltr`, which sets a _left-to-right_ base direction;
- `rtl`, which sets a _right-to-left_ base direction;
- `auto`, which lets the user agent determine the base direction from the text, generally using the first character with a strong directionality (skipping `<bdi>`, `<script>`, `<style>`, `<textarea>`, and elements with valid `dir` attributes). For {{HTMLElement("textarea")}} and {{HTMLElement("pre")}}, the rendering direction is determined separately for each paragraph of text.

> [!NOTE]
> The `auto` value should be used for data with an unknown directionality, like data coming from user input or external data.
>
> If the [`dirname`](/en-US/docs/Web/HTML/Reference/Attributes/dirname) attribute is used when users submit input, it may be possible to render the data with a specified directionality instead of relying on automatic detection.

If unspecified or invalid, the direction is generally [inherited](#inheritance) from the parent element. Omitting `dir` does not enable automatic direction detection.

### Inheritance

If an element has no `dir` attribute, it generally inherits the direction of its [parent element](/en-US/docs/Web/API/Node/parentElement). If no ancestor sets a direction, the default is left-to-right.

There are exceptions:

- A {{HTMLElement("bdi")}} element determines its direction from its content, as if `dir="auto"` were set.
- An [`<input type="tel">`](/en-US/docs/Web/HTML/Reference/Elements/input/tel) element uses left-to-right direction.

## Usage notes

The base direction is used by the Unicode Bidirectional Algorithm ([BiDi](/en-US/docs/Glossary/BiDi)). While characters strongly typed as LTR or RTL (such as Latin, Hebrew, or Arabic letters) establish directionality for themselves and all neutral characters in between (creating "runs" of text), the base direction is necessary in two scenarios:

- It is assumed by neutral characters (like spaces or punctuation) at the boundaries of runs of text with different directionalities, often including at the very beginnings or ends.
- It is used to order runs of text.

For example, consider the first English paragraph in the [Try it](#try_it) demo. There are two runs of text: the English text (LTR due to the Latin characters) and the final period (which is at the end of the `p` element, so assumes the base direction RTL). These runs of text are laid out right-to-left, so the text appears first on the right edge, followed to its left by the period. Similarly, the first Arabic paragraph inherits the LTR base direction from the HTML document, so the RTL Arabic text appears on the left edge, followed to its right by the period (with LTR direction). Both paragraphs are typographically incorrect.

Even for documents in a single script, it is recommended to explicitly set `dir` on the root element, which is especially important for RTL scripts, because the default LTR base direction is wrong. The [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute declares the language, but does not imply the base direction.

This attribute can be overridden by the CSS properties {{ cssxref("direction") }} and {{ cssxref("unicode-bidi") }}, if a CSS page is active and the element supports these properties.

As the directionality of the text is semantically related to its content and not to its presentation, it is recommended that web developers use this attribute instead of the related CSS properties when possible. That way, the text will display correctly even on a browser that doesn't support CSS or has the CSS deactivated.

An image can have its `dir` property set to `"rtl"` in which case the HTML attributes `title` and `alt` will be formatted and defined as `"rtl"`.

When a table has its `dir` set to `"rtl"`, the column order is arranged from right to left.

The {{HTMLElement("bdo")}} element requires `dir="ltr"` or `dir="rtl"`. On this element, the attribute overrides the characters' intrinsic directionality instead of only setting a base direction.

Browsers might allow users to change the directionality of {{ HTMLElement("input") }} and {{ HTMLElement("textarea") }} elements in order to assist with authoring content.
Chrome and Safari provide a directionality option in the contextual menu of input fields.
Firefox uses <kbd>Ctrl</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Shift</kbd> + <kbd>X</kbd> inside a `<textarea>` to toggle text direction.
These features toggle the `dir` attribute value between `ltr` and `rtl`.

## Examples

### Setting document-level direction

Set `dir="rtl"` on the {{HTMLElement("html")}} element when the page is predominantly written in a right-to-left script, such as Arabic or Hebrew. Use `dir` on a block within the page when that block needs a different base direction.

In this Arabic document, the English paragraph needs both `dir="ltr"` and `lang="en"`.

```html
<!doctype html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>صفحة عربية</title>
  </head>
  <body>
    <p>محتوى الصفحة باللغة العربية.</p>
    <p dir="ltr" lang="en">This paragraph is in English.</p>
  </body>
</html>
```

### Setting text direction explicitly

This example explicitly sets the base direction of two paragraphs. The base direction affects the default alignment and the placement of punctuation.

```html
<p dir="ltr" lang="en">This sentence is in English and reads left to right.</p>
<p dir="rtl" lang="ar">
  هذه الجملة باللغة العربية وتُقرأ من اليمين إلى اليسار.
</p>
```

### Inline bidirectional text

When an inline phrase has a different base direction from the surrounding text, tightly wrap the whole phrase in an element with the appropriate `dir` value. This also isolates the phrase's direction from its surroundings, so punctuation and numbers outside it are not treated as part of the phrase. Use an existing semantic element, such as {{HTMLElement("cite")}} for a book title, or a {{HTMLElement("bdi")}} if no other element is appropriate.

```html
<p dir="rtl" lang="ar">
  اقرأ <cite dir="ltr" lang="en">How the Grinch Stole Christmas!</cite> اليوم.
</p>
```

Note that the exclamation mark, a part of the title, is inside the `<cite>` element. If outside, it will adopt the base direction and therefore appear on the left edge of the title.

### Using dir="auto" for user-generated content

When the direction of text is not known in advance, such as for user comments, use `dir="auto"`. The browser uses the first strongly directional character to determine the element's base direction. This is a heuristic, not language detection: a comment that starts with an English name and continues in Arabic will get a left-to-right base direction. Use an explicit direction when it is known.

Here, the paragraphs represent two possible comments. The comments are written by users, so the site is not aware of their languages during rendering.

```html
<p dir="auto">This comment is in English.</p>
<p dir="auto">هذا التعليق باللغة العربية.</p>
```

The {{HTMLElement("bdi")}} element offers the same effect, and is terser for inline isolation, especially when no semantic element is appropriate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).
- {{domxref("HTMLElement.dir")}} that reflects this attribute.
- [Handling different text directions](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Creating HTML pages in Arabic, Hebrew and other right-to-left scripts](https://www.w3.org/International/tutorials/bidi-xhtml/index.en.html) on w3.org
