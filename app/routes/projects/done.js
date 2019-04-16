import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		let projects = this.modelFor('projects');
		return projects.filterBy('status',3);
	},
	renderTemplate(controller, model) {
		this.render('projects.done', {
			model: model
		});
	}
});