<!doctype html>
<html lang="ru">
<head>
    @include('layouts.include.styles')
</head>

<body class="theme-yellow dark-horizontal">
    <div class="animsition">
        @yield('content')
    </div>

@include('layouts.include.scripts')
</body>
</html>
