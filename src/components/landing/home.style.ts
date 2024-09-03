import styled from 'styled-components'
import { antMedia } from '@/utils/mediaQuery'

export const HomeContainer = styled.div`
	.section-title-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 64px;
		text-align: center;
		.section-title {
			font-family:
				Noto Sans KR,
				serif;
			font-size: 40px;
			font-weight: 700;
			line-height: 20px;
			text-align: center;
		}
		.title-border {
			width: 15%;
			height: 5px;
			background: #01a552;
			border-radius: 50%;
		}
	}
`

export const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 1440px;
`

export const MainSection = styled.section<{imageUrl: string}>`
	padding: 20px 16px;
	height: 1010px;
	background: #ffffff url('${(props: any) => props.imageUrl}') no-repeat right bottom;
	background-size: 70% 70%;
	.main-wrapper {
		position: relative;
		margin: 0 auto;
		max-width: 1440px;
		height: inherit;
		.title-wrapper {
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			width: 100%;
			text-align: center;
			h1 {
				margin: 0;
				font-family:
					Noto Sans KR,
					serif;
				font-size: 48px;
				font-weight: normal;
				line-height: 20px;
				text-align: center;
			}

			.logo {
				width: 640px;

				margin-bottom: 16px;
			}
		}
	}
`

export const IntroSection = styled.section`
	padding: 128px 16px;
	background: #fafafa;
	.intro-wrapper {
		max-width: 1440px;
		margin: 0 auto;
	}
	.ceo-img-wrapper {
		img {
			width: 100%;
		}
	}
	.intro-description-wrapper {
		h3 {
			margin-top: 0;
			margin-bottom: 64px;

			font-family: Noto Sans KR;
			font-size: 28px;
			font-weight: 700;
			line-height: 40px;
			text-align: center;
			color: #000000;
		}
		.intro-description {
			font-family:
				Noto Sans KR,
				serif;
			font-size: 18px;
			font-weight: 500;
			line-height: 25px;
			text-align: left;
			color: #000000;
			white-space: pre-wrap;
		}
		.sign-wrapper {
			display: flex;
			justify-content: end;
			align-items: center;
			margin-top: 32px;
			p {
				font-family:
					Noto Sans KR,
					serif;
				font-size: 24px;
				line-height: 20px;
				color: #000000;
				b {
					margin-right: 16px;
				}
			}
			img {
				height: 48px;
				width: auto;
			}
		}
	}
`

export const FactorySection = styled.section`
	padding: 128px 32px;
	background: #fff;
	.factory-list {
		margin-bottom: 32px;
		&:last-child {
			margin-bottom: 0px;
		}
		.factory-list-title {
			padding-top: 0 !important;
			padding-bottom: 0 !important;
			border-left: 3px solid #01a552;
			font-family:
				Noto Sans KR,
				serif;
			font-size: 25px;
			font-weight: 500;
			text-align: left !important;
			color: #000000;
		}
		.ant-col {
			padding: 16px;
			text-align: center;
			img {
				width: 100%;
				height: auto;
			}
			p {
				font-family:
					Noto Sans KR,
					serif;
				font-size: 25px;
				font-weight: 700;
				text-align: center;
				color: #000000;
			}
		}
	}
`

export const ContactSection = styled.section`
	padding: 128px 16px;
	background: #00b0f00a;
	.map-wrapper {
		height: 480px;
		${antMedia.lessThan('md')`
            height: 240px;
        `}
	}
	.contact-info {
		display: flex;
		align-items: center;
		font-family:
			Noto Sans KR,
			serif;
		font-size: 28px;
		font-weight: 500;
		color: #000;
		white-space: pre-wrap;
		.label {
			display: flex;
			align-items: center;
			margin-right: 16px;
			svg {
				margin-right: 8px;
				color: #808080;
			}
		}
	}
`

export const DocumentSection = styled.section`
	padding: 128px 16px;
	.document-wrapper {
		img {
			width: 100%;
		}
		.title {
			font-family:
				Noto Sans KR,
				serif;
			font-size: 30px;
			font-weight: 700;
			text-align: center;
		}
		.sub-title {
			font-family:
				Noto Sans KR,
				serif;
			font-size: 20px;
			font-weight: 500;
			text-align: center;
		}

		.img-wrapper {
			margin-bottom: 32px;
		}

		.ant-btn {
			display: flex;
			align-items: center;
			height: 60px;
			font-family:
				Noto Sans KR,
				serif;
			font-size: 24px;
			font-weight: 700;
			text-align: center;
			&.ko-btn {
				background: #527eca;
				color: #ffffff;
			}
			&.ja-btn {
				background: #a9a9a9;
				color: #1b222b;
			}
		}
		.ant-btn:hover,
		.ant-btn:focus {
			&.ko-btn {
				border-color: #7497d4 !important;
				background: #7497d4 !important;
				color: #ffffff !important;
			}
			&.ja-btn {
				border-color: #c2c2c2 !important;
				background: #c2c2c2 !important;
				color: #1b222b !important;
			}
		}
	}
`
