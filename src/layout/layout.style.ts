import styled from 'styled-components'
import { Layout } from 'antd'
import { antMedia } from '@/utils/mediaQuery'

const { Header, Footer, Sider, Content } = Layout

export const LayoutContainer = styled(Layout)`
	background: #ffffff;
`

export const HeaderContainer = styled(Header)`
	position: fixed;

	padding: 16px;
	width: 100%;
	height: auto;

	background: #ffffff;

	z-index: 999;

	.ant-btn-link {
		font-family: Inter, serif;
		font-weight: 300;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		color: #233d63;
	}

	.ant-btn-link:hover,
	.ant-btn-link:focus {
		color: #657791 !important;
	}

	.divider {
		margin: 0;

		border-color: #233d63;
	}
`

export const HeaderContentWrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;

	.menu-wrapper {
		display: flex;
		column-gap: 16px;

		.logo-wrapper {
			height: 64px;

			img {
				height: 100%;
				width: auto;
			}
		}
	}

	.language-wrapper {
		.ant-btn-link {
			font-family: Inter, serif;
			font-weight: 300;
			font-size: 16px;
			line-height: 20px;
			text-align: center;
			color: #233d63;
		}
		.ant-btn-link:hover,
		.ant-btn-link:focus {
			color: #657791 !important;
		}
		.divider {
			margin: 0;
			border-color: #233d63;
		}
	}
`

export const HeaderMenu = styled.div`
	display: flex;
	align-items: center;

	height: 64px;

	border: none;

	a {
        padding: 8px 16px;
        
		color: #000000;

		font-size: 16px;
		line-height: 20px;
		text-align: center;

		&:hover,
		&:focus {
			font-weight: bold;
		}

		&.active {
            font-weight: bold;
        }
	}
    
`

export const FooterContainer = styled(Footer)`
	padding: 64px;
	${antMedia.lessThan('md')`
        padding: 64px 16px;
    `}
	background: rgba(1, 109, 149, 0.11);
`

export const FooterContentWrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	color: #032e32;
	.company-info-wrapper {
		margin-bottom: 96px;
		${antMedia.lessThan('md')`
            margin-bottom: 64px;
        `}
	}
	.company-info {
		display: flex;

		margin-top: 0;
		margin-bottom: 16px;
		&:last-child {
			margin-bottom: 0;
			${antMedia.lessThan('lg')`
                margin-bottom: 64px;
            `}
		}

		.company-name {
			font-weight: 700;
			font-size: 24px !important;
			line-height: 36px;
		}

		p {
			margin: 0;

			font-weight: 400;
			font-size: 16px !important;
			line-height: 28px !important;
			color: #032e32;
		}

		p.label {
			width: 150px;
			margin-right: 16px;
			font-weight: 700;
			line-height: 30px;
		}
	}
	.ant-btn {
		display: flex;
		align-items: center;
		height: 60px;
		background: #5aa695;
		border-radius: 36px;
		font-weight: 700;
		font-size: 20px;
		text-align: center;
		color: #1b222b;
	}
	.ant-btn:hover,
	.ant-btn:focus {
		border-color: #519586 !important;
		background: #519586 !important;
		color: #1b222b !important;
	}
	.logo {
		max-width: 100px;
		height: auto;
	}
	.copyright {
		margin: 0;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		color: #5d6c6c;
	}
	.divider {
		border-color: #5d6c6c;
	}
`
