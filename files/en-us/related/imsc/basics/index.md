---
title: IMSC basics
slug: Related/IMSC/Basics
page-type: guide
---

IMSC allows you to add subtitles or captions to your online video. In this article we'll take you through what you need to get started, including basic document structure, and the basics of how to style, time, and position subtitles.

> [!NOTE]
> IMSC can be used for any kind of timed text you might want to include on a web document, not just for subtitles and captions. But because subtitles and captions represent the most common use cases for IMSC, we will focus on those. For readability we only use the term subtitles. In the technical context we describe, the term "subtitles" is interchangeable with "captions".

## So what is IMSC?

IMSC is a markup language you can use to define timed text for adding subtitles to digital media. It defines the structure of your subtitle content in an XML document. It consists of a series of elements, which you can use to enclose, or wrap, different parts of your subtitle content to make it appear in a certain way or appear at a certain time. Many of these are similar or the same as HTML features.

If you are not already familiar with XML or HTML, read up on them first and then come back here:

- [XML Introduction](/en-US/docs/Web/XML/Guides/XML_introduction)
- [HTML Basics](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

> [!NOTE]
> If you want to know what you can do with IMSC in real-world scenarios have a look at the expanded example at the end of this tutorial.

## Minimal IMSC document

IMSC is always specified as a complete XML document. As a file it should have the extension "_ttml_".

> [!NOTE]
> IMSC does not have native support in browsers at this current moment, but the [imscJS](https://github.com/sandflow/imscJS) polyfill can be used to bridge this gap. All the examples below are rendered by using imscJS. It creates dynamically HTML and CSS from an IMSC XML document.

Let's look at a minimal IMSC document and how it is rendered:

{{EmbedGHLiveSample("imsc-examples/minimal_ttml/minimal.html", '100%', 560)}}

The most important features are as follows:

- `<tt></tt>` — You always start an IMSC document with the root element `<tt>`. You should also specify the default namespace of the document by using the `xmlns` attribute. Don't worry for now about namespaces. We will come to that in a separate guide.
- `xml:lang` — You must specify the language of your content with the `xml:lang` attribute. Note that the `lang` attribute must have the prefix `xml:`, unlike HTML. In IMSC `<tt lang="en">` is not correct — you always have to write `<tt xml:lang="en">`.
- `<body></body>` — As in HTML, the `<body>` element contains all content that you want to show. For IMSC this is typically subtitle content that you want to show at certain time intervals during the playback of a video.
- `<div></div>` — The `<div>` element is used as a container for subtitle content; you always need to have at least one of these. The `<p>` elements that contain the actual subtitle content always have a `<div>` element as their parent.
- `<p></p>` — Text content for subtitles must always be wrapped in a `<p>` element. The element describes a paragraph of text, in a similar fashion to HTML. The main difference is that it can be timed.

## Timing

The minimal IMSC document from the previous example had no timing. That means that the subtitle content will be shown during the complete duration of the video. Usually this is not what you want. Instead you want subtitles to show up at a certain time and then disappear. You can use a combination of the timing attributes `begin`, `end`, and `dur` to make this happen.

Consider the following editable example:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player.html", '100%', 590)}}

This includes the following new attributes:

- `begin` — specifies when the subtitle shall start to show (in this case 1s after the video started).
- `end` — specifies when the subtitle shall disappear (in this case 2s after the video started).

Play around with the second values in the code sample and push the reload button when you are ready.

> [!NOTE]
> The end times in IMSC are not "inclusive". The subtitle "Hello, I am Mork from Ork." is not shown anymore when it reaches the second value in time.

You can also use the `dur` attribute for timing:

{{EmbedGHLiveSample("imsc-examples/minimal-timing/minimal-timing-player-dur.html", '100%', 590)}}

This attribute can be used as an alternative to the `end` attribute. It defines "how long" the subtitle is shown after the `begin` time has elapsed. In the example the second paragraph shall be displayed for 2s. As it starts at second 2 it shall disappear at second 4.

Note what has changed at second 2 compared to the previous example.

## Colors

Often subtitles are shown on an opaque or semi-opaque background to improve readability. You can use the `backgroundColor` and `color` attributes to change the colors, as demonstrated in this editable example:

{{EmbedGHLiveSample("imsc-examples/minimal-colors/minimal-colors.html", '100%', 620)}}

Here we've introduced the following:

- `tts:backgroundColor` — This attribute sets the background color on the element it is applied to. In this case it is applied to the `<p>` element, or more correctly to the area that is generated by the `<p>`

  element. The default background color is `transparent`.

- `tts:color` — This attribute sets the text color on the element it is applied to. The default text color is `white`.

Try setting some other colors for the text and background colors:

- Try other named colors like `lime` or `aqua`.
- Use hexadecimal values like `#00ff00` or `#00ffff`.
- You can use other color schemes like `rgb(0 255 255)`.
- Finally, try semi-transparent variations, like `rgb(0 0 0 / .8)`.

> [!NOTE]
> Don't worry for now about namespaces. We will explain the meaning of `xmlns:tts` and `tts:backgroundColor` in a separate guide.

As explained in the [IMSC Styling](/en-US/docs/Related/IMSC/Styling) guide, it is possible to define a collection of styling properties that can be used any number of times. The style `s1` below is applied three times:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
    xmlns:tts="http://www.w3.org/ns/ttml#styling"
    xml:lang="en">
  <head>
   <styling>
     <style xml:id="s1" tts:color="yellow" tts:fontStyle="italic"/>
   </styling>
  </head>
  <body>
    <div>
      <p>
        Hello, I am <span style="s1">Mork</span> from <span style="s1">Ork</span>.<br/>
        I come from another <span style="s1">planet</span>.
      </p>
    </div>
  </body>
  </tt>
```

## Position, width, and length

If you do not specify a position explicitly, the subtitle shows up by default in the top-left-hand corner of the video. Commonly however you will want to position your subtitle somewhere else, like the bottom center of the video. You need to specify a region to position a subtitle.

See below for a minimal document that uses regions for positioning.

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"
 xml:lang="en">
  <head>
    <layout>
      <region tts:origin="10% 80%"
              tts:extent="80% 20%"
              xml:id="bottom"/>
      <region tts:origin="10% 10%"
              tts:extent="80% 20%"
              xml:id="top"/>
    </layout>
</head>
<body>
    <div>
      <p region="bottom"
          tts:backgroundColor="black">
          Hello, I am Mork from Ork.
      </p>
    </div>
  </body>
</tt>
```

This includes the following new features:

- `<head></head>` — As in HTML, the `<head>` element acts as a container for all the stuff you want to include in an IMSC document that isn't subtitle content, most commonly metadata about the content or document. You'll use it mostly to store positioning and styling information.
- `<layout></layout>` — This element acts as a wrapper for positioning information. It has `<region>` elements as its children.
- `<region></region>` — this element can be used to define `region`s, rectangular areas you can place on top of your video. They have a defined position, width, and height, plus an `id` to uniquely identify them. You can think of it as being similar to a `<div>` element in HTML that is given an absolute position, width, and height via CSS. If subtitle content is "linked" to a region (by specifying the region's `id` in its `region` attribute), it will be shown inside the area generated by that region.
- `xml:id` - the `xml:id` attribute. The value of the `xml:id` attribute is a string that can be used to link subtitle content to a `region`.
- `tts:origin` — This attribute defines the position of the top-left corner of the region. It uses the % (percentage) metric. The first value defines how far the top left corner of the region is pushed to the right — in this case the value `10%` places the region 10% of the video's width to the right. The second value defines how far the top left corner of the region is placed towards the bottom of the video — in this case the value `80%` pushes the top left corner of the region 80% of the video's height towards the bottom of the video.
- `tts:extent` — This attribute defines the width and height of the region. In this case `80%` sets the width to 80% of the video's width, and `20%` sets the height of the region to 20% of the video's height.
- `region` — setting this on some subtitle content and then giving it a region's `xml:id` as its value causes it to _reference_ that region, meaning that at the specified time, it will appear in the area defined by that region. So here, the value `bottom` places the subtitle content represented by this `<p>` element in the region with an `xml:id` of `bottom`.

This sample will be rendered as shown below. Give it a try and play around with the code in the two boxes. You could for example set the `tts:origin` attribute to "_0% 0%_". Or see what happens when you change the value of the `region` attribute of the `<p>` element to "_top_".

{{EmbedGHLiveSample("imsc-examples/minimal-region/minimal-region.html", '100%', 650)}}

## Expanded example

The more expanded example below gives you an idea what you can do with IMSC after you worked through our tutorials.

{{EmbedGHLiveSample("imsc-examples/basic-expanded/basics-expanded.html", '100%', 300)}}

```xml
<?xml version="1.0" encoding="UTF-8"?>
<tt
  xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling"
  xmlns:ttp="http://www.w3.org/ns/ttml#parameter" xml:lang="en" ttp:timeBase="media">
  <head>
    <styling>
      <style xml:id="defaultStyle" tts:fontFamily="Verdana, Arial" tts:fontSize="100%"
        tts:textAlign="center"/>
      <style xml:id="alignStart" tts:textAlign="start"/>
      <style xml:id="alignCenter" tts:textAlign="center"/>
      <style xml:id="alignEnd" tts:textAlign="end"/>
      <style xml:id="textWhite" tts:color="#FFFFFF"/>
      <style xml:id="titleHeading" tts:fontSize="300%"/>
      <style xml:id="spanDefaultStyle" tts:backgroundColor="#000000" tts:color="#FFFFFF"/>
      <style xml:id="monoFont" tts:fontFamily="Lucida Console, Monaco, monospace"/>
      <style xml:id="sansserifFont" tts:fontFamily="Impact, Charcoal, sans-serif"/>
      <style xml:id="comicFont" tts:fontFamily="Comic Sans MS, cursive, sans-serif"/>
      <style xml:id="blueText" tts:color="#00FFFF" tts:backgroundColor="#000000"/>
      <style xml:id="limeText" tts:color="#00FF00" tts:backgroundColor="#000000"/>
      <style xml:id="fuchsiaText" tts:color="#FF00FF" tts:backgroundColor="#000000"/>
      <style xml:id="yellowText" tts:color="#FFFF00" tts:backgroundColor="#000000"/>
    </styling>
    <layout>
      <region xml:id="rTop" tts:origin="10% 10%" tts:extent="80% 80%" tts:displayAlign="before"/>
      <region xml:id="rCenter" tts:origin="10% 10%" tts:extent="80% 80%" tts:displayAlign="center"/>
      <region xml:id="rBottom" tts:origin="10% 10%" tts:extent="80% 80%" tts:displayAlign="after"/>
    </layout>
  </head>
  <body style="defaultStyle">
    <div>
      <p xml:id="p1" begin="00:00:01" end="00:00:03" region="rCenter" style="alignCenter">
        <span style="titleHeading">IMSC Demo</span>
      </p>
      <p xml:id="p2" begin="00:00:03" end="00:00:05" region="rBottom" style="alignCenter">
        <span style="spanDefaultStyle">You </span><span style="blueText">can</span><span
          style="yellowText"> apply</span><span style="fuchsiaText"> different</span><span
          style="limeText"> colors, </span>
      </p>
      <p xml:id="p3" begin="00:00:05" end="00:00:07" region="rBottom" style="alignCenter">
        <span style="monoFont">use</span><span style="sansserifFont"> different</span><span
          style="comicFont"> fonts,</span>
      </p>
      <p xml:id="p4" begin="00:00:07" end="00:00:09" region="rBottom" style="alignCenter">
        <span>set </span><span tts:fontSize="150%">the</span><span tts:fontSize="200%"> font
          size.</span>
      </p>
      <p xml:id="p5" begin="00:00:09" end="00:00:11" region="rBottom" style="alignStart">
        <span style="spanDefaultStyle">Align at the start, </span><br/>
      </p>
      <p xml:id="p6" begin="00:00:11" end="00:00:13" region="rBottom" style="alignCenter">
        <span style="spanDefaultStyle">center and</span>
      </p>
      <p xml:id="p7" begin="00:00:13" end="00:00:15" region="rBottom" style="alignEnd">
        <span style="spanDefaultStyle">end</span><br/>
      </p>
      <p xml:id="p8" begin="00:00:15" end="00:00:17" region="rTop" style="alignCenter">
        <span style="spanDefaultStyle">or vertically at the top, </span><br/>
      </p>
      <p xml:id="p9" begin="00:00:17" end="00:00:19" region="rCenter" style="alignCenter">
        <span style="spanDefaultStyle">center and </span>
      </p>
      <p xml:id="p10" begin="00:00:19" end="00:00:21" region="rBottom" style="alignCenter">
        <span style="spanDefaultStyle">bottom.</span>
      </p>
    </div>
  </body>
</tt>
```

## Summary

That's it for your crash course in IMSC code basics! We've only really scratched the surface here, and you'll go much deeper into the above topics in subsequent articles.

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
