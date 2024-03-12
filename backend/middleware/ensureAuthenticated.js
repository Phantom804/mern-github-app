export async function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect(301, `${process.env.CLIENT_BASE_URL}/login`);
}