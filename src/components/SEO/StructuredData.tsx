import { useEffect } from 'react';
import { injectStructuredData } from '../../utils/seo';

interface StructuredDataProps {
  data: string;
  id?: string;
}

/**
 * Component for injecting structured data (JSON-LD) into the page
 */
export function StructuredData({ data, id = 'structured-data' }: StructuredDataProps) {
  useEffect(() => {
    injectStructuredData(data, id);

    // Cleanup function to remove structured data when component unmounts
    return () => {
      const element = document.getElementById(id);
      if (element) {
        element.remove();
      }
    };
  }, [data, id]);

  return null; // This component doesn't render anything visible
}

export default StructuredData;
