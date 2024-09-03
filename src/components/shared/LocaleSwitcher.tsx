import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Divider } from 'antd'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function LocaleSwitcher() {
	const headerContent = useTranslations('HEADER')

	const router = useRouter()
	const { locales, locale: activeLocale } = router

	const otherLocales = (locales || []).filter((locale) => locale !== 'default')

	return (
		<React.Fragment>
			{otherLocales.map((locale, index) => {
				const { pathname, query, asPath } = router
				return (
					<React.Fragment>
						<Link href={{ pathname, query }} as={asPath} locale={locale} key={locale} legacyBehavior>
							<Button type="link">
								{headerContent(`languageSwitcher.${locale}`)}
							</Button>
						</Link>
						{otherLocales?.length - 1 !== index && (
							<Divider type="vertical" className="divider" />
						)}
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}
