---
title: scripting
slug: Web/CSS/@media/scripting
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.scripting
---
{{CSSRef}}

The **`scripting`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test whether scripting (such as JavaScript) is available.

## Syntax

The `scripting` feature is specified as a keyword value chosen from the list below.

- `none`
  - : Scripting is completely unavailable on the current document.
- `initial-only`
  - : Scripting is enabled during the initial page load, but not afterwards.
- `enabled`
  - : Scripting is supported and active on the current document.

## Examples

### HTML

```html
<p class="script-none">You do not have scripting available. :-(</p>
<p class="script-initial-only">Your scripting is only enabled during the initial page load. Weird.</p>
<p class="script-enabled">You have scripting enabled! :-)</p>
```

### CSS

```css
p {
  color: lightgray;
}

@media (scripting: none) {
  .script-none {
     color: red;
  }
}

@media (scripting: initial-only) {
  .script-initial-only {
    color: red;
  }
}

@media (scripting: enabled) {
  .script-enabled {
    color: red;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
