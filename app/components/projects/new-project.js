import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service(),
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
			this.set('title',"");

		}

	}
});
