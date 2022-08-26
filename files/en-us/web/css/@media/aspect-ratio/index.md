---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.aspect-ratio
---
{{CSSRef}}

The **`aspect-ratio`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the aspect ratio of the {{glossary("viewport")}}.

## Syntax

The `aspect-ratio` feature is specified as a {{cssxref("&lt;ratio&gt;")}} value representing the width-to-height aspect ratio of the viewport. It is a range feature, meaning you can also use the prefixed **`min-aspect-ratio`** and **`max-aspect-ratio`** variants to query minimum and maximum values, respectively.

## Examples

The example below is contained in an {{htmlElement("iframe")}}, which creates its own viewport. Resize the `<iframe>` to see `aspect-ratio` in action.

Note that, when none of the media query conditions are true, the background will turn white because none of the below rules will be applied to the `<div>` inside the `<iframe>`. See if you can find which width and height values trigger this!

### HTML

```html
<div id='inner'>
  Watch this element as you resize your viewport's width and height.
</div>
```

### CSS

```css
/* Minimum aspect ratio */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue */
  }
}

/* Maximum aspect ratio */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff;  /* cyan */
  }
}

/* Exact aspect ratio, put it at the bottom to avoid override*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* red */
  }
}
```

### Result

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165">
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165">

<iframe id="outer" src="data:text/html,<style> @media (min-aspect-ratio: 8/5) { div { background: %239af; } } @media (max-aspect-ratio: 3/2) { div { background: %239ff; } } @media (aspect-ratio: 1/1) { div { background: %23f9a; } }</style><div id='inner'> Watch this element as you resize your viewport's width and height.</div>">

</iframe>
```

```css hidden
iframe{
  display:block;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

w.onchange = w.oninput = () => {
  outer.style.width = `${w.value}px`;
  wf.textContent = `width: ${w.value}`;
};
h.onchange = h.oninput = () => {
  outer.style.height = `${h.value}px`;
  hf.textContent = `height: ${h.value}`;
}
```

{{ EmbedLiveSample('Result', '300px', '350px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
