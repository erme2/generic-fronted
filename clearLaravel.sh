#!/usr/bin/env bash

composer dump-autoload
php artisan clear-compiled
php artisan config:clear
php artisan route:clear
php artisan view:clear
