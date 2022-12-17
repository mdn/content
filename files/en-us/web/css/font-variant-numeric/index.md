---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
page-type: css-property
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-variant-numeric
---

{{CSSRef}}

La propiedad **`font-variant-numeric`** de CSS controla el uso de glifos alternativos para números, fracciones, y marcadores ordinales.

{{EmbedInteractiveExample("pages/css/font-variant-numeric.html")}}

## Syntax

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* Global values */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: revert-layer;
font-variant-numeric: unset;
```

Esta propiedad puede tomar una de las siguientes dos formas: 

- o bien el valor de la palabra clave `normal`
- o uno o más de los valores listados debajo, separados por espacios, en cualquier orden.

### Values

- `normal`
  - : Esta palabra clave conduce a la desactivación del so de tales glifos alternativos.
- `ordinal`
  - : Esta palabra clave fuerza el uso de glifos especiales para los marcadores ordinales, como 1º, 2º, 3º, 4º en inglés o 1a en italiano. Corresponde a los valores OpenType `ordn`.
- `slashed-zero`
  - : Esta palabra clave fuerza el uso de un 0 con una barra inclinada; esto es útil cuando se necesita una distinción clara entre O y 0. Corresponde a los valores de OpenType `cero`.
- _\<numeric-figure-values_>

  - : Estos valores controlan las cifras utilizadas para los números. Dos valores son posibles:

    - `lining-nums` activan el conjunto de figuras donde los números están todos en la línea de base. Corresponde a los valores OpenType `lnum`.
    - `oldstyle-nums` activando el conjunto de cifras donde algunos números, como 3, 4, 7, 9 tienen descendientes. Corresponde a los valores OpenType `onum`.

- _\<numeric-spacing-values_>

  - : Estos valores controlan el tamaño de las cifras utilizadas para los números. Dos valores son posibles:

    - `números-proporcionales` activan el conjunto de cifras donde los números no son todos del mismo tamaño. Corresponde a los valores de OpenType `pnum`.
    - `tabular-nums` activan el conjunto de cifras donde los números son todos del mismo tamaño, lo que permite alinearlos fácilmente como en las tablas. Corresponde a los valores OpenType `tnum`.

- _\<numeric-fraction-values_>

  - : Estos valores controlan los glifos utilizados para mostrar fracciones. Dos valores son posibles:

    - `fracciones-diagonales` activando el conjunto de cifras donde el numerador y el denominador se hacen más pequeños y separados por una barra. Corresponde a los valores OpenType `frac`.
    - `fracciones-apiladas` activando el conjunto de cifras donde el numerador y el denominador se hacen más pequeños, apilados y separados por una línea horizontal. Corresponde a los valores OpenType `afrc`.

## Definición formal 

{{cssinfo}}

## Sintaxis formal 

{{csssyntax}}

## Ejemplos

### Configuración de formas numéricas ordinales

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-example.html", '100%', 600)}}

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ver también

- [`font-variant`](/en-US/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/en-US/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/en-US/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/en-US/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/en-US/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/en-US/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-position`](/en-US/docs/Web/CSS/font-variant-position)
