---
title: lang
slug: Web/HTML/Global_attributes/lang
page-type: html-attribute
browser-compat: html.global_attributes.lang
---

{{HTMLSidebar("Global_attributes")}}

The **`lang`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) helps define the language of an element: the language that non-editable elements are written in, or the language that the editable elements should be written in by the user. The attribute contains a single "language tag" in the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

> [!NOTE]
> The default value of `lang` is the empty string, which means that the language is unknown. Therefore, it is recommended to always specify an appropriate value for this attribute.

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

If the attribute value is the _empty string_ (`lang=""`), the language is set to _unknown_; if the language tag is not valid according to BCP47, it is set to _invalid_.

Even if the `lang` attribute is set, it may not be taken into account, as the `xml:lang` attribute has priority.

For the CSS pseudo-class {{cssxref(":lang")}}, two invalid language names are different if their names are different. So while `:lang(es)` matches both `lang="es-ES"` and `lang="es-419"`, `:lang(xyzzy)` would _not_ match `lang="xyzzy-Zorp!"`.

## Language tag syntax

The full BCP47 syntax is in-depth enough to mark extremely specific language dialects, but most usage is much simpler.

A language tag is made of hyphen-separated _language subtags_, where each subtag indicates a certain property of the language. The 3 most common subtags are:

- Language subtag
  - : Required. A 2-or-3-character code that defines the basic language, typically written in all lowercase. For example, the language code for English is `en`, and the code for Badeshi is `bdz`.
- Script subtag
  - : Optional. This subtag defines the writing system used for the language, and is always 4 characters long, with the first letter capitalized. For example, French-in-Braille is `fr-Brai` and `ja-Kana` is Japanese written with the Katakana alphabet. If the language is written in a highly typical way, like English in the Latin alphabet, there is no need to use this subtag.
- Region subtag
  - : Optional. This subtag defines a dialect of the base language from a particular location and is either two upper-case letters matching a country code or three numbers matching a non-country area. For example, `es-ES` is for Spanish as spoken in Spain, and `es-013` is Spanish as spoken in Central America. "International Spanish" would just be `es`.

The script subtag precedes the region subtag if both are present — `ru-Cyrl-BY` is Russian, written in the Cyrillic alphabet, as spoken in Belarus.

To find the correct subtag codes for a language, try [the Language Subtag Lookup](https://r12a.github.io/app-subtags/).

## Accessibility concerns

WCAG Success Criterion 3.1.1 **requires** that a page language is specified in a way which may be 'programmatically determined' (i.e. via the **`lang`** attribute).

WCAG Success Criterion 3.1.2 requires that pages with **parts** in different languages have the languages of those parts specified too. Again, the **`lang`** attribute is the correct mechanism for this.

The purpose of these requirements is primarily to allow assistive technologies such as screen readers to invoke the correct pronunciation.

For example, the language menu on this site (MDN) includes a **`lang`** attribute for each entry:

```html
<div class="dropdown-container language-menu">
  <button
    id="header-language-menu"
    type="button"
    class="dropdown-menu-label"
    aria-haspopup="true"
    aria-owns="language-menu"
    aria-label="Current language is English. Choose your preferred language.">
    English
    <span class="dropdown-arrow-down" aria-hidden="true">▼</span>
  </button>
  <ul
    id="language-menu"
    class="dropdown-menu-items right show"
    aria-expanded="true"
    role="menu">
    <li lang="ca" role="menuitem">
      <a href="/ca/docs/Web/HTML/Global_attributes/lang" title="Catalan">
        <bdi>Català</bdi>
      </a>
    </li>
    <li lang="de" role="menuitem">
      <a href="/de/docs/Web/HTML/Globale_Attribute/lang" title="German">
        <bdi>Deutsch</bdi>
      </a>
    </li>
    <li lang="es" role="menuitem">
      <a href="/es/docs/Web/HTML/Atributos_Globales/lang" title="Spanish">
        <bdi>Español</bdi>
      </a>
    </li>
    <li lang="fr" role="menuitem">
      <a href="/fr/docs/Web/HTML/Attributs_universels/lang" title="French">
        <bdi>Français</bdi>
      </a>
    </li>
    <li lang="ja" role="menuitem">
      <a href="/ja/docs/Web/HTML/Global_attributes/lang" title="Japanese">
        <bdi>日本語</bdi>
      </a>
    </li>
    <li lang="ko" role="menuitem">
      <a href="/ko/docs/Web/HTML/Global_attributes/lang" title="Korean">
        <bdi>한국어</bdi>
      </a>
    </li>
    <li lang="pt-BR" role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi>Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li lang="ru" role="menuitem">
      <a href="/ru/docs/Web/HTML/Global_attributes/lang" title="Russian">
        <bdi>Русский</bdi>
      </a>
    </li>
    <li lang="uk" role="menuitem">
      <a
        href="/uk/docs/Web/HTML/%D0%97%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D1%96_%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%B8/lang"
        title="Ukrainian">
        <bdi>Українська</bdi>
      </a>
    </li>
    <li lang="zh-Hans" role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi>中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/en-US/docs/Web/HTML/Global_attributes/lang$locales"
        rel="nofollow"
        id="translations-add">
        Add a translation
      </a>
    </li>
  </ul>
</div>
```

## Inheritance

If an element has no `lang` attribute, it will inherit the `lang` value set on its [parent node](/en-US/docs/Glossary/Node/DOM), which in turn may inherit it from its parent, and so on.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes).
- [`Content-Language` HTTP Header](/en-US/docs/Web/HTTP/Headers/Content-Language)
- HTML [`translate`](/en-US/docs/Web/HTML/Global_attributes/translate) attribute
