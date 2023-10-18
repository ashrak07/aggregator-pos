module.exports = {
    apps : [{
        name   : "aggregator-pos-api",
        script : "./bin/www",
        autorestart: true,
        watch: true
    }]
};