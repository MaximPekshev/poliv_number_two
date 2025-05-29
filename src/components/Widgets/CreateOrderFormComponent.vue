<template>
    <n-modal 
        :show="showModal"
    >
        <n-card
            style="width: 600px"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
        <div>
            <h3 align="center">
                Для оформления заказа необходимо заполнить контактные данные
            </h3>
            <n-form
                ref="formRef"
                :model="formValue"
                :rules="rules"
                :size="size"
            >
                <n-form-item label="Имя" path="name">
                    <n-input :disabled="formLoading" v-model:value="formValue.name" placeholder="Введите имя" />
                </n-form-item>
                <n-form-item label="Email" path="email">
                    <n-input :disabled="formLoading" v-model:value="formValue.email" placeholder="Введите Email" />
                </n-form-item>
                <n-form-item label="Телефон" path="phone">
                    <n-input :disabled="formLoading" maxlength="15" v-model:value="formValue.phone" placeholder="Введите номер телефона" />
                </n-form-item>
            </n-form>
        </div>
        <template #footer>
            <n-space justify="center">
                <div class="order_button modal-footer">
                    <button 
                        class="btn btn-primary btn-lg btn-block"
                        :disabled="formLoading"
                        @click.prevent="closeModal"
                    > 
                        Отмена
                    </button>
                </div>
                <div class="order_button modal-footer">
                    <n-spin :show="formLoading">
                        <button 
                            class="btn btn-primary btn-lg btn-block"
                            @click.prevent="placeAnOrder"
                        >
                            Оформить заказ
                        </button>
                    </n-spin>
                </div>
            </n-space>
        </template>
        </n-card>
    </n-modal>
</template>

<script>
import { defineComponent, ref } from "vue"

export default defineComponent({
    name: "CreateOrderFormComponent",
    props: ['showModal', 'formLoading'],
    emits: ['closeNoAuthFormEvent', 'placeAnOrder'],
    setup(props, { emit }) { // Основная функция setup для Composition API
        const formRef = ref(null) // Ссылка на форму для валидации
        const formValue = ref({ // Данные формы
                name: "",
                email: "",
                phone: "",
            })
        const closeModal = () => { // Функция закрытия модального окна
            emit('closeNoAuthFormEvent') // Испускает событие закрытия
        }
        const placeAnOrder = () => { // Функция оформления заказа
            formRef.value.validate() // Валидация формы
                .then(() => {
                    emit('placeAnOrder', { // Если валидация успешна, испускает событие оформления заказа с данными формы
                        "name": formValue.value.name,
                        "phone": formValue.value.phone,
                        "email": formValue.value.email
                    })
                }).catch((errors) => { // Если валидация не прошла, выводит ошибку в консоль
                    console.error('Form validation failed:', errors)
                })
        }
        return {
            formRef, // Ссылка на форму
            size: ref("large"), // Размер элементов формы
            formValue, // Данные формы
            rules: { // Правила валидации для каждого поля
                name: {
                    required: true, // Обязательное поле
                    message: 'Обязательное поле', // Сообщение об ошибке
                    trigger: ['input', 'blur'] // Триггеры для проверки
                },
                email: {
                    required: true, // Обязательное поле
                    message: 'Введите корректный email', // Сообщение об ошибке
                    trigger: ['input', 'blur'], // Триггеры для проверки
                    validator: (rule, value) => { // Кастомный валидатор для email
                        let re = /\S+@\S+\.\S+/
                        return re.test(value)
                    }
                },
                phone: {
                    required: true, // Обязательное поле
                    message: 'Введите корректный номер телефона', // Сообщение об ошибке
                    trigger: ['input', 'blur'], // Триггеры для проверки
                    validator: (rule, value) => { // Кастомный валидатор для телефона
                        formValue.value.phone = value.replace(/\D/g, '') // Оставляет только цифры
                        let re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                        return re.test(value)
                    }
                }
            },
            closeModal, // Функция закрытия модального окна
            placeAnOrder // Функция оформления заказа
        }
    }
})
</script>

<style scoped>
.modal-footer {
    border: none;
}
</style>