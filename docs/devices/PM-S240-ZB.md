---
title: "Dawon DNS PM-S240-ZB control via MQTT"
description: "Integrate your Dawon DNS PM-S240-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-03-15T15:15:58Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Dawon DNS PM-S240-ZB

|     |     |
|-----|-----|
| Model | PM-S240-ZB  |
| Vendor  | [Dawon DNS](/supported-devices/#v=Dawon%20DNS)  |
| Description | IOT smart switch 2 gang without neutral wire |
| Exposes | switch (state), linkquality |
| Picture | ![Dawon DNS PM-S240-ZB](https://www.zigbee2mqtt.io/images/devices/PM-S240-ZB.jpg) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes


### Routing functionality
This device does **not** act as a router.
<!-- Notes END: Do not edit below this line -->


## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `state_action`: State actions will also be published as 'action' when true (default false). The value must be `true` or `false`


## Exposes

### Switch (top endpoint)
The current state of this switch is in the published state under the `state_top` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_top": "ON"}`, `{"state_top": "OFF"}` or `{"state_top": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_top": ""}`.

### Switch (bottom endpoint)
The current state of this switch is in the published state under the `state_bottom` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_bottom": "ON"}`, `{"state_bottom": "OFF"}` or `{"state_bottom": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_bottom": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

