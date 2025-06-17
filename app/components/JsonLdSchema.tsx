import React from 'react';
import Script from 'next/script';

export default function JsonLdSchema() {
  // Person schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Weili Dai',
    jobTitle: 'Tech Lead - Full Stack Developer',
    description: 'I craft end-to-end solutions with 10+ years of experience building scalable applications and leading development teams.',
    url: 'https://www.weilidai.co.uk',
    sameAs: [
      // Add your social profiles here
      'https://github.com/weilidai2001', // Update with your actual GitHub profile
      'https://www.linkedin.com/in/weili-dai/', // Update with your actual LinkedIn profile
    ],
    knowsAbout: [
      'Full-Stack Development',
      'JavaScript',
      'React.js',
      'TypeScript',
      'Node.js',
      'DevOps',
      'Cloud Solutions',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Gumtree',
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'CNN',
      },
      {
        '@type': 'Organization',
        name: 'Sky',
      },
      {
        '@type': 'Organization',
        name: 'BBC',
      },
    ],
  };

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Weili Dai - Full-Stack Developer Portfolio',
    url: 'https://www.weilidai.co.uk',
    description:
      'Welcome to my portfolio! I am a passionate full-stack developer who bridges the gap between frontend and backend development.',
    author: {
      '@type': 'Person',
      name: 'Weili Dai',
    },
  };

  return (
    <>
      <Script
        id="json-ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
