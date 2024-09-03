import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'antd'
import { Header } from './Header'
import { Footer } from './Footer'
import { LayoutContainer } from './layout.style'
import { GetStaticPropsContext } from 'next'

const { Content } = Layout

export const ApplicationLayout = ({
	children,
	backgroundColor,
	...props
}: {
	children: ReactNode
	backgroundColor: string | undefined
}) => {
	const router = useRouter()

	const [lang, setLang] = useState('ko')

	useEffect(() => {
		const lang = router.pathname.split('/')[1]

		setLang(lang || 'ko')
	}, [])

	const contentStyle = { paddingTop: 0, paddingBottom: 0 }

	if (backgroundColor !== undefined || backgroundColor !== null) {
		Object.assign(contentStyle, { backgroundColor })
	}

	const onClickLangBtn = (lang: string) => () => {
		setLang(lang)
		if (lang === 'ko') {
			router.push('/')
		} else {
			router.push(lang)
		}
	}

	return (
		<LayoutContainer className="layout">
			<Header lang={lang} onClickLangBtn={onClickLangBtn} />
			<Content style={contentStyle}>{children}</Content>
			<Footer lang={lang} />
		</LayoutContainer>
	)
}