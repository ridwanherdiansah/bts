import dbPool from '../config/database';

interface Item  {
    name: string;
};



const create = (body: Item) => {
    const { name } = body;
    const SQLQuery = `INSERT INTO item (name, id_checklis) VALUES (?, ?)`;

    return dbPool.execute(SQLQuery, [name]);
};

const get = () => {
    const SQLQuery = 'SELECT * FROM item';

    return dbPool.execute(SQLQuery);
};

const update = (body:Item, params: {id: number}) => {
    const { name} = body;
    const { id } = params;
    const SQLQuery = `  UPDATE item
                        SET name = '${body.name}';`;
    
    return dbPool.execute(SQLQuery, [id, name]);
}

const destroy = (params: {id:number}) => {
    const { id } = params;
    const SQLQuery = `  DELETE FROM item 
                        WHERE id = ${id};`;

    return dbPool.execute(SQLQuery, [id]);
}

export default {
    get,
    create,
    update,
    destroy,
};
