import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
	title: validator('presence',true),
	business_analyst: validator('presence',true),
	status: validator('presence',true)
});

export default DS.Model.extend(Validations, {
	title: DS.attr('string'),
	business_analyst: DS.attr('string'),
	status: DS.attr('number')
});