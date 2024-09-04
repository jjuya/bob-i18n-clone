import React from 'react'
import { useTranslations } from 'next-intl'
import { Col, Row } from 'antd'
import { FactorySection } from './home.style'

export const HomeFactorySection = ({
	CDN_ENDPOINT,
	...props
}: {
	CDN_ENDPOINT: string | undefined
}) => {
	const t = useTranslations('FACTORY')

	const withInFactoryKeys = ['factory1', 'factory2', 'factory3']
	const outsideFactoryKeys = ['factory1', 'factory2']

	return (
		<FactorySection id="factory">
			<Row gutter={32} justify="space-between" align="middle" className="factory-list">
				<Col span={24} className="factory-list-title">
					<span>{t('withIn.title')}</span>
				</Col>
				{withInFactoryKeys?.map((key) => {
					return (
						<Col xl={8} lg={8} md={8} sm={24} xs={24}>
							<img
								src={`${CDN_ENDPOINT}${t(`withIn.factories.${key}.img.src`)}`}
								alt={t(`withIn.factories.${key}.img.alt`)}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: t(`withIn.factories.${key}.title`),
								}}
							/>
						</Col>
					)
				})}
			</Row>
			<Row gutter={32} justify="space-between" align="middle" className="factory-list">
				<Col span={24} className="factory-list-title">
					<span>{t('outside.title')}</span>
				</Col>
				{outsideFactoryKeys?.map((key) => {
					return (
						<Col xl={12} lg={12} md={12} sm={24} xs={24}>
							<img
								src={`${CDN_ENDPOINT}${t(`outside.factories.${key}.img.src`)}`}
								alt={t(`outside.factories.${key}.img.alt`)}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: t(`outside.factories.${key}.title`),
								}}
							/>
						</Col>
					)
				})}
			</Row>
		</FactorySection>
	)
}
