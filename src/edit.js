import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import './editor.scss';
import {
	// ToolbarGroup,
	// ToolbarButton,
	// DropdownMenu,
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					<TextareaControl
						label="Input Area Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					<ToggleControl label="Toggle Label" checked={ true } />
					<AnglePickerControl />
					<ColorPicker color={ '#f03' } />
					<ColorPalette
						colors={ [
							{ name: 'red', color: '#f00' },
							{ name: 'green', color: '#0f0' },
							{ name: 'blue', color: '#00f' },
						] }
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [] }
			/>
		</>
	);
}
