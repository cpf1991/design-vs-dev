import { mode } from '@chakra-ui/theme-tools';
export const globalStyles = {
	colors: {
		brand:
		{
			50: '#fff2de',
			100: '#fddcb2',
			200: '#fac585',
			300: '#f6ad55',
			400: '#f39627',
			500: '#da7c0f',
			600: '#aa6109',
			700: '#794504',
			800: '#4a2800',
			900: '#1d0d00',
		},
		brandDark:
		{
			50: '#efeff6',
			100: '#cfcedf',
			200: '#aeaecb',
			300: '#8d8db8',
			400: '#6d6ca5',
			500: '#53528c',
			600: '#41406c',
			700: '#2f2e4c',
			800: '#1c1b2d',
			900: '#090910',
		}
	},
	styles: {
		global: (props: any) => ({
			body: {
				color: mode('brand.800', 'brandDark.900')(props), //明暗色
				bg: mode('brand.50', 'brandDark.800')(props),
				fontFamily: 'DM Sans',//字体类型
				letterSpacing: '-0.5px' //字符间距
			}
		})
	}
};
