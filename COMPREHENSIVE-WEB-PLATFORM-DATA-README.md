# 🌐 Comprehensive Web Platform Data Viewer

A powerful, all-in-one data viewer and reference tool for modern web development, aggregating data from multiple authoritative sources including MDN, W3C, WebKit, and Browser Compatibility Data.

## 🚀 Features

### Core Web Technologies
- **CSS**: Properties, at-rules, functions, selectors with formal definitions
- **HTML**: Elements, global attributes with browser compatibility 
- **JavaScript**: Built-ins, statements, operators, functions, classes, grammar

### Extended Web Platform
- **HTTP**: Headers, methods, status codes, CSP directives, Permissions-Policy
- **SVG**: Elements, attributes, DOM interfaces
- **MathML**: Elements, attributes, global attributes  
- **XSLT/XPath**: Elements, functions, axes
- **WebDriver**: Capabilities, commands, errors, timeouts
- **ARIA**: Roles, properties, states for accessibility
- **URI**: Schemes, components, authorities
- **W3C**: Specifications, working groups

### Advanced Features
- **Cross-reference indices** by specification, browser support, status, type
- **Interactive JSON tree viewer** with search and filtering
- **Export capabilities** (JSON/XML) with timestamped downloads
- **Statistics dashboard** with categorized breakdowns
- **Real-time data aggregation** from multiple sources
- **Error-resilient loading** with graceful fallbacks

## 📊 Data Sources

| Source | Description | Examples |
|--------|-------------|----------|
| **MDN Data** | Authoritative web technology data | CSS properties, HTML elements |
| **WebKit** | Browser engine implementation data | CSS property support, animations |
| **Browser Compat Data** | Cross-browser compatibility info | Feature support across browsers |
| **W3C API** | Standards organization data | Specifications, working groups |
| **HTTP Specs** | HTTP protocol specifications | Headers, methods, status codes |

## 🎯 Use Cases

### For Developers

- **API Reference**: Complete HTML/CSS/JS reference with examples
- **Code Analysis**: Advanced parsing and linting with comprehensive suggestions
- **Compatibility Checking**: Browser support for specific features
- **Standards Compliance**: Official specification links and status
- **Accessibility Auditing**: ARIA roles and properties reference

### For Documentation

- **Technical Writing**: Accurate, up-to-date web technology data
- **Course Creation**: Comprehensive learning materials

## 🎮 Main Application

**Single Comprehensive App**: `/Master_Programs/master-data-viewer-with-parser.html`

This enhanced application provides:

- **Dual-mode functionality**: Data viewer + Code parser/linter
- **W3C Apiary integration**: Live W3C group and specification data
- **Local data enhancement**: Comprehensive JSON reference for better suggestions
- **Advanced parsing**: HTML, CSS, JavaScript with real-time validation
- **Export capabilities**: JSON/XML with complete platform data
- **Professional UI**: Tabbed interface with statistics and visualization

### Quick Start

1. Start local server: `python3 -m http.server 8888`
2. Open: `http://localhost:8888/Master_Programs/master-data-viewer-with-parser.html`
3. Click "Load Platform Data" to aggregate from all sources
4. Use "Code Parser" tab for advanced analysis and linting
- **API Documentation**: HTTP methods, headers, status codes
- **Standards Tracking**: W3C specification progress

### For Tools & Libraries
- **IDE Extensions**: Autocomplete data for web technologies
- **Linting Tools**: Validation rules for HTML/CSS/JS
- **Testing Frameworks**: WebDriver commands and capabilities
- **Build Tools**: CSS/JS feature detection and polyfills

## 🔧 Usage

### Basic Usage
1. Open `master-data-viewer.html` in a modern browser
2. Click "Load Comprehensive Web Platform Data"
3. Browse the interactive JSON tree or export data

### Programmatic Usage
```javascript
// Example: Find all animatable CSS properties
const animatableProps = data.webPlatformData.css.properties.filter(prop => 
  prop.animationType && prop.animationType !== 'discrete'
);

// Example: Get all experimental HTML elements  
const experimentalHTML = data.webPlatformData.html.elements.filter(element => 
  element.experimental === true
);

// Example: Find HTTP 4xx status codes
const clientErrors = data.webPlatformData.http.statusCodes.filter(status => 
  status.category === '4xx'
);
```

### Advanced Queries
```javascript
// Cross-reference by specification
const cssSpecFeatures = data.webPlatformData.indices.bySpecification[
  'https://www.w3.org/TR/css-animations/'
];

// Filter by browser support
const modernFeatures = data.webPlatformData.indices.byStatus['standard'];

// Technology breakdown
const report = generateTechnologyReport(data);
```

## 📈 Data Statistics

The comprehensive dataset includes:

- **CSS**: 600+ properties, 50+ at-rules, 100+ functions, 80+ selectors
- **HTML**: 100+ elements, 50+ global attributes  
- **JavaScript**: 500+ built-ins, 30+ statements, 20+ operators
- **HTTP**: 200+ headers, 10+ methods, 60+ status codes
- **SVG**: 80+ elements, 200+ attributes, 50+ DOM interfaces
- **MathML**: 30+ elements, 100+ attributes
- **ARIA**: 80+ roles, 50+ properties, 20+ states
- **W3C**: 300+ specifications, 100+ working groups

## 🔍 Search & Filter Examples

### CSS Properties by Animation Support
```javascript
const animatable = data.webPlatformData.css.properties.filter(prop => 
  prop.animationType && !['discrete', 'not animatable'].includes(prop.animationType)
);
```

### SVG Elements by Category
```javascript
const graphicsElements = data.webPlatformData.svg.elements.filter(element => 
  element.categories.includes('Graphics element')
);
```

### HTTP Headers by Type
```javascript
const securityHeaders = data.webPlatformData.http.headers.filter(header => 
  header.name.toLowerCase().includes('security') || 
  header.name.toLowerCase().includes('policy')
);
```

### Deprecated Features Across All Technologies
```javascript
const deprecated = [];
Object.values(data.webPlatformData).forEach(category => {
  Object.values(category).forEach(items => {
    if (Array.isArray(items)) {
      deprecated.push(...items.filter(item => item.deprecated));
    }
  });
});
```

## 🗂️ Data Structure

```javascript
{
  webPlatformData: {
    metadata: {
      generatedAt: "2025-06-28T...",
      version: "2.0.0",
      totalEntries: 5000+,
      dataSources: { ... }
    },
    
    // Core Technologies
    css: { properties: [...], atRules: [...], functions: [...], selectors: [...] },
    html: { elements: [...], globalAttributes: [...] },
    javascript: { builtins: [...], statements: [...], operators: [...] },
    
    // Extended Platform
    http: { headers: [...], methods: [...], statusCodes: [...] },
    svg: { elements: [...], attributes: [...], domInterfaces: [...] },
    mathml: { elements: [...], attributes: [...], globalAttributes: [...] },
    xslt: { elements: [...], functions: [...], axes: [...] },
    webdriver: { capabilities: [...], commands: [...], errors: [...] },
    aria: { roles: [...], properties: [...], states: [...] },
    uri: { schemes: [...], components: [...] },
    w3c: { specifications: [...], groups: [...] },
    
    // Cross-reference Indices
    indices: {
      bySpecification: { ... },
      byBrowserSupport: { ... },
      byStatus: { ... },
      byType: { ... }
    }
  }
}
```

## 🎨 Customization

### Adding New Data Sources
```javascript
// Add to URLS object
const URLS = {
  // ... existing URLs
  newSource: 'https://api.example.com/data.json'
};

// Create processor function
function processNewSource(data) {
  return data.map(item => ({
    name: item.name,
    type: 'new_type',
    description: item.desc,
    // ... other properties
  }));
}

// Add to loadMasterData function
const newData = processNewSource(await fetchJSON(URLS.newSource, 'New Source'));
```

### Custom Filtering
```javascript
// Create custom filter function
function findByKeyword(data, keyword) {
  const results = [];
  
  Object.entries(data.webPlatformData).forEach(([category, categoryData]) => {
    Object.values(categoryData).forEach(items => {
      if (Array.isArray(items)) {
        results.push(...items.filter(item => 
          item.name.toLowerCase().includes(keyword.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(keyword.toLowerCase()))
        ));
      }
    });
  });
  
  return results;
}
```

## 🤝 Contributing

1. **Data Sources**: Suggest new authoritative data sources
2. **Processing Logic**: Improve data normalization and cross-referencing  
3. **UI/UX**: Enhance the viewer interface and user experience
4. **Documentation**: Add examples, use cases, and tutorials
5. **Testing**: Validate data accuracy and application reliability

## 📝 License

This project aggregates data from multiple sources under their respective licenses:
- MDN content: CC-BY-SA 2.5
- W3C specifications: W3C Document License
- Browser Compatibility Data: CC0 1.0

## 🔗 Related Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Specifications](https://www.w3.org/TR/)
- [Browser Compatibility Data](https://github.com/mdn/browser-compat-data)
- [WebKit Project](https://webkit.org/)
- [Web Platform Tests](https://web-platform-tests.org/)

---

*Built with ❤️ for the web development community*
