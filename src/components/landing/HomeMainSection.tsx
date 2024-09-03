import React from 'react'
import { useTranslations } from 'next-intl'
import { MainSection } from './home.style'

export const HomeMainSection = ({ CDN_ENDPOINT, ...props }: { CDN_ENDPOINT: string | undefined }) => {
	const t = useTranslations('MAIN')

	return (
		<MainSection imageUrl={`${CDN_ENDPOINT}/static/images/home/main-bg.png`}>
			<div className="main-wrapper">
				<div className="title-wrapper">
					<img
						src={`${CDN_ENDPOINT}${t('img.src')}`}
						alt={t('img.alt')}
						className="logo"
					/>
					<h1>{t('title')}</h1>
				</div>
			</div>
		</MainSection>
	)
}
