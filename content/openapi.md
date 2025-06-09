generated with https://swagger-markdown-ui.netlify.app/

# Yoke API
## Version: 0.0.1

```
/
```

#### GET
##### Summary:

HelloWorld

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request fulfilled, document follows |

```
/display-dhammapada
```

#### GET
##### Summary:

DisplayDhammapada

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| number | query |  | No |  |
| format | query |  | No |  |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request fulfilled, document follows |
| 400 | Bad request syntax or unsupported method |

```
/img
```

#### GET
##### Summary:

TextToImg

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| text | query |  | Yes | string |

##### Responses

| Code | Description                              |
| ---- | ---------------------------------------- |
| 200  | Request fulfilled, document follows      |
| 400  | Bad request syntax or unsupported method |

### ```
/webhook
```

#### POST
##### Summary:

GithubWebhookNotify

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Document created, URL follows |
| 400 | Bad request syntax or unsupported method |
