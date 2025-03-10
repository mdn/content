---
title: Intl.supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
page-type: javascript-static-method
browser-compat: javascript.builtins.Intl.supportedValuesOf
---

{{JSRef}}

The **`Intl.supportedValuesOf()`** static method returns an array containing the supported calendar, collation, currency, numbering systems, or unit values supported by the implementation.

Duplicates are omitted and the array is sorted in ascending lexicographical order (or more precisely, using {{jsxref("Array/sort", "Array.prototype.sort()")}} with an `undefined` compare function).

The method can be used to feature-test whether values are supported in a particular implementation and download a polyfill only if necessary.
It can also be used to build UIs that allow users to select their preferred localized values, for example when the UI is created from WebGL or server-side.

This method is locale-unaware: it is possible that certain identifiers are only supported or preferred in certain locales. If you want to determine the preferred values for a specific locale, you should use the {{jsxref("Intl.Locale")}} object, such as {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

{{InteractiveExample("JavaScript Demo: Intl.supportedValuesOf", "taller")}}

```js interactive-example
console.log(Intl.supportedValuesOf("calendar"));
console.log(Intl.supportedValuesOf("collation"));
console.log(Intl.supportedValuesOf("currency"));
console.log(Intl.supportedValuesOf("numberingSystem"));
console.log(Intl.supportedValuesOf("timeZone"));
console.log(Intl.supportedValuesOf("unit"));
// Expected output: Array ['key'] (for each key)

try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  console.log(err.toString());
  // Expected output: RangeError: invalid key: "someInvalidKey"
}
```

## Syntax

```js-nolint
Intl.supportedValuesOf(key)
```

### Parameters

- `key`
  - : A key string indicating the category of values to be returned. This is one of:
    - `"calendar"`: see [supported calendar types](#supported_calendar_types)
    - `"collation"`: see [supported collation types](#supported_collation_types)
    - `"currency"`: see [supported currency identifiers](#supported_currency_identifiers)
    - `"numberingSystem"`: see [supported numbering system types](#supported_numbering_system_types)
    - `"timeZone"`: see [supported time zone identifiers](#supported_time_zone_identifiers)
    - `"unit"`: see [supported unit identifiers](#supported_unit_identifiers)

### Return value

A sorted array of unique string values indicating the values supported by the implementation for the given key. The values that could be returned are listed below.

#### Supported calendar types

Below are all values that are commonly supported by browsers for the `calendar` key. These values can be used for the `calendar` option or the `ca` [Unicode extension key](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) when creating objects such as {{jsxref("Intl.DateTimeFormat")}}, as well as for creating {{jsxref("Temporal")}} date objects.

| Value              | Description                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `buddhist`         | Thai Buddhist calendar                                                                           |
| `chinese`          | Traditional Chinese calendar                                                                     |
| `coptic`           | Coptic calendar                                                                                  |
| `dangi`            | Traditional Korean calendar                                                                      |
| `ethioaa`          | Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)                                         |
| `ethiopic`         | Ethiopic calendar, Amete Mihret (epoch approx, 8 C.E.)                                           |
| `gregory`          | Gregorian calendar                                                                               |
| `hebrew`           | Traditional Hebrew calendar                                                                      |
| `indian`           | Indian calendar                                                                                  |
| `islamic`          | Hijri calendar                                                                                   |
| `islamic-umalqura` | Hijri calendar, Umm al-Qura                                                                      |
| `islamic-tbla`     | Hijri calendar, tabular (intercalary years [2,5,7,10,13,16,18,21,24,26,29] - astronomical epoch) |
| `islamic-civil`    | Hijri calendar, tabular (intercalary years [2,5,7,10,13,16,18,21,24,26,29] - civil epoch)        |
| `islamic-rgsa`     | Hijri calendar, Saudi Arabia sighting                                                            |
| `iso8601`          | ISO calendar (Gregorian calendar using the ISO 8601 calendar week rules)                         |
| `japanese`         | Japanese Imperial calendar                                                                       |
| `persian`          | Persian calendar                                                                                 |
| `roc`              | Republic of China calendar                                                                       |

The types below are specified in CLDR data, but are deprecated, are discouraged from explicit usage, and/or may not be indicated by browsers as supported for various reasons. Avoid using them:

| Value                            | Description                          | Notes                                                                                                                     |
| -------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| `islamicc` {{deprecated_inline}} | Civil (algorithmic) Arabic calendar. | This is an alias for `islamic-civil` and therefore is not returned by `supportedValuesOf()`. Use `islamic-civil` instead. |

References:

- [CLDR Calendar type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Dates](https://unicode.org/reports/tr35/tr35-dates.html)

#### Supported collation types

Below are all values that are commonly supported by browsers for the `collation` key. These values can be used for the `collation` option or the `co` [Unicode extension key](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) when creating objects such as {{jsxref("Intl.Collator")}}.

| Value      | Description                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `compat`   | A previous version of the ordering, for compatibility (for Arabic)                                                                                                                               |
| `dict`     | Dictionary style ordering (such as in Sinhala). Also recognized as `dictionary`.                                                                                                                 |
| `emoji`    | Recommended ordering for emoji characters                                                                                                                                                        |
| `eor`      | European ordering rules                                                                                                                                                                          |
| `phonebk`  | Phonebook style ordering (such as in German). Also recognized as `phonebook`.                                                                                                                    |
| `phonetic` | Phonetic ordering (sorting based on pronunciation; for Lingala)                                                                                                                                  |
| `pinyin`   | Pinyin ordering for Latin and for CJK characters (used in Chinese)                                                                                                                               |
| `searchjl` | Special collation type for Korean initial consonant search. **Warning:** This collation is not for sorting, even though you can only use it with {{jsxref("Intl.Collator")}} of `usage: "sort"`. |
| `stroke`   | Pinyin ordering for Latin, stroke order for CJK characters (used in Chinese)                                                                                                                     |
| `trad`     | Traditional style ordering (such as in Spanish). Also recognized as `traditional`.                                                                                                               |
| `unihan`   | Pinyin ordering for Latin, Unihan radical-stroke ordering for CJK characters (used in Chinese)                                                                                                   |
| `zhuyin`   | Pinyin ordering for Latin, zhuyin order for Bopomofo and CJK characters (used in Chinese)                                                                                                        |

The types below are specified in CLDR data, but are deprecated, are discouraged from explicit usage, and/or may not be indicated by browsers as supported for various reasons. Avoid using them:

| Value                            | Description                                                                                                             | Notes                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{deprecated_inline}}  | Pinyin ordering for Latin, big5 charset ordering for CJK characters (used in Chinese)                                   | Deprecated.                                                                                                                                                                                                                                                                                                         |
| `direct` {{deprecated_inline}}   | Binary code point order (used in Hindi)                                                                                 | Deprecated.                                                                                                                                                                                                                                                                                                         |
| `ducet`                          | The default Unicode collation element table order                                                                       | The `ducet` collation type is not available to the Web.                                                                                                                                                                                                                                                             |
| `gb2312` {{deprecated_inline}}   | Pinyin ordering for Latin, gb2312han charset ordering for CJK characters (for Chinese). Also recognized as `gb2312han`. | Deprecated.                                                                                                                                                                                                                                                                                                         |
| `reformed` {{deprecated_inline}} | Reformed ordering (such as Swedish)                                                                                     | Deprecated. This is the old name for the default ordering for Swedish [whose collation naming used to differ from other languages](https://unicode-org.atlassian.net/browse/CLDR-15603). Since this was the default, request `sv` instead of requesting `sv-u-co-reformed`.                                         |
| `search`                         | Special collation type for string search                                                                                | Do not use as a collation type, since in {{jsxref("Intl.Collator")}}, this collation is activated via the `usage: "search"` option. There is currently no API for substring search, so this is currently only good for filtering a list of strings by trying a full-string match of the key against each list item. |
| `standard`                       | Default ordering for each language, except Chinese (and, previously, Swedish)                                           | Do not use explicitly. In general, it's unnecessary to specify this explicitly and specifying this for Swedish is problematic due to the different meaning for Swedish in the past.                                                                                                                                 |

References:

- [CLDR Collation type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Collation](https://unicode.org/reports/tr35/tr35-collation.html)

#### Supported currency identifiers

Currency identifiers are three-letter uppercase codes defined in ISO 4217. These values can be used for the `currency` option when creating objects such as {{jsxref("Intl.NumberFormat")}}, as well as for {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}. There are over 300 identifiers in common use so we won't list them. For an exhaustive list of possible identifiers, see the [Wikipedia article](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

References:

- [CLDR Currency type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [ISO 4217 Currency codes](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Currencies](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Supported numbering system types

Below are all values that are commonly supported by browsers for the `numberingSystem` key. These values can be used for the `numberingSystem` option or the `nu` [Unicode extension key](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) when creating objects such as {{jsxref("Intl.NumberFormat")}}. For the rows with "digit characters", the runtime translates the digits one-by-one without extra actions. The others marked as "algorithmic" need additional algorithms to translate the digits. The higher the Unicode code point is, the newer the numbering system is and the more likely it is unsupported by all browsers.

| Value      | Description                                                                | Digit characters                                                                                        |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Adlam digits                                                               | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 to U+1E959)                                                                       |
| `ahom`     | Ahom digits                                                                | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 to U+11739)                                                                       |
| `arab`     | Arabic-Indic digits                                                        | `٠١٢٣٤٥٦٧٨٩` (U+0660 to U+0669)                                                                         |
| `arabext`  | Extended Arabic-Indic digits                                               | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 to U+06F9)                                                                        |
| `armn`     | Armenian upper case numerals                                               | algorithmic                                                                                             |
| `armnlow`  | Armenian lower case numerals                                               | algorithmic                                                                                             |
| `bali`     | Balinese digits                                                            | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 to U+1B59)                                                                         |
| `beng`     | Bengali digits                                                             | `০১২৩৪৫৬৭৮৯` (U+09E6 to U+09EF)                                                                         |
| `bhks`     | Bhaiksuki digits                                                           | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 to U+11C59)                                                                       |
| `brah`     | Brahmi digits                                                              | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 to U+1106F)                                                                       |
| `cakm`     | Chakma digits                                                              | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 to U+1113F)                                                                       |
| `cham`     | Cham digits                                                                | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 to U+AA59)                                                                         |
| `cyrl`     | Cyrillic numerals                                                          | algorithmic                                                                                             |
| `deva`     | Devanagari digits                                                          | `०१२३४५६७८९` (U+0966 to U+096F)                                                                         |
| `diak`     | Dives Akuru digits                                                         | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 to U+11959)                                                                       |
| `ethi`     | Ethiopic numerals                                                          | algorithmic                                                                                             |
| `fullwide` | Full width digits                                                          | `０１２３４５６７８９` (U+FF10 to U+FF19)                                                               |
| `gara`     | Garay digits                                                               | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 to U+10D49)                                                                       |
| `geor`     | Georgian numerals                                                          | algorithmic                                                                                             |
| `gong`     | Gunjala Gondi digits                                                       | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 to U+11DA9)                                                                       |
| `gonm`     | Masaram Gondi digits                                                       | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 to U+11D59)                                                                       |
| `grek`     | Greek upper case numerals                                                  | algorithmic                                                                                             |
| `greklow`  | Greek lower case numerals                                                  | algorithmic                                                                                             |
| `gujr`     | Gujarati digits                                                            | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 to U+0AEF)                                                                         |
| `gukh`     | Gurung Khema digits                                                        | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 to U+16139)                                                                       |
| `guru`     | Gurmukhi digits                                                            | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 to U+0A6F)                                                                         |
| `hanidays` | Han-character day-of-month numbering for lunar/other traditional calendars |                                                                                                         |
| `hanidec`  | Positional decimal system using Chinese number ideographs as digits        | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Simplified Chinese numerals                                                | algorithmic                                                                                             |
| `hansfin`  | Simplified Chinese financial numerals                                      | algorithmic                                                                                             |
| `hant`     | Traditional Chinese numerals                                               | algorithmic                                                                                             |
| `hantfin`  | Traditional Chinese financial numerals                                     | algorithmic                                                                                             |
| `hebr`     | Hebrew numerals                                                            | algorithmic                                                                                             |
| `hmng`     | Pahawh Hmong digits                                                        | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 to U+16B59)                                                                       |
| `hmnp`     | Nyiakeng Puachue Hmong digits                                              | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 to U+1E149)                                                                       |
| `java`     | Javanese digits                                                            | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 to U+A9D9)                                                                         |
| `jpan`     | Japanese numerals                                                          | algorithmic                                                                                             |
| `jpanfin`  | Japanese financial numerals                                                | algorithmic                                                                                             |
| `jpanyear` | Japanese first-year Gannen numbering for Japanese calendar                 | algorithmic                                                                                             |
| `kali`     | Kayah Li digits                                                            | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 to U+A909)                                                                         |
| `kawi`     | Kawi digits                                                                | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 to U+11F59)                                                                       |
| `khmr`     | Khmer digits                                                               | `០១២៣៤៥៦៧៨៩` (U+17E0 to U+17E9)                                                                         |
| `knda`     | Kannada digits                                                             | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 to U+0CEF)                                                                         |
| `krai`     | Kirat Rai digits                                                           | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 to U+16D79)                                                                       |
| `lana`     | Tai Tham Hora (secular) digits                                             | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 to U+1A89)                                                                         |
| `lanatham` | Tai Tham (ecclesiastical) digits                                           | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 to U+1A99)                                                                         |
| `laoo`     | Lao digits                                                                 | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 to U+0ED9)                                                                         |
| `latn`     | Latin digits                                                               | `0123456789` (U+0030 to U+0039)                                                                         |
| `lepc`     | Lepcha digits                                                              | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 to U+1C49)                                                                         |
| `limb`     | Limbu digits                                                               | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 to U+194F)                                                                         |
| `mathbold` | Mathematical bold digits                                                   | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE to U+1D7D7)                                                                       |
| `mathdbl`  | Mathematical double-struck digits                                          | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 to U+1D7E1)                                                                       |
| `mathmono` | Mathematical monospace digits                                              | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 to U+1D7FF)                                                                       |
| `mathsanb` | Mathematical sans-serif bold digits                                        | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC to U+1D7F5)                                                                       |
| `mathsans` | Mathematical sans-serif digits                                             | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 to U+1D7EB)                                                                       |
| `mlym`     | Malayalam digits                                                           | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 to U+0D6F)                                                                         |
| `modi`     | Modi digits                                                                | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 to U+11659)                                                                       |
| `mong`     | Mongolian digits                                                           | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 to U+1819)                                                                         |
| `mroo`     | Mro digits                                                                 | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 to U+16A69)                                                                       |
| `mtei`     | Meetei Mayek digits                                                        | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 to U+ABF9)                                                                         |
| `mymr`     | Myanmar digits                                                             | `၀၁၂၃၄၅၆၇၈၉` (U+1040 to U+1049)                                                                         |
| `mymrepka` | Myanmar Eastern Pwo Karen digits                                           | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA to U+116E3)                                                                       |
| `mymrpao`  | Myanmar Pao digits                                                         | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 to U+116D9)                                                                       |
| `mymrshan` | Myanmar Shan digits                                                        | `႐႑႒႓႔႕႖႗႘႙` (U+1090 to U+1099)                                                                         |
| `mymrtlng` | Myanmar Tai Laing digits                                                   | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 to U+A9F9)                                                                         |
| `nagm`     | Nag Mundari digits                                                         | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 to U+1E4F9)                                                                       |
| `newa`     | Newa digits                                                                | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 to U+11459)                                                                       |
| `nkoo`     | N'Ko digits                                                                | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 to U+07C9)                                                                         |
| `olck`     | Ol Chiki digits                                                            | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 to U+1C59)                                                                         |
| `onao`     | Ol Onal digits                                                             | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 to U+1E5FA)                                                                       |
| `orya`     | Oriya digits                                                               | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 to U+0B6F)                                                                         |
| `osma`     | Osmanya digits                                                             | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 to U+104A9)                                                                       |
| `outlined` | Legacy computing outlined digits                                           | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 to U+1CCF9)                                                                       |
| `rohg`     | Hanifi Rohingya digits                                                     | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 to U+10D39)                                                                       |
| `roman`    | Roman upper case numerals                                                  | algorithmic                                                                                             |
| `romanlow` | Roman lowercase numerals                                                   | algorithmic                                                                                             |
| `saur`     | Saurashtra digits                                                          | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 to U+A8D9)                                                                         |
| `segment`  | Legacy computing segmented digits                                          | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 to U+1FBF9)                                                                       |
| `shrd`     | Sharada digits                                                             | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 to U+111D9)                                                                       |
| `sind`     | Khudawadi digits                                                           | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 to U+112F9)                                                                       |
| `sinh`     | Sinhala Lith digits                                                        | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 to U+0DEF)                                                                         |
| `sora`     | Sora_Sompeng digits                                                        | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 to U+110F9)                                                                       |
| `sund`     | Sundanese digits                                                           | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 to U+1BB9)                                                                         |
| `sunu`     | Sunuwar digits                                                             | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 to U+11BF9)                                                                       |
| `takr`     | Takri digits                                                               | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 to U+116C9)                                                                       |
| `talu`     | New Tai Lue digits                                                         | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 to U+19D9)                                                                         |
| `taml`     | Tamil numerals                                                             | algorithmic                                                                                             |
| `tamldec`  | Modern Tamil decimal digits                                                | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 to U+0BEF)                                                                         |
| `telu`     | Telugu digits                                                              | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 to U+0C6F)                                                                         |
| `thai`     | Thai digits                                                                | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 to U+0E59)                                                                         |
| `tibt`     | Tibetan digits                                                             | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 to U+0F29)                                                                         |
| `tirh`     | Tirhuta digits                                                             | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 to U+114D9)                                                                       |
| `tnsa`     | Tangsa digits                                                              | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 to U+16AC9)                                                                       |
| `vaii`     | Vai digits                                                                 | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 to U+A629)                                                                         |
| `wara`     | Warang Citi digits                                                         | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 to U+118E9)                                                                       |
| `wcho`     | Wancho digits                                                              | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 to U+1E2F9)                                                                       |

There are three special values: `native`, `traditio`, and `finance`, whose meanings are locale-dependent, and will be resolved to the right system depending on the locale. Therefore, the `resolvedOptions()` methods will never return these values, but `Intl.Locale.prototype.numberingSystem` will (if provided as input).

References:

- [CLDR Numbering system type keys](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [CLDR Numbering system definitions](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Numbering systems](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Supported time zone identifiers

Supported time zone identifiers can be used for the `timeZone` option when creating objects such as {{jsxref("Intl.DateTimeFormat")}}, as well as for creating {{jsxref("Temporal")}} date objects. There are over 400 identifiers in common use so we won't list them. For an exhaustive list of possible identifiers, see the [Wikipedia article](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) or the [IANA time zone database](https://www.iana.org/time-zones).

As you browse the list, note that the standardization of `Temporal` requires browsers to always return the primary identifier in the IANA database, which may change over time. See [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information. For example, the returned array should contain `"Asia/Kolkata"` instead of `"Asia/Calcutta"` because the latter is an alias of the former and they both correspond to India; however, it should contain both `"Africa/Abidjan"` and `"Atlantic/Reykjavik"` because they are in different countries, despite the latter also being an alias of the former.

References:

- [IANA Time Zone Database](https://www.iana.org/time-zones)
- [UTS 35, Time Zone Identifiers](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Supported unit identifiers

Below are all values that are commonly supported by browsers for the `unit` key. These values can be used for the `unit` option when creating objects such as {{jsxref("Intl.NumberFormat")}}. This list is a subset of the CLDR explicitly sanctioned by the ECMA-402 specification, so all implementations should be consistent.

- `acre`
- `bit`
- `byte`
- `celsius`
- `centimeter`
- `day`
- `degree`
- `fahrenheit`
- `fluid-ounce`
- `foot`
- `gallon`
- `gigabit`
- `gigabyte`
- `gram`
- `hectare`
- `hour`
- `inch`
- `kilobit`
- `kilobyte`
- `kilogram`
- `kilometer`
- `liter`
- `megabit`
- `megabyte`
- `meter`
- `microsecond`
- `mile`
- `mile-scandinavian`
- `milliliter`
- `millimeter`
- `millisecond`
- `minute`
- `month`
- `nanosecond`
- `ounce`
- `percent`
- `petabyte`
- `pound`
- `second`
- `stone`
- `terabit`
- `terabyte`
- `week`
- `yard`
- `year`

When specifying units, you can also combine two units with the "-per-" separator. For example, `meter-per-second` or `liter-per-megabyte`.

References:

- [ECMA-402 sanctioned single units](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [CLDR Unit validity data](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Unit identifiers](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if an unsupported key was passed as a parameter.

## Examples

### Feature testing

You can check that the method is supported by comparing to `undefined`:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Get all values for key

To get the supported values for calendar you call the method with the key `"calendar"`.
You can then iterate through the returned array as shown below:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

The other values are all obtained in the same way:

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### Invalid key throws RangeError

```js
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  //Error: RangeError: invalid key: "someInvalidKey"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Intl.supportedValuesOf` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- {{jsxref("Intl")}}
