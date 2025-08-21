---
title: BCP 47 language tag
slug: Glossary/BCP_47_language_tag
page-type: glossary-definition
sidebar: glossarysidebar
---

A **BCP 47 language tag** is a string of characters that precisely specifies a human language in terms of the basic language, but also optionally the writing system and dialect. For example, `en` specifies English, but `en-GB` and `en-US` more precisely specify British English and American English, respectively.

BCP 47 language tags are used anywhere on the web platform where a feature has been designed to output different results depending on the specified language, enabling {{glossary("internationalization")}} support.

Examples include:

- The HTML [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute
- The HTML {{htmlelement("track")}} element
- The {{jsxref("Temporal")}} object
- The {{domxref("CanvasRenderingContext2D.lang")}} property
- The [Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs)

## BCP 47 syntax

The full BCP 47 syntax is specified in {{rfc("5646")}}. It is capable of identifying extremely specific language dialects, but most usage is much simpler.

A language tag is made of hyphen-separated _subtags_, where each subtag indicates a certain property of the language. The three most common subtags are:

- Language subtag
  - : A 2-or-3-character code that defines the basic language, typically written in all lowercase. For example, the language code for English is `en`, and the code for Badeshi is `bdz`.
- Script subtag {{optional_inline}}
  - : This subtag defines the writing system used for the language, and is always 4 characters long, with the first letter capitalized. For example, French-in-Braille is `fr-Brai` and Japanese written with the Katakana alphabet is `ja-Kana`.

    > [!NOTE]
    > If the language is written in a highly typical way, like English in the Latin alphabet, there is no need to use this subtag.

- Region subtag {{optional_inline}}
  - : This subtag defines a dialect of the base language from a particular location and is either two upper-case letters matching a country code or three numbers matching a non-country area. For example, `es-ES` is for Spanish as spoken in Spain, and `es-013` is Spanish as spoken in Central America. "International Spanish" would just be `es`.

The script subtag precedes the region subtag if both are present — `ru-Cyrl-BY` is Russian, written in the Cyrillic alphabet, as spoken in Belarus.

## See also

- [RFC 5646: Tags for Identifying Languages](https://datatracker.ietf.org/doc/html/rfc5646): where BCP 47 language tags are specified.
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/): look up subtag codes for a language.
