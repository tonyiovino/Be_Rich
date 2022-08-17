const state = {
    cars: {
        '1':{
            name: 'panda',
            available: 0,
            price: 1
        },

        '2':{
            name: 'toyota',
            available: 0,
            price: 10,
        },

        '3':{
            name: 'lancia',
            available: 0,
            price: 50,
        },
    }
}

const getters = {
    getCars: state => state.cars,
    getCarById: state => id => {
		return state.cars[id]
	},
}

const mutations = {
    update_car: (state, payload) => {
        state.cars[payload.id] = payload.data
    },
    // update_money_spent: (state, payload) => {
    //     state.money.spent = payload
    // }
}

const actions = {
    updateCar(ctx, payload) {
        ctx.commit('update_car', payload)
    },

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