// import { Logics.DateTime, Types } from '../../../../services/@ikomida/shared-backend/src/index.mjs'
import { Types } from '@ikomida/shared-backend`'
import { Logics.DateTime } from 'luxon'

function localToday() {
    return localDate().toFormat('yyyy-MM-dd')
}

function parseAsaasDate(date) {
    return new Date(localDate(date))
}

function localDate(date) {
    return date ? Logics.DateTime.fromISO(date, { zone: "America/Sao_Paulo" }) : Logics.DateTime.local().setZone("America/Sao_Paulo")
}

const list = [{
    object: 'payment',
    id: 'pay_8030457160701031',
    dateCreated: '2022-08-06',
    customer: 'cus_000004950466',
    subscription: 'sub_Xh8BTcIuI2P7',
    paymentLink: null,
    value: 128,
    netValue: 123.69,
    originalValue: null,
    interestValue: null,
    description: 'Contrato iKomida,\n' +
        '                plano: prata,\n' +
        '                ikomidaID: com.ikomida.br.demofourteen',
    billingType: 'CREDIT_CARD',
    confirmedDate: '2022-08-06',
    creditCard: {
        creditCardNumber: '1111',
        creditCardBrand: 'VISA',
        creditCardToken: '9c1338ad-66c9-46c6-ae2e-f618aa4faf66'
    },
    pixTransaction: null,
    status: 'CONFIRMED',
    dueDate: '2022-08-06',
    originalDueDate: '2022-08-06',
    paymentDate: null,
    clientPaymentDate: '2022-08-06',
    installmentNumber: null,
    invoiceUrl: 'https://sandbox.asaas.com/i/8030457160701031',
    invoiceNumber: '01273109',
    externalReference: '{"plan":"prata","ikomidaID":"com.ikomida.br.demofourteen"}',
    deleted: false,
    anticipated: false,
    creditDate: null,
    estimatedCreditDate: '2022-09-05',
    transactionReceiptUrl: 'https://sandbox.asaas.com/comprovantes/2379173050902435',
    nossoNumero: null,
    bankSlipUrl: null,
    lastInvoiceViewedDate: null,
    lastBankSlipViewedDate: null,
    discount: { value: 0, limitDate: null, dueDateLimitDays: 0, type: 'FIXED' },
    fine: { value: 0, type: 'FIXED' },
    interest: { value: 0, type: 'PERCENTAGE' },
    postalService: false,
    refunds: null
},
{
    object: 'payment',
    id: 'pay_8030457160701031',
    dateCreated: '2022-08-06',
    customer: 'cus_000004950466',
    subscription: 'sub_Xh8BTcIuI2P7',
    paymentLink: null,
    value: 128,
    netValue: 123.69,
    originalValue: null,
    interestValue: null,
    description: 'Contrato iKomida,\n' +
        '                plano: prata,\n' +
        '                ikomidaID: com.ikomida.br.demofourteen',
    billingType: 'CREDIT_CARD',
    confirmedDate: '2022-08-06',
    creditCard: {
        creditCardNumber: '1111',
        creditCardBrand: 'VISA',
        creditCardToken: '9c1338ad-66c9-46c6-ae2e-f618aa4faf66'
    },
    pixTransaction: null,
    status: 'CONFIRMED',
    dueDate: '2022-08-06',
    originalDueDate: '2022-08-06',
    paymentDate: null,
    clientPaymentDate: '2022-08-06',
    installmentNumber: null,
    invoiceUrl: 'https://sandbox.asaas.com/i/8030457160701031',
    invoiceNumber: '01273109',
    externalReference: '{"plan":"prata","ikomidaID":"com.ikomida.br.demofourteen"}',
    deleted: false,
    anticipated: false,
    creditDate: null,
    estimatedCreditDate: '2022-09-05',
    transactionReceiptUrl: 'https://sandbox.asaas.com/comprovantes/2379173050902435',
    nossoNumero: null,
    bankSlipUrl: null,
    lastInvoiceViewedDate: null,
    lastBankSlipViewedDate: null,
    discount: { value: 0, limitDate: null, dueDateLimitDays: 0, type: 'FIXED' },
    fine: { value: 0, type: 'FIXED' },
    interest: { value: 0, type: 'PERCENTAGE' },
    postalService: false,
    refunds: null
},
{
    object: 'payment',
    id: 'pay_6240061525256797',
    dateCreated: '2022-08-06',
    customer: 'cus_000004950466',
    subscription: 'sub_Xh8BTcIuI2P7',
    paymentLink: null,
    value: 128,
    netValue: 123.69,
    originalValue: null,
    interestValue: null,
    description: 'Contrato iKomida,\n' +
        '                plano: prata,\n' +
        '                ikomidaID: com.ikomida.br.demofourteen',
    billingType: 'CREDIT_CARD',
    confirmedDate: null,
    creditCard: {
        creditCardNumber: '1111',
        creditCardBrand: 'VISA',
        creditCardToken: '9c1338ad-66c9-46c6-ae2e-f618aa4faf66'
    },
    pixTransaction: null,
    status: 'PENDING',
    dueDate: '2022-08-13',
    originalDueDate: '2022-08-13',
    paymentDate: null,
    clientPaymentDate: null,
    installmentNumber: null,
    invoiceUrl: 'https://sandbox.asaas.com/i/6240061525256797',
    invoiceNumber: '01273110',
    externalReference: '{"plan":"prata","ikomidaID":"com.ikomida.br.demofourteen"}',
    deleted: false,
    anticipated: false,
    creditDate: null,
    estimatedCreditDate: null,
    transactionReceiptUrl: null,
    nossoNumero: null,
    bankSlipUrl: null,
    lastInvoiceViewedDate: null,
    lastBankSlipViewedDate: null,
    discount: { value: 0, limitDate: null, dueDateLimitDays: 0, type: 'FIXED' },
    fine: { value: 0, type: 'FIXED' },
    interest: { value: 0, type: 'PERCENTAGE' },
    postalService: false,
    refunds: null
},
{
    object: 'payment',
    id: 'pay_9393103238063052',
    dateCreated: '2022-08-06',
    customer: 'cus_000004950466',
    subscription: 'sub_Xh8BTcIuI2P7',
    paymentLink: null,
    value: 128,
    netValue: 123.69,
    originalValue: null,
    interestValue: null,
    description: 'Contrato iKomida,\n' +
        '                plano: prata,\n' +
        '                ikomidaID: com.ikomida.br.demofourteen',
    billingType: 'CREDIT_CARD',
    confirmedDate: null,
    creditCard: {
        creditCardNumber: '1111',
        creditCardBrand: 'VISA',
        creditCardToken: '9c1338ad-66c9-46c6-ae2e-f618aa4faf66'
    },
    pixTransaction: null,
    status: 'PENDING',
    dueDate: '2022-08-20',
    originalDueDate: '2022-08-20',
    paymentDate: null,
    clientPaymentDate: null,
    installmentNumber: null,
    invoiceUrl: 'https://sandbox.asaas.com/i/9393103238063052',
    invoiceNumber: '01273111',
    externalReference: '{"plan":"prata","ikomidaID":"com.ikomida.br.demofourteen"}',
    deleted: false,
    anticipated: false,
    creditDate: null,
    estimatedCreditDate: null,
    transactionReceiptUrl: null,
    nossoNumero: null,
    bankSlipUrl: null,
    lastInvoiceViewedDate: null,
    lastBankSlipViewedDate: null,
    discount: { value: 0, limitDate: null, dueDateLimitDays: 0, type: 'FIXED' },
    fine: { value: 0, type: 'FIXED' },
    interest: { value: 0, type: 'PERCENTAGE' },
    postalService: false,
    refunds: null
},
{
    object: 'payment',
    id: 'pay_1575905804961677',
    dateCreated: '2022-08-06',
    customer: 'cus_000004950466',
    subscription: 'sub_Xh8BTcIuI2P7',
    paymentLink: null,
    value: 128,
    netValue: 123.69,
    originalValue: null,
    interestValue: null,
    description: 'Contrato iKomida,\n' +
        '                plano: prata,\n' +
        '                ikomidaID: com.ikomida.br.demofourteen',
    billingType: 'CREDIT_CARD',
    confirmedDate: null,
    creditCard: {
        creditCardNumber: '1111',
        creditCardBrand: 'VISA',
        creditCardToken: '9c1338ad-66c9-46c6-ae2e-f618aa4faf66'
    },
    pixTransaction: null,
    status: 'PENDING',
    dueDate: '2022-08-27',
    originalDueDate: '2022-08-27',
    paymentDate: null,
    clientPaymentDate: null,
    installmentNumber: null,
    invoiceUrl: 'https://sandbox.asaas.com/i/1575905804961677',
    invoiceNumber: '01273112',
    externalReference: '{"plan":"prata","ikomidaID":"com.ikomida.br.demofourteen"}',
    deleted: false,
    anticipated: false,
    creditDate: null,
    estimatedCreditDate: null,
    transactionReceiptUrl: null,
    nossoNumero: null,
    bankSlipUrl: null,
    lastInvoiceViewedDate: null,
    lastBankSlipViewedDate: null,
    discount: { value: 0, limitDate: null, dueDateLimitDays: 0, type: 'FIXED' },
    fine: { value: 0, type: 'FIXED' },
    interest: { value: 0, type: 'PERCENTAGE' },
    postalService: false,
    refunds: null
},
{
    object: 'payment',
    id: 'pay_3503238513175017',
    dateCreated: '2022-08-06',
    customer: 'cus_000004950466',
    subscription: 'sub_Xh8BTcIuI2P7',
    paymentLink: null,
    value: 128,
    netValue: 123.69,
    originalValue: null,
    interestValue: null,
    description: 'Contrato iKomida,\n' +
        '                plano: prata,\n' +
        '                ikomidaID: com.ikomida.br.demofourteen',
    billingType: 'CREDIT_CARD',
    confirmedDate: null,
    creditCard: {
        creditCardNumber: '1111',
        creditCardBrand: 'VISA',
        creditCardToken: '9c1338ad-66c9-46c6-ae2e-f618aa4faf66'
    },
    pixTransaction: null,
    status: 'PENDING',
    dueDate: '2022-09-03',
    originalDueDate: '2022-09-03',
    paymentDate: null,
    clientPaymentDate: null,
    installmentNumber: null,
    invoiceUrl: 'https://sandbox.asaas.com/i/3503238513175017',
    invoiceNumber: '01273113',
    externalReference: '{"plan":"prata","ikomidaID":"com.ikomida.br.demofourteen"}',
    deleted: false,
    anticipated: false,
    creditDate: null,
    estimatedCreditDate: null,
    transactionReceiptUrl: null,
    nossoNumero: null,
    bankSlipUrl: null,
    lastInvoiceViewedDate: null,
    lastBankSlipViewedDate: null,
    discount: { value: 0, limitDate: null, dueDateLimitDays: 0, type: 'FIXED' },
    fine: { value: 0, type: 'FIXED' },
    interest: { value: 0, type: 'PERCENTAGE' },
    postalService: false,
    refunds: null
}
]

let contractPaymentSignaturelastDueDate
let contractPaymentSignaturenextDueDate
let lastDueDate
let nextDueDate
for (let l of list) {
    const originalDate = parseAsaasDate(l?.originalDueDate)
    const todayDate = parseAsaasDate(localToday())
    const acceptedPaymentStatus = [Types.Types.TAsaasPaymentStatus.PENDING, Types.Types.TAsaasPaymentStatus.CONFIRMED].includes(l?.status)
    const pendingStatus = [Types.Types.TAsaasPaymentStatus.PENDING].includes(l?.status)
    if (acceptedPaymentStatus && originalDate <= todayDate && (!lastDueDate || originalDate > lastDueDate)) {
        lastDueDate = originalDate
    }
    if (pendingStatus && originalDate > todayDate && (!nextDueDate || (originalDate < nextDueDate && originalDate >= lastDueDate))) {
        nextDueDate = originalDate
    }
}
console.log("lastDueDate:", lastDueDate, "nextDueDate:", nextDueDate)
contractPaymentSignaturelastDueDate = lastDueDate
contractPaymentSignaturenextDueDate = nextDueDate
lastDueDate = null
nextDueDate = null

for (let l of list) {
    const originalDate = parseAsaasDate(l?.originalDueDate)
    const todayDate = parseAsaasDate(localToday())
    const acceptedPaymentStatus = [Types.Types.TAsaasPaymentStatus.PENDING, Types.Types.TAsaasPaymentStatus.CONFIRMED].includes(l?.status)
    const pendingStatus = [Types.Types.TAsaasPaymentStatus.PENDING].includes(l?.status)
    if (acceptedPaymentStatus && originalDate <= todayDate && (!contractPaymentSignaturelastDueDate || originalDate > contractPaymentSignaturelastDueDate) && (!lastDueDate || originalDate > lastDueDate)) {
        lastDueDate = originalDate
    }
    if (pendingStatus && originalDate > todayDate && (!contractPaymentSignaturenextDueDate || originalDate < contractPaymentSignaturenextDueDate) && (!nextDueDate || originalDate < nextDueDate)) {
        nextDueDate = originalDate
    }
}
console.log("lastDueDate:", lastDueDate, "nextDueDate:", nextDueDate)