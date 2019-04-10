import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    title(i) { return `Project title ${i + 1}`; },
    business_analyst(i) { return `BA ${i + 1}`; },
    status: faker.list.random(1,2,3)
});
