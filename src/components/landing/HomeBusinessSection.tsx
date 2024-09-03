import React from 'react'
import { DocumentSection } from './home.style'
import { Button, Col, Row } from 'antd'
import { useTranslations } from 'next-intl'

export const HomeBusinessSection = ({
	CDN_ENDPOINT,
	...props
}: {
	CDN_ENDPOINT: string | undefined
}) => {
	const t = useTranslations('BUSINESS_PROFILE')

	return (
		<DocumentSection id="business">
			<Row gutter={32} justify="space-between" align="middle" className="document-wrapper">
				<Col span={24} className="title-wrapper">
					<h2 className="title">{t('title')}</h2>
				</Col>
				<Col offset={4} span={16} className="img-wrapper">
					<img src={`${CDN_ENDPOINT}${t('img.src')}`} alt={t('img.alt')} />
				</Col>
				<Col span={24}>
					<Row gutter={16}>
						<Col offset={2} span={10}>
							<a href={`${CDN_ENDPOINT}${t('ko.href')}`} download>
								<Button block className="ko-btn">
									{t('ko.label')}
								</Button>
							</a>
						</Col>
						<Col span={10}>
							<a href={`${CDN_ENDPOINT}${t('jp.href')}`} download>
								<Button block className="ja-btn">
									{t('jp.label')}
								</Button>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</DocumentSection>
	)
}
