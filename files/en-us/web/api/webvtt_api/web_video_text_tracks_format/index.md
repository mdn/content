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

The WebVTT files associated with a media element are added using the {{HTMLElement("track")}} element.

> **Note:** WebVTT content can also be created and managed programmatically using the [WebVTT API](/en-US/docs/Web/API/WebVTT_API).

## Overview

The MIME type of WebVTT file is `text/vtt` and by convention has the file extension `.vtt`.
The content must be encoded using {{Glossary("UTF-8")}}.

The structure of a WebVTT consists of the following components, some of them optional, in this order:

- A header, consisting of an optional byte order mark (BOM), the string "`WEBVTT`", followed by an optional text header, separated by one or more space or tab characters.
- One or more blank lines, each which is equivalent to two consecutive newlines.
- Zero or more `STYLE` or `REGION` blocks, separated by one or more blank lines
- Zero or more cue or `NOTE` blocks, separated by one or more blank lines.

A simple WebVTT file that has the `WEBVTT` string (but no header text), a NOTE block, and two cues is shown below:

```plain
WEBVTT

NOTE This is a multi-line note block.
These are used for comments by the author
Below are two cue blocks

00:01.000 --> 00:04.000
Never drink liquid nitrogen.

00:05.000 --> 00:09.000
Because:
- It will perforate your stomach.
- You could die.
```

The following sections explain the parts of the file, including those not used in the example above.

## WebVTT Header

The WebVTT files should start with a header block that has the following properties:

- An optional byte order mark (BOM).
- The string "`WEBVTT`".
- An optional text header to the right of `WEBVTT`.

  - There must be at least one space after `WEBVTT`.
  - You could use this to add a description to the file (where you can use spaces you can also use tabs).
  - You may use anything in the text header except newlines or the string "`-->`".

The header string is the only required part of the WebVTT file, so the simplest WebVTT files would look like this:

```plain
WEBVTT
```

The example below shows a header with text.
Note that this text must be separated by at least one space or tab.

```plain
WEBVTT This file has no cues.
```

## WebVTT cues

A cue defines a single caption, subtitle or other block of text that is displayed over a particular time interval.

Each cue consists of three or more lines:

- Optional cue identifier followed by a newline.
- Cue timings (time range), optionally followed by cue settings with at least one space before the first setting and between each setting, followed by a single newline.
- The cue payload text, which may span multiple lines, and will be terminated by an empty line.

Here is an example of a simple cue.
The first line specifies the cue's display start and end times, separated using the string "`-->`".
We then have a line with the text to be displayed.

```plain
00:01.000 --> 00:04.000
Never drink liquid nitrogen.
```

The next cue is slightly more complicated.
Unlike the previous queue it starts with a cue identifier "`1 - Title Crawl`", which may be used to reference the cue for styling.
It also has cue settings after the cue timings to set the cue position.

```plain
1 - Title Crawl
00:05.000 --> 00:09.000 line:0 position:20% size:60% align:start
Because:
- It will perforate your stomach.
- You could die.
```

Note that the output will respect line breaks in the source text, which allows you to create bullet-like list usings hyphen (`-`) characters as shown.
Generally you should only insert these breaks when needed, as the browser will wrap text appropriately.

It is important to not use "extra" blank lines within a cue, for example between the timings line and the cue payload, or within the payload.
WebVTT is line based; a blank line will end the cue.

Each part of the cue is explained in more detail in the following sections.

### Cue identifier

The identifier is a name that identifies the cue. It can be used to reference the cue from a script. It must not contain a newline and cannot contain the string "`-->`". It must end with a single new line. They do not have to be unique, although it is common to number them (e.g., 1, 2, 3).

The example below shows a file with several cues that have identifiers

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

A cue timing indicate the time interval when the cue is shown. It has a start and end time that are represented by timestamps. The end time must be greater than the start time, and the start time must be greater than or equal to all previous start times. Cues may have overlapping timings.

If the WebVTT file is being used for chapters ({{HTMLElement("track")}} [`kind`](/en-US/docs/Web/HTML/Element/track#kind) is `chapters`) then the file cannot have overlapping timings.

Each cue timing contains five components:

- Timestamp for start time.
- At least one space.
- The string "`-->`".
- At least one space.
- Timestamp for end time, which must be greater than the start time.

The timestamps must be in one of two formats:

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

Cue settings are optional components used to position where the cue payload text will be displayed over the video. This includes whether the text is displayed horizontally or vertically. There can be zero or more of them, and they can be used in any order so long as each setting is used no more than once.

The cue settings are added to the right of the cue timings. There must be one or more spaces between the cue timing and the first setting and between each setting. A setting's name and value are separated by a colon. The settings are case sensitive so use lower case as shown. There are five cue settings:

- `vertical`
  - : Indicates that the text will be displayed vertically rather than horizontally, such as in some Asian languages. There are two possible values:
    - `rl`
      - : The writing direction is right to left
    - `lr`
      - : The writing direction is left to right
- `line`

  - : If vertical is not set, specifies where the text appears vertically. If vertical is set, line specifies where text appears horizontally. Its value can be:

    - a line number
      - : The number is the height of the first line of the cue as it appears on the video. Positive numbers indicate top down and negative numbers indicate bottom up.
    - a percentage
      - : It must be an integer (i.e., no decimals) between 0 and 100 inclusive and must be followed by a percent sign (%).

    | Line        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | ----------- | ------------------ | ------------- | ------------- |
    | `line:0`    | top                | right         | left          |
    | `line:-1`   | bottom             | left          | right         |
    | `line:0%`   | top                | right         | left          |
    | `line:100%` | bottom             | left          | right         |

- `position`

  - : Specifies where the text will appear horizontally. If vertical is set, position specifies where the text will appear vertically. The value is a percentage, that is an integer (no decimals) between 0 and 100 inclusive followed by a percent sign (%).

    | Position        | `vertical` omitted | `vertical:rl` | `vertical:lr` |
    | --------------- | ------------------ | ------------- | ------------- |
    | `position:0%`   | left               | top           | top           |
    | `position:100%` | right              | bottom        | bottom        |

- `size`

  - : Specifies the width of the text area. If vertical is set, size specifies the height of the text area. The value is a percentage, that is an integer (no decimals) between 0 and 100 inclusive followed by a percent sign (%).

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
```

### Cue payload

The payload is where the main information or content is located.
In normal usage the payload contains the subtitles to be displayed.
The payload text may contain newlines but it cannot contain a blank line, which is equivalent to two consecutive newlines.
A blank line signifies the end of a cue.

A cue text payload cannot contain the string `-->`, the ampersand character (`&`), or the less-than sign (`<`).
Instead use a {{glossary("character reference")}} such as the named character reference `&amp;` for ampersand and `&lt;` for less-than. It is also recommended that you use the greater-than escape sequence `&gt;` instead of the greater-than character (`>`) to avoid confusion with tags. If you are using the WebVTT file for metadata these restrictions do not apply.

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

There are a number of tags, such as `<b>`, that can be used.
However, if the WebVTT file is used in a {{HTMLElement("track")}} element where the attribute [`kind`](/en-US/docs/Web/HTML/Element/track#kind) is `chapters` then you cannot use tags.

- Timestamp tag

  - : The timestamp must be greater that the cue's start timestamp, greater than any previous timestamp in the cue payload, and less than the cue's end timestamp. The _active text_ is the text between the timestamp and the next timestamp or to the end of the payload if there is not another timestamp in the payload. Any text before the _active text_ in the payload is _previous text_. Any text beyond the _active text_ is _future text_. This enables karaoke style captions.

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

- Class tag (`<c></c>`)

  - : Style the contained text using a CSS class.

    ```xml
    <c.classname>text</c>
    ```

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

## NOTE blocks

NOTE blocks are optional sections that can be used to add comments to a WebVTT file.
They are intended for those reading the file and are not seen by users.
For example, you might use them to document the author, provide an overview of your structure, or note parts that are still missing.

Comments may contain newlines but cannot contain a blank line, which is equivalent to two consecutive newlines.
A blank line signifies the end of a comment.

A comment cannot contain the string `-->`, the ampersand character (`&`), or the less-than sign (`<`).
If you wish to use these characters, you need to instead use a {{glossary("character reference")}} such as `&amp;` for ampersand and `&lt;` for less-than.
It is also recommended that you use the greater-than escape sequence (`&gt;`) instead of the greater-than character (`>`) to avoid confusion with tags.

A comment consists of three parts:

- The string `NOTE`.
- A space or a newline.
- Zero or more characters other than those noted above.

Below we show a number of examples:

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

## Styling WebVTT cues

You can style WebVTT cues by looking for elements which match the {{cssxref("::cue")}} pseudo-element.

### Within site CSS

```css
video::cue {
  background-image: linear-gradient(to bottom, dimgray, lightgray);
  color: papayawhip;
}

video::cue(b) {
  color: peachpuff;
}
```

Here, all video elements are styled to use a gray linear gradient as their backgrounds, with a foreground color of `"papayawhip"`. In addition, text boldfaced using the {{HTMLElement("b")}} element are colored `"peachpuff"`.

The HTML snippet below actually handles displaying the media itself.

```html
<video controls autoplay src="video.webm">
  <track default src="track.vtt" />
</video>
```

### Within the WebVTT file itself

You can also define the style directly in the WebVTT file. In this case, you insert your CSS rules into the file with each rule preceded by the string `"STYLE"` all by itself on a line of text, as shown below:

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

We can also use identifiers inside WebVTT file, which can be used for defining a new style for some particular cues in the file. The example where we wanted the transcription text to be red highlighted and the other part to remain normal, we can define it as follows using CSS. Where it must be noted that the CSS uses escape sequences the way they are used in HTML pages:

```plain
WEBVTT

1
00:00.000 --> 00:02.000
That's an, an, that's an L!

crédit de transcription
00:04.000 --> 00:05.000
Transcrit par Célestes™
```

```css
::cue(#\31) {
  color: lime;
}
::cue(#crédit\ de\ transcription) {
  color: red;
}
```

Positioning of text tracks is also supported, by including positioning information after the timings in a cue, as seen below (see [Cue settings](#cue_settings) for more information):

```plain
WEBVTT

00:00:00.000 --> 00:00:04.000 position:10%,line-left align:left size:35%
Where did he go?

00:00:03.000 --> 00:00:06.500 position:90% align:right size:35%
I think he went down this lane.

00:00:04.000 --> 00:00:06.500 position:45%,line-right align:center size:35%
What are you waiting for?
```

## CSS pseudo-classes

CSS pseudo classes allow us to classify the type of object which we want to differentiate from other types of objects. It works in similar manner in WebVTT files as it works in HTML file.

It is one of the good features supported by WebVTT is the localization and use of class elements which can be used in same way they are used in HTML and CSS to classify the style for particular type of objects, but here these are used for styling and classifying the Cues as shown below:

```plain
WEBVTT

04:02.500 --> 04:05.000
J'ai commencé le basket à l'âge de 13, 14 ans

04:05.001 --> 04:07.800
Sur les <i.foreignphrase><lang en>playground</lang></i>, ici à Montpellier
```

In the above example it can be observed that we can use the identifier and pseudo class name for defining the language of caption, where `<i>` tag is for italics.

The type of pseudo class is determined by the selector it is using and working is similar in nature as it works in HTML. Following CSS pseudo classes can be used:

- `lang` (Language): e.g., `p:lang(it)`.
- `link`: e.g., `a:link`.
- `nth-last-child`: e.g., `p:nth-last-child(2)`.
- `nth-child(n)`: e.g., `p:nth-child(2)`.

Where p and a are the tags which are used in HTML for paragraph and link, respectively and they can be replaced by identifiers which are used for Cues in WebVTT file.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The CSS [`::cue` and `::cue()`](/en-US/docs/Web/CSS/::cue) pseudo-elements
