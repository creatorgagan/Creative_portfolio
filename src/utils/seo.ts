import { VideoItem, SiteConfig } from '../types';

/**
 * SEO utility functions for managing meta tags, structured data, and SEO optimization
 */

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

/**
 * Update document meta tags dynamically
 */
export function updateMetaTags(tags: MetaTags): void {
  // Update title
  document.title = tags.title;

  // Update or create meta tags
  updateMetaTag('name', 'description', tags.description);
  
  if (tags.keywords && tags.keywords.length > 0) {
    updateMetaTag('name', 'keywords', tags.keywords.join(', '));
  }

  // Open Graph tags
  updateMetaTag('property', 'og:type', 'website');
  updateMetaTag('property', 'og:title', tags.ogTitle || tags.title);
  updateMetaTag('property', 'og:description', tags.ogDescription || tags.description);
  
  if (tags.ogImage) {
    updateMetaTag('property', 'og:image', tags.ogImage);
  }
  
  if (tags.ogUrl) {
    updateMetaTag('property', 'og:url', tags.ogUrl);
  }

  // Twitter Card tags
  updateMetaTag('property', 'twitter:card', tags.twitterCard || 'summary_large_image');
  updateMetaTag('property', 'twitter:title', tags.twitterTitle || tags.title);
  updateMetaTag('property', 'twitter:description', tags.twitterDescription || tags.description);
  
  if (tags.twitterImage) {
    updateMetaTag('property', 'twitter:image', tags.twitterImage);
  }

  // Canonical URL
  if (tags.canonical) {
    updateLinkTag('canonical', tags.canonical);
  }
}

/**
 * Helper function to update or create a meta tag
 */
function updateMetaTag(attribute: string, key: string, content: string): void {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

/**
 * Helper function to update or create a link tag
 */
function updateLinkTag(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

/**
 * Generate structured data (JSON-LD) for a video
 */
export function generateVideoStructuredData(video: VideoItem, siteConfig: SiteConfig): string {
  // Validate date before using it
  const uploadDate = video.createdDate && !isNaN(video.createdDate.getTime()) 
    ? video.createdDate.toISOString() 
    : new Date().toISOString();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: uploadDate,
    contentUrl: video.videoUrl,
    embedUrl: video.youtubeId ? `https://www.youtube.com/embed/${video.youtubeId}` : video.videoUrl,
    duration: video.duration ? `PT${video.duration}S` : undefined,
    interactionStatistic: video.viewCount ? {
      '@type': 'InteractionCounter',
      interactionType: { '@type': 'WatchAction' },
      userInteractionCount: video.viewCount
    } : undefined,
    author: {
      '@type': 'Person',
      name: siteConfig.personal.name,
      url: window.location.origin
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.personal.name,
      url: window.location.origin
    }
  };

  // Remove undefined fields
  Object.keys(structuredData).forEach(key => {
    if (structuredData[key as keyof typeof structuredData] === undefined) {
      delete structuredData[key as keyof typeof structuredData];
    }
  });

  return JSON.stringify(structuredData);
}

/**
 * Generate structured data for the website/person
 */
export function generatePersonStructuredData(siteConfig: SiteConfig): string {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.personal.name,
    jobTitle: siteConfig.personal.tagline,
    description: siteConfig.personal.bio,
    email: siteConfig.personal.email,
    telephone: siteConfig.personal.phone,
    address: siteConfig.personal.location ? {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.personal.location
    } : undefined,
    sameAs: Object.values(siteConfig.social).filter(url => url),
    url: window.location.origin,
    image: siteConfig.seo.ogImage
  };

  // Remove undefined fields
  Object.keys(structuredData).forEach(key => {
    if (structuredData[key as keyof typeof structuredData] === undefined) {
      delete structuredData[key as keyof typeof structuredData];
    }
  });

  return JSON.stringify(structuredData);
}

/**
 * Inject structured data into the page
 */
export function injectStructuredData(structuredData: string, id: string = 'structured-data'): void {
  // Remove existing structured data with the same ID
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  // Create and inject new structured data
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = structuredData;
  document.head.appendChild(script);
}

/**
 * Generate sitemap data structure
 */
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemapData(videos: VideoItem[]): SitemapUrl[] {
  const baseUrl = window.location.origin || 'http://localhost';
  const urls: SitemapUrl[] = [];

  // Add main pages
  urls.push({
    loc: `${baseUrl}/`,
    changefreq: 'weekly',
    priority: 1.0
  });

  urls.push({
    loc: `${baseUrl}/#portfolio`,
    changefreq: 'weekly',
    priority: 0.9
  });

  urls.push({
    loc: `${baseUrl}/#about`,
    changefreq: 'monthly',
    priority: 0.8
  });

  urls.push({
    loc: `${baseUrl}/#contact`,
    changefreq: 'monthly',
    priority: 0.7
  });

  // Add video pages (if individual video pages exist)
  videos.forEach(video => {
    // Validate date before using it
    const lastmod = video.createdDate && !isNaN(video.createdDate.getTime())
      ? video.createdDate.toISOString().split('T')[0]
      : undefined;

    urls.push({
      loc: `${baseUrl}/#video/${video.id}`,
      lastmod: lastmod,
      changefreq: 'monthly',
      priority: 0.6
    });
  });

  return urls;
}

/**
 * Generate XML sitemap string
 */
export function generateSitemapXML(urls: SitemapUrl[]): string {
  const urlEntries = urls.map(url => {
    let entry = `  <url>\n    <loc>${url.loc}</loc>\n`;
    
    if (url.lastmod) {
      entry += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    
    if (url.changefreq) {
      entry += `    <changefreq>${url.changefreq}</changefreq>\n`;
    }
    
    if (url.priority !== undefined) {
      entry += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    }
    
    entry += '  </url>';
    return entry;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Get SEO-friendly URL slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/_/g, '-') // Replace underscores with hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Validate URL structure for SEO
 */
export function isValidSEOUrl(url: string): boolean {
  // Check if URL follows SEO best practices
  const urlPattern = /^[a-z0-9-/]+$/;
  
  // URL should be lowercase, use hyphens, and contain only alphanumeric characters
  if (!urlPattern.test(url)) {
    return false;
  }

  // URL should not have consecutive hyphens
  if (url.includes('--')) {
    return false;
  }

  // URL should not start or end with hyphen
  if (url.startsWith('-') || url.endsWith('-')) {
    return false;
  }

  return true;
}

/**
 * Extract keywords from text for SEO
 */
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
  // Remove common stop words
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with', 'this', 'but', 'they', 'have', 'had',
    'what', 'when', 'where', 'who', 'which', 'why', 'how', 'about'
  ]);

  // Extract words and count frequency
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  const frequency = new Map<string, number>();
  words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  });

  // Sort by frequency and return top keywords
  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}
