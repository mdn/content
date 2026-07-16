---
title: "`:muted` CSS pseudo-class"
short-title: :muted
slug: Web/CSS/Reference/Selectors/:muted
page-type: css-pseudo-class
browser-compat: css.selectors.muted
sidebar: cssref
---

The **`:muted`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selector represents an element that is capable of making sound, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, but is muted (forced silent).

Muted is different from {{cssxref(":volume-locked")}} in that the page author has control over whether a media element can be muted or un-muted.
User agents may set media `muted` value according to use preferences (e.g., remembering the last set value across sessions, on a per-site basis, or otherwise).
An element that is `:volume-locked` cannot be muted, un-muted, or have its volume changed via JavaScript because of an operating system or user agent preference.

## Syntax

```css
:muted {
  /* ... */
}
```

## Examples

### HTML

The `muted` attribute is added to the {{htmlelement("audio")}} element so that the sound is muted, this works the same for {{htmlelement("video")}} elements.

```html
<audio controls muted src="/shared-assets/audio/t-rex-roar.mp3"></audio>
```

### CSS

If the `<audio>` element is `muted` then a red outline is drawn around it, when it is not muted then it has a green outline. Try toggling the mute icon in the controls to see the state change.

```css hidden
audio {
  margin: 5px;
}
```

```css
audio:muted {
  outline: 5px solid red;
}

audio:not(:muted) {
  outline: 5px solid green;
}
```

{{EmbedLiveSample('examples', '', '60')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":buffering")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors)
- [`muted`](/en-US/docs/Web/API/HTMLMediaElement/muted) property of {{domxref("HTMLMediaElement")}} objects
