# Руководство запуска

## Описание
Перед запуском необходимо добавить 2 файла.
1. Файл `.env`. Пример необходимых параметров:

### Подключение к базе данных
```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

### Порт приложения
```
APP_PORT=5000
```

### Токен авторизации wb api
```
TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmxhZGltaXIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzU3ODU5MDA2fQ.3MsEzxMHod98Y_B1rtwlTgWGnRwdWxh6utIm6TkMfUA
```

### Путь к файлу-ключу Сloud Google авторизации.
```
GOOGLE_KEY_FILE=google.key.json
```

### Id таблицы. Если id несколько, необходисо указать их через запятую, без пробелов
```
GOOGLE_SHEET_IDS=1RfZzHUbqNLIVqs4KYc8WUw_HFOCecBWyH3BbJRGF20U
```

2. Файл-ключ Сloud Google авторизации в формате `*.key.json`. Пример `google.key.json`

## Команды:

Для запуска проекта:
```bash
docker compose up
```
