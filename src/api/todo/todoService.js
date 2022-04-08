const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) // habilita esses métodos
Todo.updateOptions({new: true, runValidators: true}) // para devolver o regitro (nota, cliente, etc) atualizado e não o antigo

module.exports = Todo