---
title: HTML guidelines
slug: MDN/Guidelines/Code_guidelines/HTML
tags:
  - Code
  - Guide
  - Guidelines
  - HTML
  - MDN Meta
---
{{MDNSidebar}}

The following guidelines cover how to write HTML for MDN code examples.

## In this article

- [Doctype and metadata](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#doctype_and_metadata)

  - [Doctype](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#doctype)
  - [Document language](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#document_language)
  - [Document characterset](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#document_characterset)
  - [Viewport meta tag](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#viewport_meta_tag)

- [General markup coding style](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#general_markup_coding_style)

  - [Use lower case](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#use_lowercase)
  - [Trailing slashes](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#trailing_slashes)
  - [Quoting attributes](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#quoting_attributes)
  - [Use double quotes](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#use_double_quotes)
  - [Boolean attributes](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#boolean_attributes)
  - [Class and ID names](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#class_and_id_names)
  - [Entity references](/en-US/docs/MDN/Guidelines/Code_guidelines/HTML#entity_references)

## Doctype and metadata

> **Note:** The guidelines in this section apply only when you need to show a complete HTML document. Most of the time you won't need to do this; a snippet is usually enough to demonstrate a feature. When using the [EmbedLiveSample macro](/en-US/docs/MDN/Structures/Code_examples#traditional_live_samples), just include the HTML snippet; it will automatically be inserted it into a full HTML document when displayed.

### Doctype

You should use the HTML5 doctype. It is short, easy to remember, and backwards compatible:

```html example-good
<!DOCTYPE html>
```

### Document language

Set the document language using the {{htmlattrxref('lang')}} attribute on your {{htmlelement("html")}} element:

```html example-good
<html lang="en-US">
```

This is good for accessibility and search engines, helps with localizing content, and reminds people to use best practices.

### Document characterset

You should also define your document's characterset like so:

```html example-good
<meta charset="utf-8">
```

Use UTF-8 unless you have a very good reason not to; it will cover your character needs pretty much regardless of what language you are using in your document. In addition, you should always specify the characterset as early as possible within your HTML's {{HTMLElement("head")}} block (within the first kilobyte), as it protects against a rather [nasty Internet Explorer security vulnerability](https://support.microsoft.com/kb/928847).

### Viewport meta tag

Finally, you should always add the viewport meta tag into your HTML {{HTMLElement("head")}}, to give the example a better chance of working on mobile devices. You should include at least the following in your document, which can be modified later on as the need arises:

```html example-good
<meta name="viewport" content="width=device-width">
```

See [Using the viewport meta tag to control layout on mobile browsers](/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) for further details.

## General markup coding style

### Use lowercase

Use lowercase for all element names and attribute names/values, as it looks neater and means you can write markup faster:

This is good:

```html example-good
<p class="nice">This looks nice and neat</p>
```

This is not so good:

```html example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

### Trailing slashes

Don't include XHTML-style trailing slashes for empty elements, as they are unnecessary and slow things down. They can also break old browsers if you are not careful (although from what we can recall, this hasn't been a problem since Netscape 4).

This is fine:

```html example-good
<input type="text">
<hr>
```

The slashes are not needed:

```html example-bad
<input type="text" />
<hr />
```

### Quoting attributes

You should put all attribute values in double quotes. It is tempting to omit quotes since HTML5 allows this, but markup is neater and easier to read if you do include them. For example, this is better:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border">
```

than this:

```html example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

It can also cause problems — in the above example the `alt` attribute will be interpreted as multiple attributes, because there are no quotes to specify that "A circular globe icon" is a single attribute value.

### Use double quotes

Use double quotes for HTML, not single quotes:

```html example-good
<p class="important">Yes</p>
```

```html example-bad
<p class='important'>Nope</p>
```

### Boolean attributes

Don't write out boolean attributes in full; you can just write the attribute name to set it. For example, you can write:

```html example-good
required
```

This is perfectly understandable and works fine; the longer version with the value is supported but not necessary:

```html example-bad
required="required"
```

### Class and ID names

Use semantic class/ID names, and separate multiple words with hyphens. Don't use camelCase.

Good:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

Bad:

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

### Entity references

Don’t use entity references unnecessarily — use the literal character wherever possible (you'll still need to escape characters like angle brackets and quote marks).

As an example you could just write

```html example-good
<p>© 2018 Me</p>
```

Instead of

```html example-bad
<p>&copy; 2018 Me</p>
```

This is fine as long as you declare a UTF-8 character set.

## Good HTML examples on MDN

You can find good, concise, meaningful HTML snippets at the top of the [HTML reference pages](/en-US/docs/Web/HTML/Reference) — our interactive examples are generally written to follow these guidelines, although be aware that they may differ in some places as they were mostly written before the guidelines were newly written.
