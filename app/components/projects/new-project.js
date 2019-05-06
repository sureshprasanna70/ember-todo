import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
	store: service(),
	formErrors: "",
	invalidForm: false,
	actions: {
		submitProject(){
			let project = this.get('newProject');
			project.validate().then(({ validations }) => {
				if (validations.get('isValid')){
					project.save();
				}
				else {
					this.toggleProperty('invalidForm');
				}
			});
		},
		updateProject(){
			let project = this.get('newProject');
			project.validate().then(({ validations }) => {
				if (validations.get('isValid')){
					this.toggleProperty('edit');
					project.save();
				}
				else {
					this.toggleProperty('invalidForm');
				}
			});

		}
	}
});
