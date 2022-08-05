---
title: Intl.Locale.prototype.numberingSystems
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystems
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
  - numberingSystems
browser-compat: javascript.builtins.Intl.Locale.numberingSystems
---
{{JSRef}}

The **`Intl.Locale.prototype.numberingSystems`** property is an accessor property that returns one or more unique numbering system identifiers according to the [numeral system](https://en.wikipedia.org/wiki/Numeral_system) used by the `Locale`.

## Description

A numeral system is a system for expressing numbers. The `numberingSystem` property helps to represent the different numeral systems used by various countries, regions, and cultures around the world. As with most internationalization schemas, the numeral systems that can be represented in a `Locale` object by `numberingSystem` are standardized by Unicode. A table of the standard Unicode numeral systems can be seen below.

| Value    | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| adlm     | Adlam digits                                                               |
| ahom     | Ahom digits                                                                |
| arab     | Arabic-Indic digits                                                        |
| arabext  | Extended Arabic-Indic digits                                               |
| armn     | Armenian upper case numerals — algorithmic                                 |
| armnlow  | Armenian lower case numerals — algorithmic                                 |
| bali     | Balinese digits                                                            |
| beng     | Bengali digits                                                             |
| bhks     | Bhaiksuki digits                                                           |
| brah     | Brahmi digits                                                              |
| cakm     | Chakma digits                                                              |
| cham     | Cham digits                                                                |
| cyrl     | Cyrillic numerals — algorithmic                                            |
| deva     | Devanagari digits                                                          |
| ethi     | Ethiopic numerals — algorithmic                                            |
| finance  | Financial numerals — may be algorithmic                                    |
| fullwide | Full width digits                                                          |
| geor     | Georgian numerals — algorithmic                                            |
| gong     | Gunjala Gondi digits                                                       |
| gonm     | Masaram Gondi digits                                                       |
| grek     | Greek upper case numerals — algorithmic                                    |
| greklow  | Greek lower case numerals — algorithmic                                    |
| gujr     | Gujarati digits                                                            |
| guru     | Gurmukhi digits                                                            |
| hanidays | Han-character day-of-month numbering for lunar/other traditional calendars |
| hanidec  | Positional decimal system using Chinese number ideographs as digits        |
| hans     | Simplified Chinese numerals — algorithmic                                  |
| hansfin  | Simplified Chinese financial numerals — algorithmic                        |
| hant     | Traditional Chinese numerals — algorithmic                                 |
| hantfin  | Traditional Chinese financial numerals — algorithmic                       |
| hebr     | Hebrew numerals — algorithmic                                              |
| hmng     | Pahawh Hmong digits                                                        |
| hmnp     | Nyiakeng Puachue Hmong digits                                              |
| java     | Javanese digits                                                            |
| jpan     | Japanese numerals — algorithmic                                            |
| jpanfin  | Japanese financial numerals — algorithmic                                  |
| jpanyear | Japanese first-year Gannen numbering for Japanese calendar                 |
| kali     | Kayah Li digits                                                            |
| khmr     | Khmer digits                                                               |
| knda     | Kannada digits                                                             |
| lana     | Tai Tham Hora (secular) digits                                             |
| lanatham | Tai Tham (ecclesiastical) digits                                           |
| laoo     | Lao digits                                                                 |
| latn     | Latin digits                                                               |
| lepc     | Lepcha digits                                                              |
| limb     | Limbu digits                                                               |
| mathbold | Mathematical bold digits                                                   |
| mathdbl  | Mathematical double-struck digits                                          |
| mathmono | Mathematical monospace digits                                              |
| mathsanb | Mathematical sans-serif bold digits                                        |
| mathsans | Mathematical sans-serif digits                                             |
| mlym     | Malayalam digits                                                           |
| modi     | Modi digits                                                                |
| mong     | Mongolian digits                                                           |
| mroo     | Mro digits                                                                 |
| mtei     | Meetei Mayek digits                                                        |
| mymr     | Myanmar digits                                                             |
| mymrshan | Myanmar Shan digits                                                        |
| mymrtlng | Myanmar Tai Laing digits                                                   |
| native   | Native digits                                                              |
| newa     | Newa digits                                                                |
| nkoo     | N'Ko digits                                                                |
| olck     | Ol Chiki digits                                                            |
| orya     | Oriya digits                                                               |
| osma     | Osmanya digits                                                             |
| rohg     | Hanifi Rohingya digits                                                     |
| roman    | Roman upper case numerals — algorithmic                                    |
| romanlow | Roman lowercase numerals — algorithmic                                     |
| saur     | Saurashtra digits                                                          |
| shrd     | Sharada digits                                                             |
| sind     | Khudawadi digits                                                           |
| sinh     | Sinhala Lith digits                                                        |
| sora     | Sora_Sompeng digits                                                        |
| sund     | Sundanese digits                                                           |
| takr     | Takri digits                                                               |
| talu     | New Tai Lue digits                                                         |
| taml     | Tamil numerals — algorithmic                                               |
| tamldec  | Modern Tamil decimal digits                                                |
| telu     | Telugu digits                                                              |
| thai     | Thai digits                                                                |
| tirh     | Tirhuta digits                                                             |
| tibt     | Tibetan digits                                                             |
| traditio | Traditional numerals — may be algorithmic                                  |
| vaii     | Vai digits                                                                 |
| wara     | Warang Citi digits                                                         |
| wcho     | Wancho digits                                                              |

## Examples

### Obtaining supported `numberingSystem` values via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), the values that `numberingSystem` represents correspond to the key `nu`. `nu` is considered a locale string "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers by first adding the `-u` key. To set the `numberingSystem` value via the string argument to the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key. Next, add the `-nu` extension key to indicate that you are adding a value for `numberingSystem`. Finally, add the `numberingSystem` value to the string.

List supported number system for a given `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.numberingSystems); // logs ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.numberingSystems); // logs ["latn"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Details on the standard Unicode numeral systems](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
