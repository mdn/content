---
title: Implementing image sprites in CSS
slug: Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS
tags:
  - Advanced
  - CSS
  - CSS Images
  - Graphics
  - Guide
  - NeedsContent
  - Sprites
  - Web
---
{{CSSRef}}

**Image sprites** are used in numerous web apps where multiple images are used. Rather than include each image as a separate image file, it is much more memory- and bandwidth-friendly to send them as a single image; using background position as a way to distinguish between individual images in the same image file, so the number of HTTP requests is reduced.

> **Note:** When using HTTP/2, it may in fact be more bandwidth-friendly to use multiple small requests.

## Implementation

Suppose an image is given to every item with class `toolbtn`:

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

A background position can be added either as two x, y values after the {{cssxref("url", "url()")}} in the background, or as {{cssxref("background-position")}}. For example:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

This would slide the starting point of the background image for the element with the ID `btn1` 20 pixels to the left and the element with the ID `btn2` 40 pixels to the left (assuming they have the class `toolbtn` assigned and are affected by the image rule above).

Similarly, you can also make hover states with:

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

## See also

- [Full working demo at CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)
