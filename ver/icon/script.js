'use strict'

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', `
<link rel="icon" href="/ver/icon/android.png" sizes="192x192" type="image/png">
<link rel="apple-touch-icon-precomposed" href="/ver/icon/ios.png" sizes="180x180" type="image/png">

<meta name="application-name" content="creative-community.space"/>
<meta name="msapplication-TileImage" content="/ver/icon/ios.png"/>
<meta name="msapplication-square70x70logo" content="/ver/icon/favicon.png"/>
<meta name="msapplication-square150x150logo" content="/ver/icon/ios.png"/>
<meta name="msapplication-wide310x150logo" content="/ver/icon/wide.png"/>
<meta name="msapplication-square310x310logo" content="/ver/icon/instagram.png"/>
<meta name="msapplication-TileColor" content="#fff"/>
`
);
