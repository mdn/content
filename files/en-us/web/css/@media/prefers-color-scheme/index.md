---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
tags:
  - '@media'
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

## Syntax

- `light`
  - : Indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.
- `dark`
  - : Indicates that user has notified that they prefer an interface that has a dark theme.

## Examples

The elements below have an initial color theme. They can be further themed according to the user's color scheme preference.

### HTML

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div> <br>

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

### CSS

```css
.day   { background: #eee; color: black; }
.night { background: #333; color: white; }

@media (prefers-color-scheme: dark) {
  .day.dark-scheme   { background:  #333; color: white; }
  .night.dark-scheme { background: black; color:  #ddd; }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme   { background: white; color:  #555; }
  .night.light-scheme { background:  #eee; color: black; }
}

.day, .night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Simulate prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme) (Firefox Page Inspector > Examine and edit CSS)
- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Changing color schemes in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), or [other platforms](https://support.mozilla.org/en-US/questions/1271928).
