import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return (
		<NextIntlClientProvider
			locale={router.locale}
			messages={pageProps.messages}
			timeZone={pageProps.timeZone}
		>
			<Component className={`${inter.className} ${poppins.className}`} {...pageProps} />
		</NextIntlClientProvider>
	)
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
	const ctx = await App.getInitialProps(context)

	return { ...ctx }
}

export default MyApp
