import Component from '@ember/component';

export default Component.extend({
	store: Ember.inject.service(),
	setBA: "",
	setProjectStatus: "",
	formErrors: "",
	invalidForm: false,
	actions: {
		setProjectStatus: function(selected) {
			this.set('setProjectStatus', selected)
		},
		setBA: function(selected) {
			this.set('setBA', selected)
		},
		submitProject(){
			let project = this.get('newProject');
			project.validate().then(({ validations }) => {
				if (validations.get('isValid')){
					console.log('isValid');
					project.save();
				}
				else {
					this.toggleProperty('invalidForm');
				}
			});
		}
	}
});
