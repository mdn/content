---
title: <meta name="text-scale">
short-title: text-scale
slug: Web/HTML/Reference/Elements/meta/name/text-scale
page-type: html-attribute-value
browser-compat: html.elements.meta.name.text-scale
sidebar: htmlsidebar
---

The **`text-scale`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of a {{htmlelement("meta")}} element enables opting the page in to having the {{htmlelement("html")}} root element's {{cssxref("font-size")}} scale in proportion to OS and browser-level text scale settings.

## Usage notes

A `<meta name="text-scale">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : Specifies the {{cssxref("font-size")}} scale opt-in behavior.
    Its value is a keyword, which can be one of the following:
    - `scale`
      - : Opts the page in to having the {{htmlelement("html")}} root element's {{cssxref("font-size")}} scale in proportion to OS and browser-level text scale settings. It also causes the browser to disable existing browser-based mechanisms (such as full-page zoom on Windows) and heuristics (for example, text autosizing on mobile).
    - `legacy`
      - : The default value. The page is not opted in to the root element's `font-size` scaling in proportion to OS and browser-level text scale settings.

## Description

The `<meta name="text-scale" content="scale">` element can be included in a page to make the {{htmlelement("html")}} root element's `font-size` scale in proportion to OS and browser-level text scale settings. In practice, this means that in supporting browsers, provided you don't set a root `font-size` in units unrelated to font size (like pixels or viewport units), relative `font-size` settings such as `2em` or `1rem` will be scaled in proportion to user OS or browser font size settings.

This means that you can signal to the browser that the page is sized in a way that will scale well across various user-selected font size preferences. It also causes the browser to disable existing browser-based mechanisms and heuristics.

For example:

- In Chrome for Android, `rem` and `em` font sizes will scale in proportion to the global OS "Font size" setting. Text autosizing is disabled.
- In Chrome for desktop, the [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale) environment variable will reflect the multiplier that corresponds to Chrome's Settings > Appearance > Font size, but other than that, it has no discernable effect.
- In Chrome for Windows, in addition to the above point, full-page zoom is disabled.

> [!NOTE]
> You can also set page sizes to be proportional to browser or OS-level font settings by using the [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale) environment variable to size dimensions. However, unless it is not supported in your target browser set or you are not able to edit the HTML, you are advised to use the `<meta>` tag rather than the `env()` variable. The `<meta>` tag is easier to use, and also has some helpful effects on desktop browsers (`env(preferred-text-scale)` only really has any useful effect on mobile browsers).
>
> You are also advised not to use both — this results in the text scaling unexpectedly, with small font sizes being smaller and large font sizes being larger.

> [!NOTE]
> The `<meta name="text-scale" content="scale">` element also has other effects in Android Webview: see https://chromium.googlesource.com/chromium/src/+/b29d63222d10f4c7e620d057578d737969eb7ae3.

## Examples

### Using meta viewport text-scale

The following example demonmstrates the basics of using `<meta name="text-scale" content="scale">`.

#### HTML

We include the `<meta name="text-scale" content="scale">` element in the document `<head>`. We also include some text content inside {{htmlelement("p")}} elements with different `class` attributes set on them to allow us to target them with different styles.

```html live-sample___text-scale
<!doctype html>
<html>
  <head>
    <meta name="text-scale" content="scale" />
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

Test this in a supporting browser. For example, load it in Chrome for Android and try adjusting the OS Font size settings. You'll see that the top and bottom lines of text scale in proportion to the OS settings, whereas the middle line of text doesn't change size.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`env(preferred-text-scale)`](/en-US/docs/Web/CSS/Reference/Values/env#preferred-text-scale)
