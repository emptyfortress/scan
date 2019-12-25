module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/scan/'
		: '/',
	chainWebpack: config => {
		config.module.rule('eslint').use('eslint-loader').options({
			fix: true
		})
	}
}
