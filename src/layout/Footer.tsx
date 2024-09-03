import React from 'react'
import { useTranslations } from 'next-intl'
import { Row, Col, Button, Divider } from 'antd'
import { FooterContainer, FooterContentWrapper } from './layout.style'

export const Footer = ({ lang, ...props }: { lang: string }) => {
	const CDN_ENDPOINT = process.env.CDN_ENDPOINT

	const footerContents = useTranslations('FOOTER')

	return (
		<FooterContainer>
			<FooterContentWrapper>
				<Row justify="space-between" className="company-info-wrapper">
					<Col xl={20} lg={20} md={24} sm={24} xs={24}>
						<div className="company-info">
							<p className="company-name">{footerContents('companyName')}</p>
						</div>
						<div className="company-info">
							<p className="label">{footerContents('info.ceo.label')}</p>
							<p>{footerContents('info.ceo.value')}</p>
						</div>
						<div className="company-info">
							<p className="label">
								{footerContents('info.businessRegistrationNumber.label')}
							</p>
							<p>{footerContents('info.businessRegistrationNumber.value')}</p>
						</div>
						{footerContents('info.address.origin') !== '' && (
							<div className="company-info">
								<p>{footerContents('info.address.origin')}</p>
							</div>
						)}
						{footerContents('info.address.en') !== '' && (
							<div className="company-info">
								<p>{footerContents('info.address.en')}</p>
							</div>
						)}
					</Col>
					<Col xl={4} lg={4} md={24} sm={24} xs={24}>
						<a href={footerContents('contact.href')}>
							<Button block className="mail-btn">
								{footerContents('contact.label')}
							</Button>
						</a>
					</Col>
				</Row>

				<Divider className="divider" />

				<Row justify="space-between">
					<Col>
						<img
							src={`${CDN_ENDPOINT}${footerContents('logo.src')}`}
							alt={footerContents('logo.src')}
							className="logo"
						/>
					</Col>
					<Col>
						<p className="copyright">Copyright © 2024 BOB all rights reserved.</p>
					</Col>
				</Row>
			</FooterContentWrapper>
		</FooterContainer>
	)
}
