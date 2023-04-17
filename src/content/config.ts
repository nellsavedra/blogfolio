import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        date: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        image: z.string()
    }),
});

const code = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        date: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        image: z.string()
    }),
});

export const collections = { blog, code };
