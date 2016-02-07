<?php
namespace RogerThat\Test;
use RogerThat\HelloWorld\HelloWorld;

/**
 * HelloWorld unit test.
 *
 * @package rogerthat
 * @group   specification
 */
class HelloWorld_UnitTest extends HelloWorldTestCase
{
    /**
     * @dataProvider phpProvider
     */
    public function testLangReturnsPHP($str)
    {
        $result = HelloWorld::lang($str);
        $this->assertSame('PHP', $result);
    }

    /**
     * @dataProvider scalaProvider
     */
    public function testLangReturnsScala($str)
    {
        $result = HelloWorld::lang($str);
        $this->assertSame('Scala', $result);
    }
}