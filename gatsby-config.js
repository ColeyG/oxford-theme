module.exports = {
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Jost',
                    'Noto Sans',
                    'Ubuntu Mono',
                ],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown',
                path: `${__dirname}/src/markdown`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 600,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
};
