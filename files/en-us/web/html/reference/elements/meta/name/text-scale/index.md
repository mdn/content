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
      - : The default value. The page is not opted in to the root element's `font-size` scaling in proportion to OS and browser-level text scale settings.

## Description

The `<meta name="text-scale" content="scale">` element can be included in a page to make the {{htmlelement("html")}} root element's initial `font-size` scale in proportion to OS and browser-level text scale settings. Specifically, it causes the value of `font-size: medium` to be changed in proportion to these text scale settings, and `font-size: medium` is the property's initial value.

In practice, this means that in supporting browsers, provided you don't set a root `font-size` in units unrelated to font size (like pixels or viewport units), relative `font-size` settings such as keywords (like `medium`) or `em`s/`rem`s will be scaled in proportion to user OS or browser font size settings.

For example, the following rule:

```css
p {
  font-size: medium /* or "initial" */;
}
```

would result in all {{htmlelement("p")}} elements receiving a scaled font size.

Recommended usage is to:

1. Include `<meta name="text-scale" content="scale" />` in your page.
2. Not override the initial {{cssxref(":root")}} `font-size` with an absolute length value like `16px`.
3. Use only font-relative units such as `em`/`rem` or keywords such as `small`, `x-large`, etc. to size content.
4. Not use the [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale) environment variable to size dimensions. This has similar effects, but the `<meta>` tag is easier to use, and also has some helpful effects on desktop browsers (`env(preferred-text-scale)` only really has any useful effect on mobile browsers).

   > [!WARNING]
   > Using both these features together should be done with caution as it may result in text scaling being applied twice. For example, when setting `<meta name="text-scale">` on the page and then combining `em` or `rem` with `env(preferred-text-scale)` — `font-size: calc(2rem * env(preferred-text-scale))` — you will end up with small font sizes being smaller and large font sizes being larger. This won't be a problem when multiplying by an absolute length (for example, `px`), which isn't relative to the document's initial font size — for example `font-size: calc(32px * env(preferred-text-scale))`.

This recommended usage allows you to signal to the browser that the page is sized in a way that will scale well across various user-selected font size preferences. It also causes the browser to disable existing browser-based mechanisms and heuristics.

For example:

- In Chrome for Android, `rem` and `em` font sizes will scale in proportion to the global OS "Font size" setting. Text autosizing is disabled.
- In Chrome for desktop, the [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale) environment variable will reflect the multiplier that corresponds to Chrome's Settings > Appearance > Font size, but other than that, it has no discernable effect.
- The `<meta name="text-scale" content="scale">` element also has other effects in Android Webview: see https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3.

## Examples

### Using meta viewport text-scale

The following example demonstrates the basics of using `<meta name="text-scale" content="scale">`.

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

We also include a {{cssxref("@media")}} query to set a larger `font-size` for narrow screens.

```css live-sample___text-scale
.text-scale {
  font-size: 1rem;
}

.fixed {
  font-size: 20px;
}

@media (width < 600px) {
  .text-scale {
    font-size: 1.5rem;
  }

  .fixed {
    font-size: 30px;
  }
}
```

#### Result

{{embedlivesample("text-scale", "100%", "200")}}

Test this in a supporting browser. For example, load it in Chrome for Android and try adjusting the OS Font size settings. You can open the demo in a separate tab using the link below to make testing easier:

{{ LiveSampleLink("text-scale", "Open the example in a separate tab") }}

You'll see that the top and bottom lines of text scale in proportion to the OS settings, whereas the middle line of text doesn't change size. This is also true when the `@media` query rules are applied to the page on narrow screens.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
