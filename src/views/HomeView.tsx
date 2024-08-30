import React from 'react'
import {
	HomeContainer,
	HomeMainSection,
	HomeAboutUsSection,
	HomeFactorySection,
	HomeBusinessSection,
} from '@/components'

export const HomeView = ({ CDN_ENDPOINT, ...props }: { CDN_ENDPOINT: string }) => {
	return (
		<HomeContainer>
			<HomeMainSection CDN_ENDPOINT={CDN_ENDPOINT} />
			<HomeAboutUsSection CDN_ENDPOINT={CDN_ENDPOINT} />
			<HomeFactorySection CDN_ENDPOINT={CDN_ENDPOINT} />
			<HomeBusinessSection CDN_ENDPOINT={CDN_ENDPOINT} />
		</HomeContainer>
	)
}
