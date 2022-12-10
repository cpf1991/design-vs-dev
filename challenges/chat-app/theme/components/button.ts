import { mode } from '@chakra-ui/theme-tools';
export const buttonStyles = {
	components: {
		Button: {
			baseStyle: {
				borderRadius: '16px',
				boxShadow: '45px 76px 113px 7px rgba(112, 144, 176, 0.08)',
				transition: '.25s all ease',
				boxSizing: 'border-box',
				_focus: {
					boxShadow: 'none'
				},
				_active: {
					boxShadow: 'none'
				}
			},
			variants: {
				outline: () => ({
					borderRadius: '16px'
				}),
				brand: (props: any) => ({
					bg: mode('brand.500', 'brand.400')(props),
					color: 'white',
					_focus: {
						bg: mode('brand.500', 'brand.400')(props)
					},
					_active: {
						bg: mode('brand.500', 'brand.400')(props)
					},
					_hover: {
						bg: mode('brand.600', 'brand.400')(props)
					}
				}),
				darkBrand: (props: any) => ({
					bg: mode('brand.900', 'brand.400')(props),
					color: 'white',
					_focus: {
						bg: mode('brand.900', 'brand.400')(props)
					},
					_active: {
						bg: mode('brand.900', 'brand.400')(props)
					},
					_hover: {
						bg: mode('brand.800', 'brand.400')(props)
					}
				})
			}
		}
	}
};
