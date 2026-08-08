import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const splitWords = (val?: string) => (val ? val.split(/[,\s]+/).filter(Boolean) : []);

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			img: image(),
			importance: z.number().int(),
		}),
});

const books = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			cover: image(),
			olid: z.string().optional(),
			isbn: z.coerce.string().optional(),
			categories: z
				.string()
				.optional()
				.transform(splitWords),
			tags: z
				.string()
				.optional()
				.transform(splitWords),
			buy_link: z.url().optional(),
			started: z.coerce.date().optional(),
			finished: z.coerce.date().optional(),
			released: z.number().int(),
			stars: z.number().int().min(0).max(5),
			goodreads_review: z.coerce.string().optional(),
			status: z.enum(['Planned', 'Reading', 'Finished']),
		}),
});

export const collections = { projects, books };
