import { SpinningText } from "@/components/ui/rotating-text";

export function SpinningTextBasic() {
  return (
    <SpinningText
      radius={5}
      fontSize={1.2}
      className='font-medium leading-none'
    >
      {`crickzy • shop • pre-order • `}
    </SpinningText>
  );
}
