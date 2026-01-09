let registerBlockType = wp.blocks.registerBlockType;
let createElement = wp.element.createElement;

registerBlockType('first-block/first-block', {
    edit: function() {
        return createElement( 
            'p',
            {
                className: 'my-custom-class'
            }, 
            'Edit' 
        );
    },
    save: function() {
        return createElement( 'p', null, 'Save' );
    },
});