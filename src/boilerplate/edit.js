import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

/**
 * Edit component for the boilerplate block.
 * @return {Element} Element to render.
 */

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Boilerplate – hello from the editor!', 'boilerplate' ) }
		</p>
	);
}
