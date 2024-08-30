import React from 'react'
import { DocumentSection } from './home.style'
import { Button, Col, Row } from 'antd'

export const HomeBusinessSection = ({ CDN_ENDPOINT, ...props }: { CDN_ENDPOINT: string }) => (
	<DocumentSection id="business">
		<Row gutter={32} justify="space-between" align="middle" className="document-wrapper">
			<Col span={24} className="title-wrapper">
				<h2 className="title">DOWNLOAD</h2>
			</Col>
			<Col offset={4} span={16} className="img-wrapper">
				<img src={`${CDN_ENDPOINT}/static/images/home/pdf-img.png`} alt="회사소개서" />
			</Col>
			<Col span={24}>
				<Row gutter={16}>
					<Col offset={2} span={10}>
						<a href={`${CDN_ENDPOINT}/static/etc/About_BOB(ko).pdf`} download>
							<Button block className="ko-btn">
								KOREAN
							</Button>
						</a>
					</Col>
					<Col span={10}>
						<a href={`${CDN_ENDPOINT}/static/etc/About_BOB(jp).pdf`} download>
							<Button block className="ja-btn">
								日本語
							</Button>
						</a>
					</Col>
				</Row>
			</Col>
		</Row>
	</DocumentSection>
)
