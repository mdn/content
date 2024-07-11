---
title: Codecs in common media types
slug: Web/Media/Formats/codecs_parameter
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Media")}}

At a fundamental level, you can specify the type of a media file using a simple {{Glossary("MIME")}} type, such as `video/mp4` or `audio/mpeg`. However, many media types—especially those that support video tracks—can benefit from the ability to more precisely describe the format of the data within them. For instance, just describing a video in an [MPEG-4](/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4) file with the MIME type `video/mp4` doesn't say anything about what format the actual media within takes.

For that reason, the `codecs` parameter can be added to the MIME type describing media content. With it, container-specific information can be provided. This information may include things like the profile of the video codec, the type used for the audio tracks, and so forth.

This guide briefly examines the syntax of the media type `codecs` parameter and how it's used with the MIME type string to provide details about the contents of audio or video media beyond indicating the container type.

## Container format MIME types

The MIME type for a container format is expressed by stating the type of media (`audio`, `video`, etc.), then a slash character (`/`), then the format used to contain the media:

- `audio/mpeg`
  - : An audio file using the [MPEG](/en-US/docs/Web/Media/Formats/Containers#mpegmpeg-2) file type, such as an MP3.
- `video/ogg`
  - : A video file using the [Ogg](/en-US/docs/Web/Media/Formats/Containers#ogg) file type.
- `video/mp4`
  - : A video file using the [MPEG-4](/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4) file type.
- `video/quicktime`
  - : A video file in Apple's [QuickTime](/en-US/docs/Web/Media/Formats/Containers#quicktime) format. As noted elsewhere, this format was once commonly used on the web but no longer is, since it required a plugin to use.

However, each of these MIME types is vague. All of these file types support a variety of codecs, and those codecs may have any number of profiles, levels, and other configuration factors. For this reason, you may want to include the `codecs` parameter along with the media type.

## Basic syntax

You can add the `codecs` parameter to the media type. To do so, append a semicolon (`;`) followed by `codecs=` and then the string describing the format of the contents of the file. Some media types only let you specify the names of the codecs to use, while others allow you to specify various constraints on those codecs as well. You can specify multiple codecs by separating them with commas.

- `audio/ogg; codecs=vorbis`
  - : An [Ogg](/en-US/docs/Web/Media/Formats/Containers#ogg) file containing a [Vorbis](/en-US/docs/Web/Media/Formats/Audio_codecs#vorbis) audio track.
- `video/webm; codecs="vp8, vorbis"`
  - : A [WebM](/en-US/docs/Web/Media/Formats/Containers#webm) file containing [VP8](/en-US/docs/Web/Media/Formats/Video_codecs#vp8) video and/or [Vorbis](/en-US/docs/Web/Media/Formats/Audio_codecs#vorbis) audio.
- `video/mp4; codecs="avc1.4d002a"`
  - : An [MPEG-4](/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4) file containing [AVC](/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264) (H.264) video, Main Profile, Level 4.2.

As is the case with any MIME type parameter, `codecs` must be changed to `codecs*` (note the asterisk character, `*`) if any of the properties of the codec use special characters which must be percent-encoded per {{RFC(2231, "MIME Parameter Value and Encoded Word Extensions", 4)}}. You can use the JavaScript {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} function to encode the parameter list; similarly, you can use {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} to decode a previously encoded parameter list.

> **Note:** When the `codecs` parameter is used, the specified list of codecs must include every codec used for the contents of the file. The list may also contain codecs not present in the file.

## Codec options by container

The containers below support extended codec options in their `codecs` parameters:

- [3GP](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [AV1](#av1)
- [ISO BMFF](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [MPEG-4](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [QuickTime](#iso_base_media_file_format_mp4_quicktime_and_3gp)
- [WebM](#webm)

Several of the links above go to the same section; that's because those media types are all based on ISO Base Media File Format (ISO BMFF), so they share the same syntax.

### AV1

The syntax of the `codecs` parameter for AV1 is defined the [AV1 Codec ISO Media File Format Binding](https://aomediacodec.github.io/av1-isobmff/) specification, section 5: [Codecs Parameter String](https://aomediacodec.github.io/av1-isobmff/#codecsparam).

```plain
av01.P.LLT.DD[.M.CCC.cp.tc.mc.F]
```

> **Note:** Chromium-based browsers will accept any subset of the optional parameters (rather than all or none, as required by the specification).

This codec parameter string's components are described in more detail in the table below. Each component is a fixed number of characters long; if the value is less than that length, it must be padded with leading zeros.

<table class="standard-table">
  <caption>
    AV1 codec parameter string components
  </caption>
  <thead>
    <tr>
      <th scope="col">Component</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>P</code></td>
      <td>
        <p>The one-digit profile number:</p>
        <table class="standard-table">
          <caption>
            AV1 profile numbers
          </caption>
          <thead>
            <tr>
              <th scope="col">Profile number</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>
                "Main" profile; supports YUV 4:2:0 or monochrome bitstreams with bit depth of 8 or 10 bits per component.
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>"High" profile adds support for 4:4:4 chroma subsampling.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                "Professional" profile adds support for 4:2:2 chroma subsampling and 12-bit per component color.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        The two-digit level number, which is converted to the X.Y format level format, where <code>X = 2 + (LL >> 2)</code> and <code>Y = LL &#x26; 3</code>.
        See <a href="https://aomediacodec.github.io/av1-spec/#levels">Appendix A, section 3</a> in the AV1 Specification for details.
      </td>
    </tr>
    <tr>
      <td><code>T</code></td>
      <td>
        The one-character tier indicator. For the Main tier (<code>seq_tier</code> equals 0), this character is the letter <code>M</code>.
        For the High tier (<code>seq_tier</code> is 1), this character is the letter <code>H</code>.
        The High tier is only available for level 4.0 and up.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        The two-digit component bit depth. This value must be one of 8, 10, or 12; which values are valid varies depending on the profile and other properties.
      </td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>
        The one-digit monochrome flag; if this is 0, the video includes the U and V planes in addition to the Y plane.
        Otherwise, the video data is entirely in the Y plane and is therefore monochromatic.
        See [YUV](/en-US/docs/Web/Media/Formats/Video_concepts#yuv) for details on how the YUV color system works.
        The default value is 0 (not monochrome).
      </td>
    </tr>
    <tr>
      <td><code>CCC</code></td>
      <td>
        <p>
          <code>CCC</code> indicates the chroma subsampling as three digits.
          The first digit is <code>subsampling_x</code>, the second is <code>subsampling_y</code>.
          If both of those are 1, the third is the value of <code>chroma_sample_position</code>; otherwise, the third digit is always 0.
          This, combined with the <code>M</code> component, can be used to construct the chroma subsampling format:
        </p>
        <table class="standard-table">
          <caption>
            Determining the chroma subsampling format
          </caption>
          <thead>
            <tr>
              <th scope="col">subsampling_x</th>
              <th scope="col">subsampling_y</th>
              <th scope="col">Monochrome flag</th>
              <th scope="col">Chroma subsampling format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>YUV 4:4:4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>YUV 4:2:2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>YUV 4:2:0</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>YUV 4:0:0 (Monochrome)</td>
            </tr>
          </tbody>
        </table>
        <p>
          The third digit in <code>CCC</code> indicates the chroma sample position, with a value of 0 indicating that the position is unknown and must be separately provided during decoding; a value of 1 indicating that the sample position is horizontally collocated with the (0, 0) luma sample; and a value of 2 indicating that the sample position is collocated with (0, 0) luma.
        </p>
        <p>The default value is <code>110</code> (4:2:0 chroma subsampling).</p>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        The two-digit <code>color_primaries</code> value indicates the color system used by the media.
        For example, BT.2020/BT.2100 color, as used for HDR video, is <code>09</code>.
        The information for this—and for each of the remaining components—is found in the <a href="https://aomediacodec.github.io/av1-spec/#color-config-semantics">Color config semantics section</a> of the AV1 specification.
        The default value is <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        The two-digit <code>transfer_characteristics</code> value. This value defines the function used to map the gamma (delightfully called the "opto-electrical transfer function" in technical parlance) from the source to the display.
        For example, 10-bit BT.2020 is <code>14</code>.
        The default value is <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        The two-digit <code>matrix_coefficients</code> constant selects the matrix coefficients used to convert the red, blue, and green channels into luma and chroma signals.
        For example, the standard coefficients used for BT.709 are indicated using the value <code>01</code>.
        The default value is <code>01</code> (ITU-R BT.709).
      </td>
    </tr>
    <tr>
      <td><code>F</code></td>
      <td>
        A one-digit flag indicating whether the color should be allowed to use the full range of possible values (<code>1</code>), or should be constrained to those values considered legal for the specified color configuration (that is, the <strong>studio swing representation</strong>).
        The default is 0 (use the studio swing representation).
      </td>
    </tr>
  </tbody>
</table>

All fields from `M` (monochrome flag) onward are optional; you may stop including fields at any point (but can't arbitrarily leave out fields). The default values are included in the table above. Some example AV1 codec strings:

- `av01.2.15M.10.0.100.09.16.09.0`
  - : AV1 Professional Profile, level 5.3, Main tier, 10 bits per color component, 4:2:2 chroma subsampling using ITU-R BT.2100 color primaries, transfer characteristics, and YCbCr color matrix. The studio swing representation is indicated.
- `av01.0.15M.10`
  - : AV1 Main Profile, level 5.3, Main tier, 10 bits per color component. The remaining properties are taken from the defaults: 4:2:0 chroma subsampling, BT.709 color primaries, transfer characteristics, and matrix coefficients. Studio swing representation.

### VP9

#### ISO Base Media File Format syntax

The syntax of the `codecs` parameter for VP9 is defined in the [VP Codec ISO Media File Format Binding](https://www.webmproject.org/vp9/mp4/) specification, in the [Codecs Parameter String](https://www.webmproject.org/vp9/mp4/#codecs-parameter-string) section.

In this format, the `codecs` parameter's value begins with a four-character code identifying the codec being used in the container, which is then followed by a series of period (`.`) separated two-digit values.

```plain
cccc.PP.LL.DD
cccc.PP.LL.DD.CC.cp.tc.mc.FF
```

The first four components are required; everything from `CC` (chroma subsampling) onward is optional, but all or nothing. Each of these components is described in the following table. Following the table are some examples.

<table class="standard-table">
  <caption>
    WebM codecs parameter components
  </caption>
  <thead>
    <tr>
      <th scope="col">Component</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>cccc</code></td>
      <td>
        <p>
          A four-character code indicating which indicates which of the possible codecs is being described.
          Potential values are:
        </p>
        <table class="standard-table">
          <caption>
            Four-character codes for WebM-supported codecs
          </caption>
          <thead>
            <tr>
              <th scope="col">Four-character code</th>
              <th scope="col">Codec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>vp08</code></td>
              <td>VP8</td>
            </tr>
            <tr>
              <td><code>vp09</code></td>
              <td>VP9</td>
            </tr>
            <tr>
              <td><code>vp10</code></td>
              <td>VP10</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>PP</code></td>
      <td>
        <p>
          The two-digit profile number, padded with leading zeroes if necessary to be exactly two digits.
        </p>
        <table class="standard-table">
          <caption>
            WebM profile numbers
          </caption>
          <thead>
            <tr>
              <th scope="col">Profile</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                Only 4:2:0 (chroma subsampled both horizontally and vertically).
                Allows only 8 bits per color component.
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                All chroma subsampling formats are allowed.
                Allows only 8 bits per color component.
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Only 4:2:0 (chroma subsampled both horizontally and vertically).
                Supports 8, 10, or 12 bits per color sample component.
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                All chroma subsampling formats are allowed.
                Supports 8, 10, or 12 bits per color sample component.
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>LL</code></td>
      <td>
        The two-digit level number.
        The level number is a fixed-point notation, where the first digit is the ones digit, and the second digit represents
        tenths.
        For example, level 3 is <code>30</code> and level 6.1 is <code>61</code>.
      </td>
    </tr>
    <tr>
      <td><code>DD</code></td>
      <td>
        The bit depth of the luma and color component values; permitted values are 8, 10, and 12.
      </td>
    </tr>
    <tr>
      <td><code>CC</code></td>
      <td>
        <p>
          A two-digit value indicating which chroma subsampling format to use.
          The following table lists permitted values; see [Chroma subsampling](/en-US/docs/Web/Media/Formats/Video_concepts#chroma_subsampling) in our "Digital video concepts" guide for additional information about this topic and others.
        </p>
        <table class="standard-table">
          <caption>
            WebM chroma subsampling identifiers
          </caption>
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Chroma subsampling format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td>
                4:2:0 with the chroma samples sited interstitially between the pixels
              </td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                4:2:0 chroma subsampling with the samples collocated with luma (0, 0)
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                4:2:2 chroma subsampling (4 out of each 4 horizontal pixels' luminance are used)
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td>
                4:4:4 chroma subsampling (every pixel's luminance and chrominance are both retained)
              </td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td><em>Reserved</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>cp</code></td>
      <td>
        <p>
          A two-digit integer specifying which of the color primaries from Section 8.1 of the <a href="https://www.itu.int/rec/T-REC-H.273/en" >ISO/IEC 23001-8:2016</a> standard.
          This component, and every component after it, is optional.
        </p>
        <p>The possible values of the color primaries component are:</p>
        <table class="standard-table">
          <caption>
            ISO/IEC Color primary identifiers
          </caption>
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>00</code></td>
              <td><em>Reserved for future use by ITU or ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>01</code></td>
              <td>
                BT.709, sRGB, sYCC. BT.709 is the standard for high definition (HD) television; sRGB is the most common color space used for computer displays.
                Broadcast BT.709 uses 8-bit color depth with the legal range being from 16 (black) to 235 (white).
              </td>
            </tr>
            <tr>
              <td><code>02</code></td>
              <td>
                Image characteristics are unknown, or are to be determined by the application
              </td>
            </tr>
            <tr>
              <td><code>03</code></td>
              <td><em>Reserved for future use by ITU or ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>04</code></td>
              <td>
                BT.470 System M, NTSC (standard definition television in the United States)
              </td>
            </tr>
            <tr>
              <td><code>05</code></td>
              <td>
                BT.470 System B, G; BT.601; BT.1358 625; BT.1700 625 PAL and 625 SECAM
              </td>
            </tr>
            <tr>
              <td><code>06</code></td>
              <td>
                BT.601 525; BT.1358 525 or 625; BT.1700 NTSC; SMPTE 170M.
                <em>Functionally identical to <code>7</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>70</code></td>
              <td>
                {{Glossary("SMPTE")}} 240M (historical).
                <em>Functionally identical to <code>6</code>.</em>
              </td>
            </tr>
            <tr>
              <td><code>08</code></td>
              <td>Generic film</td>
            </tr>
            <tr>
              <td><code>09</code></td>
              <td>
                BT.2020; BT.2100.
                Used for ultra-high definition (4K) High Dynamic Range (HDR) video, these have a very wide color {{glossary("gamut")}} and support 10-bit and 12-bit color component depths.
              </td>
            </tr>
            <tr>
              <td><code>10</code></td>
              <td>
                SMPTE ST 428 (D-Cinema Distribution Master: Image characteristics).
                Defines the uncompressed image characteristics for DCDM.
              </td>
            </tr>
            <tr>
              <td><code>11</code></td>
              <td>
                SMPTE RP 431 (D-Cinema Quality: Reference projector and environment).
                Describes the reference projector and environment conditions that provide a consistent film presentation experience.
              </td>
            </tr>
            <tr>
              <td><code>12</code></td>
              <td>
                SMPTE EG 432 (Digital Source Processing: Color Processing for D-Cinema).
                Engineering guideline making color signal decoding recommendations for digital movies.
              </td>
            </tr>
            <tr>
              <td><code>13</code> – <code>21</code></td>
              <td><em>Reserved for future use by ITU-T or ISO/IEC</em></td>
            </tr>
            <tr>
              <td><code>22</code></td>
              <td>EBU Tech 3213-E</td>
            </tr>
            <tr>
              <td><code>23</code> – <code>255</code></td>
              <td><em>Reserved for future use by ITU-T or ISO/IEC</em></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><code>tc</code></td>
      <td>
        A two-digit integer indicating the
        <code>transferCharacteristics</code> for the video.
        This value is from Section 8.2 of <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a>, and indicates the transfer characteristics to be used when adapting the decoded color to the render target.
      </td>
    </tr>
    <tr>
      <td><code>mc</code></td>
      <td>
        The two-digit value for the <code>matrixCoefficients</code> property.
        This value comes from the table in Section 8.3 of the <a href="https://www.itu.int/rec/T-REC-H.273/en">ISO/IEC 23001-8:2016</a> specification.
        This value indicates which set of coefficients to use when mapping from the native red, blue, and green primaries to the luma and chroma signals.
        These coefficients are in turn used with the equations found in that same section.
      </td>
    </tr>
    <tr>
      <td><code>FF</code></td>
      <td>
        Indicates whether to restrict the black level and color range of each color component to the legal range.
        For 8-bit color samples, the legal range is 16-235.
        A value of <code>00</code> indicates that these limitations should be enforced, while a value of <code>01</code> allows the full range of possible values for each component, even if the resulting color is out of bounds for the color system.
      </td>
    </tr>
  </tbody>
</table>

#### Examples

- `video/webm;codecs="vp09.02.10.10.01.09.16.09.01,opus"`
  - : VP9 video, profile 2 level 1.0, with 10-bit YUV content using 4:2:0 chroma subsampling, BT.2020 primaries, ST 2084 EOTF (HDR SMPTE), BT.2020 non-constant luminance color matrix, and full-range chroma and luma encoding. The audio is in Opus format.

### ISO Base Media File Format: MP4, QuickTime, and 3GP

All media types based upon the [ISO Base Media File Format](https://en.wikipedia.org/wiki/ISO_Base_Media_File_Format) (ISO BMFF) share the same syntax for the `codecs` parameter. These media types include [MPEG-4](/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4) (and, in fact, the [QuickTime](/en-US/docs/Web/Media/Formats/Containers#quicktime) file format upon which MPEG-4 is based) as well as [3GP](/en-US/docs/Web/Media/Formats/Containers#3gp). Both video and audio tracks can be described using the `codecs` parameter with the following MIME types:

| MIME type         | Description                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `audio/3gpp`      | 3GP audio ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `video/3gpp`      | 3GP video ({{RFC(3839, "MIME Type Registrations for 3rd generation Partnership Project (3GP) Multimedia files")}}) |
| `audio/3gp2`      | 3GP2 audio ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `video/3gp2`      | 3GP2 video ({{RFC(4393, "MIME Type Registrations for 3GPP2 Multimedia files")}})                                   |
| `audio/mp4`       | MP4 audio ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `video/mp4`       | MP4 video ({{RFC(4337, "MIME Type Registration for MPEG-4")}})                                                     |
| `application/mp4` | Non-audiovisual media encapsulated in MPEG-4                                                                       |

Each codec described by the `codecs` parameter can be specified either as the container's name (`3gp`, `mp4`, `quicktime`, etc.) or as the container name plus additional parameters to specify the codec and its configuration. Each entry in the codec list may contain some number of components, separated by periods (`.`).

The syntax for the value of `codecs` varies by codec; however, it always starts with the codec's four-character identifier, a period separator (`.`), followed by the Object Type Indication (OTI) value for the specific data format. For most codecs, the OTI is a two-digit hexadecimal number; however, it's six hexadecimal digits for [AVC (H.264)](/en-US/docs/Web/Media/Formats/Video_codecs#avc_h.264).

Thus, the syntaxes for each of the supported codecs look like this:

- `cccc[.pp]*` (Generic ISO BMFF)
  - : Where `cccc` is the four-character ID for the codec and `pp` is where zero or more two-character encoded property values go.
- `mp4a.oo[.A]` (MPEG-4 audio)
  - : Where `oo` is the Object Type Indication value describing the contents of the media more precisely and `A` is the one-digit _audio_ OTI. The possible values for the OTI can be found on the MP4 Registration Authority website's [Object Types page](https://mp4ra.org/#/object_types). For example, Opus audio in an MP4 file is `mp4a.ad`. For further details, see [MPEG-4 audio](#mpeg-4_audio).
- `mp4v.oo[.V]` (MPEG-4 video)
  - : Here, `oo` is again the OTI describing the contents more precisely, while `V` is the one-digit _video_ OTI.
- `avc1[.PPCCLL]` (AVC video)

  - : `PPCCLL` are six hexadecimal digits specifying the profile number (`PP`), constraint set flags (`CC`), and level (`LL`). See [AVC profiles](#avc_profiles) for the possible values of `PP`.

    The constraint set flags byte is comprised of one-bit Boolean flags, with the most significant bit being referred to as flag 0 (or `constraint_set0_flag`, in some resources), and each successive bit being numbered one higher. Currently, only flags 0 through 2 are used; the other five bits _must_ be zero. The meanings of the flags vary depending on the profile being used.

    The level is a fixed-point number, so a value of `14` (decimal 20) means level 2.0 while a value of `3D` (decimal 61) means level 6.1. Generally speaking, the higher the level number, the more bandwidth the stream will use and the higher the maximum video dimensions are supported.

#### AVC profiles

The following are the AVC profiles and their profile numbers for use in the `codecs` parameter, as well as the value to specify for the constraints component, `CC`.

| Profile                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Number (Hex) | Constraints byte |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------------- |
| **Constrained Baseline Profile (CBP)** CBP is primarily a solution for scenarios in which resources are constrained, or resource use needs to be controlled to minimize the odds of the media performing poorly.                                                                                                                                                                                                                                                                                                                                       | `42`         | `40`             |
| **Baseline Profile (BP)** Similar to CBP but with more data loss protections and recovery capabilities. This is not as widely used as it was before CBP was introduced. All CBP streams are considered to also be BP streams.                                                                                                                                                                                                                                                                                                                          | `42`         | `00`             |
| **Extended Profile (XP)** Designed for streaming video over the network, with high compression capability and further improvements to data robustness and stream switching.                                                                                                                                                                                                                                                                                                                                                                            | `58`         | `00`             |
| **Main Profile (MP)** The profile used for standard-definition digital television being broadcast in MPEG-4 format. _Not_ used for high-definition television broadcasts. This profile's importance has faded since the introduction of the High Profile—which was added for HDTV use—in 2004.                                                                                                                                                                                                                                                         | `4D`         | `00`             |
| **High Profile (HiP)** Currently, HiP is the primary profile used for broadcast and disc-based HD video; it's used both for HD TV broadcasts and for Blu-Ray video.                                                                                                                                                                                                                                                                                                                                                                                    | `64`         | `00`             |
| **Progressive High Profile (PHiP)** Essentially High Profile without support for field coding.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `64`         | `08`             |
| **Constrained High Profile** PHiP, but without support for bi-predictive slices ("B-slices").                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `64`         | `0C`             |
| **High 10 Profile (Hi10P)** High Profile, but with support for up to 10 bits per color component.                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `6E`         | `00`             |
| **High 4:2:2 Profile (Hi422P)** Expands upon Hi10P by adding support for 4:2:2 chroma subsampling along with up to10 bits per color component.                                                                                                                                                                                                                                                                                                                                                                                                         | `7A`         | `00`             |
| **High 4:4:4 Predictive Profile (Hi444PP)** In addition to the capabilities included in Hi422P, Hi444PP adds support for 4:4:4 chroma subsampling (in which no color information is discarded). Also includes support for up to 14 bits per color sample and efficient lossless region coding. The option to encode each frame as three separate color planes (that is, each color's data is stored as if it were a single monochrome frame).                                                                                                          | `F4`         | `00`             |
| **High 10 Intra Profile** High 10 constrained to all-intra-frame use. Primarily used for professional apps.                                                                                                                                                                                                                                                                                                                                                                                                                                            | `6E`         | `10`             |
| **High 4:2:2 Intra Profile** The Hi422 Profile with all-intra-frame use.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | `7A`         | `10`             |
| **High 4:4:4 Intra Profile** The High 4:4:4 Profile constrained to use only intra frames.                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `F4`         | `10`             |
| **CAVLC 4:4:4 Intra Profile** The High 4:4:4 Profile constrained to all-intra use, and to using only CAVLC entropy coding.                                                                                                                                                                                                                                                                                                                                                                                                                             | `44`         | `00`             |
| **Scalable Baseline Profile** Intended for use with video conferencing as well as surveillance and mobile uses, the [SVC](https://en.wikipedia.org/wiki/SVC) Baseline Profile is based on AVC's Constrained Baseline profile. The base layer within the stream is provided at a high quality level, with some number of secondary substreams that offer alternative forms of the same video for use in various constrained environments. These may include any combination of reduced resolution, reduced frame rate, or increased compression levels. | `53`         | `00`             |
| **Scalable Constrained Baseline Profile** Primarily used for real-time communication applications. Not yet supported by WebRTC, but an extension to the WebRTC API [to allow SVC](https://github.com/w3c/webrtc-svc) is in development.                                                                                                                                                                                                                                                                                                                | `53`         | `04`             |
| **Scalable High Profile** Meant mostly for use in broadcast and streaming applications. The base (or highest quality) layer must conform to the AVC High Profile.                                                                                                                                                                                                                                                                                                                                                                                      | `56`         | `00`             |
| **Scalable Constrained High Profile** A subset of the Scalable High Profile designed mainly for real-time communication.                                                                                                                                                                                                                                                                                                                                                                                                                               | `56`         | `04`             |
| **Scalable High Intra Profile** Primarily useful only for production applications, this profile supports only all-intra usage.                                                                                                                                                                                                                                                                                                                                                                                                                         | `56`         | `20`             |
| **Stereo High Profile** The Stereo High Profile provides stereoscopic video using two renderings of the scene (left eye and right eye). Otherwise, provides the same features as the High profile.                                                                                                                                                                                                                                                                                                                                                     | `80`         | `00`             |
| **Multiview High Profile** Supports two or more views using both temporal and MVC inter-view prediction. _Does not support_ field pictures or macroblock-adaptive frame-field coding.                                                                                                                                                                                                                                                                                                                                                                  | `76`         | `00`             |
| **Multiview Depth High Profile** Based on the High Profile, to which the main substream must adhere. The remaining substreams must match the Stereo High Profile.                                                                                                                                                                                                                                                                                                                                                                                      | `8A`         | `00`             |

#### MPEG-4 audio

When the value of an entry in the `codecs` list begins with `mp4a`, the syntax of the value should be:

```plain
mp4a.oo[.A]
```

Here, `oo` is the two-digit hexadecimal Object Type Indication which specifies the codec class being used for the media. The OTIs are assigned by the [MP4 Registration Authority](https://mp4ra.org/), which maintains a [list of the possible OTI values](https://mp4ra.org/#/object_types). A special value is `40`; this indicates that the media is MPEG-4 audio (ISO/IEC 14496 Part 3). In order to be more specific still, a third component—the Audio Object Type—is added for OTI `40` to narrow the type down to a specific subtype of MPEG-4.

The Audio Object Type is specified as a one or two digit _decimal_ value (unlike most other values in the `codecs` parameter, which use hexadecimal). For example, MPEG-4's AAC-LC has an audio object type number of `2`, so the full `codecs` value representing AAC-LC is `mp4a.40.2`.

Thus, ER AAC LC, whose Audio Object Type is 17, can be represented using the full `codecs` value `mp4a.40.17`. Single digit values can be given either as one digit (which is the best choice, since it will be the most broadly compatible) or with a leading zero padding it to two digits, such as `mp4a.40.02`.

> **Note:** The specification originally mandated that the Audio Object Type number in the third component be only one decimal digit. However, amendments to the specification over time extended the range of these values well beyond one decimal digit, so now the third parameter may be either one or two digits. Padding values below 10 with a leading `0` is optional. Older implementations of MPEG-4 codecs may not support two-digit values, however, so using a single digit when possible will maximize compatibility.

The Audio Object Types are defined in ISO/IEC 14496-3 subpart 1, section 1.5.1. The table below provides a basic list of the Audio Object Types and in the case of the more common object types provides a list of the profiles supporting it, but you should refer to the specification for details if you need to know more about the inner workings of any given MPEG-4 audio type.

<table class="standard-table">
  <caption>
    MPEG-4 audio object types
  </caption>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Audio Object Type</th>
      <th scope="col">Profile support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>0</code></td>
      <td>NULL</td>
      <td></td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td>AAC Main</td>
      <td>Main</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td>AAC LC (Low Complexity)</td>
      <td>Main, Scalable, HQ, LD v2, AAC, HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td>AAC SSR (Scalable Sampling Rate)</td>
      <td>Main</td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td>AAC LTP (Long Term Prediction)</td>
      <td>Main, Scalable, HQ</td>
    </tr>
    <tr>
      <td><code>5</code></td>
      <td>SBR (Spectral Band Replication)</td>
      <td>HE-AAC, HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>6</code></td>
      <td>AAC Scalable</td>
      <td>Main, Scalable, HQ</td>
    </tr>
    <tr>
      <td><code>7</code></td>
      <td>TwinVQ (Coding for ultra-low bit rates)</td>
      <td>Main, Scalable</td>
    </tr>
    <tr>
      <td><code>8</code></td>
      <td>CELP (Code-Excited Linear Prediction)</td>
      <td>Main, Scalable, Speech, HQ, LD</td>
    </tr>
    <tr>
      <td><code>9</code></td>
      <td>HVXC (Harmonic Vector Excitation Coding)</td>
      <td>Main, Scalable, Speech, LD</td>
    </tr>
    <tr>
      <td><code>10</code> – <code>11</code></td>
      <td><em>Reserved</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>12</code></td>
      <td>TTSI (Text to Speech Interface)</td>
      <td>Main, Scalable, Speech, Synthetic, LD</td>
    </tr>
    <tr>
      <td><code>13</code></td>
      <td>Main Synthetic</td>
      <td>Main, Synthetic</td>
    </tr>
    <tr>
      <td><code>14</code></td>
      <td>Wavetable Synthesis</td>
      <td></td>
    </tr>
    <tr>
      <td><code>15</code></td>
      <td>General MIDI</td>
      <td></td>
    </tr>
    <tr>
      <td><code>16</code></td>
      <td>Algorithmic Synthesis and Audio Effects</td>
      <td></td>
    </tr>
    <tr>
      <td><code>17</code></td>
      <td>ER AAC LC (Error Resilient AAC Low-Complexity)</td>
      <td>HQ, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>18</code></td>
      <td><em>Reserved</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>19</code></td>
      <td>ER AAC LTP (Error Resilient AAC Long Term Prediction)</td>
      <td>HQ</td>
    </tr>
    <tr>
      <td><code>20</code></td>
      <td>ER AAC Scalable (Error Resilient AAC Scalable)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>21</code></td>
      <td>ER TwinVQ (Error Resilient TwinVQ)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>22</code></td>
      <td>ER BSAC (Error Resilient Bit-Sliced Arithmetic Coding)</td>
      <td>Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>23</code></td>
      <td>
        ER AAC LD (Error Resilient AAC Low-Delay; used for two-way
        communication)
      </td>
      <td>LD, Mobile Internetworking</td>
    </tr>
    <tr>
      <td><code>24</code></td>
      <td>ER CELP (Error Resilient Code-Excited Linear Prediction)</td>
      <td>HQ, LD</td>
    </tr>
    <tr>
      <td><code>25</code></td>
      <td>ER HVXC (Error Resilient Harmonic Vector Excitation Coding)</td>
      <td>LD</td>
    </tr>
    <tr>
      <td><code>26</code></td>
      <td>ER HILN (Error Resilient Harmonic and Individual Line plus Noise)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>27</code></td>
      <td>ER Parametric (Error Resilient Parametric)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>28</code></td>
      <td>SSC (Sinusoidal Coding)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>29</code></td>
      <td>PS (Parametric Stereo)</td>
      <td>HE-AAC v2</td>
    </tr>
    <tr>
      <td><code>30</code></td>
      <td>MPEG Surround</td>
      <td></td>
    </tr>
    <tr>
      <td><code>31</code></td>
      <td><em>Escape</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>32</code></td>
      <td>MPEG-1 Layer-1</td>
      <td></td>
    </tr>
    <tr>
      <td><code>33</code></td>
      <td>MPEG-1 Layer-2 (MP2)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>34</code></td>
      <td>MPEG-1 Layer-3 (MP3)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>35</code></td>
      <td>DST (Direct Stream Transfer)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>36</code></td>
      <td>ALS (Audio Lossless)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>37</code></td>
      <td>SLS (Scalable Lossless)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>38</code></td>
      <td>SLS Non-core (Scalable Lossless Non-core)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>39</code></td>
      <td>ER AAC ELD (Error Resilient AAC Enhanced Low Delay)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>40</code></td>
      <td>SMR Simple (Symbolic Music Representation Simple)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>41</code></td>
      <td>SMR Main (Symbolic Music Representation Main)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>42</code></td>
      <td><em>Reserved</em></td>
      <td></td>
    </tr>
    <tr>
      <td><code>43</code></td>
      <td>
        <p>SAOC (Spatial Audio Object Coding)</p>
        <p>
          Defined in
          <a href="https://www.iso.org/standard/54838.html"
            >ISO/IEC 14496-3:2009/Amd.2:2010(E)</a
          >.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>44</code></td>
      <td>
        <p>LD MPEG Surround (Low Delay MPEG Surround)</p>
        <p>
          Defined in <a href="https://www.iso.org/standard/54838.html">ISO/IEC 14496-3:2009/Amd.2:2010(E)</a>.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>45</code> and up</td>
      <td><em>Reserved</em></td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebM

The basic form for a WebM `codecs` parameter is to list one or more of the four WebM codecs by name, separated by commas. The table below shows some examples:

| MIME type                        | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `video/webm;codecs="vp8"`        | A WebM video with VP8 video in it; no audio is specified. |
| `video/webm;codecs="vp9"`        | A WebM video with VP9 video in it.                        |
| `audio/webm;codecs="vorbis"`     | Vorbis audio in a WebM container.                         |
| `audio/webm;codecs="opus"`       | Opus audio in a WebM container.                           |
| `video/webm;codecs="vp8,vorbis"` | A WebM container with VP8 video and Vorbis audio.         |
| `video/webm;codecs="vp9,opus"`   | A WebM container with VP9 video and Opus audio.           |

The strings `vp8.0` and `vp9.0` also work, but are not recommended.

## Using the codecs parameter

You can use the `codecs` parameter in a few situations. Firstly, you can use it with the {{HTMLElement("source")}} element when creating an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, in order to establish a group of options for the browser to choose from when selecting the format of the media to present to the user in the element.

You can also use the codecs parameter when specifying a MIME media type to the {{domxref("MediaSource/isTypeSupported_static", "MediaSource.isTypeSupported()")}} method; this method returns a Boolean which indicates whether or not the media is likely to work on the current device.

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- The {{HTMLElement("source")}} element, child of the {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- [Guide to audio codecs used on the web](/en-US/docs/Web/Media/Formats/Audio_codecs)
- [Guide to video codecs used on the web](/en-US/docs/Web/Media/Formats/Video_codecs)
- [Codecs used by WebRTC](/en-US/docs/Web/Media/Formats/WebRTC_codecs)
- [Getting the correct HTML codecs parameter for an AV1 video](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)
