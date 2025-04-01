---
title: Web Video Text Tracks Format (WebVTT)
slug: Web/API/WebVTT_API/Web_Video_Text_Tracks_Format
page-type: guide
browser-compat: html.elements.track
spec-urls: https://w3c.github.io/webvtt/
---

{{DefaultAPISidebar("WebVTT")}}

<!-- need to add info on region block -->

**Web Video Text Tracks Format** (**WebVTT**) is a plain-text file format for displaying timed text tracks that are synchronized with content in {{HTMLElement("video")}} and {{HTMLElement("audio")}} elements.
These can be used, for example, to add closed captions and subtitle text overlays to a {{HTMLElement("video")}}.

The WebVTT files associated with a media element are added using the {{HTMLElement("track")}} element — see [Displaying VTT content defined in a file](/en-US/docs/Web/API/WebVTT_API#displaying_vtt_content_defined_in_a_file).
A media element can be associated with a number of files, each representing different kinds of timed data, such as closed captions, subtitles, or chapter headings, translated into different locales.

> [!NOTE]
> WebVTT content can also be created and managed programmatically using the [WebVTT API](/en-US/docs/Web/API/WebVTT_API).

## Overview

WebVTT files have a MIME type of `text/vtt` and the file extension `.vtt`.
The content must be encoded using {{Glossary("UTF-8")}}.

The structure of a WebVTT consists of the following components, some of them optional, in this order:

- A header, consisting of an optional byte order mark (BOM) — the string `WEBVTT` — followed by an optional text header separated by one or more space or tab characters (in WebVTT files, tabs and spaces are interchangeable).
- One or more blank lines, each which is equivalent to two consecutive newlines.
- Zero or more `STYLE`, `REGION`, or `NOTE` blocks, separated by one or more blank lines.
- Zero or more cue or `NOTE` blocks, separated by one or more blank lines.

A simple WebVTT file that has the `WEBVTT` string (but no header text), a NOTE block, and two cues is shown below:

```plain
WEBVTT

NOTE This is a multi-line note block.
These are used for comments by the author
Two cue blocks are defined below.

00:01.000 --> 00:04.000
Never drink liquid nitrogen.

00:05.000 --> 00:09.000
Because:
- It will perforate your stomach.
- You could die.
```

The following sections explain the parts of the file, including those not used in the example above.

## WebVTT Header

WebVTT files start with a header block containing the following:

- An optional byte order mark (BOM), which is Unicode character `U+FEFF`.
- The string `WEBVTT`.
- An optional text header to the right of `WEBVTT`.

  - There must be at least one space after `WEBVTT`.
  - You could use this header to add a description to the file.
  - You may use anything in the text header except newlines or the string `-->`.

The `WEBVTT` string is the only required part of the WebVTT file, so the simplest possible WebVTT file would look like this:

```plain
WEBVTT
```

The example below shows a header with text.
Note that this text must be separated by at least one space or tab.

```plain
WEBVTT This file has no cues.
```

## WebVTT cues

A cue defines a single caption, subtitle, or other text block to be displayed over a particular time interval.
Cues must appear after the header and any `STYLE` or `REGION` blocks.

Each cue consists of three or more lines:

- An optional cue identifier followed by a newline.
- Cue timings that indicate the time range in which the payload text should be displayed. These are optionally followed by cue settings with at least one space before the first setting and between each setting, followed by a single newline.
- The cue payload text, which may span multiple lines, and will be terminated by an empty line.

Here is an example of a simple cue.
The first line specifies the cue's display start and end times, separated using the string `-->`.
The second line defines the text to be displayed.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

The next cue is slightly more complicated.
It starts with a cue identifier — `1 - Title Crawl` — which may be used to reference the cue in JavaScript and CSS.
It also has cue settings after the cue timings to set the cue position.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Note that the output will respect line breaks in the payload text, which allows you to create bulleted lists using hyphen (`-`) characters as shown.
Generally you should only insert these breaks when needed, as the browser will wrap text appropriately.

It is important to not use "extra" blank lines within a cue, for example between the timings line and the cue payload, or within the payload.
This is because a blank line will end the current cue.

Each part of the cue is explained in more detail in the following sections.

### Cue identifier

The identifier is a name that identifies the cue. It can be used to reference the cue from JavaScript or CSS. It must not contain a newline and cannot contain the string `-->`. It must end with a single new line. Identifiers do not have to be unique, although it is common to number them (e.g., 1, 2, 3).

The example below shows a file with several cues that include identifiers:

```plain
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2 Some Text
00:00:30.739 --> 00:00:34.074
This is the second.

3
00:00:34.159 --> 00:00:35.743
This is the third
```

### Cue timings

A cue timing indicates the time interval when the cue is shown. It has a start and end time, represented by timestamps. The end time must be greater than the start time, and the start time must be greater than or equal to all previous start times.

Cues may have overlapping timings, unless the WebVTT file is being used for chapters ({{HTMLElement("track")}} [`kind`](/en-US/docs/Web/HTML/Element/track#kind) is `chapters`).

Each cue timing contains five components:

- A timestamp for the start time.
- At least one space.
- The string `-->`.
- At least one space.
- A timestamp for the end time, which must be greater than the start time.

The timestamps can be specified in one of the following two formats:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

Where the components are defined as follows:

- `hh`
  - : Represents hours and must be at least two digits. It can be greater than two digits (e.g., `9999:00:00.000`).
- `mm`
  - : Represents minutes and must be between 00 and 59, inclusive.
- `ss`
  - : Represents seconds and must be between 00 and 59, inclusive.
- `ttt`
  - : Represents milliseconds and must be between 000 and 999, inclusive.

Here are a few cue timing examples:

- Basic cue timing examples

  ```plain
  00:00:22.230 --> 00:00:24.606
  00:00:30.739 --> 00:00:34.074
  00:00:34.159 --> 00:00:35.743
  00:00:35.827 --> 00:00:40.122
  ```

- Overlapping cue timing examples

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:05.000 --> 00:01:00.000
  00:00:30.000 --> 00:00:50.000
  ```

- Non-overlapping cue timing examples

  ```plain
  00:00:00.000 --> 00:00:10.000
  00:00:10.000 --> 00:01:00.581
  00:01:00.581 --> 00:02:00.100
  00:02:01.000 --> 00:02:01.000
  ```

### Cue settings

Cue settings are optional components that position the cue payload text over the video. This includes horizontal and vertical positions. Zero or more cue settings can be specified and used in any order so long as each setting is used no more than once.

Cue settings are added to the right of cue timings. There must be one or more spaces between the cue timing and the first setting and between each setting. A colon separates a setting's name and value. The settings are case-sensitive; use lowercase as shown. There are five available cue settings:

- `vertical`
  - : Indicates that the text will be displayed vertically rather than horizontally, such as in some Asian languages. There are two possible values:
    - `rl`
      - : The writing direction is right to left.
    - `lr`
      - : The writing direction is left to right.
- `line`

  - : If `vertical` is not set, `line` specifies where the text appears vertically. If `vertical` is set, `line` specifies where text appears horizontally. Its value can be:

    - A line number
      - : The position of the first line of the cue as it appears on the video. Positive numbers are counted from the top down and negative numbers are counted from the bottom up.
    - A percentage
      - : An integer (i.e., no decimals) between 0 and 100 inclusive, which must be followed by a percent sign (%).

    | Line        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `line:0`    | top                | right         | left          |
    | `line:-1`   | bottom             | left          | right         |
    | `line:0%`   | top                | right         | left          |
    | `line:100%` | bottom             | left          | right         |

- `position`

  - : If `vertical` is not set, `position` specifies where the text will appear horizontally. If `vertical` is set, `position` specifies where the text will appear vertically. The value is a percentage between 0 and 100 inclusive.

    | Position        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | --------------- | ------------------ | ------------- | ------------- |
    | `position:0%`   | left               | top           | top           |
    | `position:100%` | right              | bottom        | bottom        |

- `size`

  - : If `vertical` is not set, `size` specifies the width of the text area. If `vertical` is set, `size` specifies the height of the text area. The value is a percentage between 0 and 100 inclusive.

    | Size        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `size:100%` | full width         | full height   | full height   |
    | `size:50%`  | half width         | half height   | half height   |

- `align`

  - : Specifies the alignment of the text. Text is aligned within the space given by the size cue setting if it is set.

    | Align          | `vertical` omitted    | `vertical:rl`       | `vertical:lr`       |
    | -------------- | --------------------- | ------------------- | ------------------- |
    | `align:start`  | left                  | top                 | top                 |
    | `align:center` | centered horizontally | centered vertically | centered vertically |
    | `align:end`    | right                 | bottom              | bottom              |

Here are a few examples.
The first line demonstrates no settings. The second line might be used to overlay text on a sign or label. The third line might be used for a title. The last line might be used for an Asian language.

```plain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 line:63% position:72% align:start
00:00:05.000 --> 00:00:10.000 line:0 position:20% size:60% align:start
00:00:05.000 --> 00:00:10.000 vertical:rt line:-1 align:end
00:00:05.000 --> 00:00:10.000 position:10%,line-left align:left size:31%
00:00:05.000 --> 00:00:10.000 position:90% align:right size:35%
00:00:05.000 --> 00:00:10.000 position:45%,line-right align:center size:90%
```

### Cue payload

The payload is where the cue content is defined, such as the subtitle or closed caption text.
It may contain newlines but cannot contain two consecutive newlines: that would create a blank line, which indicates the end of the block.

A cue text payload cannot contain the string `-->`, the ampersand character (`&`), or the less-than sign (`<`).
If needed, you can instead use a {{glossary("character reference")}} such as the named character reference `&amp;` for ampersand and `&lt;` for less-than.
It is also recommended that you use the greater-than escape sequence `&gt;` instead of the greater-than character (`>`) to avoid confusion with tags.
If you are using the WebVTT file for metadata these restrictions do not apply.

Note that all major browsers allow any {{glossary("character reference")}} in cues, notes, or other text.
Older browser versions may support only the following subset of named character references:

| Name               | Character | Escape sequence |
| ------------------ | --------- | --------------- |
| Ampersand          | `&`       | `&amp;`         |
| Less-than          | `<`       | `&lt;`          |
| Greater-than       | `>`       | `&gt;`          |
| Left-to-right mark | _none_    | `&lrm;`         |
| Right-to-left mark | _none_    | `&rlm;`         |
| Non-breaking space |           | `&nbsp;`        |

### Cue payload text tags

A number of tags, such as `<b>`, can be used for marking up and styling text within a cue.
However, if the WebVTT file is used in a {{HTMLElement("track")}} element where the attribute [`kind`](/en-US/docs/Web/HTML/Element/track#kind) is `chapters` then you cannot use tags.

- Timestamp tag

  - : Timestamp tags are used to enable karaoke-style captions.
    The timestamp must be greater that the cue's start timestamp, greater than any previous timestamp in the cue payload, and less than the cue's end timestamp.
    The _active text_ is the text between the timestamp and the next timestamp or to the end of the payload if there is not another timestamp in the payload.
    Any text before the _active text_ in the payload is _previous text_.
    Any text beyond the _active text_ is _future text_.

    ```plain
    1
    00:16.500 --> 00:18.500
    When the moon <00:17.500>hits your eye

    1
    00:00:18.500 --> 00:00:20.500
    Like a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

    1
    00:00:20.500 --> 00:00:21.500
    That's <00:00:21.000>amore
    ```

The following tags are the HTML tags allowed in a cue and require opening and closing tags (e.g., `<b>text</b>`).
Text marked up with these tags can be formatted in [`STYLE` blocks](#style_blocks) using the {{cssxref("::cue")}} pseudo-element.

- Italics tag (`<i></i>`)

  - : Italicize the contained text.

    ```xml
    <i>text</i>
    ```

- Bold tag (`<b></b>`)

  - : Bold the contained text.

    ```xml
    <b>text</b>
    ```

- Underline tag (`<u></u>`)

  - : Underline the contained text.

    ```xml
    <u>text</u>
    ```

- Class tag (`<c></c>`)

  - : Add a class to the contained text for selection via CSS.

    ```xml
    <c.classname>text</c>
    ```

- Ruby tag (`<ruby></ruby>`)

  - : Used with ruby text tags to display [ruby characters](https://en.wikipedia.org/wiki/Ruby_character) (i.e., small annotative characters above other characters).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Ruby text tag (`<rt></rt>`)

  - : Used with ruby tags to display [ruby characters](https://en.wikipedia.org/wiki/Ruby_character) (i.e., small annotative characters above other characters).

    ```xml
    <ruby>WWW<rt>World Wide Web</rt>oui<rt>yes</rt></ruby>
    ```

- Voice tag (`<v></v>`)

  - : Similar to class tag, also used to style the contained text using CSS.

    ```xml
    <v Bob>text</v>
    ```

- Lang tag (`<lang></lang>`)

  - : Used to highlight text that has been marked up as belonging to a particular language or language variant using the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

    ```xml
    <lang en-GB>English text as spoken in Great Britain!</lang>
    ```

## NOTE blocks

NOTE blocks are optional sections that can be used to add comments to a WebVTT file.
They are intended for those reading the file and are not seen by users.
For example, you might use them to record author contact details, provide an overview of your structure, or add placeholders for cues that still need to be written.

They can be used anywhere in the WebVTT file after the header.

NOTE blocks may contain newlines but cannot contain two consecutive newlines: that would create a blank line, which indicates the end of the block.

A comment cannot contain the string `-->`, the ampersand character (`&`), or the less-than sign (`<`).
If you wish to use these characters, you need to instead use a {{glossary("character reference")}} such as `&amp;` for ampersand and `&lt;` for less-than.
It is also recommended that you use the greater-than escape sequence (`&gt;`) instead of the greater-than character (`>`) to avoid confusion with tags.

A comment consists of three parts:

- The string `NOTE`.
- A space or a new line.
- Zero or more characters other than those noted above.

Here are some examples:

```plain
NOTE This is a single line comment

NOTE
This is a simple multi line comment

NOTE
One comment that is spanning
more than one line.

NOTE You can also make a comment
across more than one line this way.

NOTE TODO I might add a line to indicate work that still has to be done.
```

## STYLE Blocks

`STYLE` blocks are optional sections that can be used to embed CSS styling of cues within a WebVTT file.
Note that these are used to style the appearance and size of the cues, but not their position and layout, which are controlled by the [Cue settings](#cue_settings).

> [!NOTE]
> WebVTT cues can also be matched by CSS styles loaded by the associated [document embedding the video/audio element](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet).

`STYLE` blocks must appear before any cue blocks in the file.

Each block consists of the following lines:

- The String `STYLE` followed by zero or more space or tab characters, and then a newline.
- A string defining the CSS styles to match and apply, using the {{cssxref("::cue")}} pseudo-element.

The block cannot contain the string `-->`.
It may contain newlines but cannot contain two consecutive newlines: that would create a blank line, which indicates the end of the block.

A simple WebVTT files with two `STYLE` blocks is shown below.
This uses {{cssxref("::cue")}} to apply a text color to all cue text, and a different text color just to text that is tagged with `<b></b>` tags.

```plain
WEBVTT

STYLE
::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}
/* Style blocks cannot use blank lines nor "dash dash greater than" */

NOTE comment blocks can be used between style blocks.

STYLE
::cue(b) {
  color: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- Hello <b>world</b>.

NOTE style blocks cannot appear after the first cue.
```

> [!NOTE]
> There are live examples demonstrating many of the following cases in [More cue styling examples](/en-US/docs/Web/API/WebVTT_API#more_cue_styling_examples) in _WebVTT API_.

### Match all cue payload text

Match on all cue payload text using {{cssxref("::cue")}}.

For example, the following `STYLE` block would match all cue text and color it yellow.

```plain
STYLE
::cue {
  color: yellow;
}
```

### Match a tag type

Match cue text marked up with particular [cue payload text tags](#cue_payload_text_tags), such as `c`, `i`, `b`, `u`, `ruby`, `rt`, `v`, and `lang`, by specifying the tag in {{cssxref("::cue()")}} as a type selector.

For example, the following block would match cue payload text marked up with `lang` as yellow, and each of the other tags as red.

```plain
STYLE
::cue(c),
::cue(i),
::cue(b),
::cue(u),
::cue(ruby),
::cue(rt),
::cue(v) {
  color: red;
}
::cue(lang) {
  color: yellow;
}
```

### Match a class selector

Match all tags marked up using a class selector in `::cue()`.

The `STYLE` block in the following WebVTT file would match all the text after it, because all the tags have the `myclass` class.

```plain
WEBVTT

STYLE
::cue(.myclass) {
  color: yellow;
}

00:00:00.000 --> 00:00:08.000
<c.myclass>Yellow!</c>
<i.myclass>Yellow!</i>
<u.myclass>Yellow!</u>
<b.myclass>Yellow!</b>
<u.myclass>Yellow!</u>
<ruby.myclass>Yellow! <rt.myclass>Yellow!</rt></ruby>
<v.myclass Kathryn>Yellow!</v>
<lang.myclass en>Yellow!</lang>
```

To select a particular tag and class you must specify both in `::cue()`:

```css
STYLE ::cue(b.myclass) {
  color: yellow;
}
```

### Match an attribute

Cue payload text marked up with a particular tag and attribute can be matched using an attribute selector.

For example, consider the following WebVTT file, which has text marked up using the `v` and `lang` [cue payload text tags](#cue_payload_text_tags), using attributes to specify the particular voice ("Salame") and languages.

```plain
WEBVTT

STYLE
::cue([lang="en-US"]) {
color: yellow;
}
::cue(lang[lang="en-GB"]) {
color: cyan;
}
::cue(v[voice="Salame"]) {
color: lime;
}

00:00:00.000 --> 00:00:08.000
Yellow!

00:00:08.000 --> 00:00:16.000
<lang en-GB>Cyan!</lang>

00:00:16.000 --> 00:00:24.000
I like <v Salame>lime.</v>
```

### Match using pseudo-classes

The previous example styled text for a particular language using attribute matching.
You can also match languages using the `:lang()` pseudo class, as demonstrated by the `STYLE` block below.

```plain
STYLE
::cue(:lang(en)) {
  color: yellow;
}
::cue(:lang(en-GB)) {
  color: cyan;
}
```

You can similarly match with the `:past` and `:future` pseudo-classes, to provide a karaoke-like experience.

```css
video::cue(:past) {
  color: yellow;
}
video::cue(:future) {
  color: cyan;
}
```

Other pseudo-classes such as `link`, `nth-last-child`, and `nth-child` should work similarly.

### Match a cue id

Match against a particular cue `id` by specifying the `id` inside {{cssxref("::cue()")}}.

> [!NOTE]
> At time of writing this does not appear to be supported in any of the main browsers.

For example, the following WebVTT file should style the cue with identifier `cue1` in green.

```plain
WEBVTT

STYLE ::cue(#cue1) {
  color: green;
}

cue1
00:00:00.000 --> 00:00:08.000
Green!
```

Note that escape sequences are used in WebVTT CSS in the same way as HTML pages. The below example shows how to escape spaces in a cue identifier:

```plain
WEBVTT

STYLE
::cue(#transcription\ credits) {
  color: red;
}

transcription credits
00:04.000 --> 00:05.000
Transcribed by Célestes™
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The CSS [`::cue` and `::cue()`](/en-US/docs/Web/CSS/::cue) pseudo-elements
