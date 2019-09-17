const router = require('express').Router();

const unidadesControlador = require('../controladores/unidadesControlador');

router.get('/', unidadesControlador.inicio);

router.get('/catalogos', unidadesControlador.catalogos);

router.get('/unidades', unidadesControlador.unidades);

router.get('/update/:unidacdg', unidadesControlador.edit);

router.get('/delete/:unidacdg', unidadesControlador.delete);

router.post('/add', unidadesControlador.save);

router.post('/update/:unidacdg', unidadesControlador.update);

module.exports = router;
