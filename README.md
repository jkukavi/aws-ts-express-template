# aws-ts-express-template

// TODO: mention auth and correct endpoints

To test locally:

```js
npm run start
```

URL: http://localhost:8080

Or deployed:

URL: https://6ecxqukew7.execute-api.us-east-1.amazonaws.com/dev

ENDPOINTS:

POST /authorization

bodyschema:

```js
{
  name: string,
  mail: string
}
```

---

POST /weather/temperature

POST /weather/report

bodyschema:

```js
{
  city: string,
  time: number
}
```
