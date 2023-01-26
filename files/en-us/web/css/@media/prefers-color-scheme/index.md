---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
page-type: css-media-feature
tags:
  - "@media"
  - CSS
  - Reference
  - Web
  - media feature
  - prefers-color-scheme
browser-compat: css.at-rules.media.prefers-color-scheme
---

{{CSSRef}}

The **`prefers-color-scheme`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#targeting_media_features) is used to detect if a user has requested light or dark color themes.
A user indicates their preference through an operating system setting (e.g. light or dark mode) or a user agent setting.

## Embedded elements

For SVG and iframes, `prefers-color-scheme` lets you set a CSS style for the SVG or iframe based on the [`color-scheme`](/en-US/docs/Web/CSS/color-scheme) of the parent element in the web page.
SVGs must be used embedded (i.e., `<img src="circle.svg" alt="circle" />`) as opposed to [inlined in HTML](/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction#basic_example).
An example of using `prefers-color-scheme` in SVGs can be found in the [Color scheme inheritance](#color_scheme_inheritance) section.

Using `prefers-color-scheme` is allowed in [cross-origin](/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` and `<iframe>` elements. Cross-origin elements are elements retrieved from a different host than the page that is referencing them.
To learn more about SVGs, see the [SVG documentation](/en-US/docs/Web/SVG) and for more information about iframes, see the [iframe documentation](/en-US/docs/Web/HTML/Element/iframe).

## Syntax

- `light`
  - : Indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.
- `dark`
  - : Indicates that user has notified that they prefer an interface that has a dark theme.

## Examples

### Detecting a dark or light theme

Three elements show the possible color schemes for a website: a light scheme, a dark scheme, and a default scheme (if the browser doesn't support this feature or can't determine a preferred color scheme).

Below those three example elements is a "result" element showing the actual scheme that your browser selected, using the `prefers-color-scheme` media query.

The following HTML is used:

```html
<div class="scheme light">Light scheme style</div>
<div class="scheme dark">Dark scheme style</div>
<div class="scheme none">No scheme detected style</div>
<br />

<div class="scheme result">Result: this is the active color scheme</div>
```

The following CSS is used to style the elements above:

```css
/* basic shape */
.scheme {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 3em;
  vertical-align: middle;
}

/* wider result shape */
.scheme.result {
  width: 25.5em;
}

/* light scheme style */
.scheme.light {
  background: #eee;
  color: black;
}

/* dark scheme style */
.scheme.dark {
  background: black;
  color: white;
}

/* no scheme style, also initial style for result */
.scheme.none, .scheme.result {
  background: #aaa;
  color: black;
}

@media (prefers-color-scheme: dark) {
  /* dark scheme active */
  /* style result like dark scheme */
  .scheme.result {
    background: black;
    color: white;
  }
}

@media (prefers-color-scheme: light) {
  /* light scheme active */
  /* style result like light scheme */
  .scheme.result {
    background: #eee;
    color: black;
  }
}
```

{{EmbedLiveSample("Detecting_a_dark_or_light_theme")}}

### Color scheme inheritance

The following example shows how to use `prefers-color-scheme` with the [`color-scheme` property](/en-US/docs/Web/CSS/color-scheme) inherited from a parent element.
A script is used to set the source of the `<img>` elements and their `alt` attributes. This would normally be done in HTML as `<img src="circle.svg" alt="circle" />`.

You should see three circles, with one drawn in a different color.
The first circle inherits the `color-scheme` from the OS and can be toggled using the system OS's theme switcher.

The second and third circles inherit the `color-scheme` from the embedding element; the `@media` query allows setting styles of the SVG content based on the parent element's `color-scheme`.
In this case, the parent element with a `color-scheme` CSS property is a `<div>`.

```html
<div>
  <img />
</div>

<div style="color-scheme: light">
  <img />
</div>
<div style="color-scheme: dark">
  <img />
</div>

<!-- Embed an SVG for all <img> elements -->
<script>
  for (let img of document.querySelectorAll("img")) {
    img.alt = "circle";
    img.src =
      "data:image/svg+xml;base64," +
      btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <style>
          :root { color: blue }
          @media (prefers-color-scheme: dark) {
            :root { color: purple }
          }
        </style>
        <circle fill="currentColor" cx="16" cy="16" r="16"/>
      </svg>
    `);
  }
</script>
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("color-scheme")}} CSS property
- [Simulate prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) (Firefox Page Inspector > Examine and edit CSS)
- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Changing color schemes in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), or [other platforms](https://support.mozilla.org/en-US/questions/1271928).
