import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		let projects = this.modelFor('projects');
		return this.store.findAll('project');
	}
	/*model() {
		let projects = this.modelFor('projects');
		debugger;
		return projects.filter((project) => {
			return project.get(3);
		})
	},
	renderTemplate(controller, model) {
		this.render('project.done', {
			model: model
		});
	}*/
});
