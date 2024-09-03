import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Row, Col, Button, Divider } from 'antd'
import { HeaderContainer, HeaderContentWrapper, HeaderMenu } from './layout.style'

export const Header = ({
	lang,
	onClickLangBtn,
	...props
}: {
	lang: string
	onClickLangBtn: Event
}) => {
	const CDN_ENDPOINT = process.env.CDN_ENDPOINT

	const headerContent = useTranslations('HEADER')

	const router = useRouter()

	const [menuActiveKey, setMenuActiveKey] = useState(router.asPath.substring(2))

	const menuKeys = ['about_us', 'factory', 'location', 'business']

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
							{menuKeys?.map((key: string) => (
								<Link
									href={`#${key}`}
									className={menuActiveKey === key ? 'active' : undefined}
									onClick={onClickMenu(key)}>
									{headerContent(`menuItems.${key}`)}
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
