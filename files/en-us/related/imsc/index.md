---
title: "IMSC: subtitles and captioning for the Web"
slug: Related/IMSC
page-type: guide
---

IMSC (TTML Profiles for Internet Media Subtitles and Captions) is a file format for representing subtitles and captions. It uses XML to describe content, timing, layout, and styling. IMSC is very similar to HTML and CSS in concept — in fact, most IMSC styles have a direct equivalent in CSS.

## Concepts and usage

IMSC is standardized by the W3C, and used around the world by content producers (e.g. 20th Century Fox), online services (e.g. Netflix), and traditional broadcasters (e.g. the BBC). Many platforms and players support it, e.g. iOS devices and the dashJS player.

IMSC supports a wide range of world languages and scripts, and rich styling. In addition to text-based subtitles, IMSC also supports PNG subtitles.

Each IMSC document is self-contained and combines content, timing, layout and styling information. The content of the document is structured using tags similar to those used in HTML such as `<body>`, `<div>`, `<p>`, `<span>`, and `<br>`. Timing and styling are expressed using attributes such as `begin`, `end`, `color`, `tts:backgroundColor`, `tts:fontSize`, `tts:fontFamily` — these are mostly familiar concepts to anyone familiar with CSS.

### Differences between IMSC, HTML, and CSS

IMSC differs from HTML in a number of ways:

- IMSC uses [namespaces](/en-US/docs/Related/IMSC/Namespaces), so that `tts:fontSize` is not the same as `fontSize`, and namespace declarations are required, like
  `<tt xmlns="http://www.w3.org/ns/ttml" xmlns:tts="http://www.w3.org/ns/ttml#styling" …>`
- IMSC has stricter rules, for instance `<p>` elements can only be present within `<div>` elements, and cannot be direct children of `<body>` elements.

While attributes names and syntax are similar, styling differs from CSS in a couple of ways:

- Whereas CSS properties use hyphens, like `font-size`, IMSC uses camelCase, like `tts:fontSize`.
- IMSC does not use external stylesheets.

### Differences between IMSC and WebVTT

IMSC is unrelated to [WebVTT](/en-US/docs/Web/API/WebVTT_API), which is another way of making subtitles and captions for the Web.

WebVTT is supported natively to some extent by browsers, while IMSC is not.

There is however an IMSC polyfill, called imscJS, which is used to render all the examples in this documentation. From a developer's perspective, imscJS allows a consistent experience across browsers.

IMSC also supports styles, like `tts:linePadding` and `tts:fillLineGap`, and features, such as support for HDR and stereoscopic 3D, that are useful for subtitle and captions, but not available in WebVTT.

Below is an example that uses `tts:fillLineGap`:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
    xmlns:tts="http://www.w3.org/ns/ttml#styling"
    xmlns:itts="http://www.w3.org/ns/ttml/profile/imsc1#styling"
    xml:lang="en">
    <head>
      <styling>
       <style xml:id="defaultStyle"
              tts:fontSize="125%"
              tts:lineHeight="120%"/>
       <style xml:id="spanStyle"
              tts:backgroundColor="black"
              tts:color="white"/>
       <style xml:id="fillGap"
             itts:fillLineGap="true"/>
      </styling>
     <layout>
     <region xml:id="top"
             tts:origin="5% 5%"
             tts:extent="90% 40%"
             tts:textAlign="center"
             tts:displayAlign="before"/>
     <region xml:id="bottom"
            tts:origin="5% 55%"
            tts:extent="90% 40%"
            tts:textAlign="center"
            tts:displayAlign="after"/>
    </layout>
  </head>
 <body style="defaultStyle">
  <div>
    <p region="top">
      <span style="spanStyle">Without itts:fillLineGap<br/>
      Gaps between lines appear.</span>
    </p>
    <p region="bottom" style="fillGap">
      <span style="spanStyle">With itts:fillLineGap<br/>
      Gaps between lines are "filled".<br/></span>
    </p>
    </div>
 </body>
</tt>
```

{{EmbedGHLiveSample("imsc-examples/fillLineGap/fillLineGap.html", '100%', '256px')}}

… and an example that uses `ebutts:linePadding`:

{{EmbedGHLiveSample("imsc-examples/linePadding/linePadding.html", '100%', '256px')}}

Last but not least, IMSC is compatible with SMPTE-TT and EBU-TT-D, which are widely used in the USA and in Europe. IMSC is also actively used in the authoring of TV and movie content. Implementing IMSC support therefore removes the need for conversion to WebVTT.

In contrast to IMSC, which uses markup, WebVTT uses a combination of CSS and plaintext.

## Tutorials

- [IMSC basics](/en-US/docs/Related/IMSC/Basics)
  - : This takes you through what you need to get started with IMSC, including basic document structure, and the basics of how to style, time, and position subtitles. These topics will be expanded on later in their own tutorials.
- [Using the imscJS polyfill](/en-US/docs/Related/IMSC/Using_the_imscJS_polyfill)
  - : You currently need a polyfill to render IMSC on the web. imscJS is a good choice as it is actively maintained and has almost complete coverage of the IMSC features. This article hows you how to make use of imscJS and how to integrate it on your own website.
- [Styling IMSC documents](/en-US/docs/Related/IMSC/Styling)
  - : IMSC offers many options for styling documents, and most of the IMSC styling properties have direct CSS equivalents, making them familiar to web developers. In this guide you'll learn a bit more about IMSC styling including the difference between inline and referential styling, and efficient styling using inheritance and region styling.
- [Subtitle placement in IMSC](/en-US/docs/Related/IMSC/Subtitle_placement)
  - : IMSC allows the author to precisely control the position of subtitles, such that the text is positioned next to the speaker or to avoid obscuring an important content in your video. Learn how to define a subtitle region and how to define its width and height.
- [Namespaces in IMSC](/en-US/docs/Related/IMSC/Namespaces)
  - : This article covers the subject of XML namespaces, giving you enough information to recognize their usage in IMSC, and be able to use it effectively.
- [Timing in IMSC](/en-US/docs/Related/IMSC/Timing_in_IMSC)
  - : When building an IMSC document, each defined piece of text must include timing information to specify when it should appear. There are multiple ways to describe when a subtitle should start and stop displaying, with pros and cons to each method.
- [Mapping video time codes to IMSC](/en-US/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC)
  - : Mapping the time or time code value that is seen within a video track or video editor timeline to an IMSC document can be a little tricky. There are a few different issues that you'll need to be aware of, which we'll cover in this article.
- [IMSC and other standards](/en-US/docs/Related/IMSC/IMSC_and_other_standards)
  - : IMSC is the result of an international effort to bring together popular profiles of [TTML](https://www.w3.org/TR/ttml/), like [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) and [SMPTE-TT](https://ieeexplore.ieee.org/document/7291854/). This article provides an overview how IMSC is related to these other subtitle standards, and explains the differences between the versions of IMSC.

## Reference

- [TTML Profiles for Internet Media Subtitles and Captions](https://www.w3.org/TR/ttml-imsc/all/)

## Tools

- imscJS polyfill
  - : IMSC documents can be rendered in browsers using the [imscJS](https://github.com/sandflow/imscJS) polyfill.
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js/wiki)
  - : The reference player of the DASH Industry Forum with IMSC support.

## Specifications

- [TTML Profiles for Internet Media Subtitles and Captions 1.2](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

## Browser compatibility

IMSC does not have native support in browsers at this current moment, but it can be used to effectively render timed text in web documents via the [imscJS](https://github.com/sandflow/imscJS) polyfill.

## See also

- [Timed Text Working Group](https://www.w3.org/AudioVideo/TT/)
  - : The IMSC standard is developed by the W3C Timed Text Group, which you are encouraged to join if you wish to contribute directly to the standard.
- [IMSC standards repository](https://github.com/w3c/imsc)
  - : At the IMSC GitHub repository you can provide feedback on the specifications and file issues
- [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
  - : WebVTT is another mechanism for implementing captions and subtitles on the web, which has some native support in browsers and some useful features.

## Docs project team

Team:

- Dave Kneeland
- Pierre-Anthony Lemieux
- Andreas Tai

If you want to get involved with documenting IMSC, please contact [Andreas Tai](mailto:tai@irt.de).

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
