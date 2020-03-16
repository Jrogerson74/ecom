import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A00482266635',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippAddress: '1234 west state street'
                }
            },
            {
                _id: 1,
                total: 9.30,
                orderNumber: '1147ABC23',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Avery Rogerson',
                    shippAddress: '432 north state street'
                }
            },
            {
                _id: 2,
                total: 20.01,
                orderNumber: 'AAQQ234566317',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Bugs Bunny',
                    shippAddress: '1414 north Hollywood Blvd'
                }
            },
            {
                _id: 3,
                total: 15.33,
                orderNumber: 'QWES1714GG154',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Xahlia Chase',
                    shippAddress: '1313 elm street'
                }
            },
            {
                _id: 4,
                total: 10.44,
                orderNumber: 'BM22JH33654101',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tina Lina',
                    shippAddress: '1122 east end street'
                }
            },
            {
                _id: 5,
                total: 5.33,
                orderNumber: 'RTRT56565633321',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tony Pizzad',
                    shippAddress: '26 north 440 south'
                }
            },
            {
                _id: 6,
                total: 23.71,
                orderNumber: 'RTEW225589745',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Nick Fog',
                    shippAddress: '111 venmon street'
                }
            },
            {
                _id: 7,
                total: 8.52,
                orderNumber: 'ASAD11520036',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Mandy Peterson',
                    shippAddress: '63 wrong way ave'
                }
            },
        ]
    })
}