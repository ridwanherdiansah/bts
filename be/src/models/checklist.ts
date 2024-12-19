import dbPool from '../config/database';

interface Checklist  {
    name: string;
};



const create = (body: Checklist) => {
    const { name } = body;
    const SQLQuery = `INSERT INTO checklist (name) VALUES (?)`;

    return dbPool.execute(SQLQuery, [name]);
};

const get = () => {
    const SQLQuery = 'SELECT * FROM checklist';

    return dbPool.execute(SQLQuery);
};

const update = (body:Checklist, params: {id: number}) => {
    const { name} = body;
    const { id } = params;
    const SQLQuery = `  UPDATE checklist
                        SET name = '${body.name}';`;
    
    return dbPool.execute(SQLQuery, [id, name]);
}

const destroy = (params: {id:number}) => {
    const { id } = params;
    const SQLQuery = `  DELETE FROM checklist 
                        WHERE id = ${id};`;

    return dbPool.execute(SQLQuery, [id]);
}

export default {
    get,
    create,
    update,
    destroy,
};
