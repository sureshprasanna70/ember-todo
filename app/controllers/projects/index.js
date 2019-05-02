import Controller from '@ember/controller';

export default Controller.extend({
	newProject: Ember.computed(function(){
		return this.get('store').createRecord("project")
	}),
	actions:{
		editProject(){

		},
		deleteProject(){
			
		}
	}
});
