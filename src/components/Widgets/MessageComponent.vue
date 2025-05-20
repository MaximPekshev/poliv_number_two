<template>
    <div></div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useMessage } from 'naive-ui'
    export default defineComponent({
        name: "MessageComponent",
        setup () {
            const message = useMessage()
            return {
                
                success (text) {
                    message.success(
                        `${text}`,
                        {
                            keepAliveOnHover: true,
                        }
                    )
                },
                info(text) {
                    message.info(
                        `${text}`,
                        {
                            keepAliveOnHover: true
                        }
                    )
                },
                error(text) {
                    message.error(
                        `${text}`,
                        {
                            keepAliveOnHover: true
                        }
                    )
                },
            }
        },
        computed: {
            addCartItemMessage () {
                return this.$store.getters.addCartItemMessage
            },
            delCartItemMessage () {
                return this.$store.getters.delCartItemMessage
            }
        },
        watch: {
            addCartItemMessage: {
                deep: true,
                handler() {
                    if (this.addCartItemMessage != "") {
                        this.success(this.addCartItemMessage)
                    }
                }
            },
            delCartItemMessage: {
                deep: true,
                handler() {
                    if (this.delCartItemMessage != "") {
                        this.success(this.delCartItemMessage)
                    }
                }
            }
        },
    })
</script>