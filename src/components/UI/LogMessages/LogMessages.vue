<template>
	<div class="log-messages" v-if="logmessages.length > 0">
		<app-log-message
			v-for="msg in logmessages"
			:key="msg.id"
			:msg="msg"
			@read="deleteLogMessage"
		></app-log-message>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import LogMessage from './LogMessage.vue'

export default {
	computed: {
		...mapGetters([
			'logmessages'
		])
	},

	methods: {
		...mapActions([
			'removeLogMessage'
		]),

		deleteLogMessage (errorId) {
			this.removeLogMessage(errorId)
		}
	},

	components: {
		appLogMessage: LogMessage
	}
}
</script>

<style lang="scss">
.log-messages {
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	z-index: 1000;
	padding: 2rem;
	min-width: 20vw;
}
</style>