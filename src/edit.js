import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import classNames from 'classnames';
import './editor.scss';
import { PanelBody, RangeControl } from '@wordpress/components';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, shadow, shadowOpacity } = attributes;
	const onChangeTextAlignment = ( newTextAlignment ) => {
		setAttributes( { textAlignment: newTextAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const onChangeShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( { shadowOpacity: newShadowOpacity } );
	};
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};

	const classes = classNames( `text-box-align-${ textAlignment }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Shadow Settings', 'text-box' ) }>
					{ shadow && (
						<RangeControl
							label={ __( 'Shadow Opacity', 'text-box' ) }
							value={ shadowOpacity }
							min={ 10 }
							max={ 40 }
							step={ 10 }
							onChange={ onChangeShadowOpacity }
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'text-block' ),
						onClick: toggleShadow,
						isActive: shadow,
					},
				] }
			>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeTextAlignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: classes,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="div"
				allowedFormats={ [] }
			/>
		</>
	);
}
