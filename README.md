# Guess the Number Game

## Структура проєкту

- `client/` – Клієнтська частина проєкту.
- `server/` – Серверна частина проєкту.

## Використані технології

### Клієнтська частина (Client)

Для створення клієнтської частини були використані наступні технології та бібліотеки:

- **@tanstack/react-query**: Інструмент для керування та кешування асинхронних запитів.
- **axios**: Бібліотека для здійснення HTTP-запитів.
- **react-hook-form**: Бібліотека для керування формами.
- **tailwindcss**: Утилітарний CSS фреймворк для швидкого створення сучасних інтерфейсів.
- **vite**: Інструмент для швидкого створення та збору проєктів.

### Серверна частина (Server)

Серверна частина реалізована з використанням таких технологій:

- **cors**: Модуль для роботи з політикою CORS.
- **dotenv**: Бібліотека для роботи з конфігураційними змінними середовища.
- **express-validator**: Інструмент для валідації та санітизації даних.
- **body-parser**: Модуль для обробки тіла HTTP-запитів.
- **ts-node-dev**: Інструмент для запуску та перезавантаження серверного коду на TypeScript під час розробки.
- **node-telegram-bot-api**: Інструмент для створення та взаємодії ботів в Telegram.

## Клонування репозиторію та встановлення залежностей

1. Клонування репозиторію:

   ```bash
   git clone https://github.com/Na3ar-17/guess-the-number-game.git
   ```

2. Встановлення залежностей для серверної частини:

   ```bash
   cd ./server
   yarn
   ```

   або

   ```bash
   cd ./server
   npm install
   ```

3. Встановлення залежностей для клієнтської частини:

   ```bash
   cd ./client
   yarn
   ```

   або

   ```bash
   cd ./server
   npm install
   ```

> **Примітка:** Ви можете використовувати будь-який пакетний менеджер (наприклад, `npm` або `pnpm`). У цьому випадку перед встановленням залежностей необхідно видалити файл `yarn.lock` у відповідних директоріях (`server` та `client`).

## Запуск проєкту

1. Запуск серверної частини:

   ```bash
   cd ./server
   yarn dev
   ```

   або

   ```bash
   cd ./server
   npm run dev
   ```

2. Запуск клієнтської частини:

   ```bash
   cd ./client
   yarn dev
   ```

   або

   ```bash
   cd ./client
   npm run dev
   ```

## Відслідковування загаданого числа

Під час гри ви можете відслідковувати загадане сервером число безпосередньо у консолі сервера. Для цього зверніть увагу на виведення числа в файлі `server/src/game/game.service.ts` на 6-му рядку.

## Налаштування та запуск Telegram бота

1. Створення Telegram бота:

- Відкрийте Telegram та знайдіть бота @BotFather.
- На початку розмови з ботом, натисніть кнопку '/start' і дотримуйтесь інструкцій для створення нового бота.
- Після створення бота BotFather надасть вам токен для доступу до API вашого бота. Збережіть цей токен.

2. Налаштування бота в проєкті:

- У серверній частині, створіть файл .env у директорії server і додайте наступний рядок:

```bash
   TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

- Замініть YOUR_TELEGRAM_BOT_TOKEN на отриманий токен.
