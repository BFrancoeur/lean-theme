<?php namespace LeanNs;

use Timber\Timber;

/**
 * The main header file.
 *
 * @package Lean
 * @since 1.0.0
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php echo \Lean\Acf::get_option_field( 'general_options_google_tag_manager' ) ?>

<?php $data = Timber::get_context(); ?>
<?php Timber::render( '02-organisms/00-global/header.twig', $data ); ?>
