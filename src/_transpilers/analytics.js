var analytics = function(tracking_code, env) {
    if (env.url !== "https://xiaodi.li") {
        return "";
    } else {
        return `<script> (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=0*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', '${tracking_code}', 'auto'); ga('send', 'pageview'); </script>`;
    }
};

exports.analytics = analytics;
