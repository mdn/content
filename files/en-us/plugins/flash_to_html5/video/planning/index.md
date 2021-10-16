---
title: Planning your transition from Flash video to HTML5 video
slug: Plugins/Flash_to_HTML5/Video/Planning
tags:
  - Advertising
  - Audio
  - Auditing
  - Authentication
  - DRM
  - Flash
  - HTML
  - Planning
  - Video
  - captions
  - streaming
  - subtitles
---
{{NextMenu("Plugins/Flash_to_HTML5/Video/File_format_conversion", "Plugins/Flash_to_HTML5/Video")}}

Transitioning from Flash to HTML5 can take several months and may require new skills and software. This guide shows you how to plan for that transition.

## Auditing what you have

Before you begin, you'll need to identify the media assets and core use cases of your existing Flash functionality. The following questions can help you prepare:

### Media Files

- How many media files do you have on the site?
- What format are the media files in? Some formats (e.g. FLV) are not compatible with HTML and the media files will need to be converted.
- Do you have the original media files? If you need to create new files (e.g. MP4) then transcoding from the original will give you higher quality.

### Business Requirements

- Do you currently support video ads, such as pre-rolls or interstitials? What ad networks do you partner with?
- Do you currently authenticate user access?
- Do you currently use digital rights management (DRM), for example [Adobe Access](https://www.adobe.com/uk/products/adobe-access.html)?

### Distribution

- Do you currently support adaptive streaming (e.g. the [Adobe HTTP Dynamic Streaming](https://www.adobe.com/products/hds-dynamic-streaming.html) format?)
- Do you use a {{glossary("CDN")}} for distribution?
- Do you provide captions or subtitles for your media? If so, what file formats are those in? What languages do you support?

## Decision points

Once you've audited your Flash experience, there are a few key decisions you'll want to make about your new HTML experience:

### User Requirements

- Will you support the mobile web as well as desktop?
- Will you support offline playback?
- Do you need to support changing network conditions? If so, you will want to use an adaptive streaming format.

### Business Requirements

- Will you authenticate users before allowing them to access your media?
- Will you need video (or audio) ads? Which partners will you use?
- Do you need to protect the media files with DRM?
