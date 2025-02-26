---
title: "HTMLImageElement: alt property"
short-title: alt
slug: Web/API/HTMLImageElement/alt
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.alt
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} property **`alt`** provides fallback (alternate) text to display when the image specified by the {{HTMLElement("img")}} element is not loaded.

This may be the case because of an error, because the user has disabled the loading of images, or because the image hasn't finished loading yet.

Perhaps the most important reason to use the `alt` property is to support [accessibility](/en-US/docs/Web/Accessibility), as the `alt` text may be used by screen readers and other assistive technologies to help people with a disability make full use of your content.
It will be read aloud or sent to a braille output device, for example, to support blind or visually impaired users.

> **Think of it like this:** When choosing `alt` strings for your images, imagine what you would say when reading the page to someone over the phone without mentioning that there's an image on the page.

The alternate text is displayed in the space the image would occupy and should be able to take the place of the image _without altering the meaning of the page_.

## Value

A string which contains the alternate text to display when the image is not loaded or for use by assistive devices.

The `alt` attribute is officially mandatory; it's meant to always be specified.
If the image doesn't require a fallback (such as for an image which is decorative or an advisory icon of minimal importance), you may specify an empty string (`""`).
For compatibility reasons, browsers generally will accept an image without an `alt` attribute, but you should try to get into the habit of using it.

## Usage notes

The fundamental guideline for the `alt` attribute is that every image's alternate text should be able to replace the image _without altering the meaning of the page_. You should never use `alt` for text that could be construed as a caption or title.
There are separate attributes and elements designed for those purposes.

## Examples

Beyond that, there are additional guidelines for using `alt` appropriately which vary depending on what the image is being used for.
These are shown in the examples below.

### Decorative images

Images with no semantic meaning—such as those which are solely decorative—or of limited informational value, should have their `alt` attributes set to the empty string (`""`).
This is shown in the example below.

#### HTML

In the HTML for this example, shown below, the {{HTMLElement("img")}} element includes the `alt` property, which will prevent the image from having any alternate text, since it's a decorative detail.

```html
<div class="container">
  <div class="left-margin">
    <img src="margin-flourish.svg" alt="" />
  </div>
  <div class="contents">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
      ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
      neque libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar
      ex id sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus
      laoreet cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
      scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
    </p>
  </div>
</div>
```

#### CSS

The CSS for this example sets up the styles for the layout as shown in the result below.

```css
body {
  margin: 0;
  padding: 0;
}

p {
  margin-block-start: 0;
  margin-block-end: 1em;
  margin-top: 0;
  margin-bottom: 1em;
}

.container {
  width: 100vh;
  height: 95vh;
  font:
    16px Arial,
    Helvetica,
    sans-serif;
}

.left-margin {
  background-color: rgb(241 240 237);
  width: 9em;
  height: 100%;
  float: left;
  margin-right: 5px;
  padding-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-margin img {
  width: 6em;
}

.contents {
  background-color: rgb(241 240 235);
  height: 100%;
  margin-left: 2em;
  padding-top: 1em;
  padding-left: 2em;
  padding-right: 1em;
}
```

#### Result

{{EmbedLiveSample("Decorative_images", 600, 500)}}

### Images used as buttons

When using an image as a button (by using it as the only visible child of an {{HTMLElement("a")}} element representing a hyperlink), the `alt` attribute must be used to convey the purpose of the button.
In other words, it should be the same text you would use in a textual button to serve the same purpose.

For example, in the snippet of HTML below, a toolbar which uses icon images as link labels provides `alt` attributes for each giving a textual label to use instead of the icon when the icons cannot be or are intentionally not used.

```html
<li class="toolbar" role="toolbar">
  <a href="songs.html" role="button">
    <img src="songicon.svg" alt="Songs" />
  </a>
  <a href="albums.html" role="button">
    <img src="albumicon.svg" alt="Albums"
  /></a>
  <a href="artists.html" role="button">
    <img src="artisticon.svg" alt="Artists" />
  </a>
  <a href="playlists.html" role="button">
    <img src="playlisticon.svg" alt="Playlists" />
  </a>
</li>
```

### Images containing diagrams or maps

When an image contains information presented as a diagram, chart, graph, or map, the `alt` text should provide the same information, at least in summary form.
This is true whether the /me image is in a bitmapped format such as [PNG](/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) or [JPEG](/en-US/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) or in a vector format like [SVG](/en-US/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics).

- For a map, the `alt` text could be directions to the place indicated by the map, similarly to how you would explain it verbally.
- For a chart, the text could describe the items in the chart and their values.
- For a diagram, the text could be an explanation of the concept presented by the diagram.

Keep in mind that any text included in diagrams and charts presented in {{Glossary("SVG")}} format may be read by screen readers.
This may impact the decisions you make when writing the `alt` text for the diagram.

### Icons or logos

Logos (such as corporate or brand logos) and informational icons should use the corresponding text in their `alt` strings.
That is, if an image is a corporate logo, the `alt` text should be the name of the company.
If the image is an icon representing a status or other information, the text should be the name of that state.

For example, if an image is a badge that's shown on a page to indicate that the content of the page is new and has been updated recently, the corresponding `alt` text might be `"Updated Recently"` or even `"Updated on 27 August 2019"`.

In this example, a starburst image with the word "New!" is used to indicate that an article is about something new (and probably supposedly also exciting).
The `alt` attribute is set to `New Page!` to allow that text to be displayed in place of the image if the image isn't available.
It is also available to be read by screen readers.

#### HTML

The HTML below creates a snippet of content from a site using the described icon.
Note the use of the `alt` attribute on the {{HTMLElement("img")}}, providing a good substitution string to use in case the image doesn't load.

```html
<div class="container">
  <img
    src="https://www.bitstampede.com/mdn-test/new-page.svg"
    alt="New Page!"
    class="pageinfo-badge" />
  <p class="contents">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis orci
    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac neque
    libero. Vivamus consectetur rhoncus elit eget porta. Etiam pulvinar ex id
    sapien laoreet, quis aliquet odio lobortis. Nam ac mauris at risus laoreet
    cursus vitae et sapien. Etiam molestie auctor eros, ac porta risus
    scelerisque sit amet. Ut nunc neque, porta eu auctor at, tempor et arcu.
  </p>
</div>
```

#### CSS

The main feature of the CSS here is the use of {{cssxref("clip-path")}} and {{cssxref("shape-outside")}} to wrap the text around the icon in an appealing way.

```css
.container {
  max-width: 500px;
}

.pageinfo-badge {
  width: 9em;
  padding-right: 1em;
  float: left;
  clip-path: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
  shape-outside: polygon(
    100% 0,
    100% 50%,
    90% 70%,
    80% 80%,
    70% 90%,
    50% 100%,
    0 100%,
    0 0
  );
}

.contents {
  margin-top: 1em;
  font:
    16px Arial,
    Helvetica,
    Verdana,
    sans-serif;
}
```

#### Result

{{EmbedLiveSample("Icons_or_logos", 640,400)}}

### Other images

Images showing objects or scenes should have `alt` text describing what's seen in the image.
A photo of a yellow teapot might literally have its `alt` attribute set to `"A yellow teapot"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
