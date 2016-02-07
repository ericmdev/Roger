<?php
namespace RogerThat\HelloWorld;

/**
 * HelloWorld.
 *
 * @package rogerthat
 */
class HelloWorld implements HelloWorldInterface
{
    /**
     * @access protected
     * @var    array
     */
    protected static $languages = [
                    'PHP' => [
                                'echo "Hello, PHP!";'
                            ],
                    'Scala' => [
                                'println("Hello, Scala!")'
                            ]
                ];

    /**
     * @return array
     */
    public static function getLanguages()
    {
        return self::$languages;
    }

    /**
     * @return str
     */
    public static function lang($str)
    {
        foreach (self::$languages as $name => $inputs) {
            if ( in_array($str, $inputs) ) {
                return $name;
            }
        }
        return false;
    }
}