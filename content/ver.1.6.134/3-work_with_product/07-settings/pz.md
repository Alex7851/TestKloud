---
slug: "/post12"
title: "Вкладка Настройки Приема заявок в Личном кабинете"
sort: "4"
---

Прием заявок - один из модулей платформы Kloud.One …

![Картинка](./images/main.png "Окно Настроек Приема заявок")

### Приветствие

В этом полем указывается фраза, с которой начинается диалог с абонентом.

![Картинка](./images/first_phrase.png "Поле Приветствие")

🛈 Имеется кнопка , чтобы прослушать, как будет звучать сообщение, учитывая выбранный **Голос автоответчика**.  
Например: "Здравствуйте, вы позвонили в ООО Газпром".

### Просьба ввода лицевого счёта

В этом полем указывается фраза ввода лицевого счета, эта фраза зависит от параметров **Способа ввода данных** и **Голос автоответчика**.

![Картинка](./images/second_phrase.png "Поле Просьба ввода лицевого счёта")

🛈 Имеется кнопка , чтобы прослушать как будет звучать сообщение учитывая выбранный **Голос автоответчика**.

### Сообщение абоненту

В этом полем указывается фраза, которая будет произносится после успешного ввода лицевого счёта, эта фраза зависит от параметров **Способа ввода данных** и **Голос автоответчика**.

![Картинка](./images/third_phrase.png "Поле Сообщение абоненту")

🛈 Имеется кнопка , чтобы прослушать как будет звучать сообщение учитывая выбранный **Голос автоответчика**.

### Прощание

В этом полем указывается фраза, которая будет произносится перед окончанием диалога с абонентом, эта фраза зависит от параметров **Способа ввода данных** и **Голос автоответчика**.

![Картинка](./images/last_phrase.png "Поле Прощание")

🛈 Имеется кнопка , чтобы прослушать как будет звучать сообщение учитывая выбранный **Голос автоответчика**.

### Выпадающий список Голос автоответчик

В модуле **Прием заявок** имеется 5 голосов для автоответчика:  **Jane**, **Oksana**, **Omazh**, **Zahar**, **Ermil**. Голоса отличаются по полу, тембру и скорость произнесения речи.

![Картинка](./images/voice_picker.png "Все голоса в выпадающем списке")

🛈 По умолчанию стоит голос **Zahar**.  
🛈 При изменении Голоса автоответчика, голос также изменится для модуля АД(Если он подключен).

### Флажок Отключить проверку лицевых счетов

![Картинка](./images/checkbox_check_personal_accounts.png "Флажок Отключить проверку лицевых счетов")

При включенном флажке не будет проверки есть ли в БД лицевой счет, который произнес абонент.

### Флажок Включить запись звонка

![Картинка](./images/checkbox_record.png "Флажок Включить запись звонка")

При включенном флажке будет произнесена фраза: "Внимание для улучшения работы сервиса разговор может быть записан".

### Закрыть

При нажатии на кнопку **Закрыть** модальное окно **Настройки приема заявок закрывается**.

![Картинка](./images/butt_close.png "Кнопка Закрыть")

### Сохранить

После нажатия на кнопку **Сохранить** настройки Приема заявок обновляются на новые.

🛈 Тусклая кнопка означает что, изменений в настройках не было.  
🛈 После изменении параметров в настройках, модальное окно повторно открывается.

### Активировать/Выключить

При нажатии на кнопку **Активировать** или **Выключить**, прием заявок запускается/выключается согласно с параметрами **Отключить проверку лицевых счетов** и **Включить запись звонка**.

![Картинка](./images/butt_enable.png "Кнопка Включить")

![Картинка](./images/butt_disable.png "Кнопка Выключить")