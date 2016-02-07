<?php
namespace RogerThat\Test;
use RogerThat\HelloWorld\HelloWorld;
use RogerThat\HelloWorld\HelloWorldServiceProvider;
use Pimple\Container;

/** 
 * HelloWorld test case.
 *
 * @package rogerthat
 */ 
abstract class HelloWorldTestCase extends RogerThatTestCase
{
    public function phpProvider()
    {
        return [[HelloWorld::getLanguages()['PHP'][0]]];
    }

    public function scalaProvider()
    {
        return [[HelloWorld::getLanguages()['Scala'][0]]];
    }
}