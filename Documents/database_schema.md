#RecipeApp
##Database Schema

###Database: RecipeApp
###Collections: user, recipe

db.user {
	_id:
	name:
	password:

}

db.recipe {
	_id:
	user:
	recipe:
	ingredients:
	instructions:
	photo:
	preptime:
	cooktime:
}