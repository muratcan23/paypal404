import { IconProps } from "./types";

const PaypalIcon = (props: IconProps) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      href="/us/home"
      data-pa-click="Header-Logo-PayPal Logo"
      data-testid="header-logo"
      className="_pypl-logo_lqw46_133"
      style={{
        backgroundImage:
          'url("https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg")',
      }}
      {...props}
    >
      PayPal Logo US
    </svg>
  );
};

export default PaypalIcon;
