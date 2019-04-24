import Controller from '@ember/controller';

export default Controller.extend({
	setProjectStatus: "",
	setBA: "",
	actions: {
		setProjectStatus: function(selected) {
			this.set('setProjectStatus', selected)
		},
		setBA: function(selected) {
			this.set('setBA', selected)
		},
		submitProject(){
			if (this.get('title')) {
				this.get('store').createRecord("project", {
					title: this.get('title'),
					status: this.get('setProjectStatus'),
					business_analyst: this.get('setBA')
				});
			}
		}

	}
});
