# Edit a hook

## Table of contents

1. [Docs](#docs)
1. [Quick start](#quick-start)
1. [Inputs](#inputs)
1. [Outputs](#outputs)

<a name="quick-start" ></a>
## Docs

Original documentation: https://developer.github.com/v3/repos/hooks/#edit-a-hook




<a name="quick start" ></a>
## Quick start

```yaml
- uses: maxkomarychev/octions/octions/repos/update-hook@master
  id: my_step_id
  with:
    token: <token value>
    hook_id: <hook_id value>
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
    echo ${{ steps.my_step_id.outputs.number }}
    echo ${{ steps.my_step_id.outputs.status }}
```


<a name="inputs" ></a>
## Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|Token to authenticate the request
|owner|false|owner parameter
|repo|false|repo parameter
|hook_id|true|hook_id parameter
|config|false|Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/repos/hooks/#create-hook-config-params).
|events|false|Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for. This replaces the entire array of events.
|add_events|false|Determines a list of events to be added to the list of events that the Hook triggers for.
|remove_events|false|Determines a list of events to be removed from the list of events that the Hook triggers for.
|active|false|Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
|file_output|false|Path to store full output of the action
|custom_outputs|false|Custom outputs to create for step. This has to be YAML multiline string literal `custom_outputs: \|<newline> output_name:path.in.result`

<a name="outputs" ></a>
## Outputs

| Name | Description |
|---|---|
|id|`id` field of the response (if exists)|
|number|`number` field of the response (if exists)|
|status|HTTP status of underlying API call|

