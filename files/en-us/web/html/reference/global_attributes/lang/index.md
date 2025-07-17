---
title: HTML lang global attribute
short-title: lang
slug: Web/HTML/Reference/Global_attributes/lang
page-type: html-attribute
browser-compat: html.global_attributes.lang
sidebar: htmlsidebar
---

The **`lang`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) helps define the language of an element: the language that non-editable elements are written in, or the language that the editable elements should be written in by the user. The attribute contains a single {{glossary("BCP 47 language tag")}}.

> [!NOTE]
> The default value of `lang` is the empty string, which means that the language is unknown. Therefore, it is recommended to always specify an appropriate value for this attribute.

{{InteractiveExample("HTML Demo: lang", "tabbed-shorter")}}

```html interactive-example
<p>This paragraph is English, but the language is not specifically defined.</p>

<p lang="en-GB">This paragraph is defined as British English.</p>

<p lang="fr">Ce paragraphe est défini en français.</p>
```

```css interactive-example
p::before {
  padding-right: 5px;
}

[lang="en-GB"]::before {
  content: "(In British English) ";
}

[lang="fr"]::before {
  content: "(In French) ";
}
```

If the attribute value is the _empty string_ (`lang=""`), the language is set to _unknown_; if the language tag is not valid according to BCP47, it is set to _invalid_.

Even if the `lang` attribute is set, it may not be taken into account, as the `xml:lang` attribute has priority.

For the CSS pseudo-class {{cssxref(":lang")}}, two invalid language names are different if their names are different. So while `:lang(es)` matches both `lang="es-ES"` and `lang="es-419"`, `:lang(xyzzy)` would _not_ match `lang="xyzzy-Zorp!"`.

## Accessibility concerns

WCAG Success Criterion 3.1.1 **requires** that a page language is specified in a way which may be 'programmatically determined' (i.e., via the **`lang`** attribute).

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
    <li role="menuitem">
      <a
        href="/ca/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Catalan">
        <bdi lang="ca">Català</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/de/docs/Web/HTML/Reference/Global_attributes/lang"
        title="German">
        <bdi lang="de">Deutsch</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/es/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Spanish">
        <bdi lang="es">Español</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/fr/docs/Web/HTML/Reference/Global_attributes/lang"
        title="French">
        <bdi lang="fr">Français</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ja/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Japanese">
        <bdi lang="ja">日本語</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ko/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Korean">
        <bdi lang="ko">한국어</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/pt-BR/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Portuguese (Brazilian)">
        <bdi lang="pt-BR">Português (do&nbsp;Brasil)</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/ru/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Russian">
        <bdi lang="ru">Русский</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/uk/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Ukrainian">
        <bdi lang="uk">Українська</bdi>
      </a>
    </li>
    <li role="menuitem">
      <a
        href="/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang"
        title="Chinese (Simplified)">
        <bdi lang="zh-Hans">中文 (简体)</bdi>
      </a>
    </li>
    <li>
      <a
        href="/en-US/docs/Web/HTML/Reference/Global_attributes/lang"
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

- All [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).
- [`Content-Language` HTTP Header](/en-US/docs/Web/HTTP/Reference/Headers/Content-Language)
- HTML [`translate`](/en-US/docs/Web/HTML/Reference/Global_attributes/translate) attribute
