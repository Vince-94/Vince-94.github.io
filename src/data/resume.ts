import { parse } from 'yaml';
import { z } from 'astro/zod';
import resumeYamlRaw from './resume.yaml?raw';

const resumeYaml = parse(resumeYamlRaw);

const resumeSchema = z.object({
	basics: z.object({
		name: z.string(),
		label: z.string(),
		email: z.email(),
		phone: z.string().optional(),
		url: z.url(),
		summary: z.string(),
		location: z.object({
			address: z.string().optional(),
			postalCode: z.string().optional(),
			city: z.string(),
			countryCode: z.string(),
			region: z.string(),
		}),
	}),
	work: z.array(
		z.object({
			name: z.string(),
			position: z.string(),
			url: z.url().optional(),
			startDate: z.string(),
			endDate: z.string(),
			summary: z.string(),
			highlights: z.array(z.string()),
		}),
	),
	projects: z.array(
		z.object({
			name: z.string(),
			summary: z.string(),
			highlights: z.array(z.string()),
			startDate: z.string(),
			endDate: z.string(),
			url: z.url().optional(),
		}),
	),
	education: z.array(
		z.object({
			institution: z.string(),
			location: z.string(),
			url: z.url().optional(),
			area: z.string(),
			studyType: z.string(),
			startDate: z.string().optional(),
			endDate: z.string().optional(),
			courses: z.array(z.string()).optional(),
		}),
	),
	skills: z.array(
		z.object({
			name: z.string(),
			level: z.string(),
			keywords: z.array(z.string()),
		}),
	),
	languages: z.array(
		z.object({
			language: z.string(),
			fluency: z.string(),
		}),
	),
});

export type Resume = z.infer<typeof resumeSchema>;
export const resume: Resume = resumeSchema.parse(resumeYaml);
