import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import './editor.scss';
import // ToolbarGroup,
// ToolbarButton,
// DropdownMenu,
// PanelBody,
// TextControl,
// TextareaControl,
// ToggleControl,
// AnglePickerControl,
// ColorPicker,
// ColorPalette,
'@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const onChangeBackgroundColor = ( newBackgroundColor ) => {
		setAttributes( { backgroundColor: newBackgroundColor } );
	};
	const onChangeTextColor = ( newTextColor ) => {
		setAttributes( { textColor: newTextColor } );
	};
	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __( 'Background Color', 'text-box' ),
						},
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __( 'Text Color', 'text-box' ),
						},
					] }
				>
					<ContrastChecker
						textColor={ textColor }
						backgroundColor={ backgroundColor }
					/>
				</PanelColorSettings>
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
					style: {
						backgroundColor,
						color: textColor,
					},
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
