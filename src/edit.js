/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup,ToolbarButton,PanelBody,ColorPicker } from '@wordpress/components';
import { __experimentalRadio as Radio,	__experimentalRadioGroup as RadioGroup,} from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { help } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({clientId, className, attributes, setAttributes}) {

	const { select } = wp.data;

	const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
	const childBlocks = parentBlock.innerBlocks;

	const emptyBlock = () => {
		if ( childBlocks.length == 0){

			return(
				<div className="sg-empty-inner-block">
					<div className="sg-block-name">
						<span class="dashicons dashicons-columns"></span>
						{ __('Columna', 'bootstenberg-columns') }
					</div>
					{ __('Comienza a armar tu contenido con uno o más bloques de la librería presionando en el botón más.', 'bootstenberg-columns')}
				</div>
			)
		}
	}

	const blockControls = () => {

		return (
			<BlockControls>
				<ToolbarGroup class="sg-toolbar">
					<ToolbarButton
						icon={ help }
						label={__("Mostrar guía", "bootstenberg-columns") }
						onClick={ () => setAttributes( {showGuide: !attributes.showGuide} ) }
						className={ attributes.showGuide ? 'active' : ''}
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	}

	const settings = () => {
		return (
			<InspectorControls>
				<PanelBody title="Grid">
					<div className="sg-insppector">
						<div className="label">
							<span>{ __('Pantalla Pequeña', 'bootstenberg-columns') }</span>
							<button className="btn-clean" onClick={() => setAttributes({small: ""})}>
								{ __('Limpiar', 'bootstenberg-columns') }
							</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { small: value } );
							} }
							defaultChecked="col-sm-12"
							checked={ attributes.small }>
							<Radio value=" col-sm-1">8%</Radio>
							<Radio value=" col-sm-2">16%</Radio>
							<Radio value=" col-sm-3">25%</Radio>
							<Radio value=" col-sm-4">33%</Radio>
							<Radio value=" col-sm-5">41%</Radio>
							<Radio value=" col-sm-6">50%</Radio>
							<Radio value=" col-sm-7">58%</Radio>
							<Radio value=" col-sm-8">66%</Radio>
							<Radio value=" col-sm-9">75%</Radio>
							<Radio value=" col-sm-10">83%</Radio>
							<Radio value=" col-sm-11">91%</Radio>
							<Radio value=" col-sm-12">100%</Radio>
						</RadioGroup>
					</div>

					<div className="sg-insppector">
						<div className="label">
							<span> { __('Pantalla Mediana', 'bootstenberg-columns') }</span>
							<button className="btn-clean" onClick={() => setAttributes({medium: ""})}>
								{ __('Limpiar', 'bootstenberg-columns') }
							</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { medium: value } );
								//wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
							} }
							defaultChecked="col-sm-12"
							checked={ attributes.medium }>
							<Radio value=" col-md-1">8%</Radio>
							<Radio value=" col-md-2">16%</Radio>
							<Radio value=" col-md-3">25%</Radio>
							<Radio value=" col-md-4">33%</Radio>
							<Radio value=" col-md-5">41%</Radio>
							<Radio value=" col-md-6">50%</Radio>
							<Radio value=" col-md-7">58%</Radio>
							<Radio value=" col-md-8">66%</Radio>
							<Radio value=" col-md-9">75%</Radio>
							<Radio value=" col-md-10">83%</Radio>
							<Radio value=" col-md-11">91%</Radio>
							<Radio value=" col-md-12">100%</Radio>
						</RadioGroup>
					</div>

					<div className="sg-insppector">
						<div className="label">
							<span>{ __('Pantalla Grande', 'bootstenberg-columns') }</span>
							<button className="btn-clean" onClick={() => setAttributes({large: ""})}>
								{ __('Limpiar', 'bootstenberg-columns') }
							</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { large: value } );
								//wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
							} }
							defaultChecked="col-sm-12"
							checked={ attributes.large }>
							<Radio value=" col-lg-1">8%</Radio>
							<Radio value=" col-lg-2">16%</Radio>
							<Radio value=" col-lg-3">25%</Radio>
							<Radio value=" col-lg-4">33%</Radio>
							<Radio value=" col-lg-5">41%</Radio>
							<Radio value=" col-lg-6">50%</Radio>
							<Radio value=" col-lg-7">58%</Radio>
							<Radio value=" col-lg-8">66%</Radio>
							<Radio value=" col-lg-9">75%</Radio>
							<Radio value=" col-lg-10">83%</Radio>
							<Radio value=" col-lg-11">91%</Radio>
							<Radio value=" col-lg-12">100%</Radio>
						</RadioGroup>
					</div>
				</PanelBody>

				<PanelBody title="Offset" initialOpen={ false }>
					<div className="sg-insppector">
						<div className="label">
							<span>{ __('Pantalla Pequeña', 'bootstenberg-columns') }</span>
							<button className="btn-clean" onClick={() => setAttributes({offsetSmall: ""})}>
								{ __('Limpiar', 'bootstenberg-columns') }
							</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { offsetSmall: value } );
								//wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
							} }
							defaultChecked="col-sm-12"
							checked={ attributes.offsetSmall }>
							<Radio value=" offset-sm-1">8%</Radio>
							<Radio value=" offset-sm-2">16%</Radio>
							<Radio value=" offset-sm-3">25%</Radio>
							<Radio value=" offset-sm-4">33%</Radio>
							<Radio value=" offset-sm-5">41%</Radio>
							<Radio value=" offset-sm-6">50%</Radio>
							<Radio value=" offset-sm-7">58%</Radio>
							<Radio value=" offset-sm-8">66%</Radio>
							<Radio value=" offset-sm-9">75%</Radio>
							<Radio value=" offset-sm-10">83%</Radio>
							<Radio value=" offset-sm-11">91%</Radio>
							<Radio value=" offset-sm-12">100%</Radio>
						</RadioGroup>
					</div>

					<div className="sg-insppector">
						<div className="label">
							<span>{ __('Pantalla Mediana', 'bootstenberg-columns') }</span>
							<button className="btn-clean" onClick={() => setAttributes({offsetMedium: ""})}>
								{ __('Limpiar', 'bootstenberg-columns') }
							</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { offsetMedium: value } );
								//wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
							} }
							defaultChecked="col-sm-12"
							checked={ attributes.offsetMedium }>
							<Radio value=" offset-md-1">8%</Radio>
							<Radio value=" offset-md-2">16%</Radio>
							<Radio value=" offset-md-3">25%</Radio>
							<Radio value=" offset-md-4">33%</Radio>
							<Radio value=" offset-md-5">41%</Radio>
							<Radio value=" offset-md-6">50%</Radio>
							<Radio value=" offset-md-7">58%</Radio>
							<Radio value=" offset-md-8">66%</Radio>
							<Radio value=" offset-md-9">75%</Radio>
							<Radio value=" offset-md-10">83%</Radio>
							<Radio value=" offset-md-11">91%</Radio>
							<Radio value=" offset-md-12">100%</Radio>
						</RadioGroup>
					</div>

					<div className="sg-insppector">
						<div class="label">
							<span>{ __('Pantalla grande', 'bootstenberg-columns') }</span>
							<button className="btn-clean" onClick={ () => setAttributes( { offsetLarge: "" } )}>
								{ __('Limpiar', 'bootstenberg-columns') }
							</button>
						</div>
						<RadioGroup
							onChange={ ( value ) => {
								setAttributes( { offsetLarge: value } );
								//wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
							} }
							defaultChecked="col-sm-12"
							checked={ attributes.offsetLarge }>
							<Radio value=" offset-lg-1">8%</Radio>
							<Radio value=" offset-lg-2">16%</Radio>
							<Radio value=" offset-lg-3">25%</Radio>
							<Radio value=" offset-lg-4">33%</Radio>
							<Radio value=" offset-lg-5">41%</Radio>
							<Radio value=" offset-lg-6">50%</Radio>
							<Radio value=" offset-lg-7">58%</Radio>
							<Radio value=" offset-lg-8">66%</Radio>
							<Radio value=" offset-lg-9">75%</Radio>
							<Radio value=" offset-lg-10">83%</Radio>
							<Radio value=" offset-lg-11">91%</Radio>
							<Radio value=" offset-lg-12">100%</Radio>
						</RadioGroup>
					</div>
				</PanelBody>
				<PanelBody title={ __( 'Estilo', 'bootstenberg-columns' ) } initialOpen={ false }>
					<div className="sg-inspector">
						<div className="label">
							<span>{ __( 'Color de fondo', 'bootstenberg-columns' ) }</span>
							<button className="btn-clean" onClick={() => {
								let style = attributes.style;
								delete style.backgroundColor;
								setAttributes( {style: style} );

							}}>{ __( 'Limpiar', 'bootstenberg-columns' ) }
							</button>
						</div>
						<ColorPicker
							value={ attributes.style.backgroundColor }
							onChangeComplete={ ( color ) => setAttributes( { style: { ...attributes.style, backgroundColor: color.hex } } ) }
						/>
					</div>

					<div className="sg-inspector">

						<div className="label">
							<span>{ __( 'Color de texto', 'bootstenberg-columns' ) }</span>
							<button className="btn-clean" onClick={() => {
								let style = attributes.style;
								delete style.color;
								setAttributes( {style: style} );

							}}>{ __( 'Limpiar', 'bootstenberg-columns' ) }
							</button>
						</div>
						<ColorPicker
							value={ attributes.style.color }
							onChangeComplete={ ( color ) => setAttributes( { style: { ...attributes.style, color: color.hex } } ) }
						/>
					</div>

				</PanelBody>
			</InspectorControls>
		)
	}

	const blockProps = useBlockProps( {
		className: attributes.showGuide ? 'guide' : '',
	} );

	return (
		<div { ...blockProps }>
			{ blockControls() }
			{ settings() }
			{ emptyBlock() }
			<div className="col-content" style={ attributes.style }>
				<InnerBlocks
					renderAppender={ () => (
						<div class="apender-container">
							<InnerBlocks.ButtonBlockAppender />
						</div>

					) }
				/>
			</div>
		</div>
	);
}

const columnCustomClassName = createHigherOrderComponent((BlockListBlock) => {
	return props => {
		if(props.name == "sg-block/bootstenberg-columns") {
			return <BlockListBlock {...props} className={`col ${props.attributes.small} ${props.attributes.medium} ${props.attributes.large} ${props.attributes.offsetSmall} ${props.attributes.offsetMedium} ${props.attributes.offsetLarge}`}/>
		}

		return <BlockListBlock {...props}/>
	}
}, 'columnCustomClassName');

wp.hooks.addFilter('editor.BlockListBlock', 'sg-block/bootstenberg-columns', columnCustomClassName);
