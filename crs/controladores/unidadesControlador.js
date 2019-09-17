const controller = {};

controller.inicio = (req, res) => {
  res.render('inicio');
};

controller.catalogos = (req, res) => {
  res.render('catalogos');
};

controller.unidades = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM caunidad ORDER BY unidanmb', (err, unidades) => {
      if (err) {
        res.json(err);
      }
   
      console.log(unidades);
      res.render('unidades',{
        data : unidades
      });
    });
  });
};

controller.edit = (req, res) => {
  const { unidacdg } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM caunidad WHERE unidacdg = ?", [unidacdg], (err, rows) => {
      res.render('unidad_mod', {
        data: rows[0]
      })
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(data);
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO caunidad set ?', data , (err, unidades) => {
      console.log(unidades)
      res.redirect('/unidades');
    })
  })
};

controller.update = (req, res) => {
  const { unidacdg } = req.params;
  const DatosMod = req.body;
  req.getConnection((err, conn) => {

    console.log(DatosMod);
    conn.query('UPDATE caunidad set ? where unidacdg = ?', [DatosMod, unidacdg], (err, rows) => {
      if (err) {
        res.json(err);
      }
   
      res.redirect('/unidades');
    });
  });
};

controller.delete = (req, res) => {
  const { unidacdg } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM caunidad WHERE unidacdg = ?', [unidacdg], (err, rows) => {
      res.redirect('/unidades');
    });
  });
}

/*    
    var opcion = prompt("Esta seguro de eliminar el registro. ?");
    if(opcion){
    }
*/

module.exports = controller;