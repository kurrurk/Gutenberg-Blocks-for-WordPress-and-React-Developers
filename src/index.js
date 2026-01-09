import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/text-box', {
	icon: {
		src: 'text-page',
		foreground: '#090',
		background: '#fff',
	},
	// icon: {
	// 	src: (
	// 		<svg
	// 			version="1.1"
	// 			viewBox="0 0 500 500"
	// 			preserveAspectRatio="xMinYmin meet"
	// 		>
	// 			<circle cx="250" cy="250" r="200" />
	// 		</svg>
	// 	),
	// 	foreground: '#00f',
	// 	background: '#fff',
	// },
	edit: Edit,
	save,
} );
