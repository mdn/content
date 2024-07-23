---
title: Web video codec guide
slug: Web/Media/Formats/Video_codecs
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Media")}}

This guide introduces the video codecs you're most likely to encounter or consider using on the web, summaries of their capabilities and any compatibility and utility concerns, and advice to help you choose the right codec for your project's video.

Due to the sheer size of uncompressed video data, it's necessary to compress it significantly in order to store it, let alone transmit it over a network. Imagine the amount of data needed to store uncompressed video:

- A single frame of high definition (1920x1080) video in full color (4 bytes per pixel) is 8,294,400 bytes.
- At a typical 30 frames per second, each second of HD video would occupy 248,832,000 bytes (\~249 MB).
- A minute of HD video would need 14.93 GB of storage.
- A fairly typical 30 minute video conference would need about 447.9 GB of storage, and a 2-hour movie would take _almost 1.79 **TB** (that is, 1790 GB)_.

Not only is the required storage space enormous, but the network bandwidth needed to transmit an uncompressed video like that would be enormous, at 249 MB/sec—not including audio and overhead. This is where video codecs come in. Just as audio codecs do for the sound data, video codecs compress the video data and encode it into a format that can later be decoded and played back or edited.

Most video codecs are **lossy**, in that the decoded video does not precisely match the source. Some details may be lost; the amount of loss depends on the codec and how it's configured, but as a general rule, the more compression you achieve, the more loss of detail and fidelity will occur. Some lossless codecs do exist, but they are typically used for archival and storage for local playback rather than for use on a network.

## Common codecs

The following video codecs are those which are most commonly used on the web. For each codec, the containers (file types) that can support them are also listed. Each codec provides a link to a section below which offers additional details about the codec, including specific capabilities and compatibility issues you may need to be aware of.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Codec name (short)</th>
      <th scope="col">Full codec name</th>
      <th scope="col">Container support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="#av1">AV1</a></th>
      <td>AOMedia Video 1</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#avc_h.264">AVC (H.264)</a></th>
      <td>Advanced Video Coding</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#h.263">H.263</a></th>
      <td>H.263 Video</td>
      <td><a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#hevc_h.265">HEVC (H.265)</a></th>
      <td>High Efficiency Video Coding</td>
      <td><a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#mp4v-es">MP4V-ES</a></th>
      <td>MPEG-4 Video Elemental Stream</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-1_part_2_video">MPEG-1</a></th>
      <td>MPEG-1 Part 2 Visual</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#mpeg-2_part_2_video">MPEG-2</a></th>
      <td>MPEG-2 Part 2 Visual</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#theora">Theora</a></th>
      <td>Theora</td>
      <td><a href="/en-US/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp8">VP8</a></th>
      <td>Video Processor 8</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row"><a href="#vp9">VP9</a></th>
      <td>Video Processor 9</td>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
  </tbody>
</table>

## Factors affecting the encoded video

As is the case with any encoder, there are two basic groups of factors affecting the size and quality of the encoded video: specifics about the source video's format and contents, and the characteristics and configuration of the codec used while encoding the video.

The simplest guideline is this: anything that makes the encoded video look more like the original, uncompressed, video will generally make the resulting data larger as well. Thus, it's always a tradeoff of size versus quality. In some situations, a greater sacrifice of quality in order to bring down the data size is worth that lost quality; other times, the loss of quality is unacceptable and it's necessary to accept a codec configuration that results in a correspondingly larger file.

### Effect of source video format on encoded output

The degree to which the format of the source video will affect the output varies depending on the codec and how it works. If the codec converts the media into an internal pixel format, or otherwise represents the image using a means other than simple pixels, the format of the original image doesn't make any difference. However, things such as frame rate and, obviously, resolution will always have an impact on the output size of the media.

Additionally, all codecs have their strengths and weaknesses. Some have trouble with specific kinds of shapes and patterns, or aren't good at replicating sharp edges, or tend to lose detail in dark areas, or any number of possibilities. It all depends on the underlying algorithms and mathematics.

<table class="standard-table">
  <caption>
    The potential effect of source video format and contents on the encoded
    video quality and size
  </caption>
  <thead>
    <tr>
      <th scope="row">Feature</th>
      <th scope="col">Effect on quality</th>
      <th scope="col">Effect on size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Color depth (bit depth)</th>
      <td>
        The higher the color bit depth, the higher the quality of color fidelity
        is achieved in the video. Additionally, in saturated portions of the
        image (that is, where colors are pure and intense, such as a bright,
        pure red [<code>rgb(255 0 0 / 100%)</code>]), color depths below 10 bits
        per component (10-bit color) allow banding, where gradients cannot be
        represented without visible stepping of the colors.
      </td>
      <td>
        Depending on the codec, higher color depths may result in larger
        compressed file sizes. The determining factor is what internal storage
        format is used for the compressed data.
      </td>
    </tr>
    <tr>
      <th scope="row">Frame rate</th>
      <td>
        Primarily affects the perceived smoothness of the motion in the image.
        To a point, the higher the frame rate, the smoother and more realistic
        the motion will appear. Eventually the point of diminishing returns is
        reached. See <a href="#reduced_frame_rate">Frame rate</a> below for
        details.
      </td>
      <td>
        Assuming the frame rate is not reduced during encoding, higher frame
        rates cause larger compressed video sizes.
      </td>
    </tr>
    <tr>
      <th scope="row">Motion</th>
      <td>
        Compression of video typically works by comparing frames, finding where
        they differ, and constructing records containing enough information to
        update the previous frame to approximate the appearance of the following
        frame. The more successive frames differ from one another, the larger
        these differences are, and the less effective the compression is at
        avoiding the introduction of artifacts into the compressed video.
      </td>
      <td>
        The complexity introduced by motion results in larger intermediate
        frames due to the higher number of differences between frames). For this
        and other reasons, the more motion there is in a video, the larger the
        output file will typically be.
      </td>
    </tr>
    <tr>
      <th scope="row">Noise</th>
      <td>
        Picture noise (such as film grain effects, dust, or other grittiness to
        the image) introduces variability. Variability generally makes
        compression more difficult, resulting in more lost quality due to the
        need to drop details to achieve the same level of compression.
      </td>
      <td>
        The more variability—such as noise—there is in the image, the more
        complex the compression process and the less success the algorithm is
        likely to have compressing the image to the same degree. Unless you
        configure the encoder in a way that ignores some or all of the
        variations caused by noise, the compressed video will be larger.
      </td>
    </tr>
    <tr>
      <th scope="row">Resolution (width and height)</th>
      <td>
        Higher resolution video, presented in the same screen size, will
        typically be able to more accurately portray the original scene, barring
        effects introduced during compression.
      </td>
      <td>
        The higher the resolution of a video, the larger it gets. This plays a
        key role in the final size of the video.
      </td>
    </tr>
  </tbody>
</table>

The degree to which these affect the resulting encoded video will vary depending on the precise details of the situation, including which encoder you use and how it's configured. In addition to general codec options, the encoder could be configured to reduce the frame rate, to clean up noise, and/or to reduce the overall resolution of the video during encoding.

### Effect of codec configuration on encoded output

The algorithms used do encode video typically use one or more of a number of general techniques to perform their encoding. Generally speaking, any configuration option that is intended to reduce the output size of the video will probably have a negative impact on the overall quality of the video, or will introduce certain types of artifacts into the video. It's also possible to select a lossless form of encoding, which will result in a much larger encoded file but with perfect reproduction of the original video upon decoding.

In addition, each encoder utility may have variations in how they process the source video, resulting in differences in the output quality and/or size.

<table class="standard-table">
  <caption>
    Video encoder configuration effects on quality and size
  </caption>
  <thead>
    <tr>
      <th scope="row">Feature</th>
      <th scope="col">Effect on quality</th>
      <th scope="col">Effect on size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lossless compression</th>
      <td>No loss of quality</td>
      <td>
        Lossless compression cannot reduce the overall video size nearly as much
        as lossy compression; the resulting files are likely to still be too
        large for general usage.
      </td>
    </tr>
    <tr>
      <th scope="row">Lossy compression</th>
      <td>
        To some degree, artifacts and other forms of quality degradation will
        occur, depending on the specific codec and how much compression is being
        applied
      </td>
      <td>
        The more the encoded video is allowed to deviate from the source, the
        easier it is to accomplish higher compression rates
      </td>
    </tr>
    <tr>
      <th scope="row">Quality setting</th>
      <td>
        The higher the quality configuration, the more like the original media
        the encoded video will look
      </td>
      <td>
        In general, higher quality settings will result in larger encoded video
        files; the degree to which this is true varies depending on the codec
      </td>
    </tr>
    <tr>
      <th scope="row">Bit rate</th>
      <td>Quality generally improves with higher bit rates</td>
      <td>Higher bit rates inherently lead to larger output files</td>
    </tr>
  </tbody>
</table>

The options available when encoding video, and the values to be assigned to those options, will vary not only from one codec to another but depending on the encoding software you use. The documentation included with your encoding software will help you to understand the specific impact of these options on the encoded video.

## Compression artifacts

**Artifacts** are side effects of a lossy encoding process in which the lost or rearranged data results in visibly negative effects. Once an artifact has appeared, it may linger for a while, because of how video is displayed. Each frame of video is presented by applying a set of changes to the currently-visible frame. This means that any errors or artifacts will compound over time, resulting in glitches or otherwise strange or unexpected deviations in the image that linger for a time.

To resolve this, and to improve seek time through the video data, periodic **key frames** (also known as **intra-frames** or **i-frames**) are placed into the video file. The key frames are full frames, which are used to repair any damage or artifact residue that's currently visible.

### Aliasing

Aliasing is a general term for anything that upon being reconstructed from the encoded data does not look the same as it did before compression. There are many forms of aliasing; the most common ones you may see include:

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <h4 id="Moiré_patterns">Moiré patterns</h4>
        <p>
          A
          <a href="https://en.wikipedia.org/wiki/Moir%C3%A9_pattern"
            ><strong>Moiré pattern</strong></a
          >
          is a large-scale spatial interference pattern produced when a pattern
          in the source image and the manner in which the encoder operates are
          slightly out of alignment spatially. The artifacts generated by the
          encoder then introduce strange, swirling effects in the source image's
          pattern upon decoding.
        </p>
      </td>
      <td>
        <a href="moire-pattern.jpg"><img alt="a brick wall showing swirling effect similar to waves due to the moire pattern" src="moire-pattern.jpg" /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Staircase_effect">Staircase effect</h4>
        <p>
          The <strong>staircase effect</strong> is a spatial artifact that
          occurs when diagonal straight or curved edges that should be smooth
          take on a jagged appearance, looking somewhat like a set of stair
          steps. This is the effect that is being reduced by "anti-aliasing"
          filters.
        </p>
      </td>
      <td>
        <a href="staircase-effect.jpg"
          ><img alt="
          Photo of diagonal lines that look like a staircase due to aliasing causing a staircase effect
          " src="staircase-effect.jpg"
        /></a>
      </td>
    </tr>
    <tr>
      <td>
        <h4 id="Wagon-wheel_effect">Wagon-wheel effect</h4>
        <p>
          The <strong>wagon-wheel effect</strong> (or
          <strong
            ><a href="https://en.wikipedia.org/wiki/Stroboscopic_effect">stroboscopic effect</a></strong
          >) is the visual effect that's commonly seen in film, in which a
          turning wheel appears to rotate at the wrong speed, or even in
          reverse, due to an interaction between the frame rate and the
          compression algorithm. The same effect can occur with any repeating
          pattern that moves, such as the ties on a railway line, posts along
          the side of a road, and so forth. This is a temporal (time-based)
          aliasing issue; the speed of the rotation interferes with the
          frequency of the sampling performed during compression or encoding.
        </p>
      </td>
      <td>
        <a href="stroboscopic-effect.gif"
          ><img alt="Turning wheel due to aliasing causing a wagon wheel effect." src="stroboscopic-effect.gif"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

### Color edging

**Color edging** is a type of visual artifact that presents as spurious colors introduced along the edges of colored objects within the scene. These colors have no intentional color relationship to the contents of the frame.

### Loss of sharpness

The act of removing data in the process of encoding video requires that some details be lost. If enough compression is applied, parts or potentially all of the image could lose sharpness, resulting in a slightly fuzzy or hazy appearance.

Lost sharpness can make text in the image difficult to read, as text—especially small text—is very detail-oriented content, where minor alterations can significantly impact legibility.

### Ringing

Lossy compression algorithms can introduce **[ringing](https://en.wikipedia.org/wiki/Ringing_artifacts)**, an effect where areas outside an object are contaminated with colored pixels generated by the compression algorithm. This happens when an algorithm that uses blocks that span across a sharp boundary between an object and its background. This is particularly common at higher compression levels.

[![Example of the ringing effect](ringing-effects.png)](ringing-effects.png)

Note the blue and pink fringes around the edges of the star above (as well as the stepping and other significant compression artifacts). Those fringes are the ringing effect. Ringing is similar in some respects to [mosquito noise](#mosquito_noise), except that while the ringing effect is more or less steady and unchanging, mosquito noise shimmers and moves.

Ringing is another type of artifact that can make it particularly difficult to read text contained in your images.

### Posterizing

**Posterization** occurs when the compression results in the loss of color detail in gradients. Instead of smooth transitions through the various colors in a region, the image becomes blocky, with blobs of color that approximate the original appearance of the image.

[![Bald eagle photo with blotchy resolution.](posterize-effect.jpg)](posterize-effect.jpg)

Note the blockiness of the colors in the plumage of the bald eagle in the photo above (and the snowy owl in the background). The details of the feathers is largely lost due to these posterization artifacts.

### Contouring

**Contouring** or **color banding** is a specific form of posterization in which the color blocks form bands or stripes in the image. This occurs when the video is encoded with too coarse a quantization configuration. As a result, the video's contents show a "layered" look, where instead of smooth gradients and transitions, the transitions from color to color are abrupt, causing strips of color to appear.

[![Example of an image whose compression has introduced contouring](contouring-effect.jpg)](contouring-effect.jpg)

In the example image above, note how the sky has bands of different shades of blue, instead of being a consistent gradient as the sky color changes toward the horizon. This is the contouring effect.

### Mosquito noise

**Mosquito noise** is a temporal artifact which presents as noise or **edge busyness** that appears as a flickering haziness or shimmering that roughly follows outside the edges of objects with hard edges or sharp transitions between foreground objects and the background. The effect can be similar in appearance to [ringing](#ringing) .

![Example of an image whose compression has introduced mosquito noise.](mosquito-effect-sm.png)

The photo above shows mosquito noise in a number of places, including in the sky surrounding the bridge. In the upper-right corner, an inset shows a close-up of a portion of the image that exhibits mosquito noise.

Mosquito noise artifacts are most commonly found in MPEG video, but can occur whenever a discrete cosine transform (DCT) algorithm is used; this includes, for example, JPEG still images.

### Motion compensation block boundary artifacts

Compression of video generally works by comparing two frames and recording the differences between them, one frame after another, until the end of the video. This technique works well when the camera is fixed in place, or the objects in the frame are relatively stationary, but if there is a great deal of motion in the frame, the number of differences between frames can be so great that compression doesn't do any good.

**[Motion compensation](https://en.wikipedia.org/wiki/Motion_compensation)** is a technique that looks for motion (either of the camera or of objects in the frame of view) and determines how many pixels the moving object has moved in each direction. Then that shift is stored, along with a description of the pixels that have moved that can't be described just by that shift. In essence, the encoder finds the moving objects, then builds an internal frame of sorts that looks like the original but with all the objects translated to their new locations. In theory, this approximates the new frame's appearance. Then, to finish the job, the remaining differences are found, then the set of object shifts and the set of pixel differences are stored in the data representing the new frame. This object that describes the shift and the pixel differences is called a **residual frame**.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col" style="width: 216px">Original frame</th>
      <th scope="col" style="width: 216px">Inter-frame differences</th>
      <th scope="col" style="width: 216px">
        Difference after motion compensation
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="Original frame of video" src="motion-comp-orig.jpg" /></td>
      <td><img alt="Differences between the first frame and the following frame." src="motion-comp-diff.jpg" /></td>
      <td>
        <img
          alt="Differences between the frames after shifting two pixels right"
          src="motion-comp-compensated.jpg"
        />
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        The first full frame as seen by the viewer.
      </td>
      <td style="vertical-align: top">
        Here, only the differences between the first frame and the following
        frame are seen. Everything else is black. Looking closely, we can see
        that the majority of these differences come from a horizontal camera
        move, making this a good candidate for motion compensation.
      </td>
      <td style="vertical-align: top">
        To minimize the number of pixels that are different, here we take into
        account the panning of the camera by first shifting the first frame to
        the right by two pixels, then by taking the difference. This compensates
        for the panning of the camera, allowing for more overlap between the two
        frames.
      </td>
    </tr>
    <tr>
      <th
        colspan="3"
        style="
          font: italic 0.9em Arial, x-locale-body, sans-serif;
          vertical-align: middle;
        "
      >
        Images from
        <a
          href="https://en.wikipedia.org/wiki/Motion_compensation#Illustrated_example"
          >Wikipedia</a
        >
      </th>
    </tr>
  </tbody>
</table>

There are two general types of motion compensation: **global motion compensation** and **block motion compensation**. Global motion compensation generally adjusts for camera movements such as tracking, dolly movements, panning, tilting, rolling, and up and down movements. Block motion compensation handles localized changes, looking for smaller sections of the image that can be encoded using motion compensation. These blocks are normally of a fixed size, in a grid, but there are forms of motion compensation that allow for variable block sizes, and even for blocks to overlap.

There are, however, artifacts that can occur due to motion compensation. These occur along block borders, in the form of sharp edges that produce false ringing and other edge effects. These are due to the mathematics involved in the coding of the residual frames, and can be easily noticed before being repaired by the next key frame.

### Reduced frame size

In certain situations, it may be useful to reduce the video's dimensions in order to improve the final size of the video file. While the immediate loss of size or smoothness of playback may be a negative factor, careful decision-making can result in a good end result. If a 1080p video is reduced to 720p prior to encoding, the resulting video can be much smaller while having much higher visual quality; even after scaling back up during playback, the result may be better than encoding the original video at full size and accepting the quality hit needed to meet your size requirements.

### Reduced frame rate

Similarly, you can remove frames from the video entirely and decrease the frame rate to compensate. This has two benefits: it makes the overall video smaller, and that smaller size allows motion compensation to accomplish even more for you. For example, instead of computing motion differences for two frames that are two pixels apart due to inter-frame motion, skipping every other frame could lead to computing a difference that comes out to four pixels of movement. This lets the overall movement of the camera be represented by fewer residual frames.

The absolute minimum frame rate that a video can be before its contents are no longer perceived as motion by the human eye is about 12 frames per second. Less than that, and the video becomes a series of still images. Motion picture film is typically 24 frames per second, while standard definition television is about 30 frames per second (slightly less, but close enough) and high definition television is between 24 and 60 frames per second. Anything from 24 FPS upward will generally be seen as satisfactorily smooth; 30 or 60 FPS is an ideal target, depending on your needs.

In the end, the decisions about what sacrifices you're able to make are entirely up to you and/or your design team.

## Codec details

### AV1

The **AOMedia Video 1** (**AV1**) codec is an open format designed by the [Alliance for Open Media](https://aomedia.org/) specifically for internet video. It achieves higher data compression rates than [VP9](#vp9) and [H.265/HEVC](#hevc_h.265), and as much as 50% higher rates than [AVC](#avc_h.264). AV1 is fully royalty-free and is designed for use by both the {{HTMLElement("video")}} element and by [WebRTC](/en-US/docs/Web/API/WebRTC_API).

AV1 currently offers three profiles: **main**, **high**, and **professional** with increasing support for color depths and chroma subsampling. In addition, a series of **levels** are specified, each defining limits on a range of attributes of the video. These attributes include frame dimensions, image area in pixels, display and decode rates, average and maximum bit rates, and limits on the number of tiles and tile columns used in the encoding/decoding process.

For example, AV1 level 2.0 offers a maximum frame width of 2048 pixels and a maximum height of 1152 pixels, but its maximum frame size in pixels is 147,456, so you can't actually have a 2048x1152 video at level 2.0. It's worth noting, however, that at least for Firefox and Chrome, the levels are actually ignored at this time when performing software decoding, and the decoder just does the best it can to play the video given the settings provided. For compatibility's sake going forward, however, you should stay within the limits of the level you choose.

The primary drawback to AV1 at this time is that it is very new, and support is still in the process of being integrated into most browsers. Additionally, encoders and decoders are still being optimized for performance, and hardware encoders and decoders are still mostly in development rather than production. For this reason, encoding a video into AV1 format takes a very long time, since all the work is done in software.

For the time being, because of these factors, AV1 is not yet ready to be your first choice of video codec, but you should watch for it to be ready to use in the future.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>
        <p>
          Varies depending on the video's level; theoretical maximum reaches 800 Mbps at level 6.3
        </p>
        <p>
          See the AV1 specification's
          <a href="https://aomediacodec.github.io/av1-spec/#levels"
            >tables of levels</a
          >, which describe the maximum resolutions and rates at each level.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>
        Varies by level; for example, level 2.0 has a maximum of 30 FPS while level 6.3 can reach 120 FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>
        8 x 8 pixels to 65,535 x 65535 pixels with each dimension allowed to take any value between these
      </td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profile</th>
              <th scope="col">Color depths</th>
              <th scope="col">Chroma subsampling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Main</th>
              <td>8 or 10</td>
              <td>4:0:0 (greyscale) or 4:2:0</td>
            </tr>
            <tr>
              <th scope="row">High</th>
              <td>8 or 10</td>
              <td>4:0:0 (greyscale), 4:2:0, or 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Professional</th>
              <td>8, 10, or 12</td>
              <td>4:0:0 (greyscale), 4:2:0, 4:2:2, or 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Firefox Android</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">AV1 support</th>
              <td>70</td>
              <td>75</td>
              <td>67</td>
              <td>113</td>
              <td>57</td>
              <td>17</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://aomedia.org/">Alliance for Open Media</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a href="https://aomediacodec.github.io/av1-spec/av1-spec.pdf"
          >https://aomediacodec.github.io/av1-spec/av1-spec.pdf</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>Royalty-free, open standard</td>
    </tr>
  </tbody>
</table>

### AVC (H.264)

The MPEG-4 specification suite's **Advanced Video Coding** (**AVC**) standard is specified by the identical ITU H.264 specification and the MPEG-4 Part 10 specification. It's a motion compensation based codec that is widely used today for all sorts of media, including broadcast television, {{Glossary("RTP")}} videoconferencing, and as the video codec for Blu-Ray discs.

AVC is highly flexible, with a number of profiles with varying capabilities; for example, the Constrained Baseline Profile is designed for use in videoconferencing and mobile scenarios, using less bandwidth than the Main Profile (which is used for standard definition digital TV in some regions) or the High Profile (used for Blu-Ray Disc video). Most of the profiles use 8-bit color components and 4:2:0 chroma subsampling; The High 10 Profile adds support for 10-bit color, and advanced forms of High 10 add 4:2:2 and 4:4:4 chroma subsampling.

AVC also has special features such as support for multiple views of the same scene (Multiview Video Coding), which allows, among other things, the production of stereoscopic video.

AVC is a proprietary format, however, and numerous patents are owned by multiple parties regarding its technologies. Commercial use of AVC media requires a license, though the MPEG LA patent pool does not require license fees for streaming internet video in AVC format as long as the video is free for end users.

Non-web browser implementations of WebRTC (any implementation which doesn't include the JavaScript APIs) are _required_ to support AVC as a codec in WebRTC calls. While web browsers are not required to do so, some do.

In HTML content for web browsers, AVC is broadly compatible and many platforms support hardware encoding and decoding of AVC media. However, be aware of its [licensing requirements](https://www.mpegla.com/programs/avc-h-264/) before choosing to use AVC in your project!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Varies by level</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>Varies by level; up to 300 FPS is possible</td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >, though it's possible to create lossless macroblocks within the image
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>Up to 8,192 x 4,320 pixels</td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        <p>Some of the more common or interesting profiles:</p>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Profile</th>
              <th scope="col">Color depths</th>
              <th scope="col">Chroma subsampling</th>
            </tr>
            <tr>
              <td>Constrained Baseline (CBP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Baseline (BP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Extended (XP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main (MP)</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>High (HiP)</td>
              <td>8</td>
              <td>4:0:0 (greyscale) and 4:2:0</td>
            </tr>
            <tr>
              <td>Progressive High (ProHiP)</td>
              <td>8</td>
              <td>4:0:0 (greyscale) and 4:2:0</td>
            </tr>
            <tr>
              <td>High 10 (Hi10P)</td>
              <td>8 to 10</td>
              <td>4:0:0 (greyscale) and 4:2:0</td>
            </tr>
            <tr>
              <td>High 4:2:2 (Hi422P)</td>
              <td>8 to 10</td>
              <td>4:0:0 (greyscale), 4:2:0, and 4:2:2</td>
            </tr>
            <tr>
              <td>High 4:4:4 Predictive</td>
              <td>8 to 14</td>
              <td>4:0:0 (greyscale), 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>
        Yes; <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">Hybrid Log-Gamma</a> or
        Advanced HDR/SL-HDR; both are part of ATSC
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        All versions of Chrome, Edge, Firefox, Opera, and Safari
        <p>
          Firefox support for AVC is dependent upon the operating system's
          built-in or preinstalled codecs for AVC and its container in order to
          avoid patent concerns.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a
          href="https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding"
          >https://mpeg.chiariglione.org/standards/mpeg-4/advanced-video-coding</a
        ><br /><a href="https://www.itu.int/rec/T-REC-H.264"
          >https://www.itu.int/rec/T-REC-H.264</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>
        Proprietary with numerous patents. Commercial use
        <a href="https://www.mpegla.com/programs/avc-h-264/"
          >requires a license</a
        >. Note that multiple patent pools may apply.
      </td>
    </tr>
  </tbody>
</table>

### H.263

ITU's **H.263** codec was designed primarily for use in low-bandwidth situations. In particular, its focus is for video conferencing on PSTN (Public Switched Telephone Networks), {{Glossary("RTSP")}}, and SIP (IP-based videoconferencing) systems. Despite being optimized for low-bandwidth networks, it is fairly CPU intensive and may not perform adequately on lower-end computers. The data format is similar to that of MPEG-4 Part 2.

H.263 has never been widely used on the web. Variations on H.263 have been used as the basis for other proprietary formats, such as Flash video or the Sorenson codec. However, no major browser has ever included H.263 support by default. Certain media plugins have enabled support for H.263 media.

Unlike most codecs, H.263 defines fundamentals of an encoded video in terms of the maximum bit rate per frame (picture), or **BPPmaxKb**. During encoding, a value is selected for BPPmaxKb, and then the video cannot exceed this value for each frame. The final bit rate will depend on this, the frame rate, the compression, and the chosen resolution and block format.

H.263 has been superseded by H.264 and is therefore considered a legacy media format which you generally should avoid using if you can. The only real reason to use H.263 in new projects is if you require support on very old devices on which H.263 is your best choice.

H.263 is a proprietary format, with [patents](https://www.itu.int/ITU-T/recommendations/related_ps.aspx?id_prod=4242) held by a number of organizations and companies, including Telenor, Fujitsu, Motorola, Samsung, Hitachi, Polycom, Qualcomm, and so on. To use H.263, you are legally obligated to obtain the appropriate licenses.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Unrestricted, but typically below 64 kbps</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>
        <p>Up to 1408 x 1152 pixels.</p>
        <p>
          Version 1 of H.263 specifies a set of picture sizes which are
          supported. Later versions may support additional resolutions.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        YCbCr; each picture format (sub-QCIF, QCIF, CIF, 4CIF, or 16CIF) defines
        the frame size in pixels as well as how many rows each of luminance and
        chrominance samples are used for each frame
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">H.263 support</th>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://www.itu.int/">ITU</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.263/"
          >https://www.itu.int/rec/T-REC-H.263/</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>
        Proprietary; appropriate license or licenses are required. Note that
        multiple patent pools may apply.
      </td>
    </tr>
  </tbody>
</table>

### HEVC (H.265)

The **[High Efficiency Video Coding](http://hevc.info/)** (**HEVC**) codec is defined by ITU's **H.265** as well as by MPEG-H Part 2 (the still in-development follow-up to MPEG-4). HEVC was designed to support efficient encoding and decoding of video in sizes including very high resolutions (including 8K video), with a structure specifically designed to let software take advantage of modern processors. Theoretically, HEVC can achieve compressed file sizes half that of [AVC](#avc_h.264) but with comparable image quality.

For example, each coding tree unit (CTU)—similar to the macroblock used in previous codecs—consists of a tree of luma values for each sample as well as a tree of chroma values for each chroma sample used in the same coding tree unit, as well as any required syntax elements. This structure supports easy processing by multiple cores.

An interesting feature of HEVC is that the main profile supports only 8-bit per component color with 4:2:0 chroma subsampling. Also interesting is that 4:4:4 video is handled specially. Instead of having the luma samples (representing the image's pixels in grayscale) and the Cb and Cr samples (indicating how to alter the grays to create color pixels), the three channels are instead treated as three monochrome images, one for each color, which are then combined during rendering to produce a full-color image.

HEVC is a proprietary format and is covered by a number of patents. Licensing is [managed by MPEG LA](https://www.mpegla.com/programs/hevc/); fees are charged to developers rather than to content producers and distributors. Be sure to review the latest license terms and requirements before making a decision on whether or not to use HEVC in your app or website!

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Up to 800,000 kbps</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>Varies by level; up to 300 FPS is possible</td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>128 x 96 to 8,192 x 4,320 pixels; varies by profile and level</td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        <p>
          Information below is provided for the major profiles. There are a
          number of other profiles available that are not included here.
        </p>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Profile</th>
              <th scope="col">Color depths</th>
              <th scope="col">Chroma subsampling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Main</td>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 10</td>
              <td>8 to 10</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <td>Main 12</td>
              <td>8 to 12</td>
              <td>4:0:0 and 4:2:0</td>
            </tr>
            <tr>
              <td>Main 4:2:2 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, and 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:2:2 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, and 4:2:2</td>
            </tr>
            <tr>
              <td>Main 4:4:4</td>
              <td>8</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 10</td>
              <td>8 to 10</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 12</td>
              <td>8 to 12</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <td>Main 4:4:4 16 Intra</td>
              <td>8 to 16</td>
              <td>4:0:0, 4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">HEVC / H.265 support</th>
              <td>107</td>
              <td>18</td>
              <td>No</td>
              <td>94</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
        <p>Chrome support HEVC for devices with hardware support on Windows 8+, Linux and ChromeOS, for all devices on macOS Big Sur 11+ and Android 5.0+.</p>
        <p>Edge (Chromium) supports HEVC for devices with hardware support on Windows 10 1709+ when
          <a href="https://apps.microsoft.com/store/detail/hevc-video-extension/9NMZLZ57R3T7">HEVC video extensions from the Microsoft Store</a>
          is installed, and has the same support status as Chrome on other platforms. Edge (Legacy) only supports HEVC for devices with a hardware decoder.
        </p>
        <p>Mozilla will not support HEVC while it is encumbered by patents.</p>
        <p>Opera and other Chromium based browsers have the same support status as Chrome.</p>
        <p>Safari supports HEVC for all devices on macOS High Sierra or later.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="https://en.wikipedia.org/wiki/ISO/IEC_base_media_file_format"
          >ISOBMFF</a
        >, MPEG-TS,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
        <a href="/en-US/docs/Web/Media/Formats/Containers#quicktime">QuickTime</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td>
        <a href="https://www.itu.int/">ITU</a> /
        <a href="https://mpeg.chiariglione.org/">MPEG</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Specifications</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.265"
          >http://www.itu.int/rec/T-REC-H.265</a
        ><br /><a href="https://www.iso.org/standard/69668.html"
          >https://www.iso.org/standard/69668.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>
        Proprietary; confirm your compliance with the
        <a href="https://www.mpegla.com/programs/hevc/"
          >licensing requirements</a
        >. Note that multiple patent pools may apply.
      </td>
    </tr>
  </tbody>
</table>

### MP4V-ES

The **MPEG-4 Video Elemental Stream** (**MP4V-ES**) format is part of the MPEG-4 Part 2 Visual standard. While in general, MPEG-4 part 2 video is not used by anyone because of its lack of compelling value related to other codecs, MP4V-ES does have some usage on mobile. MP4V is essentially H.263 encoding in an MPEG-4 container.

Its primary purpose is to be used to stream MPEG-4 audio and video over an {{Glossary("RTP")}} session. However, MP4V-ES is also used to transmit MPEG-4 audio and video over a mobile connection using [3GP](/en-US/docs/Web/Media/Formats/Containers#3gp).

You almost certainly don't want to use this format, since it isn't supported in a meaningful way by any major browsers, and is quite obsolete. Files of this type should have the extension `.mp4v`, but sometimes are inaccurately labeled `.mp4`.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>5 kbps to 1 Gbps and more</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>No specific limit; restricted only by the data rate</td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>Up to 4,096 x 4,096 pixels</td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        YCrCb with chroma subsampling (4:2:0, 4:2:2, and 4:4:4) supported; up to
        12 bits per component
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MP4V-ES support</th>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <p>
          Firefox supports MP4V-ES in
          <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>
          containers only.
        </p>
        <p>Chrome does not support MP4V-ES; however, ChromeOS does.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>{{RFC(6416)}}</td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>
        Proprietary;
        <a href="https://www.mpegla.com/programs/mpeg-4-visual/"
          >obtain a license</a
        >
        through <a href="https://www.mpegla.com/">MPEG LA</a> and/or
        <a href="https://about.att.com/innovation/ip/patents/mpeg-4"
          >AT&#x26;T</a
        >
        as needed
      </td>
    </tr>
  </tbody>
</table>

### MPEG-1 Part 2 Video

**MPEG-1 Part 2 Video** was unveiled at the beginning of the 1990s. Unlike the later MPEG video standards, MPEG-1 was created solely by MPEG, without the {{Glossary("ITU", "ITU's")}} involvement.

Because any MPEG-2 decoder can also play MPEG-1 video, it's compatible with a wide variety of software and hardware devices. There are no active patents remaining in relation to MPEG-1 video, so it may be used free of any licensing concerns. However, few web browsers support MPEG-1 video without the support of a plugin, and with plugin use deprecated in web browsers, these are generally no longer available. This makes MPEG-1 a poor choice for use in websites and web applications.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Up to 1.5 Mbps</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>
        23.976 FPS, 24 FPS, 25 FPS, 29.97 FPS, 30 FPS, 50 FPS, 59.94 FPS, and 60
        FPS
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>Up to 4,095 x 4,095 pixels</td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        Y'CbCr with 4:2:0 chroma subsampling with up to 12 bits per component
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-1 support</th>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>MPEG</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://mpeg.chiariglione.org/">MPEG</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a href="https://www.iso.org/standard/22411.html"
          >https://www.iso.org/standard/22411.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>
        Proprietary; however, all patents have expired, so MPEG-1 may be used
        freely
      </td>
    </tr>
  </tbody>
</table>

### MPEG-2 Part 2 Video

**[MPEG-2 Part 2](https://en.wikipedia.org/wiki/H.262/MPEG-2_Part_2)** is the video format defined by the MPEG-2 specification, and is also occasionally referred to by its {{Glossary("ITU")}} designation, H.262. It is very similar to MPEG-1 video—in fact, any MPEG-2 player can automatically handle MPEG-1 without any special work—except it has been expanded to support higher bit rates and enhanced encoding techniques.

The goal was to allow MPEG-2 to compress standard definition television, so interlaced video is also supported. The standard definition compression rate and the quality of the resulting video met needs well enough that MPEG-2 is the primary video codec used for DVD video media.

MPEG-2 has several profiles available with different capabilities. Each profile is then available four levels, each of which increases attributes of the video, such as frame rate, resolution, bit rate, and so forth. Most profiles use Y'CbCr with 4:2:0 chroma subsampling, but more advanced profiles support 4:2:2 as well. In addition, there are four levels, each of which offers support for larger frame dimensions and bit rates. For example, the [ATSC](https://en.wikipedia.org/wiki/ATSC_standards) specification for television used in North America supports MPEG-2 video in high definition using the Main Profile at High Level, allowing 4:2:0 video at both 1920 x 1080 (30 FPS) and 1280 x 720 (60 FPS), at a maximum bit rate of 80 Mbps.

However, few web browsers support MPEG-2 without the support of a plugin, and with plugin use deprecated in web browsers, these are generally no longer available. This makes MPEG-2 a poor choice for use in websites and web applications.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Up to 100 Mbps; varies by level and profile</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Abbr.</th>
              <th scope="col">Level name</th>
              <th scope="col">Frame rates supported</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>23.9, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>23.976, 24, 25, 29.97, 30</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>23.976, 24, 26, 29.97, 30, 50, 59.94, 60</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Abbr.</th>
              <th scope="col">Level name</th>
              <th scope="col">Maximum frame size</th>
            </tr>
            <tr>
              <th scope="row">LL</th>
              <td>Low Level</td>
              <td>352 x 288 pixels</td>
            </tr>
            <tr>
              <th scope="row">ML</th>
              <td>Main Level</td>
              <td>720 x 576 pixels</td>
            </tr>
            <tr>
              <th scope="row">H-14</th>
              <td>High 1440</td>
              <td>1440 x 1152 pixels</td>
            </tr>
            <tr>
              <th scope="row">HL</th>
              <td>High Level</td>
              <td>1920 x 1152 pixels</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        Y'CbCr with 4:2:0 chroma subsampling in most profiles; the "High" and
        "4:2:2" profiles support 4:2:2 chroma subsampling as well.
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">MPEG-2 support</th>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpegmpeg-2">MPEG</a>,
        MPEG-TS (MPEG Transport Stream),
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#quicktime"
          >QuickTime</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td>
        <a href="https://mpeg.chiariglione.org/">MPEG</a> /
        <a href="https://www.itu.int/">ITU</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a href="https://www.itu.int/rec/T-REC-H.262"
          >https://www.itu.int/rec/T-REC-H.262</a
        ><br /><a href="https://www.iso.org/standard/61152.html"
          >https://www.iso.org/standard/61152.html</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>
        Proprietary; all patents have expired worldwide with the exception of in
        Malaysia and the Philippines as of April 1, 2019, so MPEG-2 can be used
        freely outside those two countries. Patents are licensed by
        <a href="https://www.mpegla.com/programs/mpeg-2/">MPEG LA</a>.
      </td>
    </tr>
  </tbody>
</table>

### Theora

**[Theora](https://en.wikipedia.org/wiki/Theora)**, developed by [Xiph.org](https://xiph.org/), is an open and free video codec which may be used without royalties or licensing. Theora is comparable in quality and compression rates to MPEG-4 Part 2 Visual and AVC, making it a very good if not top-of-the-line choice for video encoding. But its status as being free from any licensing concerns and its relatively low CPU resource requirements make it a popular choice for many software and web projects. The low CPU impact is particularly useful since there are no hardware decoders available for Theora.

Theora was originally based upon the VC3 codec by On2 Technologies. The codec and its specification were released under the LGPL license and entrusted to Xiph.org, which then developed it into the Theora standard.

One drawback to Theora is that it only supports 8 bits per color component, with no option to use 10 or more in order to avoid color banding. That said, 8 bits per component is still the most commonly-used color format in use today, so this is only a minor inconvenience in most cases. Also, Theora can only be used in an Ogg container. The biggest drawback of all, however, is that it is not supported by Safari, leaving Theora unavailable not only on macOS but on all those millions and millions of iPhones and iPads.

The [Theora Cookbook](https://en.flossmanuals.net/ogg-theora/_full/) offers additional details about Theora as well as the Ogg container format it is used within.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Up to 2 Gbps</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>
        Arbitrary; any non-zero value is supported. The frame rate is specified
        as a 32-bit numerator and a 32-bit denominator, to allow for non-integer
        frame rates.
      </td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>
        Any combination of width and height up to 1,048,560 x 1,048,560 pixels
      </td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        Y'CbCr with 4:2:0, 4:2:2, and 4:4:4 chroma subsampling at 8 bits per
        component
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>
        <p>Yes</p>
        <p>
          While Theora doesn't support Variable Frame Rate (VFR) within a single
          stream, multiple streams can be chained together within a single file,
          and each of those can have its own frame rate, thus allowing what is
          essentially VFR. However, this is impractical if the frame rate needs
          to change frequently.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <table class="standard-table">
          <tbody>
            <tr>
              <th scope="row">Feature</th>
              <th scope="col">Chrome</th>
              <th scope="col">Edge</th>
              <th scope="col">Firefox</th>
              <th scope="col">Opera</th>
              <th scope="col">Safari</th>
            </tr>
            <tr>
              <th scope="row">Theora support</th>
              <td>3</td>
              <td>Yes</td>
              <td>3.5</td>
              <td>10.5</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
        <p>
          Edge supports Theora with the optional
          <a
            href="https://www.microsoft.com/en-us/p/web-media-extensions/9n5tdp8vcmhs?activetab=pivot:overviewtab"
            >Web Media Extensions</a
          >
          add-on.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td><a href="/en-US/docs/Web/Media/Formats/Containers#ogg">Ogg</a></td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://www.xiph.org/">Xiph.org</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a href="https://www.theora.org/doc/">https://www.theora.org/doc/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>Open and free of royalties and any other licensing requirements</td>
    </tr>
  </tbody>
</table>

### VP8

The **Video Processor 8** (**VP8**) codec was initially created by On2 Technologies. Following their purchase of On2, Google released VP8 as an open and royalty-free video format under a promise not to enforce the relevant patents. In terms of quality and compression rate, VP8 is comparable to [AVC](#avc_h.264).

If supported by the browser, VP8 allows video with an alpha channel, allowing the video to play with the background able to be seen through the video to a degree specified by each pixel's alpha component.

There is good browser support for VP8 in HTML content, especially within [WebM](/en-US/docs/Web/Media/Formats/Containers#webm) files.
This makes VP8 a good candidate for your content, although VP9 is an even better choice if available to you.
Web browsers are _required_ to support VP8 for WebRTC, but not all browsers that do so also support it in HTML audio and video elements.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Arbitrary; no maximum unless level-based limitations are enforced</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>Arbitrary</td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>Up to 16,384 x 16,384 pixels</td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>Y'CbCr with 4:2:0 chroma subsampling at 8 bits per component</td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <p>All versions of Chrome, Edge, Firefox, Opera, and Safari<p>
        <p><a href="https://webkit.org/blog/8672/on-the-road-to-webrtc-1-0-including-vp8/">iOS: Safari 12.1</a> and later support VP8 in WebRTC connections only.</p>
        <p>Firefox only supports VP8 in MSE when no H.264 hardware decoder is available. Use {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}} to check for availability.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#3gp">3GP</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} /
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>Yes; VP8 is one of the spec-required codecs for WebRTC</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>{{RFC(6386)}}</td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>Open and free of royalties and any other licensing requirements</td>
    </tr>
  </tbody>
</table>

### VP9

**Video Processor 9** (**VP9**) is the successor to the older VP8 standard developed by Google.
Like VP8, VP9 is entirely open and royalty-free.
Its encoding and decoding performance is comparable to or slightly faster than that of AVC, but with better quality.
VP9's encoded video quality is comparable to that of HEVC at similar bit rates.

VP9's main profile supports only 8-bit color depth at 4:2:0 chroma subsampling levels, but its profiles include support for deeper color and the full range of chroma subsampling modes.
It supports several HDR implementations, and offers substantial freedom in selecting frame rates, aspect ratios, and frame sizes.

VP9 is widely supported by browsers, and hardware implementations of the codec are fairly common.
VP9 is one of the two video codecs mandated by [WebM](/en-US/docs/Web/Media/Formats/Containers#webm) (the other being [VP8](#vp8)).
Note however that Safari support for WebM and VP9 was only introduced in version 14.1, so if you choose to use VP9, consider offering a fallback format such as AVC or HEVC for iPhone, iPad, and Mac users.

VP9 is a good choice if you are able to use a WebM container (and can provide fallback video when needed).
This is especially true if you wish to use an open codec rather than a proprietary one.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Supported bit rates</th>
      <td>Arbitrary; no maximum unless level-based limitations are enforced</td>
    </tr>
    <tr>
      <th scope="row">Supported frame rates</th>
      <td>Arbitrary</td>
    </tr>
    <tr>
      <th scope="row">Compression</th>
      <td>
        Lossy
        <a href="https://en.wikipedia.org/wiki/Discrete_cosine_transform"
          >DCT-based algorithm</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Supported frame sizes</th>
      <td>Up to 65,536 x 65,536 pixels</td>
    </tr>
    <tr>
      <th scope="row">Supported color modes</th>
      <td>
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="row">Profile</th>
              <th scope="col">Color depths</th>
              <th scope="col">Chroma subsampling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Profile 0</th>
              <td>8</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 1</th>
              <td>8</td>
              <td>4:2:0, 4:2:2, and 4:4:4</td>
            </tr>
            <tr>
              <th scope="row">Profile 2</th>
              <td>10 to 12</td>
              <td>4:2:0</td>
            </tr>
            <tr>
              <th scope="row">Profile 3</th>
              <td>10 to 12</td>
              <td>4:2:0, 4:2:2, and f:4:4</td>
            </tr>
          </tbody>
        </table>
        <p>
          Color spaces supported:
          <a href="https://en.wikipedia.org/wiki/Rec._601">Rec. 601</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._709">Rec. 709</a>,
          <a href="https://en.wikipedia.org/wiki/Rec._2020">Rec. 2020</a>,
          <a href="https://en.wikipedia.org/wiki/SMPTE_C">SMPTE C</a>, SMPTE-240M
          (obsolete; replaced by Rec. 709), and
          <a href="https://en.wikipedia.org/wiki/SRGB">sRGB</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">HDR support</th>
      <td>
        Yes; HDR10+, <a href="https://en.wikipedia.org/wiki/Hybrid_Log-Gamma">HLG</a>, and
        <a href="https://en.wikipedia.org/wiki/Perceptual_Quantizer">PQ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Variable Frame Rate (VFR) support</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Browser compatibility</th>
      <td>
        <p>All versions of Chrome, Edge, Firefox, Opera, and Safari<p>
        <p>
          Firefox only supports VP8 in MSE when no H.264 hardware decoder is available. Use
          {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}} to check for availability.
        </p>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Container support</th>
      <td>
        <a href="/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4">MP4</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#ogg">Ogg</a>,
        <a href="/en-US/docs/Web/Media/Formats/Containers#webm">WebM</a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("RTP")}} / <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> compatible
      </th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Supporting/Maintaining organization</th>
      <td><a href="https://www.google.com/">Google</a></td>
    </tr>
    <tr>
      <th scope="row">Specification</th>
      <td>
        <a href="https://www.webmproject.org/vp9/">https://www.webmproject.org/vp9/</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Licensing</th>
      <td>Open and free of royalties and any other licensing requirements</td>
    </tr>
  </tbody>
</table>

## Choosing a video codec

The decision as to which codec or codecs to use begins with a series of questions to prepare yourself:

- Do you wish to use an open format, or are proprietary formats also to be considered?
- Do you have the resources to produce more than one format for each of your videos? The ability to provide a fallback option vastly simplifies the decision-making process.
- Are there any browsers you're willing to sacrifice compatibility with?
- How old is the oldest version of web browser you need to support? For example, do you need to work on every browser shipped in the past five years, or just the past one year?

In the sections below, we offer recommended codec selections for specific use cases. For each use case, you'll find up to two recommendations. If the codec which is considered best for the use case is proprietary or may require royalty payments, then two options are provided: first, an open and royalty-free option, followed by the proprietary one.

If you are only able to offer a single version of each video, you can choose the format that's most appropriate for your needs. The first one is recommended as being a good combination of quality, performance, and compatibility. The second option will be the most broadly compatible choice, at the expense of some amount of quality, performance, and/or size.

### Recommendations for everyday videos

First, let's look at the best options for videos presented on a typical website such as a blog, informational site, small business website where videos are used to demonstrate products (but not where the videos themselves are a product), and so forth.

1. A **[WebM](/en-US/docs/Web/Media/Formats/Containers#webm)** container using the **[VP9](#vp9)** codec for video and the **[Opus](/en-US/docs/Web/Media/Formats/Audio_codecs#opus)** codec for audio. These are all open, royalty-free formats which are generally well-supported, although only in quite recent browsers, which is why a fallback is a good idea.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. An **[MP4](/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4)** container and the **[AVC](#avc_h.264)** (**H.264**) video codec, ideally with **[AAC](/en-US/docs/Web/Media/Formats/Audio_codecs#aac_advanced_audio_coding)** as your audio codec. This is because the MP4 container with AVC and AAC codecs within is a broadly-supported combination—by every major browser, in fact—and the quality is typically good for most use cases. Make sure you verify your compliance with the license requirements, however.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

> **Note:** The {{HTMLElement("video")}} element requires a closing `</video>` tag, whether or not you have any {{HTMLElement("source")}} elements inside it.

### Recommendations for high-quality video presentation

If your mission is to present video at the highest possible quality, you will probably benefit from offering as many formats as possible, as the codecs capable of the best quality tend also to be the newest, and thus the most likely to have gaps in browser compatibility.

1. A WebM container using AV1 for video and Opus for audio. If you're able to use the High or Professional profile when encoding AV1, at a high level like 6.3, you can get very high bit rates at 4K or 8K resolution, while maintaining excellent video quality. Encoding your audio using Opus's Fullband profile at a 48 kHz sample rate maximizes the audio bandwidth captured, capturing nearly the entire frequency range that's within human hearing.

   ```html
   <video controls src="filename.webm"></video>
   ```

2. An MP4 container using the [HEVC](#hevc_h.265) codec using one of the advanced Main profiles, such as Main 4:2:2 with 10 or 12 bits of color depth, or even the Main 4:4:4 profile at up to 16 bits per component. At a high bit rate, this provides excellent graphics quality with remarkable color reproduction. In addition, you can optionally include HDR metadata to provide high dynamic range video. For audio, use the AAC codec at a high sample rate (at least 48 kHz but ideally 96kHz) and encoded with complex encoding rather than fast encoding.

   ```html
   <video controls>
     <source type="video/webm" src="filename.webm" />
     <source type="video/mp4" src="filename.mp4" />
   </video>
   ```

### Recommendations for archival, editing, or remixing

There are not currently any lossless—or even near-lossless—video codecs generally available in web browsers. The reason for this is simple: video is huge. Lossless compression is by definition less effective than lossy compression. For example, uncompressed 1080p video (1920 by 1080 pixels) with 4:2:0 chroma subsampling needs at least 1.5 Gbps. Using lossless compression such as FFV1 (which is not supported by web browsers) could perhaps reduce that to somewhere around 600 Mbps, depending on the content. That's still a huge number of bits to pump through a connection every second, and is not currently practical for any real-world use.

This is the case even though some of the lossy codecs have a lossless mode available; the lossless modes are not implemented in any current web browsers. The best you can do is to select a high-quality codec that uses lossy compression and configure it to perform as little compression as possible. One way to do this is to configure the codec to use "fast" compression, which inherently means less compression is achieved.

#### Preparing video externally

To prepare video for archival purposes from outside your website or app, use a utility that performs compression on the original uncompressed video data. For example, the free [x264](https://www.videolan.org/developers/x264.html) utility can be used to encode video in [AVC](#avc_h.264) format using a very high bit rate:

```bash
x264 --crf 18 -preset ultrafast --output outfilename.mp4 infile
```

While other codecs may have better best-case quality levels when compressing the video by a significant margin, their encoders tend to be slow enough that the nearly-lossless encoding you get with this compression is vastly faster at about the same overall quality level.

#### Recording video

Given the constraints on how close to lossless you can get, you might consider using [AVC](#avc_h.264) or [AV1](#av1). For example, if you're using the [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API) to record video, you might use code like the following when creating your {{domxref("MediaRecorder")}} object:

```js
const kbps = 1024;
const Mbps = kbps * kbps;

const options = {
  mimeType: 'video/webm; codecs="av01.2.19H.12.0.000.09.16.09.1, flac"',
  bitsPerSecond: 800 * Mbps,
};

let recorder = new MediaRecorder(sourceStream, options);
```

This example creates a `MediaRecorder` configured to record [AV1](#av1) video using BT.2100 HDR in 12-bit color with 4:4:4 chroma subsampling and [FLAC](/en-US/docs/Web/Media/Formats/Audio_codecs#flac_free_lossless_audio_codec) for lossless audio. The resulting file will use a bit rate of no more than 800 Mbps shared between the video and audio tracks. You will likely need to adjust these values depending on hardware performance, your requirements, and the specific codecs you choose to use. This bit rate is obviously not realistic for network transmission and would likely only be used locally.

Breaking down the value of the `codecs` parameter into its dot-delineated properties, we see the following:

| Value  | Description                                                                                                                                                                                                                                                                              |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `av01` | The four-character code (4CC) designation identifying the [AV1](#av1) codec.                                                                                                                                                                                                             |
| `2`    | The profile. A value of 2 indicates the Professional profile. A value of 1 is the High profile, while a value of 0 would specify the Main profile.                                                                                                                                       |
| `19H`  | The level and tier. This value comes from the table in section [A.3](https://aomediacodec.github.io/av1-spec/#levels) of the AV1 specification, and indicates the high tier of Level 6.3.                                                                                                |
| `12`   | The color depth. This indicates 12 bits per component. Other possible values are 8 and 10, but 12 is the highest-accuracy color representation available in AV1.                                                                                                                         |
| `0`    | The monochrome mode flag. If 1, then no chroma planes would be recorded, and all data should be strictly luma data, resulting in a greyscale image. We've specified 0 because we want color.                                                                                             |
| `000`  | The chroma subsampling mode, taken from [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in the AV1 specification. A value of 000, combined with the monochrome mode value 0, indicates that we want 4:4:4 chroma subsampling, or no loss of color data. |
| `09`   | The color primaries to use. This value comes from [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) in the AV1 specification; 9 indicates that we want to use BT.2020 color, which is used for HDR.                                                       |
| `16`   | The transfer characteristics to use. This comes from [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) as well; 16 indicates that we want to use the characteristics for BT.2100 PQ color.                                                                |
| `09`   | The matrix coefficients to use, from the [section 6.4.2](https://aomediacodec.github.io/av1-spec/#color-config-semantics) again. A value of 9 specifies that we want to use BT.2020 with variable luminance; this is also known as BT.2010 YbCbCr.                                       |
| `1`    | The video "full range" flag. A value of 1 indicates that we want the full color range to be used.                                                                                                                                                                                        |

The documentation for your codec choices will probably offer information you'll use when constructing your `codecs` parameter.

## See also

- [Web audio codec guide](/en-US/docs/Web/Media/Formats/Audio_codecs)
- [Media container formats (file types)](/en-US/docs/Web/Media/Formats/Containers)
- [Handling media support issues in web content](/en-US/docs/Web/Media/Formats/Support_issues)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
- {{RFC(6381)}}: The "Codecs" and "Profiles" parameters for "Bucket" media types
- {{RFC(5334)}}: Ogg Media Types
- {{RFC(3839)}}: MIME Type Registrations for 3GPP Multimedia Files
- {{RFC(4381)}}: MIME Type Registrations for 3GPP2 Multimedia Files
- {{RFC(4337)}}: MIME Type Registrations for MPEG-4
- [Video codecs in Opera](https://dev.opera.com/articles/introduction-html5-video/#codecs--the-fly-in-the-ointment)
- [Video and audio codecs in Chrome](https://www.chromium.org/audio-video/)
