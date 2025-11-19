import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Sazzad Blog Admin',
    },
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date', defaultValue: { kind: 'today' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'SaaS', value: 'saas' },
            { label: 'Product Management', value: 'product-management' },
            { label: 'Leadership', value: 'leadership' },
            { label: 'Compliance', value: 'compliance' },
            { label: 'Career', value: 'career' },
            { label: 'Technology', value: 'technology' },
          ],
          defaultValue: 'product-management',
        }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
});
