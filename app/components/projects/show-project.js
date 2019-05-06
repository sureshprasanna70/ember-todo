import Component from '@ember/component';

export default Component.extend({
	edit: false,
	actions:{
		editProject(){
			this.toggleProperty('edit');
		},
		deleteProject(){
			let project = this.get('project');
			project.destroyRecord().then(() => function(){
				this.toggleProperty('edit');
			});
		}
	}
});
