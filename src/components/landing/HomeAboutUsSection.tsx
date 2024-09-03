import React from 'react'
import { useTranslations } from 'next-intl'
import { Col, Row } from 'antd'
import { IntroSection } from './home.style'

export const HomeAboutUsSection = ({ CDN_ENDPOINT, ...props }: { CDN_ENDPOINT: string | undefined }) => {
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
						<p className="intro-description">
							I am very happy to introduce you to our BOB Agricultural Products Smart
							Processing Plant.
						</p>
						<p className="intro-description">
							BOB is a smart agricultural product processing company that focuses on
							seeding, cultivating, harvesting, distributing, processing, and
							exporting high-quality agricultural products based on cutting-edge
							technology and expertise.
						</p>
						<p className="intro-description">
							Our BOB plant is equipped with the latest technology and equipment, and
							agricultural experts work together to produce the best quality and best
							results, and we grow and harvest crops such as various vegetables and
							fruits to provide fresh and healthy agricultural products.
						</p>

						<p className="intro-description">
							Bob's goal is to provide the safest and highest quality agricultural
							products to customers around the world.
						</p>

						<p className="intro-description">
							Bob Co., Ltd. operates a strict quality control system to ensure that
							all products are safe and fresh, pursues sustainable agriculture, and
							emphasizes environmental protection and social responsibility. If we
							cooperate with BOB Co., Ltd., we can stably supply high-quality
							agricultural products through smart farms and smart factory management
							systems, and we can build a successful business together through our
							expertise and experience.
						</p>

						<p className="intro-description">
							If you would like more information or are interested in cooperation,
							please feel free to contact us. Bob Co., Ltd. will respond promptly and
							kindly to your inquiries at any time.
						</p>

						<p className="intro-description">Thank you very much.</p>

						<div className="sign-wrapper">
							<p>
								<b>{t('sign.label')}</b>
								{!t('sign.name') ? t('sign.name') : null}
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
