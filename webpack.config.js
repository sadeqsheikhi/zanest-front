// Enables the working for a path file
const path = require('path')

// this package handles all of the html files
const HtmlWebpackPlugin = require('html-webpack-plugin')



// a must, cleans the working directory before every new build
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
{
    module.exports = {
        // specify the src main js file
        entry: "./src/js/app.js",
        // where the main js file should go
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "js/bundle.js"
        },

        target: "web",

        plugins: [

            // from where to where, and specify minify options(optional and can be false)
            new HtmlWebpackPlugin({
                filename: "dashboard.html",
                template: "./src/dashboard.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),

            new HtmlWebpackPlugin({
                filename: "login.html",
                template: "./src/login.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: "settings_topics.html",
                template: "./src/settings_topics.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: "settings_levels.html",
                template: "./src/settings_levels.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: "settings_semesters.html",
                template: "./src/settings_semesters.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),
            new HtmlWebpackPlugin({
                filename: "settings_times.html",
                template: "./src/settings_times.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),

            new HtmlWebpackPlugin({
                filename: "settings_inst.html",
                template: "./src/settings_inst.html",
                inject: "body",
                minify: {
                    collapseWhiteSpace: true,
                    collapseInlineTagWhiteSpace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    minifyURLs:true,
                    removeComments: true,
                }
            }),
            // If you wanna add more files, just add another HtmlWebpackPlugin object(like above)
            // and associate it's options to the file that you want
        ],

        // used for debugging in the browser and seeing error messages
        // change it to "eval-cheap-module-source-map" once you don't need it
        // it's better security to not allow anyone to access full source map
        // devtool: "source-map",

        // setting up rules and loaders to handle different file types
        module: {
            rules: [

                // babel for js files
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                // then processes them using postcss and autoprefixer inside of that
                // then css files get handles by css loader and style loader attaches them to the js
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ]
                },

                // first reads through scss files through sass-loader
                // then processes them using postcss and autoprefixer inside of that
                // then css files get handles by css loader and style loader attaches them to the js
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },

                // handling all of the font files and putting them in dist/fonts
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './fonts',
                            }
                        }
                    ],
                },


                // handling all images and putting them in dist/img
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './media',
                            }
                        },
                    ],
                },
                
                // putting video files into the dist/media folder
                {
                    test: /\.(mp4|webm)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: './media/',
                            }
                        },
                    ],
                },

            ]
        }

    }
} 