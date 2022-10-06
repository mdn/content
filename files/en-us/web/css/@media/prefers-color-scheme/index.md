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

{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/@media/")}}

The **`prefers-color-scheme`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is used to detect if the user has requested a light or dark color theme.
The user might indicate this preference through an operating system setting (e.g. light or dark mode) or a user agent setting.

Using `prefers-color-scheme` in embedded elements allows you to style a component based on the `color-scheme` of the parent element.
This applies to both same and cross-origin SVG and iframe elements and prevents cases where OS and browser preferences for color schemes are conflicting.

SVG elements must be referenced in [secure animated mode](https://svgwg.org/specs/integration/#secure-animated-mode) to use `prefers-color-scheme`.
SVGs are in secure animated mode when referenced by `<img>` elements, used to define font glyphs, and loaded as resources for `mask`, `pattern`, gradient, or other resource elements.

## Syntax

- `light`
  - : Indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.
- `dark`
  - : Indicates that user has notified that they prefer an interface that has a dark theme.

## Examples

### Detecting a dark theme

The elements below have an initial color theme.
They can be further themed according to the user's color scheme preference.

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div>
<br />

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

The following CSS is used to style the elements above:

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

{{EmbedLiveSample("Detecting_a_dark_theme")}}

### Color scheme inheritance

The following example shows how to use `prefers-color-scheme` with the `color-scheme` property inherited from a parent element.
A script is used to specify the source of the image elements, this would normally be done in HTML as `<img src="circle.svg" />`.

On browsers that support this feature (such as Firefox), you should see three circles, with one drawn in a different color.
The first circle inherits the `color-scheme` from the browser or OS and can be toggled using this page's theme switcher.
The second and third circle inherit the `color-scheme` from the embedding element and so the `@media` query allows to specify styles of the embedded content based on the parent element's `color-scheme`.

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
