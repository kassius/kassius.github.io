# Yoke API
## Version: 0.0.1

### /

#### GET
##### Summary:

HelloWorld

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request fulfilled, document follows |

### /display-dhammapada

#### GET
##### Summary:

DisplayDhammapada

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| number | query |  | No |  |
| format | query |  | No |  |
| padding | query |  | No | integer |
| foreground_color | query |  | No | string |
| background_color | query |  | No | string |
| font_size | query |  | No | integer |
| box | query |  | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request fulfilled, document follows |
| 400 | Bad request syntax or unsupported method |

### /text-to-image

#### GET
##### Summary:

TextToImg

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| text | query |  | No |  |
| padding | query |  | No | integer |
| foreground_color | query |  | No | string |
| background_color | query |  | No | string |
| font_size | query |  | No | integer |
| box | query |  | No | boolean |
| cowsay | query |  | No | boolean |
| fortune | query |  | No | boolean |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Request fulfilled, document follows |
| 400 | Bad request syntax or unsupported method |

### /webhook-github

#### POST
##### Summary:

GithubWebhookNotify

##### Responses

| Code | Description |
| ---- | ----------- |
| 201 | Document created, URL follows |
| 400 | Bad request syntax or unsupported method |
