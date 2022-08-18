const state = {
    lands: {
        '1':{
            name: 'A',
            areas: {
                '1A':{
                    // property: {
                    //     id: String,
                    // }
                    property: {},
                    price: 1,
                    value: 1
                },

                '2A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '3A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '4A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '5A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '6A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '7A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '8A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '9A':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

            },
            acquistati: 0,
        },
        '2':{
            name: 'B',
            areas: {
                '1B':{
                    // property: {
                    //     id: String,
                    // }
                    property: {},
                    price: 1,
                    value: 1
                },

                '2B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '3B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '4B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '5B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '6B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '7B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '8B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

                '9B':{
                    porperty: {},
                    price: 1,
                    value: 1
                },

            },
            acquistati: 0,
        },

        // '2':{
        //     name: 'B',
        //     disponibili: 15,
        //     acquistati: 0,
        //     valore: undefined,
        // },
    }
}

const getters = {
    getLands: state => state.lands,
    getLandById: state => id => {
		return state.lands[id]
	},

    getAreas: state => id_land => {
        return state.lands[id_land].areas
    },
    getAreaById: state => (id_land, id_area) => {
		return state.lands[id_land].areas[id_area]
	},
}

const mutations = {
    // update_car: (state, payload) => {
    //     state.cars[payload.id] = payload.data
    // },
    // update_money_spent: (state, payload) => {
    //     state.money.spent = payload
    // }
}

const actions = {
    // updateCar(ctx, payload) {
    //     ctx.commit('update_car', payload)
    // },

    // updateMoneySpent(ctx, payload) {
    //     const newMoney = ctx.getters.getMoney.spent + payload
    //     ctx.commit('update_money_spent', newMoney)
    // }
}

export default {
	state,
	getters,
	mutations,
    actions
}