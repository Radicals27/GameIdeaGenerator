// Config necessary for Github Pages deployment

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/GameIdeaGenerator/'
      : '/'
  }