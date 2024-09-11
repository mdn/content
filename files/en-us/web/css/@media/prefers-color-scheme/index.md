---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
page-type: css-media-feature
browser-compat: css.at-rules.media.prefers-color-scheme
---

{{CSSRef}}

The **`prefers-color-scheme`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) is used to detect if a user has requested light or dark color themes.
A user indicates their preference through an operating system setting (e.g. light or dark mode) or a user agent setting.

## Embedded elements

For SVG and iframes, `prefers-color-scheme` lets you set a CSS style for the SVG or iframe based on the [`color-scheme`](/en-US/docs/Web/CSS/color-scheme) of the parent element in the web page.
SVGs must be used embedded (i.e., `<img src="circle.svg" alt="circle" />`) as opposed to [inlined in HTML](/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction#basic_example).
An example of using `prefers-color-scheme` in SVGs can be found in the ["Inherited color scheme in embedded elements"](#inherited_color_scheme_in_embedded_elements) section.

Using `prefers-color-scheme` is allowed in [cross-origin](/en-US/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` and `<iframe>` elements. Cross-origin elements are elements retrieved from a different host than the page that is referencing them.
To learn more about SVGs, see the [SVG documentation](/en-US/docs/Web/SVG) and for more information about iframes, see the [iframe documentation](/en-US/docs/Web/HTML/Element/iframe).

## Syntax

- `light`
  - : Indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.
- `dark`
  - : Indicates that user has notified that they prefer an interface that has a dark theme.

## Examples

### Detecting a dark or light theme

A common usage is to use a light color scheme by default, and then use `prefers-color-scheme: dark` to override the colors to a darker variant. It is also possible to do it the other way around.

This example shows both options: Theme A uses light colors, but can be overridden to dark colors. Theme B uses dark colors, but can be overridden to light colors. In the end, if the browser supports `prefers-color-scheme`, both themes will be light or dark.

#### HTML

```html
<div class="box theme-a">Theme A (initial)</div>
<div class="box theme-a adaptive">Theme A (changed if dark preferred)</div>
<br />

<div class="box theme-b">Theme B (initial)</div>
<div class="box theme-b adaptive">Theme B (changed if light preferred)</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Theme A (brown) uses a light color scheme by default, but will switch to a dark scheme based on the media query:

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```

Theme B (blue) uses a dark color scheme by default, but will switch to a light scheme based on the media query:

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted #000;
  }
}
```

#### Result

The left boxes shows Theme A and Theme B as they would appear without the `prefers-color-scheme` media query. The right boxes show the same themes, but one of them will be changed to a darker or lighter variant based on the user's active color scheme. The outline of one box will be dashed or dotted if it was changed based on your browser or operating systems settings.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Inherited color scheme in embedded elements

The following example shows how to use the `prefers-color-scheme` media feature in an embedded element to inherit a color scheme from a parent element.
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
      window.btoa(`
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
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP Header [User Agent Client Hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Simulate prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) (Firefox Page Inspector > Examine and edit CSS)
- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Changing color schemes in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), or [other platforms](https://support.mozilla.org/en-US/questions/1271928).
