<script setup>
import BaseButton from './BaseButton.vue'
</script>
<template>
    <div class="container">
        <h1 class="fond-[Roboto] text-[#F7931E] text-[48px]">Контакты</h1>
        <div class="flex  justify-between mt-5">
            <div class="grid">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.7532118726785!2d69.20367599403995!3d41.285730216131306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bad0a15e3d9%3A0x113a4202c090ade9!2sTechjobs%20Recruiting%20company!5e0!3m2!1suz!2s!4v1718943468603!5m2!1suz!2s" width="692px" height="385" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="md:grid grid-cols-2 gap-5 w-[556px] h-[169px] mt-5">
                    <div>
                        <p class="text-[Poppins] text-[14px] text-[#666666]">Телефон номер:</p>
                        <h2 class="text-[Poppins] text-[20px] text-[#1E1C1C]">+998 (90) 123 45 67</h2>
                        <h2 class="text-[Poppins] text-[20px] text-[#1E1C1C]">+99893 008 86 80</h2>
                    </div>
                    <div>
                        <p class="text-[Poppins] text-[14px] text-[#666666]">Адрес:</p>
                        <h2 class="text-[Poppins] text-[20px] text-[#1E1C1C]">г Ташкент, р Чиланзар, Гавхар 52</h2>
                    </div>
                    <div>
                        <p class="text-[Poppins] text-[14px] text-[#666666]">E-mail:</p>
                        <h2 class="text-[Poppins] text-[20px] text-[#1E1C1C]">info@tujjor.uz</h2>
                    </div>
                </div>
            </div>
            <div class="h-[591px] bg-[white] drop-shadow p-[30px] w-[500px]">
                <div class="w-[387] h-[531]">
                    <h1 class="text-[Poppins] text-[22px] text-[#1E1C1C]">Отпавте нам сообщение</h1>
                    <div class="mt-[20px]">
                        <h1 class="text-[Roboto] text-[16px]">Имя</h1>
                        <input class="w-full p-3 border border-black rounded-sm text-[#666666] text-[14px] text-[Roboto] mt-[3px]" placeholder="Ваше имя" type="text">
                    </div>
                    <div class="mt-[20px]">
                        <h1 class="text-[Roboto] text-[16px]">E-mail</h1>
                        <input class="w-full p-3 border border-black rounded-sm text-[#666666] text-[14px] text-[Roboto] mt-[3px]" placeholder="Ваш e-mail" type="text">
                    </div>
                    <div class="mt-[20px]">
                        <h1 class="text-[Roboto] text-[16px]">Номер</h1>
                        <input class="w-full p-3 border border-black rounded-sm text-[#666666] text-[14px] text-[Roboto] mt-[3px]" placeholder="Ваш номер" type="text">
                    </div>
                    <div class="mt-[20px]">
                        <h1 class="text-[Roboto] text-[16px]">Комментарий</h1>
                        <input class="w-full p-3 pb-[90px] border border-black rounded-sm text-[#666666] text-[14px] text-[Roboto] mt-[3px]" placeholder="Оставьте отзыв" type="text">
                    </div>
                    <div  class="mt-[20px]">
                        <base-button class="w-full p-[80px]">Отправить сообщение</base-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>