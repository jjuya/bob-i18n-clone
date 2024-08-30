import React from 'react'
import { FactorySection } from './home.style'
import { Col, Row } from 'antd'

export const HomeFactorySection = ({ CDN_ENDPOINT, ...props }: { CDN_ENDPOINT: string }) => (
	<FactorySection id="factory">
		<Row gutter={32} justify="space-between" align="middle" className="factory-list">
			<Col span={24} className="factory-list-title">
				<span>Within the country</span>
			</Col>
			<Col xl={8} lg={8} md={8} sm={24} xs={24}>
				<img
					src={`${CDN_ENDPOINT}/static/images/home/factory-01.png`}
					alt="eco-friendly agricultural product processing plant"
				/>
				<p>eco-friendly agricultural product processing plant</p>
			</Col>
			<Col xl={8} lg={8} md={8} sm={24} xs={24}>
				<img
					src={`${CDN_ENDPOINT}/static/images/home/factory-02.png`}
					alt="Kimchi and pickles processing plant"
				/>
				<p>Kimchi and pickles processing plant</p>
			</Col>
			<Col xl={8} lg={8} md={8} sm={24} xs={24}>
				<img
					src={`${CDN_ENDPOINT}/static/images/home/factory-03.png`}
					alt="custom-made lunch-box processing plant"
				/>
				<p>custom-made lunch-box processing plant</p>
			</Col>
		</Row>
		<Row gutter={32} justify="space-between" align="middle" className="factory-list">
			<Col span={24} className="factory-list-title">
				<span>Outside the country</span>
			</Col>
			<Col xl={12} lg={12} md={12} sm={24} xs={24}>
				<img
					src={`${CDN_ENDPOINT}/static/images/home/factory-04.jpg`}
					alt="Vietnam Cần Thơ Smart Agricultural Products Processing Plant"
				/>
				<p>
					Vietnam Cần Thơ Smart Agricultural Products Processing Plant
					<br />
					(first completed in 2024 / 15,000 pyeong)
				</p>
			</Col>
			<Col xl={12} lg={12} md={12} sm={24} xs={24}>
				<img
					src={`${CDN_ENDPOINT}/static/images/home/factory-05.png`}
					alt="Vietnam Hậu Giang Agricultural Products Processing Plant"
				/>
				<p>
					Vietnam Hậu Giang Agricultural Products Processing Plant
					<br />
					(completed in March 2025 / 21,000 pyeong)
				</p>
			</Col>
		</Row>
	</FactorySection>
)
