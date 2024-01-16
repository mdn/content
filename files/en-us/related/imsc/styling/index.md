---
title: Styling IMSC documents
slug: Related/IMSC/Styling
page-type: guide
---

IMSC offers many options for styling documents, and most of the IMSC styling properties have direct CSS equivalents, making them familiar to web developers. In this guide you'll learn a bit more about IMSC styling including the difference between inline and referential styling, and efficient styling using inheritance and region styling.

## Inline styling

The simplest way of styling content elements like `<p>` or `<span>` is by specifying one or more style attributes, such as `tts:color`, on them. For instance, the following

```xml
<p tts:textAlign="center"
   tts:fontSize="64px"
   tts:color="red"
   tts:fontFamily="proportionalSansSerif"
   tts:fontStyle="italic">
 Hello, I am Mork from Ork
</p>
```

yields:

{{EmbedGHLiveSample("imsc-examples/inline-styles/inline-styles.html", '100%')}}

## Referential styling

Inline styling is usually avoided since it generates duplication.

Take for example the following two `<span>` elements, which have exactly the same style attributes:

```xml
<p>
  <span tts:color="yellow" tts:backgroundColor="black">
   Hello, I am Mork from Ork.
  </span>
</p>
<p>
  <span tts:color="yellow" tts:backgroundColor="black">
    I come from another planet.
  </span>
</p>
```

In referential styling, styles are defined once and reused throughout the document — in a similar way to how CSS rules can be declared once and then applied to multiple HTML elements via for example, element or class selectors. In IMSC this is achieved by defining a `<styling>` element inside the document `<head>`, inside which is placed one or more `<style>` elements — each one of which defines a set of styles that you can reuse elsewhere. This is illustrated below:

```xml
<tt xmlns="http://www.w3.org/ns/ttml"
    xmlns:tts="http://www.w3.org/ns/ttml#styling"
    xml:lang="en">
  <head>
   <styling>
     <style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
   </styling>
  </head>
  <body>
    <div>
      <p>
        <span style="s1">Hello, I am Mork from Ork.</span>
      </p>
      <p>
        <span style="s1">I come from another planet.</span>
      </p>
    </div>
  </body>
  </tt>
```

Each `<style>` element is given an `id` (`"s1"` in this example):

```xml
<style xml:id="s1" tts:color="yellow" tts:backgroundColor="black"/>
```

which can then be referred to later in the document:

```xml
<span style="s1">Hello, I am Mork from Ork.</span>
```

this is equivalent to:

```xml
<span tts:color="yellow" tts:backgroundColor="black">
  Hello, I am Mork from Ork
</span>
```

In other words, referencing a `<style>` element via its `id` and the `style` attribute is equivalent to copying the style properties of the `<style>` element onto the referencing element, as if the style properties had been specified using inline styling.

## Style inheritance

If a style property is inheritable, like `tts:color`, then the style property will apply to all the descendants of an element it is specified on — again, this is similar to CSS and HTML. In the following example, the color `"yellow"` is applied to the text of both `<p>` elements because they are descendants of the `<body>` element.

```xml
<body tts:color="yellow">
  <div>
    <p>Hello, I am Mork from Ork.</p>
    <p>I come from another planet.</p>
  </div>
</body>
```

Specifying a style on an element overrides any style specified on an ancestor, for example in the following snippet, the color of the second `<p>`'s text would be set to `"aqua"`:

```xml
<body tts:color="yellow">
  <div>
     <p>Hello, I am Mork from Ork.</p>
     <p tts:color="aqua">I come from another planet.</p>
  </div>
</body>
```

## Region styling

Region styling plays a special role in IMSC since a style property specified on a region is inherited by all elements that are selected to the region, starting with the `<body>` element, as if the `<region>` element was the parent of the `<body>` element. For example, in the following example, the text "Hello, I am Mork from Ork" will appear in yellow.

```xml
<tt
  xmlns="http://www.w3.org/ns/ttml"
  xmlns:tts="http://www.w3.org/ns/ttml#styling"
  xml:lang="en">
  <head>
    <layout>
      <region xml:id="r1" tts:color="yellow" />
    </layout>
 </head>
 <body>
   <div>
     <p region="r1">Hello, I am Mork from Ork</p>
   </div>
 </body>
</tt>
```

## Combining styles

Referential styling can be applied to style elements themselves:

```xml
<styling>
  <style xml:id="s1"
         tts:color="yellow"
         tts:backgroundColor="black"/>
  <style xml:id="s2"
         style="s1"
         tts:textAlign="left"/>
</styling>
```

Multiple styles can be also applied simultaneously on an element. For example, in the snippet below the style properties of both styles `s1` and `s2` are applied to the same `<p>` element.

```xml
<p style="s1 s2">Hello, I am Mork from Ork</p>
```

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
