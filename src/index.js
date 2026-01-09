// let registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'first-block/first-block', {
	edit: function () {
		return <p className="my-custom-class">Edit JSX</p>;
	},
	save: function () {
		return <p className="my-custom-class">Save JSX</p>;
	},
} );
