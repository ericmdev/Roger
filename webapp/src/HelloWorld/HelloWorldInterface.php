<?php
namespace RogerThat\HelloWorld;

/** 
 * Interface for HelloWorld.
 *
 * @package rogerthat
 */
interface HelloWorldInterface
{
    /**
     * @return array
     */
    public static function getLanguages()

    /**
     * @return str
     */
	public static function lang($str);
}
