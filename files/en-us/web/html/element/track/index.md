---
title: "<track>: The Embed Text Track element"
slug: Web/HTML/Element/track
page-type: html-element
browser-compat: html.elements.track
---

{{HTMLSidebar}}

The **`<track>`** [HTML](/en-US/docs/Web/HTML) element is used as a child of the media elements, {{HTMLElement("audio")}} and {{HTMLElement("video")}}. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in [WebVTT format](/en-US/docs/Web/API/WebVTT_API) (`.vtt` files) — Web Video Text Tracks.

{{EmbedInteractiveExample("pages/tabbed/track.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        As it is a void element, the start tag must be present and the end tag
        must not be present.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        <p>
          A media element, {{HTMLElement("audio")}} or
          {{HTMLElement("video")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTrackElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `default`
  - : This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element.
- `kind`

  - : How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute contains an invalid value, it will use `metadata` (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`). The following keywords are allowed:

    - `subtitles`

      - Subtitles provide translation of content that cannot be understood by the viewer. For example speech or text that is not English in an English language film.
      - Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.

    - `captions`

      - Closed captions provide a transcription and possibly a translation of audio.
      - It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
      - Suitable for users who are deaf or when the sound is muted.

    - `descriptions`

      - Textual description of the video content.
      - Suitable for users who are blind or where the video cannot be seen.

    - `chapters`

      - Chapter titles are intended to be used when the user is navigating the media resource.

    - `metadata`

      - Tracks used by scripts. Not visible to the user.

- `label`
  - : A user-readable title of the text track which is used by the browser when listing available text tracks.
- `src`
  - : Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document — unless the {{HTMLElement("audio")}} or {{HTMLElement("video")}} parent element of the `track` element has a [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute.
- `srclang`
  - : Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to `subtitles`, then `srclang` must be defined.

## Usage notes

### Track data types

The type of data that `track` adds to the media is set in the `kind` attribute, which can take values of `subtitles`, `captions`, `descriptions`, `chapters` or `metadata`. The element points to a source file containing timed text that the browser exposes when the user requests additional data.

A media element cannot have more than one `track` with the same `kind`, `srclang`, and `label`.

### Detecting cue changes

The underlying {{domxref("TextTrack")}}, indicated by the {{domxref("HTMLTrackElement.track", "track")}} property, receives a `cuechange` event every time the currently-presented cue is changed. This happens even if the track isn't associated with a media element.

If the track _is_ associated with a media element, using the {{HTMLElement("track")}} element as a child of the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, the `cuechange` event is also sent to the {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

## Examples

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4" />
  <source src="sample.ogv" type="video/ogv" />
  <track kind="captions" src="sampleCaptions.vtt" srclang="en" />
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en" />
  <track kind="chapters" src="sampleChapters.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de" />
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en" />
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja" />
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz" />
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1" />
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2" />
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3" />
  <!-- Fallback -->
  …
</video>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVTT text track format](/en-US/docs/Web/API/WebVTT_API)
- {{domxref("HTMLMediaElement.textTracks")}}
