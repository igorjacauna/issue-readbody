Replace APP_ID in `.firebaserc`
Deploy to Firebae and try

```
POST https://YOURAPP.web.app/api/issue
Content-Type: application/json

{
  "test": 1
}
```

The response will be

```
{
  "url": "/api/issue",
  "statusCode": 500,
  "statusMessage": "",
  "message": "The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received an instance of Object",
  "stack": ""
}
```