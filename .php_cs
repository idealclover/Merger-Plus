<?php

return PhpCsFixer\Config::create()
    ->setRules([
        '@PSR2' => true,
        '@PhpCsFixer' => true,
    ])
    ->setFinder(
        PhpCsFixer\Finder::create()
            ->exclude('lib/')
            ->in(__DIR__)
    )
;
