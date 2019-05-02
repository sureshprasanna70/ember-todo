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
