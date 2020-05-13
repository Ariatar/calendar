module.exports = {
   publicPath: process.env.NODE_ENV === "production" ? "/calendar/" : "/",

   configureWebpack: {
      optimization: {
         splitChunks: {
            minSize: 10000,
            maxSize: 250000,
         },
      },
   },
};
