---
title: Cascade layers
slug: Learn_web_development/Core/Styling_basics/Cascade_layers
page-type: learn-module-chapter
---

{{LearnSidebar}}

This lesson aims to introduce you to [cascade layers](/en-US/docs/Web/CSS/@layer), a more advanced feature that builds on the fundamental concepts of the [CSS cascade](/en-US/docs/Web/CSS/CSS_cascade/Cascade) and [CSS specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity).

If you are new to CSS, working through this lesson may seem less relevant immediately and a little more academic than some other parts of the course. However, knowing the basics of what cascade layers are should you encounter them in your projects is helpful. The more you work with CSS, understanding cascade layers and knowing how to leverage their power will save you from a lot of pain managing a code base with CSS from different parties, plugins, and development teams.

Cascade layers are most relevant when you're working with CSS from multiple sources when there are conflicting CSS selectors and competing specificities, or when you're considering using [`!important`](/en-US/docs/Web/CSS/important).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>An idea of how CSS works, including cascade and specificity (study
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS Styling basics</a> and <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts">Handling conflicts</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn how cascade layers work.
      </td>
    </tr>
  </tbody>
</table>

For each CSS property applied to an element, there can only be one value. You can view all the property values applied to an element by inspecting the element in your browser's developer tools. The tool's "Styles" panel shows all the property values applied to the element being inspected, along with the matched selector and the CSS source file. The selector from the origin with precedence has its values applied to the matching element.

In addition to the applied styles, the Styles panel displays crossed-out values that matched the selected element but were not applied due to the cascade, specificity, or source order. Crossed-out styles may come from the same origin with precedence but with lower specificity, or with matching origin and specificity, but were found earlier in the code base. For any applied property value, there may be several declarations crossed out from many different sources. If you see a style crossed out that has a selector with greater specificity it means the value is lacking in origin or importance.

Often, as the complexity of a site increases, the number of stylesheets increases, which makes the source order of the stylesheets both more important and more complex. Cascade layers simplify maintaining stylesheets across such code bases. Cascade layers are explicit specificity containers providing simpler and greater control over the CSS declarations that ultimately get applied, enabling web developers to prioritize sections of CSS without having to fight specificity.

To understand cascade layers, you must understand the CSS cascade well. The sections below provide a quick recap of the important cascade concepts.

## Review of the cascade concept

The 'C' in CSS stands for "Cascading". It is the method by which styles cascade together. The user agent runs through several clearly defined steps to determine the values assigned to every property for every element. We will briefly list these steps here and then dig deeper into step 4, **Cascade layers**, which is what you came here to learn:

1. **Relevance:** Find all the declaration blocks with a selector match for each element.
2. **Importance:** Sort rules based on whether they are normal or important. Important styles are those that have the [`!important`](/en-US/docs/Web/CSS/important) flag set.
3. **Origin:** Within each of the two importance buckets, sort rules by author, user, or user-agent origin.
4. **Cascade layers:** Within each of the six origin importance buckets, sort by cascade layer. The layer order for normal declarations is from the first layer created to the last, followed by unlayered normal styles. This order is inverted for important styles, with unlayered important styles having the lowest precedence.
5. **Specificity:** For competing styles in the origin layer with precedence, sort declarations by [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity).
6. **Scoping proximity**: When two selectors in the origin layer with precedence have the same specificity, the property value within scoped rules with the smallest number of hops up the DOM hierarchy to the scope root wins. See [How `@scope` conflicts are resolved](/en-US/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) for more details and an example.
7. **Order of appearance:** When two selectors in the origin layer with precedence have the same specificity and scope proximity, the property value from the last declared selector with the highest specificity wins.

For each step, only the declarations "still in the running" move on to "compete" in the next step. If only one declaration is in the running, it "wins", and the subsequent steps are moot.

### Origin and cascade

There are three [cascade origin types](/en-US/docs/Web/CSS/CSS_cascade/Cascade#origin_types): user-agent stylesheets, user stylesheets, and author stylesheets. The browser sorts each declaration into six origin buckets by origin and importance. There are eight levels of precedence: the six origin buckets, properties that are transitioning, and properties that are animating. The order of precedence goes from normal user-agent styles, which have the lowest precedence, to styles within currently applied animations, to important user-agent styles, and then styles being transitioned, which have the highest precedence:

1. user-agent normal styles
2. user normal styles
3. author normal styles
4. styles being animated
5. author important styles
6. user important styles
7. user-agent important styles
8. styles being transitioned

The "user-agent" is the browser. The "user" is the site visitor. The "author" is you, the developer. Styles declared directly on an element with the {{HTMLElement('style')}} element are author styles. Not including animating and transitioning styles, user-agent normal styles have the lowest precedence; user-agent important styles have the highest.

### Origin and specificity

For each property, the declaration that "wins" is the one from the origin with precedence based on the weight (normal or important). Ignoring layers for the moment, the value from the origin with the highest precedence gets applied. If the winning origin has more than one property declaration for an element, the [specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity) of the selectors for those competing property values are compared. Specificity is never compared between selectors from different origins.

In the example below, there are two links. The first has no author styles applied, so only user-agent styles are applied (and your personal user styles, if any). The second has [`text-decoration`](/en-US/docs/Web/CSS/text-decoration) and [`color`](/en-US/docs/Web/CSS/color) set by author styles even though the selector in the author stylesheet has a specificity of [`0-0-0`](/en-US/docs/Web/CSS/CSS_cascade/Specificity#selector_weight_categories). The reason why author styles "win" is because when there are conflicting styles from different origins, the rules from the origin with precedence are applied, irrespective of the specificity in the origin that doesn't have precedence.

```html live-sample___basic-cascade
<p><a href="https://example.org">User agent styles</a></p>
<p><a class="author" href="https://example.org">Author styles</a></p>
```

```css live-sample___basic-cascade
:where(a.author) {
  text-decoration: overline;
  color: red;
}
```

{{EmbedLiveSample("basic-cascade")}}

The "competing" selector in the user-agent stylesheet at the time of this writing is `a:any-link`, which has a specificity weight of `0-1-1`. While this is greater than the `0-0-0` selector in the author stylesheet, even if the selector in your current user agent is different, it doesn't matter: the specificity weights from author and user-agent origins are never compared. Learn more about [how specificity weight is calculated](/en-US/docs/Web/CSS/CSS_cascade/Specificity#how_is_specificity_calculated).

Origin precedence always wins over selector specificity. If an element property is styled with a normal style declaration in multiple origins, the author style sheet will always override the redundant normal properties declared in a user or user-agent stylesheet. If the style is important, the user-agent stylesheet will always win over author and user styles. Cascade origin precedence ensures specificity conflicts between origins never happen.

One last thing to note before moving on: the order of appearance becomes relevant only when competing declarations in the origin of precedence have the same specificity.

## Overview of cascade layers

We now understand "cascade origin precedence", but what is "cascade layer precedence"? We will answer that question by addressing what cascade layers are, how they are ordered, and how styles are assigned to cascade layers. We'll cover [regular layers](#creating_cascade_layers), [nested layers](#overview_of_nested_cascade_layers), and anonymous layers. Let's first discuss what cascade layers are and what issues they solve.

### Cascade layer precedence order

Similar to how we have six levels of priority based on origin and importance, cascade layers enable us to create sub-origin level of priority within any of those origins.

Within each of the six origin buckets, there can be multiple cascade layers. The [order of layer creation](/en-US/docs/Web/CSS/@layer) matters a lot. It is the order of creation that sets the precedence order among layers within an origin.

In normal origin buckets, layers are sorted in the order of each layer's creation. The order of precedence is from the first layer created to the last, followed by unlayered normal styles.

This order is inverted for important styles. All unlayered important styles cascade together into an implicit layer having precedence over all non-transitioning normal styles. The unlayered important styles have lower precedence than any important layered styles. The important styles in earlier declared layers have precedence over important styles in subsequent declared layers within the same origin.

For the rest of this tutorial, we will limit our discussion to author styles, but keep in mind that layers can also exist in user and user-agent stylesheets.

### Issues cascade layers can solve

Large code bases can have styles coming from multiple teams, component libraries, frameworks, and third parties. No matter how many stylesheets are included, all these styles cascade together in a single origin: the _author_ style sheet.

Having styles from many sources cascade together, especially from teams that aren't working together, can create problems. Different teams may have different methodologies; one may have a best practice of reducing specificity, while another may have a standard of including an `id` in each selector.

Specificity conflicts can escalate quickly. A web developer may create a "quick fix" by adding an `!important` flag. While this may feel like an easy solution, it often just moves the specificity war from normal to important declarations.

In the same way that cascade origins provide a balance of power between user, user-agents, and author styles, cascade layers provide a structured way to organize and balance concerns within a single origin as if each layer in an origin were a sub-origin. A layer can be created for each team, component, and third party, with style precedence based on layer order.

Rules within a layer cascade together, without competing with style rules outside the layer. Cascade layers enable the prioritizing of entire stylesheets over other stylesheets, without having to worry about specificity between these sub-origins.

Layer precedence always beats selector specificity. Styles in layers with precedence "win" over layers with less precedence. The specificity of a selector in a losing layer is irrelevant. Specificity still matters for competing property values within a layer, but there are no specificity concerns between layers because only the highest-priority layer for each property is considered.

### Issues nested cascade layers can solve

Cascade layers allow the creation of nested layers. Each cascade layer can contain nested layers.

For example, a component library may be imported into a `components` layer. A regular cascade layer will add the component library to the author origin, removing any specificity conflicts with other author styles. Within the `components` layer, a developer can choose to define various themes, each as a separate nested layer. The order of these nested theme layers can be defined based on media queries (see the [Layer creation and media queries](#layer_creation_and_media_queries) section below), such as viewport size or [orientation](/en-US/docs/Web/CSS/@media/orientation). These nested layers provide a way to create themes that don't conflict based on specificity.

The ability to nest layers is very useful for anybody who works on developing component libraries, frameworks, third-party widgets, and themes.

The ability to create nested layers also removes the worry of having conflicting layer names. We'll cover this in the [nested layer](#overview_of_nested_cascade_layers) section.

> "Authors can create layers to represent element defaults, third-party libraries, themes, components, overrides, and other styling concerns—and are able to re-order the cascade of layers in an explicit way, without altering selectors or specificity within each layer, or relying on order of appearance to resolve conflicts across layers."
>
> —[Cascading and Inheritance specification](https://www.w3.org/TR/css-cascade-5/#layering).

## Creating cascade layers

Layers can be created using any one of the following methods:

- The [`@layer`](/en-US/docs/Web/CSS/@layer) statement at-rule, declaring layers using `@layer` followed by the names of one or more layers. This creates named layers without assigning any styles to them.
- The `@layer` block at-rule, in which all styles within a block are added to a named or unnamed layer.
- The [`@import`](/en-US/docs/Web/CSS/@import) rule with the `layer` keyword or `layer()` function, which assigns the contents of the imported file into that layer.

All three methods create a layer if a layer with that name has not already been initialized. If no layer name is provided in the `@layer` at-rule or `@import` with `layer()`, a new anonymous (unnamed) layer is created.

> [!NOTE]
> The order of precedence of layers is the order in which they are created. Styles not in a layer, or "unlayered styles", cascade together into a final implicit label.

Let's cover the three ways of creating a layer in a little more detail before discussing nested layers.

### The @layer statement at-rule for named layers

The order of layers is set by the order in which the layers appear in your CSS. Declaring layers using `@layer` followed by the names of one or more layers without assigning any styles is one way to define the [layer order](#determining_the_precedence_based_on_the_order_of_layers).

The [`@layer`](/en-US/docs/Web/CSS/@layer) CSS at-rule is used to declare a cascade layer and to define the order of precedence when there are multiple cascade layers. The following at-rule declares three layers, in the order listed:

```css
@layer theme, layout, utilities;
```

You will often want to have your first line of CSS be this `@layer` declaration (with layer names that make sense for your site, of course) to have full control over layer ordering.

If the above statement is the first line of a site's CSS, the layer order will be `theme`, `layout`, and `utilities`. If some layers were created prior to the above statement, as long as layers with these names don't already exist, these three layers will be created and added to the end of the list of existing layers. However, if a layer with the same name already exists, then the above statement will create only two new layers. For example, if `layout` already existed, only `theme` and `utilities` will be created, but the order of layers, in this case, will be `layout`, `theme`, and `utilities`.

### The @layer block at-rule for named and anonymous layers

Layers can be created using the block `@layer` at-rule. If an `@layer` at-rule is followed by an identifier and a block of styles, the identifier is used to name the layer, and the styles in this at-rule are added to the layer's styles. If a layer with the specified name does not already exist, a new layer will be created. If a layer with the specified name already exists, the styles are added to the previously existing layer. If no name is specified while creating a block of styles using `@layer`, the styles in the at-rule will be added to a new anonymous layer.

In the example below, we've used four `@layer` block at-rules and one `@layer` statement at-rule. This CSS does the following in the order listed:

1. Creates a named `layout` layer
2. Creates an unnamed, anonymous layer
3. Declares a list of three layers and creates only two new layers, `theme` and `utilities`, because `layout` already exists
4. Adds additional styles to the already existing `layout` layer
5. Creates a second unnamed, anonymous layer

```css
/* file: layers1.css */

/* unlayered styles */
body {
  color: #333;
}

/* creates the first layer: `layout` */
@layer layout {
  main {
    display: grid;
  }
}

/* creates the second layer: an unnamed, anonymous layer */
@layer {
  body {
    margin: 0;
  }
}

/* creates the third and fourth layers: `theme` and `utilities` */
@layer theme, layout, utilities;

/* adds styles to the already existing `layout` layer */
@layer layout {
  main {
    color: #000;
  }
}

/* creates the fifth layer: an unnamed, anonymous layer */
@layer {
  body {
    margin: 1vw;
  }
}
```

In the above CSS, we created five layers: `layout`, `<anonymous(01)>`, `theme`, `utilities`, and `<anonymous(02)>` – in that order - with a sixth, implicit layer of unlayered styles contained in the `body` style block. The layer order is the order in which the layers are created, with the implicit layer of unlayered styles always being last. There is no way to change the layer order once created.

We assigned some styles to the layer named `layout`. If a named layer doesn't already exist, then specifying the name in an `@layer` at-rule, with or without assigning styles to the layer, creates the layer; this adds the layer to the end of the series of existing layer names. If the named layer already exists, all styles within the named block get appended to styles in the previously existing layer – specifying styles in a block by reusing an existing layer name does not create a new layer.

Anonymous layers are created by assigning styles to a layer without naming the layer. Styles can be added to an unnamed layer only at the time of its creation.

> [!NOTE]
> Subsequent use of `@layer` with no layer name creates additional unnamed layers; it does not append styles to a previously existing unnamed layer.

The `@layer` at-rule creates a layer, named or not, or appends styles to a layer if the named layer already exists. We called the first anonymous layer `<anonymous(01)>` and the second `<anonymous(02)>`, this is just so we can explain them. These are actually unnamed layers. There is no way to reference them or add additional styles to them.

All styles declared outside of a layer are joined together in an implicit layer. In the example code above, the first declaration set the `color: #333` property on `body`. This was declared outside of any layer. Normal unlayered declarations take precedence over normal layered declarations even if the unlayered styles have a lower specificity and come first in the order of appearance. This explains why even though the unlayered CSS was declared first in the code block, the implicit layer containing these unlayered styles takes precedence as if it was the last declared layer.

In the line `@layer theme, layout, utilities;`, in which a series of layers were declared, only the `theme` and `utilities` layers were created; `layout` was already created in the first line. Note that this declaration does not change the order of already created layers. There is currently no way to re-order layers once declared.

In the following example, we assign styles to two layers, creating them and naming them in the process. Because they already exist, being created when first used, declaring them on the last line does nothing.

```html live-sample___layer-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___layer-order
@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}

/* this does nothing */
@layer site, page;
```

{{EmbedLiveSample("layer-order")}}

Try moving the last line, `@layer site, page;`, to make it the first line. What happens?

#### Layer creation and media queries

If you define a layer using [media](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) or [feature](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) queries, and the media is not a match or the feature is not supported, the layer is not created. The example below shows how changing the size of your device or browser may change the layer order. In this example, we create the `site` layer only in wider browsers. We then assign styles to the `page` and `site` layers, in that order.

```html live-sample___media-order
<h1>Is this heading underlined?</h1>
```

```css live-sample___media-order
@media (min-width: 50em) {
  @layer site;
}

@layer page {
  h1 {
    text-decoration: overline;
    color: red;
  }
}

@layer site {
  h1 {
    text-decoration: underline;
    color: green;
  }
}
```

{{EmbedLiveSample("media-order")}}

In wide screens, the `site` layer is declared in the first line, meaning `site` has less precedence than `page`. Otherwise, `site` has precedence over `page` because it is declared later on narrow screens. If that doesn't work, try changing the `50em` in the media query to `10em` or `100em`.

### Importing style sheets into named and anonymous layers with @import

The [`@import`](/en-US/docs/Web/CSS/@import) rule allows users to import style rules from other style sheets either directly into a CSS file or into a {{htmlelement('style')}} element.

When importing stylesheets, the `@import` statement must be defined before any CSS styles within the stylesheet or `<style>` block. The `@import` statement must come first, before any styles, but can be preceded by an `@layer` at-rule that creates one or more layers without assigning any styles to the layers. (`@import` can also be preceded by an [`@charset`](/en-US/docs/Web/CSS/@charset) rule.)

You can import a stylesheet into a named layer, a nested named layer, or an anonymous layer. The following layer imports the style sheets into a `components` layer, a nested `dialog` layer within the `components` layer, and an un-named layer, respectively:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

You can import more than one CSS file into a single layer. The following declaration imports two separate files into a single `social` layer:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

You can import styles and create layers based on specific conditions using [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) and [feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries). The following imports a style sheet into an `international` layer only if the browser supports `display: ruby`, and the file being imported is dependent on the width of the screen.

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby)
  (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby)
  (width >= 32rem);
```

> [!NOTE]
> There is no equivalent of the {{HTMLElement('link')}} method of linking stylesheets. Use `@import` to import a stylesheet into a layer when you can't use `@layer` within the stylesheet.

## Overview of nested cascade layers

Nested layers are layers within a named or an anonymous layer. Each cascade layer, even an anonymous one, can contain nested layers. Layers imported into another layer become nested layers within that layer.

### Advantages of nesting layers

The ability to nest layers enables teams to create cascade layers without worrying about whether other teams will import them into a layer. Similarly, nesting enables you to import third-party style sheets into a layer without worrying if that style sheet itself has layers. Because layers can be nested, you don't have to worry about having conflicting layer names between external and internal style sheets.

### Creating nested cascade layers

Nested layers can be created using the same methods as described for regular layers. For example, they can be created using `@layer` at-rule followed by the names of one or more layers, using a dot notation. Multiple dots and layer names signify multiple nesting.

If you nest a block `@layer` at-rule inside another block `@layer` at-rule, with or without a name, the nested block becomes a nested layer. Similarly, when a style sheet is imported with an `@import` declaration containing the `layer` keyword or `layer()` function, the styles get assigned to that named or anonymous layer. If the `@import` statement contains layers, those layers become nested layers within that anonymous or named layer.

Let's look at the following example:

```css
@import url("components-lib.css") layer(components);
@import url("narrow-theme.css") layer(components.narrow);
```

In the first line, we import `components-lib.css` into the `components` layer. If that file contains any layers, named or not, those layers become nested layers within the `components` layer.

The second line imports `narrow-theme.css` into the `narrow` layer, which is a sub-layer of `components`. The nested `components.narrow` gets created as the last layer within the `components` layer, unless `components-lib.css` already contains a `narrow` layer, in which case, the contents of `narrow-theme.css` would be appended to the `components.narrow` nested layer. Additional nested named layers can be added to the `components` layer using the pattern `components.<layerName>`. As mentioned before, unnamed layers can be created but they cannot be accessed subsequently.

Let's look at another example, where we [import `layers1.css` into a named layer](#the_layer_block_at-rule_for_named_and_anonymous_layers) using the following statement:

```css
@import url(layers1.css) layer(example);
```

This will create a single layer named `example` containing some declarations and five nested layers - `example.layout`, `example.<anonymous(01)>`, `example.theme`, `example.utilities`, and `example.<anonymous(02)>`.

To add styles to a named nested layer, use the dot notation:

```css
@layer example.layout {
  main {
    width: 50vw;
  }
}
```

## Determining the precedence based on the order of layers

The order of layers determines their order of precedence. Therefore, the order of layers is very important. In the same way as the cascade sorts by origin and importance, the cascade sorts each CSS declaration by origin layer and importance.

### Precedence order of regular cascade layers

```css
@import url(A.css) layer(firstLayer);
@import url(B.css) layer(secondLayer);
@import url(C.css);
```

The above code creates two named layers (C.css styles get appended to the implicit layer of unlayered styles). Let us assume that the three files (`A.css`, `B.css`, and `C.css`) do not contain any additional layers within them. The following list shows where styles declared inside and outside of these files will be sorted from least (1) precedence to highest (10).

1. `firstLayer` normal styles (`A.css`)
2. `secondLayer` normal styles (`B.css`)
3. unlayered normal styles (`C.css`)
4. inline normal styles
5. animating styles
6. unlayered important styles (`C.css`)
7. `secondLayer` important styles (`B.css`)
8. `firstLayer` important styles (`A.css`)
9. inline important styles
10. transitioning styles

Normal styles declared inside layers receive the lowest priority and are sorted by the order in which the layers were created. Normal styles in the first created layer have the lowest precedence, and normal styles in the layer created last have the highest precedence among the layers. In other words, normal styles declared within `firstLayer` will be overridden by any subsequent stylings on the list if any conflicts exist.

Next up are any styles declared outside of layers. The styles in `C.css` were not imported into a layer and will override any conflicting styles from `firstLayer` and `secondLayer`. Styles not declared in a layer always have higher precedence than styles that _are_ declared inside a layer (with the exception of important styles).

Inline styles are declared using the [`style` attribute](/en-US/docs/Web/HTML/Global_attributes/style). Normal styles declared in this way will take precedence over normal styles found in the unlayered and layered style sheets (`firstLayer – A.css`, `secondLayer – B.css`, and `C.css`).

Animating styles have higher precedence than all normal styles, including inline normal styles.

Important styles, that is, property values that include the `!important` flag, take precedence over any styles previously mentioned in our list. They are sorted in reverse order of normal styles. Any important styles declared outside of a layer have less precedence than those declared within a layer. Important styles found within layers are also sorted in order of layer creation. For important styles, the last created layer has the lowest precedence, and the first created layer has the highest precedence among declared layers.

Inline important styles again have higher precedence than important styles declared elsewhere.

Transitioning styles have the highest precedence. When a normal property value is being transitioned, it takes precedence over all other property value declarations, even inline important styles; but only while transitioning.

```html live-sample___layer-precedence
<div>
  <h1 style="color: yellow; background-color: maroon !important;">
    Inline styles
  </h1>
</div>
```

```css live-sample___layer-precedence
@layer A, B;

h1 {
  font-family: sans-serif;
  margin: 1em;
  padding: 0.2em;
  color: orange;
  background-color: green;
  text-decoration: overline pink !important;
  box-shadow: 5px 5px lightgreen !important;
}

@layer A {
  h1 {
    color: grey;
    background-color: black !important;
    text-decoration: line-through grey;
    box-shadow: -5px -5px lightblue !important;
    font-style: normal;
    font-weight: normal !important;
  }
}

@layer B {
  h1 {
    color: aqua;
    background: yellow !important;
    text-decoration: underline aqua;
    box-shadow: -5px 5px magenta !important;
    font-style: italic;
    font-weight: bold !important;
  }
}
```

{{EmbedLiveSample("layer-precedence")}}

In this example, two layers (`A` and `B`) are initially defined using an `@layer` statement at-rule without any styles. The layer styles are defined in two `@layer` block at-rules appearing after the `h1` CSS rule declared outside of any layer.

The inline styles added on the `h1` element using the `style` attribute, set a normal `color` and an important `background-color`. Normal inline styles override all layered and unlayered normal styles. Important inline styles override all layered and unlayered normal and important author styles. There is no way for author styles to override important inline styles.

The normal `text-decoration` and important `box-shadow` are not part of the `style` inline styles and can therefore be overridden. For normal non-inline styles, unlayered styles have precedence. For important styles, layer order matters too. While normal unlayered styles override all normal styles set in a layer, with important styles, the precedence order is reversed; unlayered important styles have lower precedence than layered styles.

The two styles declared only within layers are `font-style`, with normal importance, and `font-weight` with an `!important` flag. For normal styles, the `B` layer, declared last, overrides styles in the earlier declared layer `A`. For normal styles, later layers have precedence over earlier layers. The order of precedence is reversed for important styles. For the important `font-weight` declarations, layer `A`, being declared first, has precedence over the last declared layer `B`.

You can reverse the layer order by changing the first line from `@layer A, B;` to `@layer B, A;`. Try that. Which styles get changed by this, and which stay the same? Why?

The order of layers is set by the order in which the layers appear in your CSS. In our first line, we declared layers without assigning any styles using `@layer` followed by the names of our layers, ending with a semi-colon. Had we omitted this line, the results would have been the same. Why? We assigned style rules in named `@layer` blocks in the order A then B. The two layers were created in that first line. Had they not been, these rule blocks would have created them, in that order.

We included that first line for two reasons: first so you could easily edit the line and switch the order, and second because often you'll find declaring the order layer up front to be the best practice for your layer order management.

To summarize:

- The order of precedence of layers is the order in which the layers are created.
- Once created, there is no way to change the layer order.
- Layer precedence for normal styles is the order in which the layers are created.
- Unlayered normal styles have precedence over normal layered styles.
- Layer precedence for important styles is reversed, with earlier created layers having precedence.
- All layered important styles have precedence over unlayered important (and normal) styles.
- Normal inline styles take precedence over all normal styles, layered or not.
- Important inline styles take precedence over all other styles, with the exception of styles being transitioned.
- There is no way for author styles to override important inline styles (other than transitioning them, which is temporary).

### Precedence order of nested cascade layers

The cascade precedence order for nested layers is similar to that of regular layers, but contained within the layer. The precedence order is based on the order of nested layer creation. Non-nested styles in a layer have precedence over nested normal styles, with the precedence order reversed for important styles. Specificity weight between nested layers does not matter, though it does matter for conflicting styles within a nested layer.

The following creates and adds styles to the `components` layer, `components.narrow` nested layer, and `components.wide` nested layer:

```html hidden
<div>Text</div>
```

```css hidden
div {
  height: 150px;
  width: 150px;
  margin: 1rem;
  padding: 1rem;
  font-size: 3rem;
}
```

```css
div {
  background-color: wheat;
  color: pink !important;
}

@layer components {
  div {
    background-color: yellow;
    border: 1rem dashed red;
    color: orange !important;
  }
}

@layer components.narrow {
  div {
    background-color: skyblue;
    border: 1rem dashed blue;
    color: purple !important;
    border-radius: 50%;
  }
}

@layer components.wide {
  div {
    background-color: limegreen;
    border: 1rem dashed green;
    color: seagreen !important;
    border-radius: 20%;
  }
}
```

{{EmbedLiveSample("Precedence order of nested cascade layers", "100%", "250")}}

Here's a summary of the properties that are used and why each declaration is applied:

- `background-color`: Because unlayered normal styles have precedence over layered normal styles, `wheat` color wins.
- `border`: Because within a layer non-nested styles have precedence over normal nested styles, `red` color wins.
- `color`: With important styles, layered styles take precedence over unlayered styles, with important styles in earlier declared layers having precedence over later declared layers. In this example, the order of nested layer creation is `components.narrow`, then `components.wide`, so important styles in `components.narrow` have precedence over important styles in `components.wide`, meaning `purple` color wins.
- `border-radius`: The property has been set only in the nested layers so by declaration order `20%` radius wins.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: The Cascade, Task 2](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks#task_2).

## Summary

If you understood most of this article, then well done — you're now familiar with the fundamental mechanics of CSS cascade layers.
