import { Component, ReactNode } from "react";

import { Button } from "antd";
import { BiSolidMessageError } from "react-icons/bi";

interface ErrorBoundaryProps {
  message?: string;
  children?: ReactNode;
  action?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center flex-col gap-2 h-[100vh] justify-center">
          <div>
            <BiSolidMessageError className="text-8xl text-primary" />
          </div>
          <h1 className="text-xl">
            {this.props?.message ? this.props?.message : "Something went wrong"}
          </h1>
          {this.props?.action && (
            <Button onClick={this.props.action}>Go back</Button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
