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
```json
{
  "type": "service_account",
  "project_id": "my-first-project-394612",
  "private_key_id": "Ey73sF0R4KjnsJvMdSHT4dtwnEhE53EGhCq7tZb4s",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhwggSjAgEAAoIBAQDJkl+46+1PU84/\nEy73sF0R4KjnsJvMdSHT4dtwhCq7tZb4s+83PXUT/SnuKAoasjpRVNf/\nh/ZLDf9aSLAc7M9STatqu8DMe0p5BuWi5VDthqmyRMSkdpOCuLaJ4ey5fUVynXnw\nI+oY4l3uzBqS1IBpQwbjuGqoaNKTa65OHJRv4jjcK2Tb6GUxjnHnP6MTU4\n8sV0+CnLtCaIYfOXD+/bwz3YQWFLVVKjx6TTXo6uHBDRE9rn6G40tCtrgI/KoVan\nEzUlB6zxBVwgOKuMH4zHN2HOmg2+sJQadLWdF4iBRWjQHCrToghLb8F/\n3lzWaCKlAgMBAAECggEAXbXTEqF8XhjUFbbRaw1u91S+sZgFlnQOGfcykZPWdVIz\n1Ze0VjgBy/W7DK9hsr1LtRCgQfEB87XCBWYsNpB3Wn3YgloFuHmra5+F7oqTANkY\nATci/IpScjJOSTdnNKqzEj8aUtHOa46SlfXca10x1kbFQ+XPHSCwH2HhALSfgicJ\nvksOAsAQ1rJN3OXj0XSKeInMuympXqCc2EvIb5tY1/p255k2UN4OXnAUdWMRd3w9\nO6w2kHY0VPKJzUZKB6Ui3fWIkOKSaqdKSMQHdZ9eY5eozNIeXnZ+60KMbBN3qcPI\nMTgcbGtwcW3mMYRW8LVSyKXUlzLYn9TcsQKBgQDqJvQ/Kqq78FeXQhPa\nZfQhd/ppUIbf02dEyeYTmn92r3FK8Vyuns5skWw4OqZArUrcMQ7c/7/Yz/gadTU2\n6KKMzeTbJsPRugskCJrNBxYCD1ysmljasamXMLYKi6vV7gx1tErcTXQ+iYvGKwRI\nUqjSVEjZC/qJ4UUCMnXMCurR0wKBgQDcYTFEerMta3pNpad5ra3n07rhfVTk2Ckf\n2Tcaao4jb/yxBge9ip7AL5EKV5oyLGT3PRpt++kl05jDpPf0PUFJ3bcYBTCZQKq5\nl6lwvZjFgjErKqKFEB8LkZ4MSGEQPOyHCDEIMyhY+ZYEe73xMYyxpQrfED9glkHC\nUYwO6DZ2pwKB0jmjRWSVcKHvaTI0sGlHen/sgogl+5/GmUcJBqD8YH2pX\nGYenJzcB7pVbVucsm1u8X2YiYsCGYdB++fUMgIaZBD3lGvyaWN4rd05cMmtTqxub\n63QrxAMixErh98Dvvo3SLNRUGdKWAfddK6RGgmcwUWDQktyT+wyS5H/rAoGAOdWr\n50vIIABXvW7ez7j7rZ5MKgcJM3FjAX+wzVbvbG9kQlTRzTVGyirxhmRNDCPIb3Xy\nrLBylEG+koGFrOwyaR8tgLlD8sQcyc36YqLvJ84t9YllJ6zFaf6F\nV6CNUyRU8WJEC7s0MB6fBsEt0Lw+D6/08KiSOnsCgYEAwx75QdbZ21w2qKvUbyr6\nkxsWu8foc65NfRdkrGDubrPCYy/jR+I1BhQO6D+Fn4qH0OSUxOxOV5utAwdESEHY\nm0DArbawQWhEWO/OpnHvooccX0BSJNnNl+MjFxDfudsu5QIB3KjmbFC\nmqLRZMgT91dFzBYM9r5g0qc=\n-----END PRIVATE KEY-----\n",
  "client_email": "test-key@my-first-project-394643.iam.gserviceaccount.com",
  "client_id": "1109769823813626454332",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-key%40my-first-project-394643.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```

## Команды:

Для запуска проекта:
```bash
docker compose up
```
