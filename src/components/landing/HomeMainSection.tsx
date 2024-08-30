import React from 'react'
import { MainSection } from './home.style'

export const HomeMainSection = ({ CDN_ENDPOINT, ...props }: { CDN_ENDPOINT: string }) => (
	<MainSection imageurl={`${CDN_ENDPOINT}/static/images/home/main-bg.png`}>
		<div className="main-wrapper">
			<div className="title-wrapper">
				<img
					src={`${CDN_ENDPOINT}/static/images/main-logo.jpg`}
					alt="BOB_LOGO"
					className="logo"
				/>
				<h1>The freshness of Mother Nature</h1>
			</div>
		</div>
	</MainSection>
)
