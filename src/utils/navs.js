//公司设置
const compony = () =>
    import ('@/views/companySetup/index');

const info = () =>
    import ('@/account/info/index');
const jyjl = () =>
    import ('@/views/jyjl');
const eventList = () =>
    import ("@/account/eventList/index");

export default [{
        id: 1,
        path: '/compony',
        comm: compony,
        title: '公司设置',
        icon: 'el-icon-location',

    },
    {
        id: 2,
        path: '',
        comm: info, // vue 的文件名字
        title: '账户管理',
        icon: 'el-icon-location',
        children: [
            { id: 3, title: '注册信息', icon: 'el-icon-menu', path: '/info', comm: info },
            { id: 4, title: '交易记录', icon: 'el-icon-menu', path: '/jyjl', comm: jyjl },
        ]
    },
    {
        id: 3,
        path: '/event-list',
        comm: eventList,
        title: '公司设置',
        icon: 'el-icon-location',

    },
    // {
    //     id: 3,
    //     path: '/valueInAccount',
    //     comm: Home,
    //     title: '账款管理',
    //     icon: 'el-icon-location',
    //     children: [
    //         { id: 31, title: '账款管理1', icon: 'el-icon-menu', path: '/valueInAccount/myStatement', comm: MyStatement },
    //         { id: 32, title: '账款管理2', icon: 'el-icon-menu', path: '/valueInAccount/myInvoice', comm: MyInvoice },
    //         { id: 33, title: '账款管理3', icon: 'el-icon-menu', path: '/valueInAccount/myAccount', comm: FinancialAccounts, children: [
    //                 { id: 332, title: '账款管理3-1', icon: 'el-icon-menu', path: '/valueInAccount/myAccount/businessAccounts', comm: BusinessAccounts },
    //                 { id: 331, title: '账款管理3-2', icon: 'el-icon-menu', path: '/valueInAccount/myAccount/financialAccounts', comm: FinancialAccounts }
    //             ]
    //         },
    //         { id: 34, title: '账款管理4', icon: 'el-icon-menu', path: '/valueInAccount/myPayment', comm: MyPayment },
    //     ]
    // }
]