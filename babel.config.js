module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    browsers: [
                        '> 1%',
                        'last 1 version',
                        "not dead"
                    ],
                    ie: '11',
                },


            }
        ]
    ],
    env: {
        test: {
            plugins: ["require-context-hook"]
        }
    }
};
