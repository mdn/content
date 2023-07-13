---
title: Guidelines for styling HTML code examples
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
page-type: mdn-writing-guide
---

{{MDNSidebar}}

The following guidelines cover how to write HTML example code for MDN Web Docs.

## General guidelines for HTML code examples

### Choosing a format

Opinions on correct indentation, whitespace, and line lengths have always been controversial. Discussions on these topics are a distraction from creating and maintaining content.

On MDN Web Docs, we use [Prettier](https://prettier.io/) as a code formatter to keep the code style consistent (and to avoid off-topic discussions). You can consult our [configuration file](https://github.com/mdn/content/blob/main/.prettierrc.json) to learn about the current rules, and read the [Prettier documentation](https://prettier.io/docs/en/index.html).

Prettier formats all the code and keeps the style consistent. Nevertheless, there are a few additional rules that you need to follow.

## Complete HTML document

> **Note:** The guidelines in this section apply only when you need to show a complete HTML document. A snippet is usually enough to demonstrate a feature. When using the [EmbedLiveSample macro](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples), just include the HTML snippet; it will automatically be inserted into a full HTML document when displayed.

### Doctype

You should use the HTML5 doctype. It is short, easy to remember, and backwards compatible.

```html example-good
<!doctype html>
```

### Document language

Set the document language using the [`lang`](/en-US/docs/Web/HTML/Global_attributes#lang) attribute on your {{htmlelement("html")}} element:

```html example-good
<html lang="en-US"></html>
```

This is good for accessibility and search engines, helps with localizing content, and reminds people to use best practices.

### Document characterset

You should also define your document's characterset like so:

```html example-good
<meta charset="utf-8" />
```

Use UTF-8 unless you have a very good reason not to; it will cover all character needs pretty much regardless of what language you are using in your document.

### Viewport meta tag

Finally, you should always add the viewport meta tag into your HTML {{HTMLElement("head")}} to give the code example a better chance of working on mobile devices. You should include at least the following in your document, which can be modified later on as the need arises:

```html example-good
<meta name="viewport" content="width=device-width" />
```

See [Using the viewport meta tag to control layout on mobile browsers](/en-US/docs/Web/HTML/Viewport_meta_tag) for further details.

## Attributes

You should put all attribute values in double quotes. It is tempting to omit quotes since HTML5 allows this, but markup is neater and easier to read if you do include them. For example, this is better:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…than this:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Omitting quotes can also cause problems. In the above example, the `alt` attribute will be interpreted as multiple attributes because there are no quotes to specify that "A circular globe icon" is a single attribute value.

## Boolean attributes

Don't write out boolean attributes in full; you can just write the attribute name to set it. For example, you can write:

```html example-good
required
```

This is perfectly understandable and works fine; the longer version with the value is supported but not necessary:

```html-nolint example-bad
required="required"
```

## Case

Use lowercase for all element names and attribute names/values because it looks neater and means you can write markup faster. For example:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Class and ID names

Use semantic class/ID names, and separate multiple words with hyphens. Don't use camelCase. For example:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Double quotes

Use double quotes for HTML, not single quotes, like so:

```html example-good
<p class="important">Yes</p>
```

```html-nolint example-bad
<p class='important'>Nope</p>
```

## Entity references

Don't use entity references unnecessarily — use the literal character wherever possible (you'll still need to escape characters like angle brackets and quote marks).

As an example, you could just write:

```html example-good
<p>© 2018 Me</p>
```

Instead of:

```html example-bad
<p>&copy; 2018 Me</p>
```

This is fine as long as you declare a UTF-8 character set.

## HTML elements

There are some rules for writing about HTML elements on MDN Web Docs. Adhering to these rules produces consistent descriptions of elements and their components and also ensures correct linking to detailed documentation.

- **Element names**: Use the [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) macro, which creates a link to the MDN Web Docs page for that element. For example, writing `\{{HTMLElement("title")}}` produces "{{HTMLElement("title")}}".
  If you don't want to create a link, **enclose the name in angle brackets** and use the "Inline Code" style (e.g., `<title>`).
- **Attribute names**: Use "Inline Code" style to put attribute names in `code font`.
  Additionally, put them in **`bold face`** when the attribute is mentioned in association with an explanation of what it does or when it is used for the first time on the page.
- **Attribute values**: Use the "Inline Code" style to apply `<code>` to attribute values, and don't use quotation marks around string values, unless needed by the syntax of a code sample. For example, "When the `type` attribute of an `<input>` element is set to `email` or `tel` ...".
