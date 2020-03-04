module.exports = {
	prefix: '',
	important: '#wpbody',
	separator: ':',
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			landscape: {'raw': '(orientation: landscape) and (max-width: 991px)'},
		},
		colors: {
			transparent: 'transparent',
			black: {
				'100': '#050117',
				'60': '#525160',
				'30': '#9fa1a9',
				'20': '#d6d7db',
				'10': '#f1f3f4',
			},
			white: '#fff',
			red: '#fa2214',
			blue: {
				'100': '#1d2068',
				'80': '#192b8d',
				'60': '#004cd7',
				'40': '#3094ed',
				'50': '#b2ccfb'
			},
			yellow: '#fac300',
		},
		spacing: {
			'0': '0',
			'.5': '.5rem',
			'1': '1rem',
			'1.5': '1.5rem',
			'2': '2rem',
			'2.5': '2.5rem',
			'3': '3rem',
			'3.5': '3.5rem',
			'4': '4rem',
			'4.5': '4.5rem',
			'5': '5rem',
			'5.5': '5.5rem',
			'6': '6rem',
			'7.5': '7.5rem',
			'10': '10rem',
			'16': '16rem',
			'20': '20rem',
			// The following spacings have mobile and desktop versions, example usage: class="py-xl-mob md:py-xl-dsk"
			'xxl-dsk': '7.5rem',
			'xl-dsk': '5rem',
			'lg-dsk': '3.5rem',
			'md-dsk': '2.5rem',
			'sm-dsk': '1.5rem',
			'xs-dsk': '1rem',
			'xxl-mob': '5rem',
			'xl-mob': '3.5rem',
			'lg-mob': '2.5rem',
			'md-mob': '1.5rem',
			'sm-mob': '1rem',
			'xs-mob': '.5rem',
			// The following are used for grid widths/spacing (the grid is 2 columns on mobile and 12 on desktop).
			'1/2': '50%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			// Non-standard grid spacing:
			'1/8': '12.5%',
			'2/8': '25%',
			'3/8': '37.5%',
			'4/8': '50%',
			'5/8': '62.5%',
			'6/8': '75%',
			'7/8': '87.5%',
			/* The following are non-standard spacing options, please use sparingly. */
			'.15': '.15rem',
			'.2': '.2rem',
			'2.13': '2.125rem',
			'.25': '.25rem',
			'.75': '.75rem',
			'1.25': '1.25rem',
			'1.4': '1.4rem',
			'3.33%': '3.333%',
			'21.3%': '21.3%',
			'78.7%': '78.7%',
			'1/9': '11.11111%',
			'4/9': '44.44444%',
			'8/9': '88.88888%',
			'1px': '1px',
		},
		backgroundColor: theme => ({
			...theme('colors'),
			'light-overlay': 'rgba(5, 1, 23, 0.15)',
			'black-overlay': 'rgba(5, 1, 23, 0.75)',
		}),
		backgroundPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
		},
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.gray.60', 'currentColor'),
		}),
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			default: '0.25rem',
			lg: '0.5rem',
			full: '9999px',
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'1': '1px'
		},
		boxShadow: {
			default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			button: '0 16px 40px 0 rgba(23,18,48,0.25)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
			'downward-right': '0 8px 24px 0 rgba(23,18,48, 0.08)',
			none: 'none',
		},
		cursor: {
			auto: 'auto',
			default: 'default',
			pointer: 'pointer',
			wait: 'wait',
			text: 'text',
			move: 'move',
			'not-allowed': 'not-allowed',
		},
		fill: {
			current: 'currentColor',
		},
		flex: {
			'1': '1 1 0%',
			auto: '1 1 auto',
			initial: '0 1 auto',
			none: 'none',
		},
		flexGrow: {
			'0': '0',
			default: '1',
		},
		flexShrink: {
			'0': '0',
			default: '1',
		},
		fontFamily: {
			'primary': [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif'
			],
			'secondary': [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif'
			]
		},
		fontSize: {
			base: '1rem',
			sm: '.875rem',
			lg: '1.125rem',
			// The following font sizes have mobile and desktop versions, example usage: class="text-1xl-mob md:text-1xl-dsk"
			'1xl-dsk': '1.5rem',
			'2xl-dsk': '2rem',
			'3xl-dsk': '2.5rem',
			'4xl-dsk': '3.5rem',
			'1xl-mob': '1.25rem',
			'2xl-mob': '1.6875rem',
			'3xl-mob': '2.125rem',
			'4xl-mob': '2.975rem',
		},
		fontWeight: {
			hairline: '100',
			thin: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900'
		},
		height: theme => ({
			auto: 'auto',
			...theme('spacing'),
			'screen-2.75': 'calc(100vh - 2.75rem)',
			'55vh': '55vh',
			'87vh': '87vh',
			full: '100%',
			screen: '100vh'
		}),
		inset: {
			'0': '0',
			auto: 'auto',
			'-2.13': '-2.125rem',
			'-2.75': '-2.75rem',
			'-5': '-5rem',
			'6.25': '6.25rem',
			'41%': '41%',
			/* Left position an element on the 5th column:
			 * 50%: Start with it in the centre of the screen
			 *    - 3rem [1.5 gutters] - ( 100vw - 6.667% - 22rem ) / 6 [width of 2 columns]
			 * OR - 3rem [1.5 gutters] - ( 69.375rem - 22rem ) / 6 [width of 2 gutters when container is at its max width] =
			 * Usage: left-col-5 xl:left-col-5-xl
			*/
			'col-5': 'calc(50% - 3rem - ( 100vw - 6.667% - 22rem ) / 6)',
			'col-5-xl': 'calc(50% - 3rem - ( 69.375rem - 22rem ) / 6)',
			// Align to container edge.
			// Usage: right-container xl:right-container-xl
			'container': '3.333%',
			'container-xl': 'calc( (100vw - 69.375rem)/2 )',
		},
		letterSpacing: {
			none: '1',
			tight: '0.00625rem',
			tighter: '-.03125rem',
			tight: '0.00625rem',
		},
		lineHeight: {
			none: '1',
			tighter: '1.15em',
			1.125: '1.125em',
			normal: '1.5em',
			tight: '1.25em',
			large: '2em',
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			circle: 'circle',
			square: 'square',
			'lower-alpha': 'lower-alpha',
			'lower-roman': 'lower-roman'
		},
		margin: (theme, { negative }) => ({
			auto: 'auto',
			'screen': 'calc(50% - 50vw)',
			...theme('spacing'),
			...negative(theme('spacing'))
		}),
		maxHeight: {
			full: '100%',
			screen: '100vh',
		},
		maxWidth: {
			container: 'calc(69.375rem + 6.666%)',
			'container-narrow': 'calc(47.5rem + 6.666%)',
			full: '100%',
			screen: '100vw',
			logo: '12.5rem'
		},
		minHeight: {
			'0': '0',
			full: '100%',
			screen: '100vh',
			auto: 'auto',
			'24.38': '24.375rem',
			'30.5': '30.5rem',
			'35': '35rem',
			'40': '40rem',
		},
		minWidth: {
			'0': '0',
			full: '100%',
			screen: '100vw'
		},
		objectPosition: {
			bottom: 'bottom',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top'
		},
		opacity: {
			'0': '0',
			'10': '0.1',
			'25': '0.25',
			'50': '0.5',
			'75': '0.75',
			'90': '0.9',
			'100': '1'
		},
		order: {
			first: '-9999',
			last: '9999',
			none: '0',
			'1': '1',
			'2': '2',
			'3': '3',
			'4': '4',
			'5': '5',
			'6': '6',
			'7': '7',
			'8': '8',
			'9': '9',
			'10': '10',
			'11': '11',
			'12': '12'
		},
		padding: theme => theme('spacing'),
		stroke: {
			current: 'currentColor'
		},
		textColor: theme => theme('colors'),
		width: theme => ({
			auto: 'auto',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
			// Non-standard widths, use sparingly:
			'57%': '57%',
			'43%': '43%',
		}),
		zIndex: {
			auto: 'auto',
			'0': '0',
			'10': '10',
			'20': '20',
			'30': '30',
			'40': '40',
			'50': '50',
			'-10': '-10',
			'-20': '-20',
			'-30': '-30',
			'-40': '-40',
			'-50': '-50'
		},
	},
	variants: {
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: ['responsive'],
		borderColor: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive'],
		boxShadow: ['responsive', 'hover', 'focus'],
		cursor: ['responsive'],
		display: ['responsive'],
		fill: ['responsive'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		float: ['responsive'],
		fontFamily: ['responsive'],
		fontSize: ['responsive'],
		fontSmoothing: ['responsive'],
		fontStyle: ['responsive'],
		fontWeight: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		inset: ['responsive'],
		justifyContent: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive', 'first', 'last'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: ['responsive', 'hover'],
		order: ['responsive'],
		outline: ['responsive', 'focus'],
		overflow: ['responsive'],
		padding: ['responsive', 'first', 'last'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		stroke: ['responsive'],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'hover', 'focus', 'group-hover'],
		textDecoration: ['responsive', 'hover', 'focus'],
		textTransform: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		wordBreak: ['responsive'],
		zIndex: ['responsive']
	},
	corePlugins: {
		container: false,
	},
	plugins: [],
}
