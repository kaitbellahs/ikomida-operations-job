import { Domain, BackendTypes, Logics, cryptPassword, Types, Utils, DBModels } from '@ikomida/shared-backend';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let { name } = require('../package.json');
name = name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m: string) => m.toUpperCase())
  .replace(/-\w/g, (m: string[]) => m[1].toUpperCase());
const logger = Utils.Logger.getInstance(name);

export const initDB = async (service: any) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const logger = Utils.Logger.getInstance(service);
  try {
    console.log('Starting ...');
    await Domain.SqlDB.sync(logger, true);

    logger.info('adding Settings...');
    if ((await DBModels.SettingModel.count()) === 0) {
      await DBModels.SettingModel.create({
        name: 'online',
        value: '1',
        type: 'BOOL',
      })
      await DBModels.SettingModel.create({
        name: 'host',
        value: `https://${!isProduction ? 'hmlg.' : ''}ikomida.com/`,
        type: 'TEXT',
      })
      await DBModels.SettingModel.create({
        name: 'apiHost',
        value: `https://${!isProduction ? 'hmlg.' : ''}api.ikomida.com/`,
        type: 'TEXT',
      })
      await DBModels.SettingModel.create({
        name: 'pagseguroLogo',
        value: `https://${!isProduction ? 'hmlg.' : ''}ikomida.com/assets/icons/logo-pagseguro.png`,
        type: 'TEXT',
      })
      await DBModels.SettingModel.create({
        name: 'pagSeguroApp',
        value: isProduction ? `{
    "name": "iKomida",
    "description": "Applicação para receber cobranças dos clientes dos nossos pareceiros",
    "client_id": "fba6d1ae-6c16-4ec9-9ed0-4af883252b6f",
    "client_secret": "34835d07-81dd-44a5-b1dd-c5cd34bc6128",
    "site": "https://ikomida.com",
    "redirect_uri": "https://ikomida.com/callback",
    "logo": "https://ikomida.com/assets/icons/logo-pagseguro.png",
    "account_id": "ACCO_0B6F6865-733E-41CF-8DC5-CB6D461048D3",
    "client_type": "confidential"
}`: `{"client_id":"b2266531-4ba4-4b0b-a223-8cfce2019174","site":"https://hmlg.ikomida.com/","description":"Applicação para receber cobranças dos clientes dos nossos pareceiros","name":"iKomida","client_secret":"6b4d712a-cfce-4af0-a0bb-288b0243956f","redirect_uri":"https://hmlg.ikomida.com/callback","logo":"https://hmlg.ikomida.com/assets/icons/logo-pagseguro.png","account_id":"ACCO_A103669D-3F4E-48AC-BE1A-6D92D9042B0D","client_type":"confidential"}`,
        type: 'TEXT',
      })
      logger.info('add settings successfully.');
    }
    logger.info('adding Settings. Done');

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
    const plans = [
      {
        order: 0,
        name: 'bronze',
        price: 17500,
        discount: 1500,
        discountType: Types.Types.TDiscount.PERCENT,
        staff: 1,
        products: 15,
        orders: 166,
        billing: 500000,
        support: [Types.Types.TSupport.CHAT, Types.Types.TSupport.EMAIL],
        details: [
          { key: 'Setup', value: 'gratuito' },
          { key: 'Manutenção', value: 'R$ 0,00/mês' },
          { key: '8h/5 dias suporte ao Cliente', value: null },
          { key: '99.99% Uptime', value: null },
          { key: 'atualização grátis', value: null },
          { key: 'Migração de plano gratuito', value: null },
          { key: '100% seguro (PCI-DSS / SSL / TLS / Digital signature / JWS)', value: null },
        ],
        highlighted: false,
      },
      {
        order: 1,
        name: 'prata',
        price: 24900,
        discount: 2000,
        discountType: Types.Types.TDiscount.PERCENT,
        staff: 3,
        products: 30,
        orders: 360,
        billing: 900000,
        support: [Types.Types.TSupport.CHAT, Types.Types.TSupport.EMAIL, Types.Types.TSupport.WHATSAPP],
        details: [
          { key: 'Setup', value: 'gratuito' },
          { key: 'Manutenção', value: 'R$ 0,00/mês' },
          { key: '8h/5 dias suporte ao Cliente', value: null },
          { key: '99.99% Uptime', value: null },
          { key: 'atualização grátis', value: null },
          { key: 'Migração de plano gratuito', value: null },
          { key: '100% seguro (PCI-DSS / SSL / TLS / Digital signature / JWS)', value: null },
        ],
        highlighted: true,
      },
      {
        order: 2,
        name: 'ouro',
        price: 39900,
        discount: 2500,
        discountType: Types.Types.TDiscount.PERCENT,
        staff: 9,
        products: 80,
        orders: 650,
        billing: 1300000,
        support: [
          Types.Types.TSupport.CHAT,
          Types.Types.TSupport.EMAIL,
          Types.Types.TSupport.WHATSAPP,
          Types.Types.TSupport.CALL,
        ],
        details: [
          { key: 'Setup', value: 'gratuito' },
          { key: 'Manutenção', value: 'R$ 0,00/mês' },
          { key: '8/7 suporte ao Cliente', value: null },
          { key: '99.99% Uptime', value: null },
          { key: 'atualização grátis', value: null },
          { key: 'Migração de plano gratuito', value: null },
          { key: '100% seguro (PCI-DSS / SSL / TLS / Digital signature / JWS)', value: null },
        ],
        highlighted: false,
      },
    ];
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
        lastName: 'iKomida',
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
        lastName: 'iKomida',
        email: 'demo@ikomida.com',
        identity: '33000000097',
        phone: Logics.Finances.toNumber('11900000000'),
        areaCode: Logics.Finances.toNumber('55'),
        password: (await cryptPassword('iKomida@123')).hash,
      })
      logger.info('Creating demo user. Done');
      logger.info('Creating demo reseller...');
      await DBModels.ContractModel.create({
        id: '00000000-0000-4000-b000-000000000000',
        role: BackendTypes.Roles.RESELLER,
        name: 'Demo',
        lastName: 'iKomida',
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
