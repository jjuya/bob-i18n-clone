import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Row, Col, Button, Divider } from 'antd'
import { HeaderContainer, HeaderContentWrapper, HeaderMenu } from './layout.style'

import { CDN_ENDPOINT } from '@env'

export const Header = ({
	lang,
	onClickLangBtn,
	...props
}: {
	lang: string
	onClickLangBtn: Event
}) => {
	const router = useRouter()

	const [menuActiveKey, setMenuActiveKey] = useState(router.asPath.substring(2))

	const menuItems = {
		ko: [
			{ key: 'about_us', label: '회사소개' },
			{ key: 'factory', label: '협력공장' },
			{ key: 'location', label: '오시는길' },
			{ key: 'business', label: '사업소개' },
		],
		en: [
			{ key: 'about_us', label: 'Introduction' },
			{ key: 'factory', label: 'Cooperative factory' },
			{ key: 'location', label: 'Location' },
			{ key: 'business', label: 'Business introduction' },
		],
		vi: [
			{ key: 'about_us', label: 'Giới thiệu Công ty' },
			{ key: 'factory', label: 'Nhà máy hợp tác' },
			{ key: 'location', label: 'Giới thiệu Công ty' },
			{ key: 'business', label: 'Địa chỉ' },
		],
		ja: [
			{ key: 'about_us', label: '会社紹介' },
			{ key: 'factory', label: '協力工場' },
			{ key: 'location', label: '会社の位置' },
			{ key: 'business', label: '事業紹介' },
		],
	}

	const onClickMenu = (key: string) => () => {
		setMenuActiveKey(key)
	}

	return (
		<HeaderContainer>
			<HeaderContentWrapper>
				<Row justify="space-between" className="company-info-wrapper">
					<Col className="menu-wrapper">
						<Link href={router?.pathname} className="logo-wrapper">
							<img
								src={`${CDN_ENDPOINT}/static/images/main-logo.jpg`}
								alt="BOB_LOGO"
							/>
						</Link>

						<HeaderMenu>
							{menuItems[lang]?.map((item, i) => (
								<Link
									href={`#${item.key}`}
									className={menuActiveKey === item?.key ? 'active' : null}
									onClick={onClickMenu(item?.key)}>
									{item.label}
								</Link>
							))}
						</HeaderMenu>
					</Col>
					<Col className="language-wrapper">
						<Button type="link" onClick={onClickLangBtn('ko')}>
							한국어
						</Button>
						<Divider type="vertical" className="divider" />
						<Button type="link" onClick={onClickLangBtn('en')}>
							English
						</Button>
						<Divider type="vertical" className="divider" />
						<Button type="link" onClick={onClickLangBtn('vi')}>
							Tiếng Việt
						</Button>
						<Divider type="vertical" className="divider" />
						<Button type="link" onClick={onClickLangBtn('ja')}>
							日本語
						</Button>
					</Col>
				</Row>
			</HeaderContentWrapper>
		</HeaderContainer>
	)
}
