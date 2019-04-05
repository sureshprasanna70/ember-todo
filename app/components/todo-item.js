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
			debugger;
			console.log("submit called");
			if (todo.get("title") == "") {
				console.log("destroyRecord");
				todo.destroyRecord().then(() => {
					this.toggleProperty("editing");
				});
			} else {
				this.toggleProperty("editing");
			}
		},
		deleteTodo(){
			this.get("todo").destroyRecord();
		}
	}
});