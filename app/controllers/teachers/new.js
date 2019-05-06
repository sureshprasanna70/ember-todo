import Controller from '@ember/controller';

export default Controller.extend({
	newTeacher: Ember.computed(function(){
		return this.get('store').createRecord("teacher")
	}),
	actions:{
		saveTeacher(){
			let teacher = this.get('newTeacher');
			debugger;
			teacher.save();
		}
	}
});
