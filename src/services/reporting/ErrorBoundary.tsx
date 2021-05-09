import React from "react";
import { Button, Card, Subheading } from "react-native-paper";
import RNRestart from "react-native-restart";
import { stopForegroundService } from "services/foreground";
import logErrorToMyService from "./logErrorToMyService";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Card>
          <Button
            onPress={() => {
              stopForegroundService();
              RNRestart.Restart();
            }}
          >
            <Subheading>Click to restart app</Subheading>
          </Button>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
