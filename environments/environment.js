const env = {
	portServer: process.env.PORT || 3000,
	configDatabase: {
		connectionString: process.env.DATABASE_URL
	},
	secret: process.env.SECRET || 'family_store_secret',
	APP_ID: process.env.APP_ID || 'test_id',
	APP_PASSWORD: process.env.APP_PASSWORD || 'test_password',
	APP_SCOPE: process.env.APP_SCOPE || '',
	APP_REDIRECT_URI: process.env.APP_REDIRECT_URI || 'localhost:3000',
	mailConfig: {
		user: process.env.MAIL_USER || 'family.store.bot%40gmail.com',
		password: process.env.MAIL_PASSWORD || 'Nn123456789@@'
	},
	CLOUDINARY_CLOUD_NAME: 'dhbc009wq',
	CLOUDINARY_API_KEY: '851879458196736',
	CLOUDINARY_API_SECRET: 'Vg77l60OMf0rxtIVBf1lGMPolXI'
}

module.exports = env
