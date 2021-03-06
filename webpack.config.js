// Enables the working for a path file
const path = require('path')
// const NodemonPlugin = require('nodemon-webpack-plugin')
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
            path: path.resolve('./../renderer/'),
            filename: "\\js\\app.js"
        },

        target: "web",

        plugins: [
            // new NodemonPlugin(),
            // from where to where, and specify minify options(optional and can be false)
            new HtmlWebpackPlugin({
                filename: "dashboard.html",
                template: "./src/dashboard.html",
                inject: false,
                minify: true
            }),

            new HtmlWebpackPlugin({
                filename: "login.html",
                template: "./src/login.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "firstLogin.html",
                template: "./src/firstLogin.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "about_zanest.html",
                template: "./src/about_zanest.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "students.html",
                template: "./src/students.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "students_edit.html",
                template: "./src/students_edit.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "teachers.html",
                template: "./src/teachers.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "teachers_edit.html",
                template: "./src/teachers_edit.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "users.html",
                template: "./src/users.html",
                inject: false,
                minify: true
            }),
            new HtmlWebpackPlugin({
                filename: "settings.html",
                template: "./src/settings.html",
                inject: false,
                minify: true
            }),
            // new HtmlWebpackPlugin({
            //     filename: "classes_add.html",
            //     template: "./src/classes_add.html",
            //     inject: false,
            //     minify: true
            // }),
            new HtmlWebpackPlugin({
                filename: "themeUpdate.html",
                template: "./src/themeUpdate.html",
                inject: false,
                minify: true
            }),

            new HtmlWebpackPlugin({
                filename: "classes.html",
                template: "./src/classes.html",
                inject: false,
                minify: true
            }),

            // new HtmlWebpackPlugin({
            //     filename: "classes_search.html",
            //     template: "./src/classes_search.html",
            //     inject: "body",
            // }),
            // new HtmlWebpackPlugin({
            //     filename: "classes_edit.html",
            //     template: "./src/classes_edit.html",
            //     inject: "body",
            // }),


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
                // then css files get handled by css loader and style loader attaches them to the js
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: '[name].css',
                                outputPath: './styles'
                            }
                        },
                        // 'style-loader',
                        // 'css-loader',
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