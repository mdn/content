---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
page-type: html-attribute-value
browser-compat: html.elements.meta.name.text-scale
sidebar: htmlsidebar
---

The **`text-scale`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of a {{htmlelement("meta")}} element enables opting the page in to having the {{htmlelement("html")}} root element's initial {{cssxref("font-size")}} scale in proportion to OS and browser-level text scale settings.

## Usage notes

A `<meta name="text-scale">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : Specifies the {{cssxref("font-size")}} scale opt-in behavior.
    Its value is a keyword, which can be one of the following:
    - `scale`
      - : Opts the page in to having the {{htmlelement("html")}} root element's initial {{cssxref("font-size")}} scale in proportion to OS and browser-level text scale settings. It also causes the browser to disable existing browser-based mechanisms and heuristics (for example, text autosizing on mobile).
    - `legacy`
      - : The default value. The page is not opted in to the root element's `font-size` scaling in proportion to OS and browser-level text scale settings. This has the same effect as not including the `<meta>` element at all (OS-level font preferences are ignored.)

## Description

The `<meta name="text-scale">` element can be included in a document's {{htmlelement("head")}} to signal to the browser that the page is sized in a way that will scale well across various user-selected font size preferences, and causes it to disable existing browser-based mechanisms and heuristics.

The `<meta name="text-scale">` element makes the {{htmlelement("html")}} root element's initial `font-size` scale in proportion to OS and browser-level text scale settings; specifically, it defines the value of `font-size: medium` to be proportional to these text scale settings.

The {{cssxref("initial")}} value of the root {{cssxref("font-size")}} is `medium`, which defines the {{cssxref("rem")}} unit's value. Provided you set or allow the root `font-size` to default to a [local or root-relative `<length>`](/en-US/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) unit, any keyword (like `medium`) or local or root-relative length, such a `em` and `rem`, will be scaled in proportion to user OS or browser font size settings.

For example, with `<meta name="text-scale" content="scale">` included on the page, the following rule:

```css
p {
  font-size: medium;
}
```

would result in all {{htmlelement("p")}} elements receiving a scaled font size. You could also set `font-size` to `initial` to get the same effect.

Known effects include:

- In Chrome for Android, `rem` and `em` font sizes will scale in proportion to the global OS "Font size" setting. Text autosizing is disabled.
- In Chrome for desktop, the [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale) environment variable will reflect the multiplier that corresponds to Chrome's Settings > Appearance > Font size, but other than that, it has no discernable effect.
- The `<meta name="text-scale" content="scale">` element also has other effects in Android WebView: see https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3.

### Usage summary

To summarize, recommended usage is to:

1. Include `<meta name="text-scale" content="scale" />` in the `<head>` of your page.
2. Not override the initial {{cssxref(":root")}} `font-size` with an absolute length value like `16px`.
3. Use only font-relative units such as `em`/`rem` or keywords such as `small`, `x-large`, etc. to size content.

### `<meta name="text-scale">` versus `env(preferred-text-scale)`

You should prefer to use `<meta name="text-scale" />` to size dimensions relative to OS text scale settings rather than the [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale) environment variable. While they have similar effects, the `<meta>` tag is easier to use, and also has some helpful effects on desktop browsers (`env(preferred-text-scale)` only really has any useful effect on mobile browsers).

Avoid using both these features together as it may result in text scaling being applied twice. For example, when setting `<meta name="text-scale">` on the page and then combining `em` or `rem` with `env(preferred-text-scale)`, for example:

```css
font-size: calc(2rem * env(preferred-text-scale));
```

you will end up with small font sizes being smaller and large font sizes being larger.

## Examples

### Using meta viewport text-scale

This example demonstrates the basics of using `<meta name="text-scale" content="scale">`.

#### HTML

We include the `<meta name="text-scale" content="scale">` element in the document `<head>`, plus a [`<meta name="viewport">`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport) element to ensure correct display on mobile devices. We also include some text content inside {{htmlelement("p")}} elements with different `class` attributes set on them to allow us to target them with different styles.

```html live-sample___text-scale
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <p class="text-scale">
      This font size obeys the user's font preferences, whether those
      preferences are specified at the operating system level or the user agent
      level.
    </p>
    <p class="fixed">
      This font size does NOT respect the user's font preferences.
      <div class="text-scale">But this font size does!</div>
    </p>
  </body>
</html>
```

#### CSS

Text containers with a `class` of `text-scale` are given a {{cssxref("font-size")}} of `1rem`, which means that in browsers that support `<meta name="text-scale" content="scale">`, that text will scale as the OS/browser font settings are changed. Text containers with a `class` of `fixed` are given a `font-size` of `20px`, which means that this text will remain at a fixed size as the OS/browser font settings are changed.

```css live-sample___text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}
```

#### Result

{{embedlivesample("text-scale", "100%", "200")}}

Test this in a supporting browser. For example, load it in Chrome for Android and try adjusting the OS Font size settings. You can open the demo in a separate tab using the link below to make testing easier:

{{ LiveSampleLink("text-scale", "Open the example in a separate tab") }}

You'll see that the top and bottom lines of text scale in proportion to the OS settings, whereas the middle line of text doesn't change size.

### A text-scale-responsive layout

The following example demonstrates that with `<meta name="text-scale">` applied to a page, font-relative sizes can be used inside {{cssxref("@media")}} queries to cause supporting browsers to automatically adjust breakpoints as the OS text size is changed.

#### HTML

Like the previous example, our markup again includes the `<meta name="text-scale">` and `<meta name="viewport">` elements in the `<head>`. In this demo, the body content contains two elements — {{htmlelement("main")}} and {{htmlelement("aside")}} — to represent a main content column and a sidebar.

```html live-sample___text-scale-layout
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <main>Main content</main>
    <aside>Aside content</aside>
  </body>
</html>
```

#### CSS

We set our body element to have a {{cssxref("display")}} of `grid` and give the grid a {{cssxref("gap")}} of `24px`. By default, the main content and sidebar are laid out one below the other.

We then include a {{cssxref("@media")}} query that lays the elements out side-by-side via {{cssxref("grid-template-columns")}} when the viewport becomes wider than `40rem`.

```css live-sample___text-scale-layout
body {
  display: grid;
  gap: 24px;
  margin: 0;
}

main,
aside {
  background-color: silver;
  padding: 24px;
  font-size: 1.5rem;
}

@media (width > 40rem) {
  body {
    grid-template-columns: 1fr 18.75rem;
  }
}
```

#### Result

{{embedlivesample("text-scale-layout", "100%", "200")}}

Test this in a supporting browser like Chrome for Android. You can open the demo in a separate tab using the link below to make testing easier:

{{ LiveSampleLink("text-scale-layout", "Open the example in a separate tab") }}

You'll see that, as the OS Font size is increased, the breakpoint size increases in proportion to it. At larger OS font sizes, the main and aside will start to appear on top of each other whereas previously they appeared side-by-side.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
