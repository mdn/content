---
title: Namespaces in IMSC
slug: Related/IMSC/Namespaces
page-type: guide
---

This article covers the subject of XML namespaces, giving you enough information to recognize their usage in IMSC, and be able to use it effectively.

## What are XML namespaces?

Namespaces are basically the mechanism that you use in XML to differentiate different families of markup (which may have features with the same name), and allow them to be used in the same document.

To help you understand what we mean by this, let's use a real-world example — human family names. There are many people in the world called Mary. One way to tell them apart is by their full names — there can be a Mary Smith and a Mary Jones.

In XML you can also give elements and attributes a "family name", which is their namespace. Namespaces define what family an XML vocabulary belongs to, and generally consist of an identifying string of characters. The `<p>` element is available in both HTML and IMSC, so perhaps you could use the namespace `html` to specify HTML's `<p>`, and `imsc` to specify IMSC's `<p>`?

As with many things, it's not that simple. There might be another XML vocabulary named IMSC and it may not be related to subtitles. This is the same with Mary Smith — There are many Mary Smiths in the world, so more information is needed to tell them apart — their birthdays, hair color, address, etc.

So normally you use longer strings as namespace names. A URL is a very popular form of namespace. It is easy to remember and can also point to further information about that XML vocabulary.

- The W3C standard IMSC uses the URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) as the namespace for the `<p>` element.
- For the `<p>` in HTML the namespace is [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

If you use the namespace `http://www.w3.org/ns/ttml` it is quite safe to assume that you are referring to elements from the IMSC vocabulary.

## Setting namespaces in documents

So how do you express in an IMSC document that the `<p>` element belongs to the namespace `http://www.w3.org/ns/ttml`? You need to include the namespace in the document. The simple way to do this could be to include it in each element and attribute that comes from that namespace. You set the namespace of an element by specifying the namespace identifier inside its `xmlns` attribute:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body xmlns="http://www.w3.org/ns/ttml">
    <div xmlns="http://www.w3.org/ns/ttml">
      <p xmlns="http://www.w3.org/ns/ttml">Hello world</p>
    </div>
  </body>
</tt>
```

But this is not very efficient. Imagine a document with hundreds of subtitles. This would be very verbose.

### Default namespaces

Fortunately, you don't need to do the above — instead you can just use a default namespace. If you set the attribute `xmlns` on the document's root element to the value `http://www.w3.org/ns/ttml`, all elements nested inside the root will inherit this namespace — they will all have that namespace too.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

In this example the elements `<tt>`, `<body>`, `<div>` and `<p>` have all the namespace `http://www.w3.org/ns/ttml`.

Because nearly all XML elements you need in an IMSC document are in the namespace `http://www.w3.org/ns/ttml`, this makes life a lot easier. If you want to use an element from another vocabulary inside an IMSC document, you can still overwrite the default namespace.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <head>
   <metadata>
     <documentPublisher xmlns="urn:ebu:tt:metadata">MDN</documentPublisher>
   </metadata>
  </head>
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

The element `<documentPublisher>` comes from the [EBU Part M metadata](https://tech.ebu.ch/publications/tech3390) vocabulary. The elements in this vocabulary have the namespace `urn:ebu:tt:metadata`. By setting the `xmlns` attribute on the element `<documentPublisher>` to `urn:ebu:tt:metadata`, the namespace `http://www.w3.org/ns/ttml` gets overwritten. Now the `<documentPublisher>` element and all its descendants have the namespace `urn:ebu:tt:metadata`.

A better way to overwrite a default namespace is by using prefixes.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:ebuttm="urn:ebu:tt:metadata">
  <head>
   <metadata>
     <ebuttm:documentPublisher>MDN</ebuttm:documentPublisher>
   </metadata>
  </head>
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

We explain in the following section how XML namespace prefixes work.

## Namespaced attributes

We've looked at elements, but how can we specify the namespace of IMSC attributes, and without being too verbose? Contrary to XML elements there is no default namespace for attributes.

In addition, IMSC attributes are contained in more than one namespace. Let's explain further — in IMSC there are different categories of attributes, styling attributes for example. The different categories have different namespaces. For example, all styling attributes have the namespace `http://www.w3.org/ns/ttml#styling`.

As for XML elements, it would be too verbose to always write the complete namespace for each attribute, e.g. `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Luckily XML has the concept of prefixes. A prefix can be thought of as a "shortcut" for a namespace. For example, we can define an attribute namespace on the root element:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

By defining `xmlns:tts="http://www.w3.org/ns/ttml#styling` on the `<tt>` element you "bind" the prefix `tts` to the styling namespace. Subsequently, whenever you prefix an attribute (or element) with `tts` (plus a colon) it is given the namespace `http://www.w3.org/ns/ttml#styling`. This way you can write the prefix throughout your document, not the whole namespace each time.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling" >
  <body>
    <div>
      <p tts:color="yellow" tts:fontSize="120%">
        Hello world
      </p>
     <p tts:color="white" tts:fontSize="120%">
        Hi!
     </p>
    </div>
  </body>
</tt>
```

Much more readable, isn't it?

> [!NOTE]
> The namespace/prefix match is only a document-wide agreement. Theoretically you can use another prefix than `tts` to bind the styling namespace. It is completely legal to define `xmlns:foo="http://www.w3.org/ns/ttml#styling"` and then write `<p foo:color="yellow">`. But it makes your IMSC document much more readable if you use the official prefixes listed in [namespace section](https://www.w3.org/TR/ttml-imsc1.0.1/#namespaces) of the IMSC standard.

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
