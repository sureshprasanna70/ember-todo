import Component from '@ember/component';

export default Component.extend({
	tagName: 'li',
	classNameBindings: ['editing'],
	editing: false,
	actions: {
		editTodo(){
			this.toggleProperty('editing');
		},
		submitTodo() {
			const todo = this.get("todo");
			if (todo.get("title") == "") {
				todo.destroyRecord().then(() => {
					this.toggleProperty("editing");
				});
			} else {
				todo.save();
				this.toggleProperty("editing");
			}
		},
		deleteTodo(){
			this.get("todo").destroyRecord();
		}
	}
});