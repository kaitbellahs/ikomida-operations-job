import { Domain, BackendTypes, Logics, cryptPassword, Types, Utils, DBModels } from '@ikomida/shared-backend';

import { createRequire } from 'module';
import plans from './data/plans.js';
import terms from './data/terms.js';
import settings from './data/settings.js';
const require = createRequire(import.meta.url);
let { name } = require('../package.json');
name = name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m: string) => m.toUpperCase())
  .replace(/-\w/g, (m: string[]) => m[1].toUpperCase());
const logger = Utils.Logger.getInstance(name);

export const initDB = async (service: any) => {
  const logger = Utils.Logger.getInstance(service);
  try {
    logger.log('Starting ...');
    await Domain.SqlDB.sync(logger, true);

    if ((await DBModels.SettingModel.count()) === 0) {
      logger.info('adding Settings...');
      for (const setting of settings) {
        await DBModels.SettingModel.create(setting)
      }
      logger.info('add settings . Done.');
    }
    if ((await DBModels.TermModel.count()) === 0) {
      logger.info('adding default terms...');
      for (const term of terms) {
        await DBModels.TermModel.create(term)
      }
      logger.info('add  default terms . Done.');
    }
    if ((await DBModels.UserModel.count({ where: { role: BackendTypes.Roles.ADMIN } })) === 0) {
      logger.info('Creating default admin user...');
      await DBModels.UserModel.create({
        avatar: '',
        role: BackendTypes.Roles.ADMIN,
        name: 'Khalid',
        email: 'kaitbellahs@gmail.com',
        lastName: 'Ait Bellahs',
        identity: Logics.Finances.toNumber('23762177848'),
        phone: Logics.Finances.toNumber('11953635016'),
        areaCode: Logics.Finances.toNumber('55'),
        password: (await cryptPassword('iKomida@123')).hash,
      });
      logger.info('Admin user added, successfully please change password.');
    }

    let lastPlan: DBModels.PlanModel | undefined = undefined
    logger.info('adding/updating plans...');
    const createPlans = (await DBModels.PlanModel.count()) === 0
    for (const plan of plans) {
      if (createPlans) {
        lastPlan = await DBModels.PlanModel.create(plan);
      } else {
        await DBModels.PlanModel.update(plan, {
          where: {
            name: plan.name,
          },
        });
        logger.info('adding/updating plans. Done');
      }
    }
    if ((await DBModels.ContractModel.count({ where: { ikomidaID: 'com.ikomida.br.demo' } })) === 0) {
      logger.info('Creating demo contract...');
      const contract: DBModels.ContractModel | undefined = await lastPlan?.$create('contract', {
        id: '00000000-0000-4000-8000-000000000000',
        ikomidaID: 'com.ikomida.br.demo',
        contractIdentity: '33000000000060',
        email: 'demo@ikomida.com',
        status: Types.Types.TAsaasSignatureStatus.ACTIVE,
        name: 'Demo',
        contractName: 'Demo',
        lastName: 'iKomida',
        identity: Logics.Finances.toNumber('33000000000060'),
        phone: Logics.Finances.toNumber('11900000000'),
        areaCode: Logics.Finances.toNumber('55'),
        active: true,
      })
      logger.info('Creating demo contract. Done');
      logger.info('Creating demo Vendor...');
      contract?.$create('user', {
        id: '00000000-0000-4000-9000-000000000000',
        role: BackendTypes.Roles.VENDOR,
        name: 'Demo',
        lastName: 'Vendor',
        email: 'demo@ikomida.com',
        identity: '33000000097',
        phone: Logics.Finances.toNumber('11900000000'),
        areaCode: Logics.Finances.toNumber('55'),
        password: (await cryptPassword('iKomida@123')).hash,
      })
      logger.info('Creating demo Vendor. Done');
      logger.info('Creating demo user...');
      contract?.$create('user', {
        id: '00000000-0000-4000-a000-000000000000',
        role: BackendTypes.Roles.CLIENT,
        name: 'Demo',
        lastName: 'Client',
        email: 'demo@ikomida.com',
        identity: '33000000097',
        phone: Logics.Finances.toNumber('11900000000'),
        areaCode: Logics.Finances.toNumber('55'),
        password: (await cryptPassword('iKomida@123')).hash,
      })
      logger.info('Creating demo user. Done');
      logger.info('Creating demo reseller...');
      await DBModels.UserModel.create({
        id: '00000000-0000-4000-b000-000000000000',
        role: BackendTypes.Roles.RESELLER,
        name: 'Demo',
        lastName: 'Reseller',
        email: 'demo@ikomida.com',
        identity: '33000000097',
        phone: Logics.Finances.toNumber('11900000000'),
        areaCode: Logics.Finances.toNumber('55'),
        password: (await cryptPassword('iKomida@123')).hash,
      })
      logger.info('Creating demo reseller. Done');
    }
  } catch (error: any) {
    logger.error(`Utils.iKomidaError populating data to db:`, error);
  }
};
try {
  await initDB(name);
} catch (exception: any) {
  const error = new Utils.iKomidaError(Utils.iKomidaError.MAILJET_SEND_EMAIL_EXCEPTION, exception);
  error.log(logger);
}
