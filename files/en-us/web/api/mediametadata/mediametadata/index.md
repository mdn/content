---
title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
tags:
- Audio
- Media
- Media Session API
- MediaMetadata
- MediaSession
- Property
- Reference
- Video
- artwork
browser-compat: api.MediaMetadata.MediaMetadata
---
<p>{{APIRef("Media Session API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>MediaMetadata()</code></strong> constructor creates a new
  {{domxref("MediaMetadata")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var mediaMetadata = new MediaMetadata([metadata])</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>metadata</em> {{optional_inline}}</dt>
  <dd>The metadata parameters are as follows:
    <ul>
      <li><code>title</code>: The title of the media to be played.</li>
      <li><code>artist</code>: The name of the artist, group, creator, etc. of the media
        to be played.</li>
      <li><code>album</code>: The name of the album, or collection, containing the media
        to be played.</li>
      <li><code>artwork</code>: An array of images associated with the playing media.</li>
    </ul>
  </dd>
</dl>

<h2 id="Example">Example</h2>

<p>The following example creates a new {{domxref("MediaMetadata")}} object using the
  correct format of metadata.</p>

<pre class="brush: js">if ('mediaSession' in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Unforgettable',
    artist: 'Nat King Cole',
    album: 'The Ultimate Collection (Remastered)',
    artwork: [
      { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
      { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
