import React from 'react'
import { useTranslations } from 'next-intl'
import { Col, Row } from 'antd'
import { IntroSection } from './home.style'

export const HomeAboutUsSection = ({
	CDN_ENDPOINT,
	...props
}: {
	CDN_ENDPOINT: string | undefined
}) => {
	const t = useTranslations('ABOUT_US')

	return (
		<IntroSection id="about_us">
			<div className="section-title-wrapper">
				<h2 className="section-title">{t('greeting.title')}</h2>
			</div>

			<div className="intro-wrapper">
				<Row gutter={32} justify="space-between">
					<Col xl={6} lg={6} md={6} sm={24} xs={24} className="ceo-img-wrapper">
						<img src={`${CDN_ENDPOINT}${t('ceoImg.src')}`} alt={t('ceoImg.alt')} />
					</Col>
					<Col
						xl={18}
						lg={18}
						md={18}
						sm={24}
						xs={24}
						className="intro-description-wrapper">
						<h3 className="intro-title">{t('greeting.subtitle')}</h3>
						<div dangerouslySetInnerHTML={{__html: t.raw('greeting.content')}}/>

						<div className="sign-wrapper">
							<p>
								<b>{t('sign.label')}</b>
								{t('sign.name')}
							</p>
							<img
								src={`${CDN_ENDPOINT}${t('sign.img.src')}`}
								alt={t('sign.img.alt')}
								className="sign-img"
							/>
						</div>
					</Col>
				</Row>
			</div>
		</IntroSection>
	)
}
