// let registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'first-block/first-block', {
	edit: Edit,
	save: Save,
} );
