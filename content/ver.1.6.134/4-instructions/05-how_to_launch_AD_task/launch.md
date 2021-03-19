---
slug: "/post28"
title: "Запуск модуль АД"
sort: "1"
---

Перед запуском АД проверьте наличие лицевых счетов с номерами телефонов в поле Телефон начиная с 8 в формате 89000000000 ( Без знаков + , () . - ).  
Если лицевых счетов нет загрузите свою базу данных, как это сделать *ссылка*.

1. Для того чтобы включить модуль **АД** зайдите в личный кабинет и нажмите на вкладку.  
![Картинка](./images/butt_settings.png )
1. Из выпадающего списка выберите **Автообзвон должников**.  
![Картинка](./images/butt_ad.png )
1. Откроется модальное окно **Настройки автообзвона**, далее нажмите на кнопку **Активировать** в нижнем правом углу модального окна.  
![Картинка](./images/butt_enable.png )
1. После активации **АД** откроется модальное окно об успешной активации системы автообзвона и количеством участников автообзвона.
1. Нажмите на кнопку **ОК** ![Картинка](./images/butt_ok.png ) для подтверждения активации **АД**.

🛈 Если в таблице поле phone пустое, этот лицевой счет не будет включен в очередь на автообзвон.  
🛈 Если в таблице поле phone пустое у всех лицевых счетов, АД не активируется и появится модальное окно с ошибкой

![Картинка](./images/not_debtor.png "Модальное окно Подтверждение действие на странице")

![Картинка](./images/data_in_table.png "База данных для АД без номеров телефонов (АД не запустится)")

![Картинка](./images/image23.png "Автообзвон должников в выпадающем списке настроек")

![Картинка](./images/main.png "Модальное окно Настройки автообзвона")

![Картинка](./images/confirm_action.png "Модальное окно Подтверждение действий")

![Картинка](./images/confirm_action_redbox.png "Кнопка ОК для подтверждения действий")