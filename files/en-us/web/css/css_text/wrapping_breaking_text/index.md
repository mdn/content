---
title: Wrapping and breaking text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
page-type: guide
---

{{CSSRef}}

This guide explains the various ways in which overflowing text can be managed in CSS.

## What is overflowing text?

In CSS, if you have an unbreakable string such as a very long word, by default it will overflow any container that is too small for it in the inline direction. We can see this happening in the example below: the long word is extending past the boundary of the box it is contained in.

```html live-sample___inline-overflow
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("inline-overflow")}}

CSS will display overflow in this way, because doing something else could cause data loss. In CSS data loss means that some of your content vanishes. So the initial value of {{cssxref("overflow")}} is `visible`, and we can see the overflowing text. It is generally better to be able to see overflow, even if it is messy. If things were to disappear or be cropped as would happen if `overflow` was set to `hidden` you might not spot it when previewing your site. Messy overflow is at least easy to spot, and in the worst case, your visitor will be able to see and read the content even if it looks a bit strange.

In this next example, you can see what happens if `overflow` is set to `hidden`.

```html live-sample___inline-overflow-hidden
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow-hidden
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow: hidden;
}
```

{{EmbedLiveSample("inline-overflow-hidden")}}

## Finding the min-content size

To find the minimum size of the box that will contain its contents with no overflows, set the {{cssxref("width")}} or {{cssxref("inline-size")}} property of the box to {{cssxref("min-content")}}.

```html live-sample___min-content
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___min-content
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: min-content;
}
```

{{EmbedLiveSample("min-content")}}

Using `min-content` is therefore one possibility for overflowing boxes. If it is possible to allow the box to grow to be the minimum size required for the content, but no bigger, using this keyword will give you that size.

## Breaking long words

If the box needs to be a fixed size, or you are keen to ensure that long words can't overflow, then the {{cssxref("overflow-wrap")}} property can help. This property will break a word once it is too long to fit on a line by itself.

```html live-sample___overflow-wrap
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___overflow-wrap
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("overflow-wrap")}}

> [!NOTE]
> The `overflow-wrap` property acts in the same way as the non-standard property `word-wrap`. The `word-wrap` property is now treated by browsers as an alias of the standard property.

An alternative property to try is {{cssxref("word-break")}}. This property will break the word at the point it overflows. It will cause a break-even if placing the word onto a new line would allow it to display without breaking.

In this next example, you can compare the difference between the two properties on the same string of text.

```html live-sample___word-break
<div class="box box1">A Very LongWordThatHasNoBreakingPossibilities</div>

<div class="box box2">A Very LongWordThatHasNoBreakingPossibilities</div>
```

```css live-sample___word-break
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 30ch;
  margin-block-end: 1em;
}
.box1 {
  word-break: break-all;
}

.box2 {
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("word-break", "", "210px")}}

This might be useful if you want to prevent a large gap from appearing if there is just enough space for the string. Or, where there is another element that you would not want the break to happen immediately after.

In the example below there is a checkbox and label. Let's say, you want the label to break should it be too long for the box. However, you don't want it to break directly after the checkbox.

```html live-sample___word-break-checkbox
<div class="field">
  <input id="one" type="checkbox" /><label for="one">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>

<div class="field field-br">
  <input id="two" type="checkbox" /><label for="two">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>
```

```css live-sample___word-break-checkbox
.field {
  inline-size: 150px;
  border: 1px solid #ccc;
  margin-block-end: 1em;
  padding: 10px;
}

.field-br {
  word-break: break-all;
}
```

{{EmbedLiveSample("word-break-checkbox", "", "210px")}}

## Adding hyphens

To add hyphens when words are broken, use the CSS {{cssxref("hyphens")}} property. Using a value of `auto`, the browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses. To have some control over the process, use a value of `manual`, then insert a hard (U+2010) or soft break character (U+00AD) into the string. A hard break character can be added using `‐` or `&#x2010;`, and a soft break character can be added using the `&shy;`, `&#173;`, or `&#xad;` HTML character codes. A hard break will always break, even if it is not necessary to do so. A soft break only breaks if breaking is needed.

```html live-sample___hyphens
<div class="box">
  Llanfair&shy;pwllgwyngyll&shy;gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___hyphens
.box {
  inline-size: 150px;
  overflow-wrap: break-word;
  hyphens: manual;
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
}
```

{{EmbedLiveSample("hyphens")}}

You can also use the {{cssxref("hyphenate-character")}} property to use the string of your choice instead of the default hyphenation character at the end of the line (before the hyphenation line break) for the language. The `auto` value selects the correct value to mark a mid-word line break according to the typographic conventions of the current content language.

CSS provides additional hyphenation control: the {{cssxref("hyphenate-limit-chars")}} property can be used to set the minimum word length that allows for hyphenation as well as the minimum number of characters before and after the hyphen.

## The `<wbr>` element

If you know where you want a long string to break, then it is also possible to insert the HTML {{HTMLElement("wbr")}} element. This can be useful in cases such as displaying a long URL on a page. You can then add the property in order to break the string in sensible places that will make it easier to read.

In the below example the text breaks in the location of the {{HTMLElement("wbr")}}.

```html live-sample___wbr
<div class="box">
  Llanfair<wbr />pwllgwyngyll<wbr />gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___wbr
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("wbr")}}

## See also

- The HTML {{HTMLElement("wbr")}} element
- The CSS {{cssxref("word-break")}} property
- The CSS {{cssxref("overflow-wrap")}} property
- The CSS {{cssxref("white-space")}} property
- The CSS {{cssxref("text-wrap")}} property
- The CSS {{cssxref("hyphens")}} property
- The CSS {{cssxref("hyphenate-character")}} property
- The CSS {{cssxref("hyphenate-limit-chars")}} property
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
