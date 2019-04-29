export default function() {
    this.get('/todos');
    this.post('/todos');
    this.patch('/todos/:id');
    this.del('/todos/:id');
    this.get('/projects');
    this.post('/projects');
    this.patch('/projects/:id');
    this.del('/projects/:id');
}