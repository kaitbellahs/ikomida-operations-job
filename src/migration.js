import { Umzug, SequelizeStorage } from 'umzug';
import { Domain } from '@ikomida/shared-backend'
import fs from 'fs'

const umzug = new Umzug({
    migrations: {
        glob: 'migrations/*.js',
    },
    context: Domain.SqlDB.sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize: Domain.SqlDB.sequelize }),
    logger: console,
})

umzug.runAsCLI()