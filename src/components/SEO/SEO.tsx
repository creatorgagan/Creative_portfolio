import { useEffect } from 'react';
import { updateMetaTags, MetaTags } from '../../utils/seo';

interface SEOProps extends MetaTags {
  children?: React.ReactNode;
}

/**
 * SEO component for managing page meta tags and structured data
 * This component updates the document head with SEO-optimized meta tags
 */
export function SEO({ children, ...metaTags }: SEOProps) {
  useEffect(() => {
    updateMetaTags(metaTags);
  }, [metaTags]);

  return <>{children}</>;
}

export default SEO;
