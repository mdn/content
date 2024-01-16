---
title: Intl.Locale.prototype.getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Locale.getNumberingSystems
---

{{JSRef}}

The **`getNumberingSystems()`** method of {{jsxref("Intl.Locale")}} instances returns a list of one or more unique [numbering system](https://en.wikipedia.org/wiki/Numeral_system) identifiers for this locale.

> **Note:** In some versions of some browsers, this method was implemented as an accessor property called `numberingSystems`. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of `locale.numberingSystems === locale.numberingSystems` returning `false`. Check the [browser compatibility table](#browser_compatibility) for details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameters

None.

### Return value

An array of strings representing all numbering systems commonly used for the `Locale`, sorted in descending preference. If the `Locale` already has a [`numberingSystem`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem), then the returned array contains that single value.

A table of the standard Unicode numeral systems can be seen below.

### Supported numbering system types

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

### Obtaining supported numbering systems

If the `Locale` object doesn't have a `numberingSystem` already, `getNumberingSystems()` lists all commonly-used numbering systems for the given `Locale`. For examples of explicitly setting a `numberingSystem`, see [`numberingSystem` examples](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.numberingSystem`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Details on the standard Unicode numeral systems](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
