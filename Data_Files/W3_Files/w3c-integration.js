/**
 * W3C API Integration Example
 * Shows how to integrate W3C API data with the comprehensive web platform data
 */

class W3CIntegration {
  constructor() {
    this.baseURL = 'https://api.w3.org';
    this.cache = new Map();
  }

  /**
   * Fetch W3C specifications with caching
   */
  async fetchSpecifications(options = {}) {
    const cacheKey = `specs_${JSON.stringify(options)}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const params = new URLSearchParams({
        embed: 'true',
        ...options
      });
      
      const response = await fetch(`${this.baseURL}/specifications?${params}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      console.warn('W3C API fetch failed:', error);
      return { _embedded: { specifications: [] } };
    }
  }

  /**
   * Fetch W3C groups with caching
   */
  async fetchGroups(options = {}) {
    const cacheKey = `groups_${JSON.stringify(options)}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const params = new URLSearchParams({
        embed: 'true',
        ...options
      });
      
      const response = await fetch(`${this.baseURL}/groups?${params}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      console.warn('W3C API fetch failed:', error);
      return { _embedded: { groups: [] } };
    }
  }

  /**
   * Get specification details by shortname
   */
  async getSpecification(shortname) {
    try {
      const response = await fetch(`${this.baseURL}/specifications/${shortname}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`Failed to fetch spec ${shortname}:`, error);
      return null;
    }
  }

  /**
   * Cross-reference W3C specs with web platform features
   */
  async crossReferenceSpecs(webPlatformData) {
    const specs = await this.fetchSpecifications();
    const crossRef = {
      cssSpecs: [],
      htmlSpecs: [],
      jsSpecs: [],
      httpSpecs: [],
      svgSpecs: [],
      mathmlSpecs: [],
      webApiSpecs: []
    };

    if (specs._embedded && specs._embedded.specifications) {
      for (const spec of specs._embedded.specifications) {
        const title = spec.title.toLowerCase();
        const shortname = spec.shortname.toLowerCase();

        // Categorize specifications
        if (title.includes('css') || shortname.includes('css')) {
          crossRef.cssSpecs.push(spec);
        } else if (title.includes('html') || shortname.includes('html')) {
          crossRef.htmlSpecs.push(spec);
        } else if (title.includes('ecmascript') || title.includes('javascript')) {
          crossRef.jsSpecs.push(spec);
        } else if (title.includes('http')) {
          crossRef.httpSpecs.push(spec);
        } else if (title.includes('svg')) {
          crossRef.svgSpecs.push(spec);
        } else if (title.includes('mathml')) {
          crossRef.mathmlSpecs.push(spec);
        } else if (title.includes('api') || title.includes('interface')) {
          crossRef.webApiSpecs.push(spec);
        }
      }
    }

    return crossRef;
  }

  /**
   * Find specifications related to specific features
   */
  async findRelatedSpecs(featureName) {
    const specs = await this.fetchSpecifications();
    const related = [];

    if (specs._embedded && specs._embedded.specifications) {
      for (const spec of specs._embedded.specifications) {
        const searchText = `${spec.title} ${spec.shortname} ${spec.description || ''}`.toLowerCase();
        if (searchText.includes(featureName.toLowerCase())) {
          related.push({
            ...spec,
            relevanceScore: this.calculateRelevance(searchText, featureName)
          });
        }
      }
    }

    return related.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  /**
   * Calculate relevance score for search results
   */
  calculateRelevance(text, searchTerm) {
    const term = searchTerm.toLowerCase();
    let score = 0;

    // Title match (highest weight)
    if (text.includes(term)) score += 10;
    
    // Word boundary matches
    const words = term.split(' ');
    words.forEach(word => {
      if (text.includes(` ${word} `) || text.startsWith(`${word} `) || text.endsWith(` ${word}`)) {
        score += 5;
      }
    });

    return score;
  }

  /**
   * Generate comprehensive technology map
   */
  async generateTechnologyMap(webPlatformData) {
    const [specs, groups] = await Promise.all([
      this.fetchSpecifications(),
      this.fetchGroups()
    ]);

    const techMap = {
      specifications: {},
      workingGroups: {},
      technologies: {},
      relationships: []
    };

    // Process specifications
    if (specs._embedded) {
      specs._embedded.specifications.forEach(spec => {
        techMap.specifications[spec.shortname] = {
          title: spec.title,
          status: spec.status,
          level: spec.level,
          url: spec.latest_version?.uri || spec.uri,
          deliverers: spec.deliverers || [],
          relatedFeatures: this.findRelatedFeatures(spec, webPlatformData)
        };
      });
    }

    // Process working groups
    if (groups._embedded) {
      groups._embedded.groups.forEach(group => {
        techMap.workingGroups[group.id] = {
          name: group.name,
          type: group.type,
          homepage: group.homepage,
          specifications: group.specifications || []
        };
      });
    }

    return techMap;
  }

  /**
   * Find web platform features related to a specification
   */
  findRelatedFeatures(spec, webPlatformData) {
    const relatedFeatures = [];
    const specTitle = spec.title.toLowerCase();
    const specShortname = spec.shortname.toLowerCase();

    // Search through all feature categories
    Object.entries(webPlatformData).forEach(([category, categoryData]) => {
      if (category === 'metadata' || category === 'indices') return;

      Object.values(categoryData).forEach(items => {
        if (Array.isArray(items)) {
          items.forEach(item => {
            if (item.specUrl && (
              item.specUrl.includes(spec.shortname) ||
              (item.description && (
                item.description.toLowerCase().includes(specTitle) ||
                item.description.toLowerCase().includes(specShortname)
              ))
            )) {
              relatedFeatures.push({
                name: item.name,
                type: item.type,
                category: category
              });
            }
          });
        }
      });
    });

    return relatedFeatures;
  }

  /**
   * Export integration data
   */
  async exportIntegrationData(webPlatformData) {
    const [crossRef, techMap] = await Promise.all([
      this.crossReferenceSpecs(webPlatformData),
      this.generateTechnologyMap(webPlatformData)
    ]);

    return {
      metadata: {
        generatedAt: new Date().toISOString(),
        source: 'W3C API Integration',
        version: '1.0.0'
      },
      crossReference: crossRef,
      technologyMap: techMap,
      summary: {
        totalSpecs: Object.keys(techMap.specifications).length,
        totalGroups: Object.keys(techMap.workingGroups).length,
        crossReferencedFeatures: Object.values(crossRef).reduce((acc, specs) => acc + specs.length, 0)
      }
    };
  }
}

// Usage examples
const examples = {
  
  // Basic usage
  basicUsage: `
    const w3c = new W3CIntegration();
    
    // Get all CSS specifications
    const cssSpecs = await w3c.fetchSpecifications({ shortname: 'css*' });
    
    // Find specs related to flexbox
    const flexboxSpecs = await w3c.findRelatedSpecs('flexbox');
    
    // Cross-reference with web platform data
    const crossRef = await w3c.crossReferenceSpecs(webPlatformData);
  `,

  // Advanced integration
  advancedIntegration: `
    const w3c = new W3CIntegration();
    
    // Generate comprehensive technology map
    const techMap = await w3c.generateTechnologyMap(webPlatformData);
    
    // Find all features from CSS Working Group
    const cssWGFeatures = [];
    Object.values(techMap.specifications).forEach(spec => {
      if (spec.deliverers.some(d => d.name.includes('CSS'))) {
        cssWGFeatures.push(...spec.relatedFeatures);
      }
    });
    
    // Export complete integration data
    const integrationData = await w3c.exportIntegrationData(webPlatformData);
  `,

  // Specification tracking
  specTracking: `
    const w3c = new W3CIntegration();
    
    // Track specification status changes
    const trackSpecs = async (specNames) => {
      const results = {};
      
      for (const name of specNames) {
        const spec = await w3c.getSpecification(name);
        if (spec) {
          results[name] = {
            status: spec.status,
            level: spec.level,
            lastModified: spec.latest_version?.date,
            editors: spec.latest_version?.editors || []
          };
        }
      }
      
      return results;
    };
    
    // Track key web platform specifications
    const keySpecs = ['css-flexbox-1', 'html52', 'es2024', 'svg2'];
    const specStatus = await trackSpecs(keySpecs);
  `
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    W3CIntegration,
    examples
  };
}

// Browser usage
if (typeof window !== 'undefined') {
  window.W3CIntegration = W3CIntegration;
  window.W3CIntegrationExamples = examples;
}

console.log('W3C Integration module loaded!');
console.log('Available examples:', Object.keys(examples));
