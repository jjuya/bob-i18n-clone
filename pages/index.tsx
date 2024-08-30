import { GetStaticPropsContext } from 'next'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import { HomeView } from '@/views'
import { ApplicationLayout } from '@/layout'
import { MenuContext } from '@/utils/MenuContext'

import { CDN_ENDPOINT } from '@env'

export default function Home({ ...props }) {
	const [menuKey, setMenuKey] = useState('MAIN')

	const seoConfig = {
		title: 'BOB',
		description:
			'대자연의 신선함을 그대로, 건강하고 안전한 농산물로 세계 식탁을 선도하는 글로벌 전문기업',
		openGraph: {
			type: 'website',
			locale: 'ko_KR',
			title: 'BOB',
			description:
				'대자연의 신선함을 그대로, 건강하고 안전한 농산물로 세계 식탁을 선도하는 글로벌 전문기업',
			site_name: 'BOB',
			images: [
				{
					url: `${CDN_ENDPOINT}/static/images/main_logo.jpg`,
					alt: 'BOB',
				},
			],
		},
	}

	return (
		<MenuContext.Provider value={{ menuKey, setMenuKey }}>
			<NextSeo {...seoConfig} />

			<ApplicationLayout backgroundColor={'#fff'}>
				<HomeView CDN_ENDPOINT={CDN_ENDPOINT} />
			</ApplicationLayout>
		</MenuContext.Provider>
	)
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			messages: (await import(`../messages/shared/${locale}.json`)).default,
		},
	}
}
