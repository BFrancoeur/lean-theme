<?php

namespace Lean\WP\CPT;

use Lean\Cpt;

/**
 * CPT Example
 */
class Example {
	const NAME        = 'ExampleCPT';
	const NAME_PLURAL = 'ExampleCPTs';
	const SLUG        = 'examplecpt';

	/**
	 * Class loaded automatically.
	 */
	public static function init() {
		/**
		 * Remove this comment to enable the CPT.
		 * add_action( 'init', [ __CLASS__, 'create_cpt' ] );
		 */
	}

	/**
	 * Create CPT.
	 */
	public static function create_cpt() {
		$cpt = new Cpt(
			[
				'singular'  => self::NAME,
				'plural'    => self::NAME_PLURAL,
				'post_type' => self::SLUG,
				'slug'      => self::SLUG,
				'args'      => [
					'has_archive' => strtolower( self::NAME_PLURAL ),
					'menu_icon'   => 'dashicons-media-document',
				],
			]
		);
		$cpt->init();
	}
}
