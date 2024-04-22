const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const fs = require('fs-extra');

const folder = {
    src_assets: "src/assets/",
    public_assets: "public/assets/",
    // Add more pairs as needed
};

module.exports = {
    entry: {
        tailwind: './src/assets/scss/tailwind.scss',
        icons: './src/assets/scss/icons.scss',
    },
    output: {
        path: path.resolve(__dirname, folder.public_assets),
        filename: 'chunk/[name].js',
    },
    resolve: {
        extensions: ['.js', '.scss'],
    },
    performance: {
        hints: false,
    },
    optimization: {
        // minimizer: [
        //     new TerserPlugin({
        //         exclude: /libs/,
        //     }),
        // ],
    },
    mode: 'development', 
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', 
                    'sass-loader',
                ],

            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: folder.src_assets + 'images',
                    to: 'images',
                },
                {
                    from: folder.src_assets + 'js',
                    to: 'js',
                },
                {
                    from: folder.src_assets + 'json',
                    to: 'json',
                },
                {
                    from: folder.src_assets + 'lang',
                    to: 'lang',
                },
                {
                    from: folder.src_assets + 'fonts',
                    to: 'fonts',
                },
            ],
        }),

        {
            apply(compiler) {
                compiler.hooks.emit.tapPromise('copy-specific-packages', async compilation => {
                    const outputPath = path.resolve(__dirname, folder.public_assets);
                    const configPath = path.resolve(__dirname, 'package-libs-config.json');

                    try {
                        const configContent = await fs.promises.readFile(configPath, 'utf-8');
                        const { packagesToCopy } = JSON.parse(configContent);

                        for (const packageName of packagesToCopy) {
                            const destPackagePath = path.join(outputPath, 'libs', packageName);

                            const sourcePath = fs.existsSync(path.join(__dirname, 'node_modules', packageName, 'dist'))
                                ? path.join(__dirname, 'node_modules', packageName, 'dist')
                                : path.join(__dirname, 'node_modules', packageName);
                            try {
                                await fs.promises.access(sourcePath, fs.constants.F_OK);
                                await fs.copy(sourcePath, destPackagePath);
                            } catch (error) {
                                console.error(`Package ${packageName} does not exist.`);
                            }
                        }
                    } catch (error) {
                        console.error('Error copying and renaming packages:', error);
                    }
                });
            },
        },
    ],
};