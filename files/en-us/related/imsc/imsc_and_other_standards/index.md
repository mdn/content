---
title: IMSC and other standards
slug: Related/IMSC/IMSC_and_other_standards
page-type: guide
sidebar: related
---

IMSC is the result of an international effort to bring together popular profiles of [TTML](https://www.w3.org/TR/ttml/), like [EBU-TT-D](https://tech.ebu.ch/publications/tech3380) and [SMPTE-TT](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854). This article provides an overview of how IMSC is related to these other subtitle standards, and explains the differences between the versions of IMSC.

## IMSC spec genealogy

[TTML Profiles for Internet Media Subtitles and Captions](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html) (or IMSC) is a constrained version of the Timed Text Markup Language for worldwide subtitles and captions family of specifications.

IMSC was designed to be a practical application of SMPTE-TT ([SMPTE ST 2052-1](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7291854)), which is designated as a safe-harbor format by the [FCC](https://www.law.cornell.edu/cfr/text/47/79.103). As a result, most SMPTE-TT documents should render correctly using IMSC renderers (see [the limitations](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#smpte-tt-smpte-st-2052-1)), and the conversion guidelines from CTA 608/708 to SMPTE-TT ([SMPTE RP 2052-10](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7289645) and [SMPTE RP 2052-11](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7290363)) are also applicable to IMSC.

IMSC is also a syntactic superset of both [SDP-US](https://www.w3.org/TR/ttml10-sdp-us/) and [EBU-TT-D](https://tech.ebu.ch/publications/tech3380), such that documents that conform to either of these two formats are valid IMSC documents and can be rendered by IMSC renderers — see [Compatibility with other TTML-based specifications](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#interop-examples) for more details.

IMSC traces its origins to the CFF-TT format, and [CFF-TT documents](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#cff-tt) can be converted to IMSC relatively easily.

IMSC is unrelated to [WebVTT](https://w3c.github.io/webvtt/), and does not use the same syntax.

## Active IMSC versions

Four versions of IMSC are in use today:

- [IMSC 1.0.1](https://www.w3.org/standards/history/ttml-imsc1.0.1/)
- [IMSC 1.1](https://www.w3.org/standards/history/ttml-imsc1.1/)
- [IMSC 1.2](https://www.w3.org/standards/history/ttml-imsc1.2/)
- [IMSC Text Profile 1.3](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html)

These versions are backwards compatible, so old profiles continue to work on software that support new versions. IMSC 1.3 does not define image profiles.

IMSC 1.0.1 and 1.1 are still relevant because widely used platforms and tools, including [imscJS](https://github.com/sandflow/imscJS), [dash.js](https://dashif.org/dash.js/pages/developers/dependencies.html), and [AWS Elemental MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/imsc-captions-support.html), only have documented support for these older versions.

For details about the version history, see the specifications' summaries of substantive changes for [IMSC 1.1](https://www.w3.org/TR/ttml-imsc1.1/#substantive-changes-summary), [IMSC 1.2](https://www.w3.org/TR/ttml-imsc1.2/#substantive-changes-summary), and [IMSC Text Profile 1.3](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#substantive-changes-summary).

## Summary

This document gives you all you need to know about IMSC and its relationship with other specifications.
