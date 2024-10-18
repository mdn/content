---
title: Fonts for MathML
slug: Web/MathML/Fonts
page-type: guide
---

{{MathMLRef}}

Fonts with appropriate Unicode coverage and Open Font Format features are required for good math rendering.
This page describes how users can install such math fonts to properly display MathML in browsers.

## Installation instructions

As a general rule of thumb, it is recommended to install both _Latin Modern Math_ (which uses [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern) style popular for math formulas) and _STIX Two Math_ (which has large unicode coverage for scientific characters). In the next sections, you will find detailed instructions to install these fonts in various operating systems.

### Windows

Install the _Latin Modern Math_ and _STIX Two Math_ fonts as follows:

1. Download [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip).
2. Open the ZIP archive, move inside the `latinmodern-math-1959` directory and then inside the `otf` directory. You will find a `latinmodern-math` font file.
3. Open the `latinmodern-math` font file and click the **Install** button.
4. Download [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip).
5. Open the `static_otf.zip` ZIP archive, and then move inside the `static_otf` directory. Among the files there, you will find a `STIXTwoMath-Regular` file.
6. Open the `STIXTwoMath-Regular` file and click the **Install** button. If desired, you may also do the same for the other font files in the directory.

> **Note:** _Cambria Math_ is installed by default on Windows and should ensure relatively good MathML rendering.

### macOS

Install the _Latin Modern Math_ font as follows:

1. Download [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip).
2. Extract the ZIP archive, move inside the `latinmodern-math-1959` directory and then inside the `otf` directory. You will find a `latinmodern-math` font file.
3. Double-click the `latinmodern-math` font file click the **Install font** button from the window that opens.

> [!NOTE]
> If you are using macOS Ventura (version 13) or higher, then _STIX Two Math_ is already pre-installed and you can skip the steps below.

Install the _STIX Two Math_ font as follows:

1. Download [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip).
2. Open the `static_otf.zip` ZIP archive, and then move inside the `static_otf` directory. Among the files there, you will find a `STIXTwoMath-Regular.otf` file.
3. Open the `STIXTwoMath-Regular.otf` file and click the **Install Font** button from the window that opens. If desired, you may also do the same for the other font files in the directory.

> [!NOTE]
> A deprecated version of _STIX_ is preinstalled starting with OS X Lion (version 10.7). Although some browsers are able to make use of it, it is strongly recommended to follow the instructions above for optimal math rendering.

### Linux

Below, you can find commands to execute on popular Linux distributions
in order to install the _Latin Modern Math_ and _STIX Two Math_ fonts from your
package manager. Alternative approaches are also provided if your Linux
distribution does not provide dedicated packages for these fonts.

#### Debian-based distributions (including Ubuntu and Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora-based distributions

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-based distributions

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive packages

If your Linux distribution does not provide packages for the _Latin Modern Math_ and _STIX_ fonts, consider instead installing the `texlive` packages containing the _Latin Modern Math_ and _XITS_ fonts. For example on Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

However, you will likely need to ensure that these fonts are known by your system. Add a fontconfig configuration `/etc/fonts/conf.avail/09-texlive-fonts.conf` that points to the `opentype` directory of TeXLive, such as:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Finally, add this configuration file to the system font location list and regenerate the fontconfig cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream packages

If no packages are available on your Linux distributions, or if you just want to install upstream packages then try this:

1. Download [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) and [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip).
2. Create a `~/.fonts` if it does not exist already and place `latinmodern-math.otf` and `STIXTwoMath-Regular.otf` in that directory.
3. Run `fc-cache -f` to regenerate the fontconfig cache.

### Android

You must use the [MathML-fonts add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

> [!NOTE]
> Noto Sans Math provides good Unicode coverage for math symbols and [Google plans to add support for math layout features](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Other systems

On other systems, consider installing a [font with a MATH table](#fonts_with_a_math_table) using your package manager. Note that these fonts are generally delivered with TeX distributions such as [TeX Live](https://www.tug.org/texlive/), but you might need to follow specific instructions so that your system is aware of the fonts. As a last resort, install the [MathML fonts add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Advanced setup

In the next sections, you will find other useful tips for installation and
configuration of fonts for MathML.

### Arabic mathematical alphabetic symbols

Currently, very few fonts have appropriate glyphs for the Arabic Mathematical Alphabetic Symbols. If you are likely to need these characters, we recommend to install the _XITS_ or [Amiri](https://www.amirifont.org/) fonts.

### Installation without administrator privilege

If you need to install fonts on a system without administrator privilege, the easiest option is to use math font the [MathML-fonts add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/). Note that using the add-on is not optimal since it forces your Gecko browser to load a CSS stylesheet on each page you visit as well as Web math fonts on all pages with MathML content.

A better alternative on UNIX systems is to install the OTF files for [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) and [STIX](https://github.com/stipub/stixfonts) into some local font folder and (if necessary) to run `fc-cache` on it. On macOS and Linux, the standard paths are respectively `~/Library/Fonts/` and `~/.fonts`.

### Fonts with a MATH table

You can actually install any [mathematical OpenType font](https://fred-wang.github.io/MathFonts/) and use them for MathML rendering. Some browsers provide a way to configure the default font for MathML in their font preference menu. Alternatively, you can try the [MathML Font Settings add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/).

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
