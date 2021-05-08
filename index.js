import Bugsnag from "@bugsnag/react-native";
Bugsnag.start();

/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { createChannel, registerPushNotifications } from "./src/services/notifications";
import ReactNativeForegroundService from "@supersami/rn-foreground-service";

registerPushNotifications();
createChannel();
// Register the service
ReactNativeForegroundService.register();
AppRegistry.registerComponent(appName, () => App);
