const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rotas / recurso
 */

 /**
  * Métodos HTTP
  */

  /**
   * GET: Buscar /listas de uma informaçao do back-end
   * POST: Criar uma informação no back-end
   * PUT: Alterar uma indormação no back-end
   * DELETE: Delelar uma informação no back-end
   */

   /**
    * Tipos de parâmetros
    * 
    * Query Params: Parãmentros nomeados enviados na rota após "?" (Filtros , paginação)
    * Route Params: Parâmentos utilizados para identifcação de recurços
    * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
    */

    /**
     * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
     * noSQL: MongoDB, CouchDB, etc
     */


