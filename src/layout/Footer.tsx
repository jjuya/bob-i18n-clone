import React from 'react'
import { Row, Col, Button, Divider } from 'antd'
import { FooterContainer, FooterContentWrapper } from './layout.style'

import { CDN_ENDPOINT } from '@env'

type FooterContentType = {
	companyName?: string
	ceo?: { label?: string; value?: string }
	businessRegistrationNumber?: { label?: string; value?: string }
	address?: {
		origin?: string
		en?: string
	}
	contact?: string
}

export const Footer = ({ lang, ...props }: { lang: string }) => {
	const footerContents: FooterContentType | object = {}

	return (
		<FooterContainer>
			<FooterContentWrapper>
				<Row justify="space-between" className="company-info-wrapper">
					<Col xl={20} lg={20} md={24} sm={24} xs={24}>
						<div className="company-info">
							<p className="company-name">{footerContents?.companyName}</p>
						</div>
						<div className="company-info">
							<p className="label">{footerContents?.ceo?.label}</p>
							<p>{footerContents?.ceo?.value}</p>
						</div>
						<div className="company-info">
							<p className="label">
								{footerContents?.businessRegistrationNumber?.label}
							</p>
							<p>{footerContents?.businessRegistrationNumber?.value}</p>
						</div>
						{!!footerContents?.address?.origin && (
							<div className="company-info">
								<p>{footerContents?.address?.origin}</p>
							</div>
						)}
						{!!footerContents?.address?.en && (
							<div className="company-info">
								<p>{footerContents?.address?.en}</p>
							</div>
						)}
					</Col>
					<Col xl={4} lg={4} md={24} sm={24} xs={24}>
						<a href="mailto:gksdyd88@gmail.com">
							<Button block className="mail-btn">
								{footerContents?.contact}
							</Button>
						</a>
					</Col>
				</Row>

				<Divider className="divider" />

				<Row justify="space-between">
					<Col>
						<img
							src={`${CDN_ENDPOINT}/static/images/logo.png`}
							alt="BOB_LOGO"
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
