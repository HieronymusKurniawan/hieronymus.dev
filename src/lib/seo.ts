import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Hieronymus ─ developer';
	const description = "Hey 👋 I'm Hieronymus, a developer";

	return {
		title,
		description,
		canonical: `https://hieronymus-dev.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'hieronymus',
			url: `hieronymus-dev.vercel.app/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'hieronymus-dev.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@hieronymusdev',
			site: '@hieronymusdev',
		},
		...props,
	};
}
