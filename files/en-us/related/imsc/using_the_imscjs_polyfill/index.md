---
title: Using the imscJS polyfill
slug: Related/IMSC/Using_the_imscJS_polyfill
tags:
  - IMSC
  - captions
  - imscJS
  - rendering
  - subtitles
---

You currently need a polyfill to render IMSC on the web. imscJS is a good choice as it is actively maintained and has almost complete coverage of the IMSC features. This article shows you how to make use of imscJS and how to integrate it on your own website.

## Introducing imscJS

[imscJS](https://github.com/sandflow/imscJS) is a JavaScript library for rendering IMSC documents to HTML. Below we will first go through a simple example how to use imscJS, then we'll look at a more complex example that actually renders subtitles on top of video at appropriate times. You can find the source code of the [first sample on GitHub](https://github.com/mdn/imsc/blob/master/imscjs-simple-sample/imscjs-simple-sample.html).

## Embedding imscJS

First you need to embed the imscJS library:

```html
<script src="https://unpkg.com/imsc@1.1.0-beta.2/build/umd/imsc.all.min.js">
```

Once the imscJS library is loaded, it can be used to render an IMSC document in three distinct steps, explained in the below sections.

## Parsing the IMSC document

First of all, the IMSC document is parsed into an immutable JavaScript object (`doc`, in our case):

```js
const doc = imsc.fromXML(source);
```

This step needs to happen only once for every IMSC document. The `doc` object has a single method, `getMediaTimeEvents()`, which returns an array of time offsets (in seconds) indicating where the visual representation of the IMSC document changes.

```js
const t = doc.getMediaTimeEvents();
```

## Generating an IMSC snapshot

In the second step, a snapshot of the IMSC document at a particular point in time (`isd`) is created using `imsc.generateISD()`.

```js
const isd = imsc.generateISD(doc, t[1]);
```

This point in time does not have to be one of the values returned by `getMediaTimeEvents()`, but it usually is. In the example above, the snapshot is created at the second point in time that the IMSC document changes (`t[1]`). In a typical scenario, an application would, prior to media playback and for every offset returned by `getMediaTimeEvents()`, create a snapshot and schedule its presentation at the specified offset.

## Rendering an IMSC snapshot

In the third and final step, a snapshot is rendered into an HTML {{htmlelement("div")}} using `imsc.renderHTML()`:

```js
const vdiv = document.getElementById("render-div");
imsc.renderHTML(isd, vdiv);
```

## Building an IMSC player

Lets look at a more expanded example and show you how can render subtitles with imscJS on an embedded HTML video. As an example we use the below video with subtitles.

{{EmbedGHLiveSample("imsc/imscjs-demo/imscjs-demo.html", '100%', 320)}}

You can find the [HTML markup](https://github.com/mdn/imsc/blob/master/imscjs-demo/imscjs-demo.html) and the [JavaScript source code](https://github.com/mdn/imsc/blob/master/imscjs-demo/js/index.js) on the [MDN repository for IMSC samples](https://github.com/mdn/imsc).

## Accessing the DOM

An IMSC subtitle is rendered by HTML markup with inline CSS. It represents the IMSC subtitles during a specific period on the timeline of the associated media element. As we saw in the [Rendering an IMSC snapshot](#rendering_an_imsc_snapshot) section above, the markup is inserted into a `<div>` element using the `renderHtml()` method. We can think of this `<div>` element as a container for the HTML that was generated from IMSC code. Later we pass the corresponding DOM element as a parameter to `renderHtml()` method.

For convenience we assign this DOM element to a variable.

```js
const renderDiv = document.getElementById("render-div");
```

We use HTML cues associated with HTML text tracks to throw events whenever an IMSC subtitle should appear or disappear. In this example we use a {{htmlelement("track")}} element that we declared in the HTML markup, but we could also create a text track on the fly and add it to the {{htmlelement("video")}}.

```js
const myVideo = document.getElementById("imscVideo");
const myTrack = myVideo.textTracks[0];
```

We use the `src` attribute of the `<track>` element as a pointer to the IMSC document that contains our subtitle:

```js
const ttmlUrl = myVideo.getElementsByTagName("track")[0].src;
```

## Retrieving the IMSC file

The browser will not retrieve the document automatically for us. In most browsers only [WebVTT](/en-US/docs/Web/API/WebVTT_API) is implemented at the moment. Therefore, these browsers expect that the value of the `src` attribute points to a WebVTT file. If it doesn't, they don't use it, and we also have no direct access to the file the `src` attribute is pointing to. We use the `src` attribute therefore just to store the URL of the IMSC file. We need to do the work to retrieve the file and read it into a JavaScript string. In the example we use the `XMLHttpRequest` method for this task:

```js
const client = new XMLHttpRequest();

client.open("GET", ttmlUrl);
client.onreadystatechange = function () {
  initTrack(client.responseText);
};

client.send();
```

## Setting the text track mode

There is one more side effect. Because browsers get no valid WebVTT file from the `src` attribute, they disable the track. The `mode` property of the text track is set to the value `disable`.

But this is not what we want. In disabled mode a cue does not throw events on its start and end times. Because we need these events for rendering the IMSC subtitles we change the mode of the text track to `hidden`. In this mode the browser will throw the events of the cues but will not render the value of the cue text property.

```js
myTrack.mode = "hidden";
```

After we have set up everything, we can concentrate on implementing the IMSC subtitle rendering.

## Generating "subtitle states"

Above we explained that we need to generate IMSC snapshots. In the following section we go a bit deeper into what that means and why this is necessary.

As we learned in [Parsing the IMSC document](#parsing_the_imsc_document), the first step is to parse the IMSC document into an imscJS object.

```js
const imscDoc = imsc.fromXML(text);
```

We want to use cues for rendering the IMSC subtitles. Each cue has properties representing its start time and end time. The browser engine fires events whenever the timeline of the media hits the start and the end time of a cue. We can register function calls for these events. We use them to render the HTML generated from imscJS and remove it again when required.

But the mapping of IMSC subtitles to start and end times of cues is not as straightforward as you may think. Of course, you could just use `<p>` elements with `begin` and `end` attributes. This would map perfectly to the cue interface with their `start` and `end` properties.

But take the following IMSC code:

```html
<p>
  <span begin="1s" end="3s">Hello</span> <span begin="2s" end="3s">world!</span>
</p>
```

This can be taken as an example of an "accumulating" subtitle, where word after word is added to a line. In some countries this is common practice for live captioning.

What happens is the following:

- At second 0 there is no subtitle.
- At second 1 the text "Hello" must appear.
- At second 2 the text "Hello" must still stay "on screen" but the text "world!" needs to be added. So, from second 2 to 3 we have a subtitle representing the text "Hello world!".

To map this into HTML we need at least two cues: one that represents the text "Hello" from second 1-2 and the other representing the text "Hello world!" from second 2-3.

But this is a simplified easy scenario. Imagine that you have 5 more words accumulating. They may have all the same end time but different start times. Or imagine you have a subtitle in a different location (e.g. representing a different speaker). This subtitle is shown in parallel to the other subtitle but the accumulating words may have different start times and therefore different intervals.

Luckily in IMSC and imscJS this scenario is quite easy to cover, because IMSC has a mechanism of stateless subtitle rendering.

Let's have a closer look what that means.

In our HTML/CSS implementation we can think of IMSC subtitles as a rendering layer that is put on top of the video. At each point in time on the media timeline the rendering layer has one specific state. For these "states" IMSC has a conceptual model, the "intermediate synchronous document format", which represents what is eventually rendered in that layer. Each time the rendering needs to change, a new representation is created. What is created is called an **Intermediate Synchronous Document** or **ISD**. This ISD has no dependency on the ISD's that come before or after. It is completely stateless and has all information needed to render the subtitle.

So how can we get the times when the ISD changes?

This is easy: we just call the `getMediaTimeEvents()` method on the imscJS document object (see also [Parsing the IMSC document](#parsing_the_imsc_document)):

```js
const timeEvents = imscDoc.getMediaTimeEvents(); // timeEvents = [0,1,2,3]
```

To get an ISD document that corresponds to a time event we need to call the imscJS method `generateISD()`. We explained this briefly in [Generating an IMSC snapshot](#generating_an_imsc_snapshot). So for the ISD at second 2 we need to do the following:

```js
imsc.generateISD(imscDoc, 2);
```

## Creating text track cues

With two methods we can now generate all necessary states of the IMSC rendering layer. We do this as follows:

- Iterate over the array we get back from `getMediaEvents()`
- For each time event:

  - Create a corresponding cue.
  - Use an `onenter` event to render the ISD.
  - Use an `onexit` event to remove the rendering layer again.

```js
for (let i = 0; i < timeEvents.length; i++) {
  const Cue = window.VTTCue || window.TextTrackCue;

  let myCue;
  if (i < timeEvents.length - 1) {
    myCue = Cue(timeEvents[i], myVideo.duration, "");
  } else {
    myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
  }

  myCue.onenter = function () {
    clearSubFromScreen();
    const myIsd = imsc.generateISD(imscDoc, this.startTime);
    imsc.renderHTML(myIsd, renderDiv);
  };
  myCue.onexit = function () {
    clearSubFromScreen();
  };

  myTrack.addCue(myCue);
}
```

Let's look at it into more detail.

While we loop through the `timeEvents` we can take the value of the time event as the start time of the cue. We can then use the value of the next time event for the end time of the cue, because this indicates that the rendering layer needs to change:

```js
myCue = new Cue(timeEvents[i], timeEvents[i + 1], "");
```

> **Note:** In most browsers text track cues are currently only implemented for the WebVTT format. So usually you create a cue with all WebVTT properties including the WebVTT text property. We never use these properties but it is important to remember that they are still there. In the constructor we also have to add the VTTCue text as a third parameter.

But how should we calculate the end time of the last time event? It does not have a "next" time event we can take the end time from.

If there is no further time event this actually means that the rendering layer is active until the end of the playtime of the media. So we can set the end time to the duration of the associated media:

```js
myCue = new Cue(timeEvents[i], myVideo.duration, "");
```

Once we construct the cue object we can register the function that is called "on entering" the cue:

```js
myCue.onenter = function () {
  clearSubFromScreen();
  const myIsd = imsc.generateISD(imscDoc, this.startTime);
  imsc.renderHTML(myIsd, renderDiv);
};
```

We generate the ISD that is associated with cue and then use the imscJS method `renderHTML()` to render its corresponding HTML in the "rendering container."

To be sure there is no remaining subtitle layer we first remove the subtitle layer if there is one. For this we define a function we can reuse later when the cue ends:

```js
function clearSubFromScreen() {
  const subtitleActive = renderDiv.getElementsByTagName("div")[0];
  if (subtitleActive) {
    renderDiv.removeChild(subtitleActive);
  }
}
```

We call this function again once the `onexit` event of the cue is thrown:

```js
myCue.onexit = function () {
  clearSubFromScreen();
};
```

At the end we just need to add the generated cue to the text track:

```js
myTrack.addCue(myCue);
```

## Using native video player controls

Usually you want to give the user some options to control the video playback. At least they should be able to play, pause, and seek. The easiest method would be to use the native video controls of the web browser, right? Yes, this is true, when you do not want any additional features.

Native video player controls are part of the browser and not the HTML markup. Although they react to DOM events and generate some of their own, you do not have direct access to them as a web developer.

This causes two problems when using imscJS:

1. The IMSC HTML overlay covers the complete video. It sits on top of the `<video>` element. Although you can see the player controls (because most of the overlay has a transparent background), pointer events like mouse clicks are not coming through to the controls. Because they can't be accessed by standard CSS you can also not change the z-index of the controls to solve this problem. So, if you always have a subtitle overlay, you will not able be able to stop the video once it has started. This would be a very bad user experience.
2. Usually the native video player controls have a caption user interface. You can select a text track or to switch off the rendering of subtitles. Unfortunately, the caption interface only controls the rendering of WebVTT subtitles. The browser does not know that we are rendering subtitles with imscJS, so these controls will have no effect.

For the first problem there is a straightforward CSS solution. We need to set the CSS property `pointer-events` to `none` (see the [sample code](https://github.com/mdn/imsc/blob/master/imscjs-demo/css/style.css) on GitHub for the complete CSS).

```css
#render-div {
  pointer-events: none;
}
```

This has the effect that pointer events are going "through" the overlay (see [reference documentation for point events](/en-US/docs/Web/CSS/pointer-events) for more details).

The caption user interface problem is a bit harder to solve. Although we can listen to events, activating a track using the caption user interface will also activate the rendering of corresponding WebVTT. As we are using VTTCues for IMSC rendering, this can course undesired presentation behavior. The text property of the VTTCue has always the empty string as value but in some browser this may lead nonetheless to the rendering of artefacts.

the best solution is to building your own custom controls. Find out how in our [Creating a cross-browser video player](/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player) tutorial.

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
