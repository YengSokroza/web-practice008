import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://metadata-vercel-nextjs.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://metadata-vercel-nextjs.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://metadata-vercel-nextjs.vercel.app/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },
    {
      url: 'https://metadata-vercel-nextjs.vercel.app/service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}