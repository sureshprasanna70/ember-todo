import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Component.extend({
    store: service(),
    actions: {
        submitTodo() {
            if (this.get('title')) {
                let createdRecord = this.get('store').createRecord("todo", {
                    title: this.get('title'),
                    complete: false
                });
                createdRecord.save();
            }
            this.set('title', "");
        }
    }
});
