import { Typography } from "antd";
import { BiSolidMessageError } from "react-icons/bi";

interface IErrProps {
  message: string;
  supportText?: string;
  showImage?: boolean;
}

export const ErrorComponent = ({
  message,
  supportText,
  showImage = false,
}: IErrProps) => {
  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center">
      {showImage ? (
        <div>
          <BiSolidMessageError className="text-8xl text-primary" />
        </div>
      ) : null}
      <Typography.Title level={4}>
        <span className="text-red-600">{message}</span>
      </Typography.Title>
      <p className="text-caramel text-sm">{supportText}</p>
    </div>
  );
};
