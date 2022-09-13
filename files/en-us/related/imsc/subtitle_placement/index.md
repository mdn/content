---
title: Subtitle placement in IMSC
slug: Related/IMSC/Subtitle_placement
tags:
  - Guide
  - IMSC
  - Layout
  - Positioning
  - captions
  - region
  - subtitles
---

IMSC allows for very explicit positioning of the text over the video content you are displaying it against. There are a few tricks and best practices that can be used in order to simplify the placement of the on-screen text.

## Considering correct text placement

Creating an IMSC document that has the proper text placement and flow is one of the most crucial things to get correct. Unlike some other subtitle formats, IMSC allows for very explicit placement of the text anywhere on the screen. With that said, the most common subtitle styles used today are bottom centered and top centered on the screen.

## The \<region> element

The `<region>` element essentially creates a box on the screen for the text to appear inside. The on-screen text will never be displayed outside of this box. In addition to describing the size and position of the box in which the text can appear, the `<region>` element also defines the horizontal and vertical alignment of the text.

In the example below, we have defined two regions. Both region boxes are the same size, which is 80% of the image width and 80% of the image height. This box is centered on the screen.

{{EmbedGHLiveSample("imsc/layout-top-bottom/layout-top-bottom.html", '100%', 1000)}}

The important items to consider here are:

- `tts:origin` — the upper left corner of the region box, specified as X Y coordinate values. This should be described in percentage values.
- `tts:extent` — describes how far to the right of the video the region box goes, then how far down.
- `tts:backgroundColor` — describes the color of the region box. This will most commonly be transparent, however you are welcome to fill it in with a color if that works for your design.
- `tts:showBackground` — should be set to `whenActive`. The other allowable value is `always`, which tells the IMSC decoder to display all region boxes with the value of `always` at the same time. This is very unlikely to be something you want to do.
- `tts:textAlign` — the horizontal text justification. Like a word processor, this can be set to `left`, `center`, or `right`. `center` is the most common text justification for subtitles.
- `tts:displayAlign` — the vertical alignment of the text. This can be set to `before`, `center`, or `after`. `before` means that the text will start from the very top of the region box, and flow downwards. `center` means the text will be vertically centered within the region box. After means that the text will start from the very bottom of the region box, and flow upwards.

<section id="Quick_links">
  <ol>
    <li><a href="/en-US/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC guides</summary>
        <ol>
          <li><a href="/en-US/docs/Related/IMSC/Basics">IMSC basics</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Using_the_imscJS_polyfill">Using the imscJS polyfill</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Styling">Styling IMSC documents</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Subtitle_placement">Subtitle placement in IMSC</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/en-US/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping video time codes to IMSC</a>
          </li>
          <li><a href="/en-US/docs/Related/IMSC/IMSC_and_other_standards">IMSC and other standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
