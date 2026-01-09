<?php

    /**
    * Plugin Name: First Block
    * Plugin URI: https://example.com/first-block
    * Description: A simple WordPress plugin that adds my first block.
    * author: Vasily Shatalkin
    * Author URI: https://example.com
    * Version: 1.0.0
    */

    function first_block_init() {
        register_block_type_from_metadata( __DIR__ );
        wp_enqueue_script("ourscript", array(), false, "1.0.0", true);
    }

    add_action( 'init', 'first_block_init' );