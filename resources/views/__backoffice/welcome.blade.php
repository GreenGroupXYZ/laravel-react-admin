<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Metas -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <meta name="description" content="{{ config('app.description') }}">
        <meta name="theme-color" content="#2196f3">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta property="og:site_name" content="{{ config('app.name') }}">
        <meta property="og:title" content="{{ config('app.name') }}">
        <meta property="og:description" content="{{ config('app.description') }}">
        <meta property="og:url" content="{{ config('app.url') }}">
        <meta property="og:image" content="">

        @if (config('app.env') === 'production')
            <meta name="sw-filepath" content="/service-worker.js">
        @endif

        <!-- Title -->
        <title>{{ config('app.name') }}</title>

        <!-- Font -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">

        <!-- Manifest -->
        <link rel="manifest" href="/manifest.json">

        <!-- Icon -->
        <link rel="shortcut icon" href="/favicon.ico">

        <!-- Stylesheets -->
        <link rel="stylesheet" href="{{ _asset('css/vendor.css') }}" defer>
        <link rel="stylesheet" href="{{ _asset('css/backoffice.css') }}" defer>

        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            #initial-content {
                display: none;
                background-color: #0000008a;
            }
        </style>
    </head>

    <body>
        <noscript>
            <div class="full-height flex-center">
                <h1 class="noscript-message">
                    You need JavaScript enabled to run this app.
                </h1>
            </div>
        </noscript>

        <div id="initial-content" class="full-height flex-center">
            <!--
                Temporary content shown on page load,
                this is a convenient way to make the visitors of the site
                feel that they have reached the site.
            -->
        </div>

        <div id="root">
            <!--
                This is the root node that acts as the wrapper where
                the application will render the elements
            -->
        </div>

        <!-- Scripts -->
        <script>
            document.getElementById('initial-content').style.display = 'block';
        </script>

        <script src="{{ _asset('js/vendor.js') }}" defer></script>
        <script src="{{ _asset('js/backoffice.js') }}" defer></script>
    </body>
</html>
