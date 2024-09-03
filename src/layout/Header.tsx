import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Row, Col } from 'antd'
import { HeaderContainer, HeaderContentWrapper, HeaderMenu } from './layout.style'
import LocaleSwitcher from '@/components/shared/LocaleSwitcher'

export const Header = ({ lang, ...props }: { lang: string }) => {
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
									key={key}
									className={menuActiveKey === key ? 'active' : undefined}
									onClick={onClickMenu(key)}>
									{headerContent(`menuItems.${key}`)}
								</Link>
							))}
						</HeaderMenu>
					</Col>
					<Col className="language-wrapper">
						<LocaleSwitcher />
					</Col>
				</Row>
			</HeaderContentWrapper>
		</HeaderContainer>
	)
}
