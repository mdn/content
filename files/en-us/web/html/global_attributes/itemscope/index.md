---
title: itemscope
slug: Web/HTML/Global_attributes/itemscope
tags:
  - Attribute
  - Global attribute
  - HTML
  - HTML Microdata
  - Microdata
  - Reference
browser-compat: html.global_attributes.itemscope
---

{{HTMLSidebar("Global_attributes")}}

**`itemscope`** is a boolean [global attribute](/en-US/docs/Web/HTML/Global_attributes) that defines the scope of associated metadata. Specifying the **`itemscope`** attribute for an element creates a new item, which results in a number of name-value pairs that are associated with the element.

A related attribute, [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype), is used to specify the valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context. In each of the following examples, the vocabulary is from [schema.org](https://schema.org/).

Every HTML element may have an `itemscope` attribute specified. An `itemscope` element that does not have an associated `itemtype` must have an associated `itemref`.

> **Note:** Find more about `itemtype` attributes at <https://schema.org/Thing>

### itemscope id attributes

When you specify the `itemscope` attribute for an element, a new item is created. The item consists of a group of name-value pairs. For elements with an `itemscope` attribute and an `itemtype` attribute, you may also specify an {{htmlattrxref("id")}} attribute. You can use the `id` attribute to set a global identifier for the new item. A global identifier allows the item to relate to other items found on pages across the Web.

## Examples

### Representing structured data for a movie

The following example specifies the `itemtype` as "http\://schema.org/Movie", and specifies four related `itemprop` attributes.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="6">itemscope</td>
      <td>Itemtype</td>
      <td colspan="2">Movie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>(itemprop name)</td>
      <td>(itemprop value)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>director</td>
      <td>James Cameron</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>genre</td>
      <td>Science Fiction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Avatar</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>https://youtu.be/0AY1XIkX7bY</td>
      <td>Trailer</td>
    </tr>
  </tbody>
</table>

```html
<div itemscope itemtype="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <span>Director: <span itemprop="director">James Cameron</span> (born August 16, 1954)</span>
  <span itemprop="genre">Science fiction</span>
  <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>
```

### Representing structured data for a recipe

There are four `itemscope` attributes in the following example. Each `itemscope` attribute sets the scope of its corresponding `itemtype` attribute. The `itemtype`s, `Recipe`, `AggregateRating`, and `NutritionInformation` in the following example are part of the [schema.org](www.schema.org) structured data for a recipe, as specified by the first `itemtype`, `http://schema.org/Recipe`.

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="14">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Recipe</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Grandma's Holiday Apple Pie</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2009-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        This is my grandmother's apple pie recipe. I like to add a dash of
        nutmeg.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>prepTime</td>
      <td>PT30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>cookTime</td>
      <td>PT1H</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>totalTime</td>
      <td>PT1H30M</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeYield</td>
      <td>1 9" pie (8 servings)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>Thinly-sliced apples: 6 cups</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeIngredient</td>
      <td>White sugar: 3/4 cup</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>recipeInstructions</td>
      <td>
        1. Cut and peel apples 2. Mix sugar and cinnamon. Use additional sugar
        for tart apples .
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td colspan="2">author [Person]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Carol Smith</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.0</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>35</td>
    </tr>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">nutrition [NutritionInformation]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>servingSize</td>
      <td>1 medium slice</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>calories</td>
      <td>250 cal</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>fatContent</td>
      <td>12 g</td>
    </tr>
  </tbody>
</table>

> **Note:** A handy tool for extracting microdata structures from HTML is Google's [Rich Results Testing Tool](https://search.google.com/test/rich-results). Try it on the HTML shown here.

#### HTML

```html
<div itemscope itemtype="https://schema.org/Recipe">
  <h2 itemprop="name">Grandma's Holiday Apple Pie</h2>
  <img itemprop="image" src="https://c1.staticflickr.com/1/30/42759561_8631e2f905_n.jpg" width="50" height="50" />
  <p>
    By <span itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span itemprop="name">Carol Smith</span>
    </span>
  </p>
  <p>
    Published: <time datetime="2009-11-05" itemprop="datePublished">November 5, 2009</time>
  </p>
  <span itemprop="description">This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.</span>
  <br>
  <span itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.0</span> stars based on <span itemprop="reviewCount">35</span> reviews
  </span>
  <br>
  Prep time: <time datetime="PT30M" itemprop="prepTime">30 min</time><br>
  Cook time: <time datetime="PT1H" itemprop="cookTime">1 hou</time>r<br>
  Total time: <time datetime="PT1H30M" itemprop="totalTime">1 hour 30 min</time><br>
  Yield: <span itemprop="recipeYield">1 9" pie (8 servings)</span><br>
  <span itemprop="nutrition" itemscope itemtype="https://schema.org/NutritionInformation">
    Serving size: <span itemprop="servingSize">1 medium slice</span><br>
    Calories per serving: <span itemprop="calories">250 cal</span><br>
    Fat per serving: <span itemprop="fatContent">12 g</span><br>
  </span>
  <p>
    Ingredients:<br>
    <span itemprop="recipeIngredient">Thinly-sliced apples: 6 cups<br></span>
    <span itemprop="recipeIngredient">White sugar: 3/4 cup<br></span>
    …
  </p>
  Directions: <br>
  <div itemprop="recipeInstructions">
    1. Cut and peel apples<br>
    2. Mix sugar and cinnamon. Use additional sugar for tart apples. <br>
    …
  </div>
</div>
```

#### Result

{{EmbedLiveSample('Representing structured data for a recipe', '', '550')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Other different global attributes](/en-US/docs/Web/HTML/Global_attributes)
- Other microdata related global attributes:

  - [`itemid`](/en-US/docs/Web/HTML/Global_attributes/itemid)
  - [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/en-US/docs/Web/HTML/Global_attributes/itemref)
  - [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype)
