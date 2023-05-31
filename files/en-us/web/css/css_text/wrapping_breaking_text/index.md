---
title: Wrapping and breaking text
slug: Web/CSS/CSS_text/Wrapping_breaking_text
page-type: guide
---

{{CSSRef}}

This guide explains the various ways in which overflowing text can be managed in CSS.

## What is overflowing text?

In CSS, if you have an unbreakable string such as a very long word, by default it will overflow any container that is too small for it in the inline direction. We can see this happening in the example below: the long word is extending past the boundary of the box it is contained in.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow.html", '100%', 420)}}

CSS will display overflow in this way, because doing something else could cause data loss. In CSS data loss means that some of your content vanishes. So the initial value of {{cssxref("overflow")}} is `visible`, and we can see the overflowing text. It is generally better to be able to see overflow, even if it is messy. If things were to disappear or be cropped as would happen if `overflow` was set to `hidden` you might not spot it when previewing your site. Messy overflow is at least easy to spot, and in the worst case, your visitor will be able to see and read the content even if it looks a bit strange.

In this next example, you can see what happens if `overflow` is set to `hidden`.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow-hidden.html", '100%', 420)}}

## Finding the min-content size

To find the minimum size of the box that will contain its contents with no overflows, set the {{cssxref("width")}} or {{cssxref("inline-size")}} property of the box to {{cssxref("min-content")}}.

{{EmbedGHLiveSample("css-examples/css-text/min-content.html", '100%', 420)}}

Using `min-content` is therefore one possibility for overflowing boxes. If it is possible to allow the box to grow to be the minimum size required for the content, but no bigger, using this keyword will give you that size.

## Breaking long words

If the box needs to be a fixed size, or you are keen to ensure that long words can't overflow, then the {{cssxref("overflow-wrap")}} property can help. This property will break a word once it is too long to fit on a line by itself.

{{EmbedGHLiveSample("css-examples/css-text/overflow-wrap.html", '100%', 660)}}

> **Note:** The `overflow-wrap` property acts in the same way as the non-standard property `word-wrap`. The `word-wrap` property is now treated by browsers as an alias of the standard property.

An alternative property to try is {{cssxref("word-break")}}. This property will break the word at the point it overflows. It will cause a break-even if placing the word onto a new line would allow it to display without breaking.

In this next example, you can compare the difference between the two properties on the same string of text.

{{EmbedGHLiveSample("css-examples/css-text/word-break.html", '100%', 700)}}

This might be useful if you want to prevent a large gap from appearing if there is just enough space for the string. Or, where there is another element that you would not want the break to happen immediately after.

In the example below there is a checkbox and label. Let's say, you want the label to break should it be too long for the box. However, you don't want it to break directly after the checkbox.

{{EmbedGHLiveSample("css-examples/css-text/word-break-checkbox.html", '100%', 660)}}

## Adding hyphens

To add hyphens when words are broken, use the CSS {{cssxref("hyphens")}} property. Using a value of `auto`, the browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses. To have some control over the process, use a value of `manual`, then insert a hard or soft break character into the string. A hard break (`‐`) will always break, even if it is not necessary to do so. A soft break (`&shy;`) only breaks if breaking is needed.

{{EmbedGHLiveSample("css-examples/css-text/hyphens.html", '100%', 600)}}

You can also use the {{cssxref("hyphenate-character")}} property to use the string of your choice instead of the hyphen character at the end of the line (before the hyphenation line break).

This property also takes the value `auto`, which will select the correct value to mark a mid-word line break according to the typographic conventions of the current content language.

## The `<wbr>` element

If you know where you want a long string to break, then it is also possible to insert the HTML {{HTMLElement("wbr")}} element. This can be useful in cases such as displaying a long URL on a page. You can then add the property in order to break the string in sensible places that will make it easier to read.

In the below example the text breaks in the location of the {{HTMLElement("wbr")}}.

{{EmbedGHLiveSample("css-examples/css-text/wbr.html", '100%', 460)}}

## See also

- The HTML {{HTMLElement("wbr")}} element
- The CSS {{cssxref("word-break")}} property
- The CSS {{cssxref("overflow-wrap")}} property
- The CSS {{cssxref("white-space")}} property
- The CSS {{cssxref("hyphens")}} property
- [Overflow and Data Loss in CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
