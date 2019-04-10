import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	business_analyst: DS.attr('string'),
	status: DS.attr('number')
});