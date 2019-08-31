//Enable sass/scss
const path = require('path')
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
      //Change for sass folder/filename if sass
      path.resolve(__dirname, './src/assets/less/*.less')
      ],
    })
}
//Default config module
module.exports = {
  siteName: 'Vue Wordpress SCSS',
  siteDescription: 'A Vue Wordpress starter with SCSS',
  plugins: [
     { 
        use: '@gridsome/source-wordpress',
        options: {
        baseUrl: "http://vuewp.xhostcom.com", // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        splitPostsIntoFragments: true, //Split html posts into fragments representing html blocks or images
        downloadRemoteImagesFromPosts: true, //Download remote images
        postImagesLocalPath: '/Users/username/this/must/be/full/path/', //Full path with '/' in the end
        routes: {
        post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
        post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
   ],
   //Webpack for sass/scss
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //This is scss, or change for sass
    types.forEach(type => {
      addStyleResource(config.module.rule('less').oneOf(type))
    })
	}
}


