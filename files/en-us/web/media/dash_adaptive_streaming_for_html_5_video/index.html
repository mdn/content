---
title: DASH Adaptive Streaming for HTML 5 Video
slug: Web/Media/DASH_Adaptive_Streaming_for_HTML_5_Video
tags:
  - Guide
  - HTML
  - HTML5
---
<p><span class="seoSummary">Dynamic Adaptive Streaming over HTTP (DASH) is an adaptive streaming protocol.</span> This means that it allows for a video stream to switch between bit rates on the basis of network performance, in order to keep a video playing.</p>

<h2 id="Browser_Support">Browser Support</h2>

<p>Firefox 21 includes an implementation of DASH for HTML5 WebM video which is turned off by default. It can be enabled via "about:config" and the "media.dash.enabled" preference.</p>

<p>Firefox 23 removed support for DASH for HTML5 WebM video.  It will be replaced by an implementation of the <a href="https://www.w3.org/TR/media-source/">Media Source Extensions API </a>which will allow support for DASH via Javascript libraries such as dash.js. See bug <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=778617">778617</a> for details.</p>

<h2 id="Using_DASH_-_Server_Side">Using DASH - Server Side</h2>

<p>First you'll need to convert your WebM video to a DASH manifest with the accompanying video files in various bit rates. To start with you'll only need the ffpmeg program from <a href="https://www.ffmpeg.org/">ffmpeg.org</a>, with libvpx and libvorbis support for WebM video and audio, at least version 2.5 (probably; this was tested ith 3.2.5).</p>

<h3 id="1._Use_your_existing_WebM_file_to_create_one_audio_file_and_multiple_video_files.">1. Use your existing WebM file to create one audio file and multiple video files.</h3>

<p>For example:</p>

<p>The file<strong><em> in.video</em></strong> can be any container with at least one audio and one video stream that can be decoded by ffmpeg,</p>

<p>Create the audio using:</p>

<pre><code>ffmpeg -i in.video -vn -acodec libvorbis -ab 128k -dash 1 my_audio.webm</code>

</pre>

<p>Create each video variant.</p>

<pre><code>ffmpeg -i in.video -c:v </code>libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm

ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm

<code>ffmpeg -i in.video -c:v </code>libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm

<code>ffmpeg -i in.video -c:v </code>libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm

<code>ffmpeg -i in.video -c:v </code>libvpx-vp9 -keyint_min 150 -g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm
</pre>

<p>Or do it in all in one command.</p>

<pre>ffmpeg -i in.video -c:v libvpx-vp9 -keyint_min 150 \
-g 150 -tile-columns 4 -frame-parallel 1  -f webm -dash 1 \
-an -vf scale=160:90 -b:v 250k -dash 1 video_160x90_250k.webm \
-an -vf scale=320:180 -b:v 500k -dash 1 video_320x180_500k.webm \
-an -vf scale=640:360 -b:v 750k -dash 1 video_640x360_750k.webm \
-an -vf scale=640:360 -b:v 1000k -dash 1 video_640x360_1000k.webm \
-an -vf scale=1280:720 -b:v 1500k -dash 1 video_1280x720_1500k.webm</pre>

<h3 id="2._Create_the_manifest_file">2. Create the manifest file:</h3>

<pre><code>ffmpeg \
  </code>-f webm_dash_manifest -i video_160x90_250k.webm<code> \
  </code>-f webm_dash_manifest -i video_320x180_500k.webm<code> \
  </code>-f webm_dash_manifest -i video_640x360_750k.webm<code> \
  -f webm_dash_manifest -i video_1280x720_1500k.webm \
  </code>-f webm_dash_manifest -i <code>my_audio.webm \
  </code>-c copy \
  -map 0 -map 1 -map 2 -map 3<code> -map 4 \
  </code>-f webm_dash_manifest \
  -adaptation_sets "id=0,streams=0,1,2,3 id=1,streams=4" \
<code>  my_video_manifest.mpd</code>
</pre>

<p>The <code>-map</code> arguments correspond to the input files in the sequence they are given; you should have one for each file. The <code>-adaptation_sets</code> argument assigns them into adaptation sets; for example, this creates one set (0) that contains the streams 0, 1, 2 and 3 (the videos), and another set (1) that contains only stream 4, the audio stream.</p>

<p>Put the manifest and the associated video files on your web server or CDN. DASH works via HTTP, so as long as your HTTP server supports byte range requests, and it's set up to serve .mpd files with mimetype="application/dash+xml", then you're all set.</p>

<h2 id="Using_DASH_-_Client_Side">Using DASH - Client Side</h2>

<p>You'll want to modify your web page to point to the DASH manifest first, instead of directly to a particular video file:</p>

<pre class="brush: html">&lt;video&gt;
  &lt;source src="movie.<span class="ZmSearchResult" id="DWT648"><span class="ZmSearchResult" id="DWT650">mpd</span></span>"&gt;
  &lt;source src="movie.webm"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;</pre>

<p>That's it! If DASH is supported by the browser, your video will now stream adaptively.</p>

<h2 id="Links">Links</h2>

<p><a href="http://wiki.webmproject.org/adaptive-streaming/webm-dash-specification">WebM DASH Specification at The WebM Project</a></p>

<p><a href="https://dashif.org/">DASH Industry Forum</a></p>

<p><a href="http://wiki.webmproject.org/adaptive-streaming/instructions-to-playback-adaptive-webm-using-dash">WebM project description of how to create DASH files with FFMPEG</a></p>
