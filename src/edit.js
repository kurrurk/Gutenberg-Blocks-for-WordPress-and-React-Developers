import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import './editor.scss';
import {
	ToolbarGroup,
	ToolbarButton,
	DropdownMenu,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>
			<BlockControls
				group="other"
				controls={ [
					{
						title: 'Button 1',
						icon: 'admin-generic',
						isActive: true,
						onClick: () => {
							// console.log('Button 1 cliced');
						},
					},
					{
						title: 'Button 1',
						icon: 'admin-collapse',
						onClick: () => {
							// console.log('Button 1 cliced');
						},
					},
				] }
			>
				{ text && (
					<ToolbarGroup>
						<ToolbarButton
							title="Allign Left"
							icon="editor-alignleft"
							onClick={ () => {
								//console.log('Align Left')
							} }
						/>
						<ToolbarButton
							title="Allign Center"
							icon="editor-aligncenter"
							onClick={ () => {
								//console.log('Allign Center')
							} }
						/>
						<ToolbarButton
							title="Allign Right"
							icon="editor-alignright"
							onClick={ () => {
								//console.log('Align Right')}
							} }
						/>
					</ToolbarGroup>
				) }
				<ToolbarGroup>
					<DropdownMenu
						icon="arrow-down-alt2"
						label={ __( 'More Aligments', 'text-box' ) }
						controls={ [
							{
								title: __( 'Wide', 'text-box' ),
								icon: 'align-wide',
							},
							{
								title: __( 'Full', 'text-box' ),
								icon: 'align-full-width',
							},
						] }
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...useBlockProps() }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [] }
			/>
		</>
	);
}
